import "./style.css"

import "@arcgis/core/assets/esri/themes/light/main.css";
import "@esri/calcite-components/dist/calcite/calcite.css";
import { defineCustomElements } from "@esri/calcite-components/dist/loader";
defineCustomElements(window);
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-layer-list";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-basemap-gallery";
import "@arcgis/map-components/components/arcgis-bookmarks";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-home";
import "@arcgis/map-components/components/arcgis-feature";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import MapView from "@arcgis/core/views/MapView";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import * as colorRendererCreator from "@arcgis/core/smartMapping/renderers/color";
import * as colorSchemes from "@arcgis/core/smartMapping/symbology/color.js";


const mapEl = document.getElementById("mapEl");

// --- Centralized App State ---
const appState = {
  allRelatedFeatures: [],
  minValue: 500,
  highlightHandle: null,
  activeWidget: null,
  actionBarExpanded: false,
  alaskaView: null,
  hawaiiView: null,
  linesLayer: null,
  pointsLayer: null
};

// Helper: recursively find a layer by title (handles group layers)
function findLayerByTitle(layers, title) {
  for (const layer of layers.items || layers) {
    if (layer.title === title) return layer;
    if (layer.type === "group" && layer.layers) {
      const found = findLayerByTitle(layer.layers, title);
      if (found) return found;
    }
  }
  return null;
}

function flattenFeatureLayers(layers) {
  let result = [];
  for (const layer of layers.items || layers) {
    if (layer.type === "group" && layer.layers) {
      result = result.concat(flattenFeatureLayers(layer.layers));
    } else if (layer.type === "feature") {
      result.push(layer);
    }
  }
  return result;
}

// Helper: get all target layers by title
function getTargetLayers() {
  const allLayerTitles = ["Household Income", "Individual Income"];
  const allFeatureLayers = flattenFeatureLayers(mapEl.map.layers);
  return allFeatureLayers.filter(lyr => allLayerTitles.includes(lyr.title));
}

function getActiveLayer() {
  const layers = getTargetLayers();
  return layers.find(layer => layer.visible);
}

const smartMappingOptionsByLayer = {
  "Household Income": [
    {
      label: "Change in Household Income between 1978 and 1992 (1st Percentile)",
      expression: "$feature.change_kfi_pooled_pooled_p1"
    },
    {
      label: "Change in Household Income between 1978 and 1992 (25st Percentile)",
      expression: "$feature.change_kfi_pooled_pooled_p25"
    },
    {
      label: "Change in Household Income between 1978 and 1992 (50st Percentile)",
      expression: "$feature.change_kfi_pooled_pooled_p50"
    },
    {
      label: "Change in Household Income between 1978 and 1992 (75st Percentile)",
      expression: "$feature.change_kfi_pooled_pooled_p75"
    },
    {
      label: "Change in Household Income between 1978 and 1992 (100st Percentile)",
      expression: "$feature.change_kfi_pooled_pooled_p100"
    }
  ],
  "Individual Income": [
    {
      label: "Change in Individual Income between 1978 and 1992 (1st Percentile)",
      expression: "$feature.change_kii_pooled_pooled_p1"
    },
    {
      label: "Change in Individual Income between 1978 and 1992 (25th Percentile)",
      expression: "$feature.change_kii_pooled_pooled_p25"
    },
    {
      label: "Change in Individual Income between 1978 and 1992 (50th Percentile)",
      expression: "$feature.change_kii_pooled_pooled_p50"
    },
    {
      label: "Change in Individual Income between 1978 and 1992 (75th Percentile)",
      expression: "$feature.change_kii_pooled_pooled_p75"
    },
    {
      label: "Change in Individual Income between 1978 and 1992 (100th Percentile)",
      expression: "$feature.change_kii_pooled_pooled_p100"
    }
  ]
};  


