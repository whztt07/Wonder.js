

import * as Curry from "../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as DisposeGameObjectMainService$Wonderjs from "../../service/state/main/gameObject/DisposeGameObjectMainService.js";
import * as DisposeComponentGameObjectMainService$Wonderjs from "../../service/state/main/gameObject/DisposeComponentGameObjectMainService.js";

function _disposeComponents(batchDisposeBasicMaterialComponentFunc, batchDisposeLightMaterialComponentFunc, state) {
  var gameObjectRecord = state[/* gameObjectRecord */10];
  var disposedBasicCameraViewArray = gameObjectRecord[/* disposedBasicCameraViewArray */10];
  var disposedTransformArray = gameObjectRecord[/* disposedTransformArray */11];
  var disposedTransformArrayForKeepOrder = gameObjectRecord[/* disposedTransformArrayForKeepOrder */12];
  var disposedPerspectiveCameraProjectionArray = gameObjectRecord[/* disposedPerspectiveCameraProjectionArray */13];
  var disposedArcballCameraControllerArray = gameObjectRecord[/* disposedArcballCameraControllerArray */14];
  var disposedBasicMaterialDataMap = gameObjectRecord[/* disposedBasicMaterialDataMap */15];
  var disposedLightMaterialDataMap = gameObjectRecord[/* disposedLightMaterialDataMap */16];
  var disposedGeometryDataMap = gameObjectRecord[/* disposedGeometryDataMap */17];
  var disposedSourceInstanceArray = gameObjectRecord[/* disposedSourceInstanceArray */18];
  var disposedObjectInstanceArray = gameObjectRecord[/* disposedObjectInstanceArray */19];
  var disposedDirectionLightArray = gameObjectRecord[/* disposedDirectionLightArray */20];
  var disposedPointLightArray = gameObjectRecord[/* disposedPointLightArray */21];
  var disposedMeshRendererComponentArray = gameObjectRecord[/* disposedMeshRendererComponentArray */22];
  var state$1 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeBasicCameraViewComponent(state, disposedBasicCameraViewArray);
  var state$2 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposePerspectiveCameraProjectionComponent(state$1, disposedPerspectiveCameraProjectionArray);
  var state$3 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeArcballCameraControllerComponent(state$2, disposedArcballCameraControllerArray);
  var state$4 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeTransformComponent(state$3, false, disposedTransformArray);
  var state$5 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeTransformComponent(state$4, true, disposedTransformArrayForKeepOrder);
  var state$6 = Curry._2(batchDisposeBasicMaterialComponentFunc, state$5, disposedBasicMaterialDataMap);
  var state$7 = Curry._2(batchDisposeLightMaterialComponentFunc, state$6, disposedLightMaterialDataMap);
  var match = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeGeometryComponentData(state$7, disposedGeometryDataMap);
  var partial_arg = /* tuple */[
    batchDisposeLightMaterialComponentFunc,
    batchDisposeLightMaterialComponentFunc
  ];
  var match$1 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeSourceInstanceComponent(match[0], /* tuple */[
        false,
        false,
        false
      ], (function (param, param$1, param$2) {
          return DisposeGameObjectMainService$Wonderjs.batchDispose(partial_arg, param, param$1, param$2);
        }), disposedSourceInstanceArray);
  var state$8 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeObjectInstanceComponent(match$1[0], disposedObjectInstanceArray);
  var state$9 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeDirectionLightComponent(state$8, disposedDirectionLightArray);
  var state$10 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposePointLightComponent(state$9, disposedPointLightArray);
  var state$11 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeMeshRendererComponent(state$10, disposedMeshRendererComponentArray);
  return /* tuple */[
          state$11,
          match[1],
          match$1[1]
        ];
}

function _disposeGameObjects(batchDisposeBasicMaterialComponentFunc, batchDisposeLightMaterialComponentFunc, state) {
  var gameObjectRecord = state[/* gameObjectRecord */10];
  var disposedUidArray = gameObjectRecord[/* disposedUidArray */5];
  var disposedUidArrayForKeepOrder = gameObjectRecord[/* disposedUidArrayForKeepOrder */6];
  var disposedUidArrayForKeepOrderRemoveGeometry = gameObjectRecord[/* disposedUidArrayForKeepOrderRemoveGeometry */7];
  var disposedUidArrayForKeepOrderRemoveGeometryRemoveMaterial = gameObjectRecord[/* disposedUidArrayForKeepOrderRemoveGeometryRemoveMaterial */8];
  var disposedUidArrayForDisposeGeometryRemoveMaterial = gameObjectRecord[/* disposedUidArrayForDisposeGeometryRemoveMaterial */9];
  var match = DisposeGameObjectMainService$Wonderjs.batchDispose(/* tuple */[
        batchDisposeBasicMaterialComponentFunc,
        batchDisposeLightMaterialComponentFunc
      ], disposedUidArray, /* tuple */[
        false,
        false,
        false
      ], state);
  var match$1 = DisposeGameObjectMainService$Wonderjs.batchDispose(/* tuple */[
        batchDisposeBasicMaterialComponentFunc,
        batchDisposeLightMaterialComponentFunc
      ], disposedUidArrayForKeepOrder, /* tuple */[
        true,
        false,
        false
      ], match[0]);
  var match$2 = DisposeGameObjectMainService$Wonderjs.batchDispose(/* tuple */[
        batchDisposeBasicMaterialComponentFunc,
        batchDisposeLightMaterialComponentFunc
      ], disposedUidArrayForKeepOrderRemoveGeometry, /* tuple */[
        true,
        true,
        false
      ], match$1[0]);
  var match$3 = DisposeGameObjectMainService$Wonderjs.batchDispose(/* tuple */[
        batchDisposeBasicMaterialComponentFunc,
        batchDisposeLightMaterialComponentFunc
      ], disposedUidArrayForKeepOrderRemoveGeometryRemoveMaterial, /* tuple */[
        true,
        true,
        true
      ], match$2[0]);
  var match$4 = DisposeGameObjectMainService$Wonderjs.batchDispose(/* tuple */[
        batchDisposeBasicMaterialComponentFunc,
        batchDisposeLightMaterialComponentFunc
      ], disposedUidArrayForDisposeGeometryRemoveMaterial, /* tuple */[
        false,
        false,
        true
      ], match$3[0]);
  var state$1 = DisposeGameObjectMainService$Wonderjs.clearDeferDisposeData(match$4[0]);
  return /* tuple */[
          state$1,
          match[1].concat(match$1[1], match$2[1], match$3[1], match$4[1]),
          match[2].concat(match$1[2], match$2[2], match$3[2], match$4[2])
        ];
}

function execJob(batchDisposeBasicMaterialComponentFunc, batchDisposeLightMaterialComponentFunc, state) {
  var match = _disposeComponents(batchDisposeBasicMaterialComponentFunc, batchDisposeLightMaterialComponentFunc, state);
  var match$1 = _disposeGameObjects(batchDisposeBasicMaterialComponentFunc, batchDisposeLightMaterialComponentFunc, match[0]);
  return /* tuple */[
          match$1[0],
          match[1].concat(match$1[1]),
          match[2].concat(match$1[2])
        ];
}

export {
  _disposeComponents ,
  _disposeGameObjects ,
  execJob ,
  
}
/* DisposeGameObjectMainService-Wonderjs Not a pure module */
