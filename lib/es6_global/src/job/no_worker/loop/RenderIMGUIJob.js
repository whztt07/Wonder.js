

import * as IOIMGUIMainService$Wonderjs from "../../../service/state/main/imgui/IOIMGUIMainService.js";
import * as DeviceManagerService$Wonderjs from "../../../service/record/all/device/DeviceManagerService.js";
import * as RecordAPIMainService$Wonderjs from "../../../service/state/main/api/RecordAPIMainService.js";
import * as ManageIMGUIService$WonderImgui from "../../../../../../node_modules/wonder-imgui/lib/es6_global/src/service/record/ManageIMGUIService.js";
import * as ManageIMGUIMainService$Wonderjs from "../../../service/state/main/imgui/ManageIMGUIMainService.js";
import * as RecordIMGUIMainService$Wonderjs from "../../../service/state/main/imgui/RecordIMGUIMainService.js";

function execJob(flags, state) {
  return IOIMGUIMainService$Wonderjs.resetPointEventStateWhenPointUp(ManageIMGUIService$WonderImgui.render(DeviceManagerService$Wonderjs.unsafeGetGl(state[/* deviceManagerRecord */9]), RecordIMGUIMainService$Wonderjs.getIOData(state), RecordAPIMainService$Wonderjs.getAPIJsObj(state), /* tuple */[
                  ManageIMGUIMainService$Wonderjs.getRecord,
                  ManageIMGUIMainService$Wonderjs.setRecord
                ], state));
}

export {
  execJob ,
  
}
/* IOIMGUIMainService-Wonderjs Not a pure module */