mapEl.addEventListener("arcgisViewReadyChange", async (evt) => {
  // Set popupTemplate for Household Income as early as possible
  const householdLayer = findLayerByTitle(mapEl.map.layers, "Household Income");
  if (householdLayer) await householdLayer.load();

  const individualLayer = findLayerByTitle(mapEl.map.layers, "Individual Income");
  if (individualLayer) await individualLayer.load();

  // Set minimum and maximum zoom levels
  mapEl.view.constraints = { minZoom: 4, maxZoom: 12 };

  mapEl.view.padding = { left: 49 };

  // --- UI State ---
  const handleActionBarClick = ({ target }) => {
    if (target.tagName !== "CALCITE-ACTION") return;

    // Skip panel logic for the info-action (which opens a dialog)
    if (target.id === "info-action") return;

    document.querySelectorAll("calcite-panel").forEach(panelEl => {
      panelEl.closed = true;
    });
    document.querySelectorAll("calcite-action").forEach(actionEl => {
      actionEl.active = false;
    });

    const nextWidget = target.dataset.actionId;
    if (nextWidget !== appState.activeWidget) {
      document.querySelector(`[data-action-id=${nextWidget}]`).active = true;
      const panel = document.querySelector(`[data-panel-id=${nextWidget}]`);
      if (panel) {
        panel.closed = false;
        panel.setFocus();
      }
      appState.activeWidget = nextWidget;
    } else {
      appState.activeWidget = null;
    }
  };

  // Panel interaction
  document.querySelectorAll("calcite-panel").forEach(panelEl => {
    panelEl.addEventListener("calcitePanelClose", () => {
      const actionEl = document.querySelector(`[data-action-id=${appState.activeWidget}]`);
      if (actionEl) {
        actionEl.active = false;
        actionEl.setFocus();
      }
      appState.activeWidget = null;
    });
  });

  document.querySelector("calcite-action-bar").addEventListener("click", handleActionBarClick);

  document.addEventListener("calciteActionBarToggle", event => {
    appState.actionBarExpanded = !appState.actionBarExpanded;
    mapEl.view.padding = { left: appState.actionBarExpanded ? 135 : 49 };
  });

  document.querySelector("calcite-shell").hidden = false;
  document.querySelector("calcite-loader").hidden = true;

  // Add a graphics layer for the migration lines
  appState.graphicsLayer = new GraphicsLayer({ listMode: "hide" });
  mapEl.map.add(appState.graphicsLayer);

  // Add these after your map is created, before drawing anything:
  appState.linesLayer = new GraphicsLayer({ listMode: "hide" });
  appState.pointsLayer = new GraphicsLayer({ listMode: "hide" });
  mapEl.map.add(appState.linesLayer);
  mapEl.map.add(appState.pointsLayer);

  // --- Slider and Buttons ---
  const sliderLeft = document.getElementById("slider-left");
  if (sliderLeft) {
    sliderLeft.addEventListener("calciteSliderInput", (event) => {
      appState.minValue = event.target.valueAsNumber || event.target.value;
      if (appState.allRelatedFeatures.length > 0) {
        drawLines(appState.allRelatedFeatures, appState.minValue);
      }
    });
  }

  const slider = document.getElementById("slider-left");
  if (slider) {
    slider.labelFormatter = function (value, type) {
      if (type === "value") {
        if (value === slider.min) return "<100 people>";
        if (value === slider.max) return ">10,000 people";
      }
      return undefined;
    };
  }

  const drawLinesBtn = document.getElementById("draw-lines-btn");
  if (drawLinesBtn) {
    drawLinesBtn.addEventListener("click", () => {
      if (appState.allRelatedFeatures.length > 0) {
        drawLines(appState.allRelatedFeatures, appState.minValue);
      }
    });
  }

  const clearLinesBtn = document.getElementById("clear-lines-btn");
  if (clearLinesBtn) {
    clearLinesBtn.addEventListener("click", () => {
      appState.linesLayer.removeAll();
      appState.pointsLayer.removeAll();
    });
  }

  function drawLines(features, minValue) {
    appState.linesLayer.removeAll();
    appState.pointsLayer.removeAll();

    // Get min and max n for normalization
    const nValues = features.filter(f => f.attributes.n >= minValue).map(f => f.attributes.n);
    const minN = Math.min(...nValues);
    const maxN = Math.max(...nValues);

    const lineGraphics = [];
    const pointGraphics = [];

    features.forEach((feature) => {
      // For migration lines, only use n
      if (feature.attributes.o_cz !== feature.attributes.d_cz) {
        const n = feature.attributes.n;
        if (n >= minValue && n > 0) {
          const totalOut = features
            .filter(f => f.attributes.o_cz === feature.attributes.o_cz)
            .reduce((sum, f) => sum + (f.attributes.n || 0), 0);
          
          const percent = totalOut > 0 ? (n / totalOut) * 100 : 0;

          // Normalize n to a width and color
          const width = Math.min(12, Math.max(1, Math.log10(n) - 1));
          let t = (n - minN) / (maxN - minN);
          if (!isFinite(t)) t = 0;
          const color = [
            Math.round(51 + (0 - 173) * t),
            Math.round(102 + (51 - 216) * t),
            Math.round(204 + (153 - 230) * t),
            0.85
          ];
          const line = {
            type: "polyline",
            paths: [
              [feature.attributes.o_x_coord, feature.attributes.o_y_coord],
              [feature.attributes.d_x_coord, feature.attributes.d_y_coord]
            ],
            spatialReference: { wkid: 4326 }
          };
          // Find the "stayer" feature for the origin
          const stayerFeature = features.find(f =>
            f.attributes.o_cz === feature.attributes.o_cz &&
            f.attributes.d_cz === feature.attributes.o_cz
          );
          const stayerPercent = stayerFeature ? stayerFeature.attributes.pr_d_o : null;

          const graphic = new Graphic({
            geometry: line,
            symbol: {
              type: "simple-line",
              color: color,
              width: width
            },
            attributes: {
              ...feature.attributes,
              o_cz: feature.attributes.o_cz,
              d_cz: feature.attributes.d_cz
            },
            popupTemplate: {
              title: "{o_cz_name}, {o_state_name} → {d_cz_name}, {d_state_name}",
              content: `<br/>Of the individuals that moved between childhood (measured by location at age 16) and young adulthood (location at age 26), <b>${n.toLocaleString()}</b> people moved from <b>{o_cz_name}</b> to <b>{d_cz_name}</b>.
                This represents <b>${percent.toFixed(1)}%</b> of young adults that left <b>{o_cz_name}</b>.
                <b>${stayerPercent !== null ? (stayerPercent * 100).toFixed(1) : "?"}%</b> of young adults stayed in the <b>{o_cz_name}</b> commuting zone.<br/>`
            }
          });
          lineGraphics.push(graphic);
        }
      } else {
        // For stayers, use n, or fallback to n_tot_o/n_tot_d
        let n = feature.attributes.n;
        if (!n || n === 0) {
          n = feature.attributes.n_tot_o || feature.attributes.n_tot_d || 0;
        }
        if (n >= minValue && n > 0) {
          const width = Math.min(12, Math.max(1, Math.log10(n) - 1));
          let pr_d_o = feature.attributes.pr_d_o;

          // If you want to match the line's value:
          if (feature.attributes.o_cz === feature.attributes.d_cz) {
            // Find the matching line feature (if it exists)
            const matchingLine = features.find(f =>
              f.attributes.o_cz === feature.attributes.o_cz &&
              f.attributes.d_cz === feature.attributes.d_cz &&
              f !== feature // not the same object
            );
            if (matchingLine) {
              pr_d_o = matchingLine.attributes.pr_d_o;
            }
          }

          const point = {
            type: "point",
            x: feature.attributes.o_x_coord,
            y: feature.attributes.o_y_coord,
            spatialReference: { wkid: 4326 }
          };
          const graphic = new Graphic({
            geometry: point,
            symbol: {
              type: "simple-marker",
              color: [0, 153, 51, 0.7],
              size: Math.max(8, width * 2),
              outline: {
                color: [255, 255, 255, 0.8],
                width: 1.5
              }
            },
            attributes: {
              ...feature.attributes,
              o_cz: feature.attributes.o_cz,
              d_cz: feature.attributes.d_cz
            },
            popupTemplate: {
              title: "{o_cz_name}, {o_state_name}",
              content: `<br/>Of the individuals that moved between childhood (measured by location at age 16) and young adulthood (location at age 26), <b>${(pr_d_o * 100).toFixed(1)}%</b> (${n.toLocaleString()}) of young adults stayed in the <b>{o_cz_name} Commuting Zone.</b>.`,
            }
          });
          pointGraphics.push(graphic);
        }
      }
    });
    // add all graphics at the same time
    appState.linesLayer.addMany(lineGraphics);
    appState.pointsLayer.addMany(pointGraphics);
  }

  // --- Shared polygon click logic for all views ---
  async function handlePolygonClick(polygonGraphic) {
    let cz_id = polygonGraphic.attributes.cz_id;

    if (!cz_id && polygonGraphic.attributes.OBJECTID) {
      const layer = polygonGraphic.layer;
      const query = layer.createQuery();
      query.objectIds = [polygonGraphic.attributes.OBJECTID];
      query.outFields = ["*"];
      const result = await layer.queryFeatures(query);
      if (result.features.length > 0) {
        cz_id = result.features[0].attributes.cz_id;
      }
    }

    if (!cz_id) {
      console.error("cz_id is undefined. Cannot run query.", polygonGraphic.attributes);
      return;
    }

    const migrationLayer = new FeatureLayer({
      url: "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Commuting_Zone_Migration_Centroid_Test/FeatureServer"
    });

    const migrationQuery = migrationLayer.createQuery();
    migrationQuery.where = `cz = ${cz_id}`;
    migrationQuery.outFields = ["o_x_coord", "o_y_coord", "d_x_coord", "d_y_coord", "n", "o_cz_name", "d_cz_name", "o_state_name", "d_state_name", "o_cz", "d_cz", "n_tot_o", "n_tot_d", "pr_d_o", "pr_o_d"];
    migrationQuery.returnGeometry = false;

    try {
      const result = await migrationLayer.queryFeatures(migrationQuery);
      appState.allRelatedFeatures = result.features;
      // drawLines(appState.allRelatedFeatures, appState.minValue); // Only draw lines when user clicks button or slider
    } catch (error) {
      console.error("Error querying centroid features:", error);
    }
  }

  // --- Click handler for all views (main and insets) ---
  function setupFeatureInfoClick(view) {
    view.when(() => {
      view.on("click", async (event) => {
        const response = await view.hitTest(event);
        const featureInfoPanel = document.getElementById("feature-info-panel");
        const featuresComponent = document.getElementById("feature-info");

        const graphic = response.results.find(
          (result) =>
            result.graphic?.layer?.type === "feature" ||
            (result.graphic?.geometry?.type === "polyline" && result.graphic?.layer?.type === "graphics") ||
            (result.graphic?.geometry?.type === "point" && result.graphic?.layer?.type === "graphics")
        )?.graphic;

        if (graphic) {
          highlightFeature(graphic, view); // <-- Ensure highlight is called here

          if (graphic.geometry?.type === "polygon") {
            handlePolygonClick(graphic);
          }
          // If it's a migration line, query extra info
          if (graphic.geometry?.type === "polyline" && graphic.attributes.o_cz && graphic.attributes.d_cz) {
            const oCz = graphic.attributes.o_cz;
            const dCz = graphic.attributes.d_cz;
            console.log("Line clicked. o_cz:", oCz, "d_cz:", dCz);

            const covariateTable = new FeatureLayer({
              url: "https://services8.arcgis.com/peDZJliSvYims39Q/arcgis/rest/services/Commuting_Zone_Covariates_Table/FeatureServer",
              outFields: ["*"]
            });
            const query = covariateTable.createQuery();
            query.where = `cz IN (${oCz}, ${dCz})`;
            query.returnGeometry = false;
            console.log("Query where clause:", query.where);

            try {
              const result = await covariateTable.queryFeatures(query);
              console.log("Covariate table query result:", result);
              let oInfo = "No info found.";
              let dInfo = "No info found.";
              result.features.forEach(f => {
                console.log("Feature from covariate table:", f.attributes);
                if (f.attributes.cz == oCz) oInfo = f.attributes;
                if (f.attributes.cz == dCz) dInfo = f.attributes;
              });

              function buildTable(data, label) {
                if (!data) return `<div>No data for ${label}.</div>`;
                const change_emp_19902010 = Math.round(data.change_emp_pooled1990_2010 * 100) / 1;
                const change_emp_19802000 = Math.round(data.change_emp_pooled1980_2000 * 100) / 1;
                const change_coll_19802000 = Math.round(data.change_frac_coll_pooled1980_200 * 100) / 1;
                const change_coll_19902010 = Math.round(data.change_frac_coll_pooled1990_201 * 100) / 1;
                return `
                  <div style="margin-bottom:8px;"><b>${label} Neighborhood Characteristics</b></div>
                  <table style="width:100%; border:1px solid LightGray; border-collapse: collapse;">
                    <tr><th style="border:1px solid LightGray;">Change in Employment Rate 1980-2000</th>
                      <th style="border:1px solid LightGray;">Change in Employment Rate 1990-2010</th></tr>
                    <tr><td style="text-align:center; border:1px solid LightGray;">${change_emp_19802000}%</td>
                      <td style="text-align:center; border:1px solid LightGray;">${change_emp_19902010}%</td></tr>
                    <tr><th style="border:1px solid LightGray;">Change in College Graduation Rate 1980-2000</th>
                      <th style="border:1px solid LightGray;">Change in College Graduation Rate 1990-2010</th></tr>
                    <tr><td style="text-align:center; border:1px solid LightGray;">${change_coll_19802000}%</td>
                      <td style="text-align:center; border:1px solid LightGray;">${change_coll_19902010}%</td></tr>
                  </table>
                `;
              }

              const oTable = buildTable(oInfo, "Origin");
              const dTable = buildTable(dInfo, "Destination");
              // Update popup content
              if (!graphic._baseContent) {
                graphic._baseContent = graphic.popupTemplate.content;
              }
              graphic.popupTemplate = {
                title: graphic.popupTemplate.title,
                content: `
                  ${graphic._baseContent}
                  <br/><h3>Neighborhood Characteristics</h3> 
                  ${oTable}
                  <br/>
                  ${dTable}
                `
              };
              console.log("Updated popupTemplate:", graphic.popupTemplate);
              featuresComponent.graphic = null;
              featuresComponent.graphic = graphic;
            } catch (err) {
              console.error("Error querying extra info table:", err);
            }
          }
          // If it's a point (stayer), just show the popup
          if (graphic.geometry?.type === "point") {
            featuresComponent.graphic = graphic;
            featureInfoPanel.closed = false;
            return;
          }
          featuresComponent.graphic = graphic;
          featureInfoPanel.closed = false;
        } else {
          featuresComponent.graphic = null;
          featureInfoPanel.closed = true;
        }
      });
    }); // <-- Make sure this closes view.when
  }

  // --- Create inset views ---
  appState.alaskaView = new MapView({
    container: "alaskaViewDiv",
    map: mapEl.map,
    center: [-152.4044, 64.2008],
    zoom: 2,
    ui: { components: [] },
    popupEnabled: false
  });

  appState.hawaiiView = new MapView({
    container: "hawaiiViewDiv",
    map: mapEl.map,
    center: [-157.5828, 20.8968],
    zoom: 4,
    ui: { components: [] },
    popupEnabled: false
  });

  mapEl.view.popupEnabled = false;

  // --- Attach click handlers to all views ---
  setupFeatureInfoClick(mapEl.view);
  setupFeatureInfoClick(appState.alaskaView);
  setupFeatureInfoClick(appState.hawaiiView);

  function getActiveLayer() {
    const layers = getTargetLayers();
    return layers.find(layer => layer.visible);
  }

  function getSmartMappingOptionsForActiveLayer() {
    const activeLayer = getActiveLayer();
    if (!activeLayer) return [];
    return smartMappingOptionsByLayer[activeLayer.title] || [];
  }

  // --- Dropdown logic for dynamic fields using Calcite Dropdown ---
  const fieldSelect = document.getElementById("field-select");

  function updateDropdownForActiveLayer() {
    fieldSelect.innerHTML = "";
    const placeholder = document.createElement("calcite-option");
    placeholder.value = ""; // no value
    placeholder.textContent = "Select a field to visualize";
    placeholder.disabled = true;
    placeholder.selected = true;
    fieldSelect.appendChild(placeholder);

    const options = getSmartMappingOptionsForActiveLayer();
    options.forEach((opt, idx) => {
      const option = document.createElement("calcite-option");
      option.value = idx; // use index as value
      option.textContent = opt.label;
      fieldSelect.appendChild(option);
    });

    // Optionally, select the first option by default:
    if (options.length > 0) {
      fieldSelect.selectedIndex = 1; // 0 is placeholder, 1 is first real option
      //updateFeatureInfoTitle();
    } else {
      fieldSelect.selectedIndex = 0;
      updateFeatureInfoTitle();
    }
  }

  async function updateRendererForActiveLayer(selectedIdx) {
    const activeLayer = getActiveLayer();
    if (!activeLayer) return;
    const view = mapEl.view;

    const options = getSmartMappingOptionsForActiveLayer();
    const option = options[selectedIdx];
    if (!option) return;

    // Arcade expression for the renderer
    const arcadeExpression = option.expression;

    let colorRampName;
    if (activeLayer.title === "Household Income") {
      colorRampName = "Green and Blue 3";
    } else if (activeLayer.title === "Individual Income") {
      colorRampName = "Red and Green 6";
    }

    let colorScheme = colorSchemes.getSchemeByName({
      basemap: view.map.basemap,
      geometryType: "polygon",
      theme: "above-and-below",
      name: colorRampName
    });

    const minValue = -5000;
    const maxValue = 5000; // default min value

    const params = {
      layer: activeLayer,
      view: view,
      valueExpression: arcadeExpression,
      valueExpressionTitle: option.label,
      colorScheme: colorScheme,
      theme: "above-and-below",
      outlineOptimizationEnabled: true,
      statistics: {
        min: minValue,
        max: maxValue
      }
    };

    try {
      const response = await colorRendererCreator.createContinuousRenderer(params);
      const renderer = response.renderer;

      // Force white outline for all color stops
      const outlineColor = [255, 255, 255, 0.25];
      const outlineWidth = 0.2; // Try 0.5 for better visibility

      function setOutline(symbol) {
        if (symbol && symbol.outline) {
          symbol.outline.color = outlineColor;
          symbol.outline.width = outlineWidth;
        }
      }

      // For main symbol
      if (renderer.symbol) setOutline(renderer.symbol);

      // For class breaks
      if (renderer.classBreakInfos) {
        renderer.classBreakInfos.forEach(info => setOutline(info.symbol));
      }

      // For unique value renderers
      if (renderer.uniqueValueInfos) {
        renderer.uniqueValueInfos.forEach(info => setOutline(info.symbol));
      }

      // For visual variables (color stops)
      if (renderer.visualVariables) {
        renderer.visualVariables.forEach(vv => {
          if (vv.stops) {
            vv.stops.forEach(stop => {
              if (stop.symbol) setOutline(stop.symbol);
            });
          }
        });
      }

      // Set No Data color and outline
      renderer.defaultSymbol = {
        type: "simple-fill",
        color: [200, 200, 200, 1],
        outline: {
          color: outlineColor,
          width: outlineWidth
        }
      };
      renderer.defaultLabel = "No Data";
      activeLayer.renderer = renderer;

      activeLayer.featureEffect = {
        filter: {
          where: `${selectedIdx} IS NOT NULL`
        },
        includedEffect: "drop-shadow(0px, 2px, 8px, #333)",
        excludedEffect: "grayscale(100%) opacity(30%)"
      };
    } catch (err) {
      console.error("Failed to create smartMapping renderer:", err);
    }
  }

  // Listen for dropdown selection changes
  fieldSelect.addEventListener("calciteSelectChange", (event) => {
    updateRendererForActiveLayer(event.target.value);
    
  });

  // Use reactiveUtils.watch for visibility changes on both layers
  getTargetLayers().forEach(layer => {
    reactiveUtils.watch(
      () => layer.visible,
      () => {
        updateDropdownForActiveLayer();
        
      }
    );
  });

  // Initial population
  updateDropdownForActiveLayer();

  // --- Highlight logic using centralized state ---
  function highlightFeature(feature, view) {
    // Remove previous highlight
    if (appState.highlightHandle) {
      appState.highlightHandle.remove();
      appState.highlightHandle = null;
    }

    // Set highlight options based on geometry type
    if (feature.geometry.type === "polygon") {
      view.highlightOptions = {
        color: [255, 255, 0, 1],
        fillOpacity: 0.2,
        haloOpacity: 0.8
      };
    } else if (feature.geometry.type === "polyline") {
      view.highlightOptions = {
        color: [0, 255, 255, 1],
        haloOpacity: 0.8
      };
    } else if (feature.geometry.type === "point") {
      view.highlightOptions = {
        color: [255, 0, 255, 1],
        haloOpacity: 0.8
      };
    }

    // Highlight logic for FeatureLayer vs GraphicsLayer
    if (feature.layer && feature.layer.type === "feature") {
      view.whenLayerView(feature.layer).then(layerView => {
        appState.highlightHandle = layerView.highlight(feature);
      });
    } else if (feature.layer && feature.layer.type === "graphics") {
      // Use the correct GraphicsLayer reference from appState
      let graphicsLayer = null;
      if (feature.geometry.type === "polyline") {
        graphicsLayer = appState.linesLayer;
      } else if (feature.geometry.type === "point") {
        graphicsLayer = appState.pointsLayer;
      }
      if (graphicsLayer) {
        view.whenLayerView(graphicsLayer).then(layerView => {
          appState.highlightHandle = layerView.highlight(feature);
        });
      }
    }
  }

  // Unified click handler for all views
  function setupHighlightOnClick(view) {
    view.on("click", async (event) => {
      const hit = await view.hitTest(event);
      // Find the first result that is a FeatureLayer or a GraphicsLayer
      const result = hit.results.find(r =>
        r.graphic &&
        (
          r.graphic.layer?.type === "feature" ||
          r.graphic.layer === appState.linesLayer ||
          r.graphic.layer === appState.pointsLayer
        )
      );
      if (result && result.graphic) {
        highlightFeature(result.graphic, view);
      } else {
        if (appState.highlightHandle) {
          appState.highlightHandle.remove();
          appState.highlightHandle = null;
        }
      }
    });
  }

  // Attach to all views
  setupHighlightOnClick(mapEl.view);
  setupHighlightOnClick(appState.alaskaView);
  setupHighlightOnClick(appState.hawaiiView);

  document.getElementById("info-action").addEventListener("click", () => {
    document.getElementById("about-dialog").open = true;
  });
  document.getElementById("about-dialog-close").addEventListener("click", () => {
    document.getElementById("about-dialog").open = false;
  });

});