// https://github.com/klevron/threejs-toys/blob/main/packages/toys/src/cursors/neon/index.js
// import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";
import { neonCursor } from "./js/threejs-toys.module.cdn.min.js";
// modified version

// additive blending
// discourse.threejs.org/t/does-three-js-support-additive-blending-for-opaque/36190/6
// relevant post (no answer)
// https://discourse.threejs.org/t/additive-blending-on-transparent-canvas/21630

neonCursor({
  el: document.getElementById("app"),
  shaderPoints: 16,
  curvePoints: 100,
  curveLerp: 0.5,
  radius1: 3,
  radius2: 10,
  velocityTreshold: 10,
  sleepRadiusX: 300,
  sleepRadiusY: 140,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025,
});
