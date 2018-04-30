// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as Log$WonderLog                        from "../../../../../../../node_modules/wonder-log/lib/es6_global/src/Log.js";
import * as Contract$WonderLog                   from "../../../../../../../node_modules/wonder-log/lib/es6_global/src/Contract.js";
import * as StateDataMain$Wonderjs               from "../../../state/main/data/StateDataMain.js";
import * as IsDebugMainService$Wonderjs          from "../../../state/main/state/IsDebugMainService.js";
import * as BufferDirectionLightService$Wonderjs from "../../main/light/direction/BufferDirectionLightService.js";

function getLightCount(count, _) {
  return Contract$WonderLog.ensureCheck((function (count) {
                var maxCount = BufferDirectionLightService$Wonderjs.getBufferMaxCount(/* () */0);
                return Contract$WonderLog.test(Log$WonderLog.buildAssertMessage("light count: " + (String(count) + (" <= max buffer count: " + (String(maxCount) + ""))), "not"), (function () {
                              return Contract$WonderLog.assertLte(/* Int */0, count, maxCount);
                            }));
              }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData), count);
}

export {
  getLightCount ,
  
}
/* Log-WonderLog Not a pure module */