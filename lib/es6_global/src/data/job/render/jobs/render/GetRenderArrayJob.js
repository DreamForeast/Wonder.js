// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as RenderDataSystem$Wonderjs  from "../../../../../renderer/render/RenderDataSystem.js";
import * as MeshRendererAdmin$Wonderjs from "../../../../../ecs/admin/component/MeshRendererAdmin.js";

function execJob(_, _$1, state) {
  return RenderDataSystem$Wonderjs.setRenderArray(MeshRendererAdmin$Wonderjs.getRenderArray(state), state);
}

export {
  execJob ,
  
}
/* MeshRendererAdmin-Wonderjs Not a pure module */