const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HUDMaterial.glsl-BOAVA8Zf.js","assets/index-ycM7R5Uo.js","assets/index-CvNxmrbR.css","assets/OutputColorHighlightOID.glsl-DQmFoiDQ.js","assets/videoUtils-DJ4Zw-7m.js","assets/requestImageUtils-CCUokDx5.js","assets/basicInterfaces-CZwQPxTp.js","assets/TextureFormat-1mYWTFa-.js","assets/BufferView-ebsqvWqJ.js","assets/mat4f64-q_b6UJoq.js","assets/Indices-Bjqq6RlO.js","assets/triangle-BIa9u2aH.js","assets/sphere-DI9QywmK.js","assets/mat3f64-B5o_lm6j.js","assets/vectorStacks-AD3OdB55.js","assets/quatf64-aQ5IuZRd.js","assets/lineSegment-BZHnAp5O.js","assets/VertexAttribute-BfkzOMLV.js","assets/glsl-Cj7KC756.js","assets/BindType-BBwFZqyN.js","assets/ShaderOutput-Bdd80V3g.js","assets/renderState-DPJz5Eio.js","assets/orientedBoundingBox-DbPvGI5l.js","assets/quat-BKE-eO_P.js","assets/spatialReferenceEllipsoidUtils-CxRUwGOs.js","assets/computeTranslationToOriginAndRotation-Cxn6kdxv.js","assets/plane-muy7-_Xr.js","assets/boundedPlane-JOlgXl_K.js","assets/projectVectorToVector-Cz5-yPb_.js","assets/projectPointToVector-BQEPEreF.js","assets/dehydratedFeatureUtils-QQSvBx0o.js","assets/meshVertexSpaceUtils-Uiv_LpRi.js","assets/MeshLocalVertexSpace-CSl_pk6a.js","assets/hydratedFeatures-DgzHBfno.js","assets/vec3f32-WCVSSNPR.js","assets/ShaderBuilder-C-_DX6FD.js"])))=>i.map(i=>d[i]);
import{pE as Se,en as Re,cT as ut,hH as Pe,pF as dt,kv as Ae,pG as ft,kX as pt,iC as ht,al as gt,kc as Fe,kB as vt,ba as A,nx as Ie,iw as ke,gb as le,g9 as Y,bv as G,bW as xe,fS as We,fV as q,kO as pe,pH as Xe,bA as Qe,c4 as W,g7 as oe,gc as Ze,fW as mt,fU as Ee,gQ as St,d7 as xt,ix as bt,bS as Ct,bx as Ot,pI as $t,c5 as Tt}from"./index-ycM7R5Uo.js";import{i as Pt,L as At,a as Et,m as yt,s as zt,b as Rt,e as Ft,c as It,o as wt,d as we,f as ge,g as _e,h as De,w as _t,t as Dt,j as Mt,k as H,l as Lt,q as jt,r as Nt,u as ee,v as Bt,x as Ut,F as Vt,y as qt,z as Ht,A as Gt,B as kt,C as E,D as Wt,E as Z,G as Xt,H as Ye,I as Je,J as Qt,K as Zt,M as Yt,N as Jt,O as Kt,R as eo,S as to,P as oo,Q as io,T as Me,U as Le,V as ao,W as so,X as je}from"./OutputColorHighlightOID.glsl-DQmFoiDQ.js";import{e as Ke}from"./mat3f64-B5o_lm6j.js";import{e as ro}from"./mat4f64-q_b6UJoq.js";import{s as no,g as lo,o as Ne,f as co,y as uo,T as Be}from"./BufferView-ebsqvWqJ.js";import{O as fo}from"./InterleavedLayout-IiKnLTGo.js";import{n as B,u as et,w as ve}from"./ShaderOutput-Bdd80V3g.js";import{l as tt,u as po,n as ho,t as go,d as vo}from"./dehydratedFeatureUtils-QQSvBx0o.js";import{e as u}from"./VertexAttribute-BfkzOMLV.js";import{n as d,t as z}from"./glsl-Cj7KC756.js";import{a as mo}from"./BindType-BBwFZqyN.js";import{i as So}from"./ShaderBuilder-C-_DX6FD.js";import{B as xo,o as bo,g as Co,p as Oo}from"./renderState-DPJz5Eio.js";let $o=class extends Pt{constructor(e,t){super(e,"vec4",mo.Draw,(i,a,s)=>i.setUniform4fv(e,t(a,s)))}};const ye=128,Q=.5,fi=Se(Q/2,Q/2,1-Q/2,1-Q/2);function pi(o){return o==="cross"||o==="x"}function hi(o,e=ye,t=e*Q,i=0){const{data:a,parameters:s}=To(o,e,t,i);return new At(a,s)}function To(o,e=ye,t=e*Q,i=0){return{data:Po(o,e,t,i),parameters:{mipmap:!1,wrap:{s:Re.CLAMP_TO_EDGE,t:Re.CLAMP_TO_EDGE},width:e,height:e,components:4,noUnpackFlip:!0,reloadable:!0}}}function Po(o,e=ye,t=e*Q,i=0){switch(o){case"circle":default:return Ao(e,t);case"square":return Eo(e,t);case"cross":return zo(e,t,i);case"x":return Ro(e,t,i);case"kite":return yo(e,t);case"triangle":return Fo(e,t);case"arrow":return Io(e,t)}}function Ao(o,e){const t=o/2-.5;return ae(o,at(t,t,e/2))}function Eo(o,e){return ot(o,e,!1)}function yo(o,e){return ot(o,e,!0)}function zo(o,e,t=0){return it(o,e,!1,t)}function Ro(o,e,t=0){return it(o,e,!0,t)}function Fo(o,e){return ae(o,st(o/2,e,e/2))}function Io(o,e){const t=e,i=e/2,a=o/2,s=.8*t,r=at(a,(o-e)/2-s,Math.sqrt(s*s+i*i)),l=st(a,t,i);return ae(o,(c,n)=>Math.max(l(c,n),-r(c,n)))}function ot(o,e,t){return t&&(e/=Math.SQRT2),ae(o,(i,a)=>{let s=i-.5*o+.25,r=.5*o-a-.75;if(t){const l=(s+r)/Math.SQRT2;r=(r-s)/Math.SQRT2,s=l}return Math.max(Math.abs(s),Math.abs(r))-.5*e})}function it(o,e,t,i=0){e-=i,t&&(e*=Math.SQRT2);const a=.5*e;return ae(o,(s,r)=>{let l,c=s-.5*o,n=.5*o-r-1;if(t){const S=(c+n)/Math.SQRT2;n=(n-c)/Math.SQRT2,c=S}return c=Math.abs(c),n=Math.abs(n),l=c>n?c>a?Math.sqrt((c-a)*(c-a)+n*n):n:n>a?Math.sqrt(c*c+(n-a)*(n-a)):c,l-=i/2,l})}function at(o,e,t){return(i,a)=>{const s=i-o,r=a-e;return Math.sqrt(s*s+r*r)-t}}function st(o,e,t){const i=Math.sqrt(e*e+t*t);return(a,s)=>{const r=Math.abs(a-o)-t,l=s-o+e/2+.75,c=(e*r+t*l)/i,n=-l;return Math.max(c,n)}}function ae(o,e){const t=new Uint8Array(4*o*o);for(let i=0;i<o;i++)for(let a=0;a<o;a++){const s=a+o*i;let r=e(a,i);r=r/o+.5,ut(r,t,4*s)}return t}function wo(o){return o instanceof Float32Array&&o.length>=16}function _o(o){return Array.isArray(o)&&o.length>=16}function Do(o){return wo(o)||_o(o)}class Mo{constructor(){this.factor=new Ue,this.factorAlignment=new Ue}}class Ue{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function Lo(o,e){const{vertex:t,fragment:i}=o;o.include(Et,e),t.include(tt),t.main.add(d`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),i.main.add(d`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function jo(o){const e=new So,{signedDistanceFieldEnabled:t,occlusionTestEnabled:i,horizonCullingEnabled:a,pixelSnappingEnabled:s,hasScreenSizePerspective:r,debugDrawLabelBorder:l,vvSize:c,vvColor:n,hasRotation:S,occludedFragmentFade:p,sampleSignedDistanceFieldTexelCenter:h}=o;e.include(po,o),e.vertex.include(yt,o);const{occlusionPass:$,output:F,oitPass:I}=o;if($)return e.include(Lo,o),e;const{vertex:b,fragment:x}=e;e.include(zt),e.include(Rt,o),e.include(Ft,o),i&&e.include(ho),x.include(go),x.include(It),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const P=F===B.Highlight,R=P&&i;R&&e.varyings.add("voccluded","float"),b.uniforms.add(new wt("viewport",f=>f.camera.fullViewport),new we("screenOffset",(f,L)=>Ae(ce,2*f.screenOffset[0]*L.camera.pixelRatio,2*f.screenOffset[1]*L.camera.pixelRatio)),new we("anchorPosition",f=>ie(f)),new ge("materialColor",f=>f.color),new _e("materialRotation",f=>f.rotation),new De("tex",f=>f.texture)),_t(b),t&&(b.uniforms.add(new ge("outlineColor",f=>f.outlineColor)),x.uniforms.add(new ge("outlineColor",f=>Ve(f)?f.outlineColor:ft),new _e("outlineSize",f=>Ve(f)?f.outlineSize:0))),a&&b.uniforms.add(new $o("pointDistanceSphere",(f,L)=>{const O=L.camera.eye,_=f.origin;return pt(_[0]-O[0],_[1]-O[1],_[2]-O[2],ht.radius)})),s&&b.include(tt),r&&(Dt(b),Mt(b)),l&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(u.UVI,"vec2"),e.attributes.add(u.COLOR,"vec4"),e.attributes.add(u.SIZE,"vec2"),e.attributes.add(u.ROTATION,"float"),(c||n)&&e.attributes.add(u.FEATUREATTRIBUTE,"vec4"),b.code.add(a?d`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:d`bool behindHorizon(vec3 posModel) { return false; }`),b.main.add(d`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${z(r,d`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,d`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${z(c,d`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${z(i,d`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${z(l,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${z(R,d`voccluded = visible ? 0.0 : 1.0;`)}
  `);const w=d`
      vec2 uvi1 = vec2(uvi.x < 0.0 ? 1.0 : 0.0, uvi.y < 0.0 ? 1.0 : 0.0);
      vec2 uv = abs(uvi + uvi1);
      vec2 texSize = vec2(textureSize(tex, 0));
      uv.x = uv.x >= ${qe} ? 1.0 : uv.x / texSize.x;
      uv.y = uv.y >= ${qe} ? 1.0 : uv.y / texSize.y;
      quadOffset.xy = (uvi1 - anchorPosition) * 2.0 * combinedSize;

      ${z(S,d`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,g=s?t?d`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:d`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:d`posProj += quadOffset;`;b.main.add(d`
    ${w}
    ${n?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${z(F===B.ObjectAndLayerIdColor,d`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${d.float(H)};
    ${z(t,`alphaDiscard = alphaDiscard && outlineColor.a < ${d.float(H)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${g}
      gl_Position = posProj;
    }

    vtc = uv;

    ${z(l,d`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),x.uniforms.add(new De("tex",f=>f.texture)),p&&!P&&x.uniforms.add(new Lt("depthMap",f=>f.mainDepth),new jt("occludedOpacity",f=>f.hudOccludedFragmentOpacity));const j=l?d`(isBorder > 0.0 ? 0.0 : ${d.float(H)})`:d.float(H),D=d`
    ${z(l,d`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${z(h,d`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${t?d`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgbaTofloat(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${j} ||
          fillPixelColor.a + outlinePixelColor.a < ${d.float(H)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${z(!P,d`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${j}) {
          discard;
        }

        ${z(!P,d`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:d`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${j}) {
            discard;
          }
          ${z(!P,d`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${z(p&&!P,d`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${z(!P&&l,d`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(F){case B.Color:case B.ColorEmission:e.outputs.add("fragColor","vec4",0),F===B.ColorEmission&&e.outputs.add("fragEmission","vec4",1),I===ee.ColorAlpha&&e.outputs.add("fragAlpha","float",F===B.ColorEmission?2:1),x.main.add(d`
        ${D}
        ${z(I===ee.FrontFace,d`fragColor.rgb /= fragColor.a;`)}
        ${z(F===B.ColorEmission,d`fragEmission = vec4(0.0);`)}
        ${z(I===ee.ColorAlpha,d`fragAlpha = fragColor.a;`)}`);break;case B.ObjectAndLayerIdColor:x.main.add(d`
        ${D}
        outputObjectAndLayerIdColor();`);break;case B.Highlight:e.include(Nt,o),x.main.add(d`
        ${D}
        outputHighlight(${z(R,d`voccluded == 1.0`,d`false`)});`)}return e}function Ve(o){return o.outlineColor[3]>0&&o.outlineSize>0}function ie(o){return o.textureIsSignedDistanceField?No(o.anchorPosition,o.distanceFieldBoundingBox,ce):dt(ce,o.anchorPosition),ce}function No(o,e,t){Ae(t,o[0]*(e[2]-e[0])+e[0],o[1]*(e[3]-e[1])+e[1])}const ce=Pe(),de=32e3,qe=d.float(de),Bo=Object.freeze(Object.defineProperty({__proto__:null,build:jo,calculateAnchorPosition:ie,fullUV:de},Symbol.toStringTag,{value:"Module"}));class Uo extends Bt{constructor(e,t){super(e,t,new Ut(Bo,()=>gt(()=>import("./HUDMaterial.glsl-BOAVA8Zf.js").then(i=>i.H),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35])))),this.primitiveType=t.occlusionPass?Fe.POINTS:Fe.TRIANGLES}initializePipeline(e){const{oitPass:t,hasPolygonOffset:i,draped:a,output:s,depthTestEnabled:r,occlusionPass:l}=e,c=t===ee.NONE,n=t===ee.ColorAlpha,S=s===B.Highlight,p=r&&!a&&!n&&!l&&!S;return xo({blending:et(s)?c?bo:qt(t):null,depthTest:r&&!a?{func:vt.LEQUAL}:null,depthWrite:p?Oo:null,drawBuffers:Vt(t,s),colorWrite:Co,polygonOffset:i?Vo:null})}}const Vo={factor:0,units:-4};class T extends Ht{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.textureCoordinateType=Gt.None,this.emissionSource=kt.None,this.discardInvisibleFragments=!0,this.hasVvInstancing=!1,this.snowCover=!1}}A([E()],T.prototype,"screenCenterOffsetUnitsEnabled",void 0),A([E()],T.prototype,"occlusionTestEnabled",void 0),A([E()],T.prototype,"signedDistanceFieldEnabled",void 0),A([E()],T.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),A([E()],T.prototype,"vvSize",void 0),A([E()],T.prototype,"vvColor",void 0),A([E()],T.prototype,"hasVerticalOffset",void 0),A([E()],T.prototype,"hasScreenSizePerspective",void 0),A([E()],T.prototype,"hasRotation",void 0),A([E()],T.prototype,"debugDrawLabelBorder",void 0),A([E()],T.prototype,"hasPolygonOffset",void 0),A([E()],T.prototype,"depthTestEnabled",void 0),A([E()],T.prototype,"pixelSnappingEnabled",void 0),A([E()],T.prototype,"draped",void 0),A([E()],T.prototype,"terrainDepthTest",void 0),A([E()],T.prototype,"cullAboveTerrain",void 0),A([E()],T.prototype,"occlusionPass",void 0),A([E()],T.prototype,"occludedFragmentFade",void 0),A([E()],T.prototype,"objectAndLayerIdColorInstanced",void 0),A([E()],T.prototype,"horizonCullingEnabled",void 0),A([E()],T.prototype,"isFocused",void 0);let gi=class extends Wt{constructor(e,t){super(e,Qo),this.produces=new Map([[Z.HUD_MATERIAL,i=>ve(i)&&!this.parameters.drawAsLabel],[Z.LABEL_MATERIAL,i=>ve(i)&&this.parameters.drawAsLabel],[Z.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[Z.DRAPED_MATERIAL,i=>this.parameters.draped&&ve(i)]]),this._visible=!0,this._configuration=new T(t)}getConfiguration(e,t){const i=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=i,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===Z.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=!i&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===Z.OCCLUSION_PIXELS,et(e)&&(this._configuration.debugDrawLabelBorder=!!Xt.LABELS_SHOW_BORDER),this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}intersect(e,t,i,a,s,r){const{options:{selectionMode:l,hud:c,excludeLabels:n},point:S,camera:p}=i,{parameters:h}=this;if(!l||!c||n&&h.isLabel||!e.visible||!S||!p)return;const $=e.attributes.get(u.FEATUREATTRIBUTE),F=$==null?null:Ie($.data,Oe),{scaleX:I,scaleY:b}=$e(F,h,p.pixelRatio);ke(ue,t),e.attributes.has(u.FEATUREATTRIBUTE)&&Go(ue);const x=e.attributes.get(u.POSITION),P=e.attributes.get(u.SIZE),R=e.attributes.get(u.NORMAL),w=e.attributes.get(u.ROTATION),g=e.attributes.get(u.CENTEROFFSETANDDISTANCE);no(x.size>=3);const j=ie(h),D=this.parameters.centerOffsetUnits==="screen";for(let f=0;f<x.data.length/x.size;f++){const L=f*x.size;le(v,x.data[L],x.data[L+1],x.data[L+2]),Y(v,v,t),Y(v,v,p.viewMatrix);const O=f*g.size;if(le(C,g.data[O],g.data[O+1],g.data[O+2]),!D&&(v[0]+=C[0],v[1]+=C[1],C[2]!==0)){const N=C[2];xe(C,v),We(v,v,q(C,C,N))}const _=f*R.size;if(le(X,R.data[_],R.data[_+1],R.data[_+2]),be(X,ue,p,te),Te(this.parameters,v,te,p,J),p.applyProjection(v,m),m[0]>-1){D&&(C[0]||C[1])&&(m[0]+=C[0]*p.pixelRatio,C[1]!==0&&(m[1]+=Ye(C[1],J.factorAlignment)*p.pixelRatio),p.unapplyProjection(m,v)),m[0]+=this.parameters.screenOffset[0]*p.pixelRatio,m[1]+=this.parameters.screenOffset[1]*p.pixelRatio,m[0]=Math.floor(m[0]),m[1]=Math.floor(m[1]);const N=f*P.size;y[0]=P.data[N],y[1]=P.data[N+1],Je(y,J.factor,y);const k=lt*p.pixelRatio;let se=0;h.textureIsSignedDistanceField&&(se=Math.min(h.outlineSize,.5*y[0])*p.pixelRatio/2),y[0]*=I,y[1]*=b;const he=f*w.size,re=h.rotation+w.data[he];if(Ce(S,m[0],m[1],y,k,se,re,h,j)){const U=i.ray;if(Y(fe,v,Qe(nt,p.viewMatrix)),m[0]=S[0],m[1]=S[1],p.unprojectFromRenderScreen(m,v)){const V=G();W(V,U.direction);const ze=1/oe(V);q(V,V,ze),r(Ze(U.origin,v)*ze,V,-1,fe)}}}}}intersectDraped(e,t,i,a,s){const r=e.attributes.get(u.POSITION),l=e.attributes.get(u.SIZE),c=e.attributes.get(u.ROTATION),n=this.parameters,S=ie(n),p=e.attributes.get(u.FEATUREATTRIBUTE),h=p==null?null:Ie(p.data,Oe),{scaleX:$,scaleY:F}=$e(h,n,e.screenToWorldRatio),I=Wo*e.screenToWorldRatio;for(let b=0;b<r.data.length/r.size;b++){const x=b*r.size,P=r.data[x],R=r.data[x+1],w=b*l.size;y[0]=l.data[w],y[1]=l.data[w+1];let g=0;n.textureIsSignedDistanceField&&(g=Math.min(n.outlineSize,.5*y[0])*e.screenToWorldRatio/2),y[0]*=$,y[1]*=F;const j=b*c.size,D=n.rotation+c.data[j];Ce(i,P,R,y,I,g,D,n,S)&&a(s.distance,s.normal,-1)}}createBufferWriter(){return new Yo}applyShaderOffsetsView(e,t,i,a,s,r,l){const c=be(t,i,s,te);return this._applyVerticalGroundOffsetView(e,c,s,l),Te(this.parameters,l,c,s,r),this._applyPolygonOffsetView(l,c,a[3],s,l),this._applyCenterOffsetView(l,a,l),l}applyShaderOffsetsNDC(e,t,i,a,s){return this._applyCenterOffsetNDC(e,t,i,a),s!=null&&W(s,a),this._applyPolygonOffsetNDC(a,t,i,a),a}_applyPolygonOffsetView(e,t,i,a,s){const r=a.aboveGround?1:-1;let l=Math.sign(i);l===0&&(l=r);const c=r*l;if(this.parameters.shaderPolygonOffset<=0)return W(s,e);const n=mt(Math.abs(t.cosAngle),.01,1),S=1-Math.sqrt(1-n*n)/n/a.viewport[2];return q(s,e,c>0?S:1/S),s}_applyVerticalGroundOffsetView(e,t,i,a){const s=oe(e),r=i.aboveGround?1:-1,l=i.computeRenderPixelSizeAtDist(s)*vo,c=q(v,t.normal,r*l);return Ee(a,e,c),a}_applyCenterOffsetView(e,t,i){const a=this.parameters.centerOffsetUnits!=="screen";return i!==e&&W(i,e),a&&(i[0]+=t[0],i[1]+=t[1],t[2]&&(xe(X,i),St(i,i,q(X,X,t[2])))),i}_applyCenterOffsetNDC(e,t,i,a){const s=this.parameters.centerOffsetUnits!=="screen";return a!==e&&W(a,e),s||(a[0]+=t[0]/i.fullWidth*2,a[1]+=t[1]/i.fullHeight*2),a}_applyPolygonOffsetNDC(e,t,i,a){const s=this.parameters.shaderPolygonOffset;if(e!==a&&W(a,e),s){const r=i.aboveGround?1:-1,l=r*Math.sign(t[3]);a[2]-=(l||r)*s}return a}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:i}=this.parameters,a=e[3]>=H||t>=H&&i[3]>=H;return this._visible&&a}createGLMaterial(e){return new qo(e)}calculateRelativeScreenBounds(e,t,i=xt()){return Ho(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}};class qo extends so{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Uo,e)}}function Ho(o,e,t,i){i[0]=o.anchorPosition[0]*-e[0]+o.screenOffset[0]*t,i[1]=o.anchorPosition[1]*-e[1]+o.screenOffset[1]*t}function be(o,e,t,i){return Do(e)&&(e=ke(ko,e)),bt(i.normal,o,e),Y(i.normal,i.normal,t.viewInverseTransposeMatrix),i.cosAngle=Ct(rt,Xo),i}function Go(o){const e=o[0],t=o[1],i=o[2],a=o[3],s=o[4],r=o[5],l=o[6],c=o[7],n=o[8],S=1/Math.sqrt(e*e+t*t+i*i),p=1/Math.sqrt(a*a+s*s+r*r),h=1/Math.sqrt(l*l+c*c+n*n);return o[0]=e*S,o[1]=t*S,o[2]=i*S,o[3]=a*p,o[4]=s*p,o[5]=r*p,o[6]=l*h,o[7]=c*h,o[8]=n*h,o}function Ce(o,e,t,i,a,s,r,l,c){let n=e-a-i[0]*c[0],S=n+i[0]+2*a,p=t-a-i[1]*c[1],h=p+i[1]+2*a;const $=l.distanceFieldBoundingBox;return l.textureIsSignedDistanceField&&$!=null&&(n+=i[0]*$[0],p+=i[1]*$[1],S-=i[0]*(1-$[2]),h-=i[1]*(1-$[3]),n-=s,S+=s,p-=s,h+=s),Ae(He,e,t),$t(K,o,He,Tt(r)),K[0]>n&&K[0]<S&&K[1]>p&&K[1]<h}const J=new Mo,v=G(),X=G(),m=pe(),rt=G(),fe=G(),K=Pe(),He=Pe(),ue=Ke(),ko=Ke(),nt=ro(),ne=pe(),C=G(),me=G(),Oe=pe(),te={normal:rt,cosAngle:0},lt=1,Wo=2,y=Xe(0,0),M=6,Xo=Ot(0,0,1);class Qo extends Qt{constructor(){super(...arguments),this.renderOccluded=Zt.Occlude,this.isDecoration=!1,this.color=Se(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=Xe(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=Se(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=pe(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}}const ct=fo().vec3f(u.POSITION).vec3f(u.NORMAL).vec2i16(u.UVI).vec4u8(u.COLOR).vec2f(u.SIZE).f32(u.ROTATION).vec4f(u.CENTEROFFSETANDDISTANCE).vec4f(u.FEATUREATTRIBUTE),Zo=ct.clone().vec4u8(u.OLIDCOLOR);class Yo{constructor(){this.vertexBufferLayout=Kt()?Zo:ct}elementCount(e){return e.get(u.POSITION).indices.length*M}write(e,t,i,a,s,r){var f,L;const{position:l,normal:c,uvi:n,color:S,size:p,rotation:h,centerOffsetAndDistance:$,featureAttribute:F}=s;eo(i.get(u.POSITION),e,l,r,M),to(i.get(u.NORMAL),t,c,r,M);const I=(f=i.get(u.UVI))==null?void 0:f.data;let b=0,x=0,P=-1-de,R=-1-de;I&&I.length>=4&&(b=I[0],x=I[1],P=-1-I[2],R=-1-I[3]);let w=i.get(u.POSITION).indices.length,g=r;for(let O=0;O<w;++O)n.set(g,0,b),n.set(g,1,x),g++,n.set(g,0,P),n.set(g,1,x),g++,n.set(g,0,P),n.set(g,1,R),g++,n.set(g,0,P),n.set(g,1,R),g++,n.set(g,0,b),n.set(g,1,R),g++,n.set(g,0,b),n.set(g,1,x),g++;oo(i.get(u.COLOR),4,S,r,M);const{data:j,indices:D}=i.get(u.SIZE);w=D.length,g=r;for(let O=0;O<w;++O){const _=j[2*D[O]],N=j[2*D[O]+1];for(let k=0;k<M;++k)p.set(g,0,_),p.set(g,1,N),g++}if(io(i.get(u.ROTATION),h,r,M),i.get(u.CENTEROFFSETANDDISTANCE)?Me(i.get(u.CENTEROFFSETANDDISTANCE),$,r,M):Le($,r,w*M),i.get(u.FEATUREATTRIBUTE)?Me(i.get(u.FEATUREATTRIBUTE),F,r,M):Le(F,r,w*M),a!=null){const O=(L=i.get(u.POSITION))==null?void 0:L.indices;if(O){const _=O.length,N=s.getField(u.OLIDCOLOR,lo);ao(a,N,_,r,M)}}return{numVerticesPerItem:M,numItems:w}}intersect(e,t,i,a,s,r,l){const{options:{selectionMode:c,hud:n,excludeLabels:S},point:p,camera:h}=a;if(!c||!n||S&&t.isLabel||!p)return;const $=this.vertexBufferLayout.createView(e),F=$.getField(u.POSITION,Ne),I=$.getField(u.NORMAL,Ne),b=$.getField(u.ROTATION,co),x=$.getField(u.SIZE,uo),P=$.getField(u.FEATUREATTRIBUTE,Be),R=$.getField(u.CENTEROFFSETANDDISTANCE,Be),w=t.centerOffsetUnits==="screen",g=ie(t);if(F==null||I==null||b==null||x==null||R==null||h==null)return;const j=P==null?null:P.getVec(0,Oe),{scaleX:D,scaleY:f}=$e(j,t,h.pixelRatio),L=F.count/M;for(let O=0;O<L;O++){const _=O*M;if(F.getVec(_,v),i!=null&&Ee(v,v,i),Y(v,v,h.viewMatrix),R.getVec(_,ne),le(C,ne[0],ne[1],ne[2]),!w&&(v[0]+=C[0],v[1]+=C[1],C[2]!==0)){const N=C[2];xe(C,v),We(v,v,q(C,C,N))}if(I.getVec(_,X),be(X,ue,h,te),Te(t,v,te,h,J),h.applyProjection(v,m),m[0]>-1){w&&(C[0]||C[1])&&(m[0]+=C[0]*h.pixelRatio,C[1]!==0&&(m[1]+=Ye(C[1],J.factorAlignment)*h.pixelRatio),h.unapplyProjection(m,v)),m[0]+=t.screenOffset[0]*h.pixelRatio,m[1]+=t.screenOffset[1]*h.pixelRatio,m[0]=Math.floor(m[0]),m[1]=Math.floor(m[1]),x.getVec(_,y),Je(y,J.factor,y);const N=lt*h.pixelRatio;let k=0;t.textureIsSignedDistanceField&&(k=Math.min(t.outlineSize,.5*y[0])*h.pixelRatio/2),y[0]*=D,y[1]*=f;const se=b.get(_),he=t.rotation+se;if(Ce(p,m[0],m[1],y,N,k,he,t,g)){const re=a.ray;if(Y(fe,v,Qe(nt,h.viewMatrix)),m[0]=p[0],m[1]=p[1],h.unprojectFromRenderScreen(m,v)){const U=G();W(U,re.direction);const V=1/oe(U);q(U,U,V),l(Ze(re.origin,v)*V,U,O,fe)}}}}}}function $e(o,e,t){return o==null||e.vvSize==null?{scaleX:t,scaleY:t}:(Yt(me,e,o),{scaleX:me[0]*t,scaleY:me[1]*t})}function Te(o,e,t,i,a){var c;if(!((c=o.verticalOffset)!=null&&c.screenLength))return o.screenSizePerspective||o.screenSizePerspectiveAlignment?Ge(o,a,oe(e),t.cosAngle):(a.factor.scale=1,a.factorAlignment.scale=1),e;const s=oe(e),r=o.screenSizePerspectiveAlignment??o.screenSizePerspective,l=Jt(i,s,o.verticalOffset,t.cosAngle,r);return Ge(o,a,s,t.cosAngle),q(t.normal,t.normal,l),Ee(e,e,t.normal)}function Ge(o,e,t,i){o.screenSizePerspective!=null?je(i,t,o.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),o.screenSizePerspectiveAlignment!=null?je(i,t,o.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}export{jo as B,ie as M,de as V,hi as a,ye as b,pi as c,To as i,Q as o,fi as s,gi as u};
