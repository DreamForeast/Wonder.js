// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Js_option from "../../../../../node_modules/bs-platform/lib/es6/js_option.js";
import * as Caml_array from "../../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as Log$WonderLog from "../../../../../node_modules/wonder-log/lib/es6_global/src/Log.js";
import * as Contract$WonderLog from "../../../../../node_modules/wonder-log/lib/es6_global/src/Contract.js";
import * as StateDataMain$Wonderjs from "../../service/state/main/data/StateDataMain.js";
import * as IsDebugMainService$Wonderjs from "../../service/state/main/state/IsDebugMainService.js";

function getCount(arrs) {
  return arrs.length;
}

function getPrimitiveData(primitives) {
  return Contract$WonderLog.ensureCheck((function (param) {
                var indices = param[/* indices */1];
                var attributes = param[/* attributes */0];
                Contract$WonderLog.test(Log$WonderLog.buildAssertMessage("only has TEXCOORD_0", "not"), (function () {
                        return Contract$WonderLog.assertTrue(Js_option.isNone(attributes[/* texCoord_1 */3]));
                      }));
                return Contract$WonderLog.test(Log$WonderLog.buildAssertMessage("indices exist", "not"), (function () {
                              return Contract$WonderLog.assertTrue(Js_option.isSome(indices));
                            }));
              }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData), Caml_array.caml_array_get(primitives, 0));
}

function isBase64(str) {
  if ((/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/g).test(str)) {
    return true;
  } else {
    return str.substring(0, 5) === "data:";
  }
}

export {
  getCount ,
  getPrimitiveData ,
  isBase64 ,
  
}
/* Log-WonderLog Not a pure module */