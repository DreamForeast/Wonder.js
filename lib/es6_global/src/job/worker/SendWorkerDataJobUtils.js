

import * as Curry from "../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as MostUtils$Wonderjs from "../../asset/utils/MostUtils.js";
import * as WorkerService$Wonderjs from "../../service/primitive/worker/WorkerService.js";
import * as JobConfigUtils$Wonderjs from "./utils/JobConfigUtils.js";

function execJob(flags, e, stateData) {
  return MostUtils$Wonderjs.callFunc((function (param) {
                WorkerService$Wonderjs.postMessage({
                      operateType: JobConfigUtils$Wonderjs.getOperateType(flags)
                    }, Curry._1(WorkerService$Wonderjs.getSelf, /* () */0));
                return e;
              }));
}

export {
  execJob ,
  
}
/* MostUtils-Wonderjs Not a pure module */
