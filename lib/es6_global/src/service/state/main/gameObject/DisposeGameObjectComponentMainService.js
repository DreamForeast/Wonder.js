// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as GetComponentGameObjectService$Wonderjs          from "../../../record/gameObject/GetComponentGameObjectService.js";
import * as DisposeSourceInstanceMainService$Wonderjs       from "../instance/DisposeSourceInstanceMainService.js";
import * as DisposeComponentGameObjectMainService$Wonderjs  from "./DisposeComponentGameObjectMainService.js";
import * as BatchGetComponentGameObjectMainService$Wonderjs from "./BatchGetComponentGameObjectMainService.js";

function _dispose(uid, param, state) {
  var match = param[0](uid, state[/* gameObjectRecord */10]);
  if (match) {
    return param[1](uid, match[0], state);
  } else {
    return state;
  }
}

function _disposeWithData(uid, data, param, state) {
  var match = param[0](uid, state[/* gameObjectRecord */10]);
  if (match) {
    return param[1](uid, match[0], data, state);
  } else {
    return state;
  }
}

function _disposeSourceInstanceComponent(uid, batchDisposeFunc, state) {
  var match = GetComponentGameObjectService$Wonderjs.getSourceInstanceComponent(uid, state[/* gameObjectRecord */10]);
  if (match) {
    return DisposeSourceInstanceMainService$Wonderjs.handleDisposeComponent(match[0], batchDisposeFunc, state);
  } else {
    return state;
  }
}

function _dispose$1(uid, batchDisposeFunc, isKeepOrder, state) {
  return _dispose(uid, /* tuple */[
              GetComponentGameObjectService$Wonderjs.getObjectInstanceComponent,
              DisposeComponentGameObjectMainService$Wonderjs.disposeObjectInstanceComponent
            ], _disposeSourceInstanceComponent(uid, batchDisposeFunc, _dispose(uid, /* tuple */[
                      GetComponentGameObjectService$Wonderjs.getPointLightComponent,
                      DisposeComponentGameObjectMainService$Wonderjs.disposePointLightComponent
                    ], _dispose(uid, /* tuple */[
                          GetComponentGameObjectService$Wonderjs.getDirectionLightComponent,
                          DisposeComponentGameObjectMainService$Wonderjs.disposeDirectionLightComponent
                        ], _dispose(uid, /* tuple */[
                              GetComponentGameObjectService$Wonderjs.getAmbientLightComponent,
                              DisposeComponentGameObjectMainService$Wonderjs.disposeAmbientLightComponent
                            ], _dispose(uid, /* tuple */[
                                  GetComponentGameObjectService$Wonderjs.getLightMaterialComponent,
                                  DisposeComponentGameObjectMainService$Wonderjs.disposeLightMaterialComponent
                                ], _dispose(uid, /* tuple */[
                                      GetComponentGameObjectService$Wonderjs.getBasicMaterialComponent,
                                      DisposeComponentGameObjectMainService$Wonderjs.disposeBasicMaterialComponent
                                    ], _dispose(uid, /* tuple */[
                                          GetComponentGameObjectService$Wonderjs.getBoxGeometryComponent,
                                          DisposeComponentGameObjectMainService$Wonderjs.disposeBoxGeometryComponent
                                        ], _dispose(uid, /* tuple */[
                                              GetComponentGameObjectService$Wonderjs.getMeshRendererComponent,
                                              DisposeComponentGameObjectMainService$Wonderjs.disposeMeshRendererComponent
                                            ], _dispose(uid, /* tuple */[
                                                  GetComponentGameObjectService$Wonderjs.getPerspectiveCameraProjectionComponent,
                                                  DisposeComponentGameObjectMainService$Wonderjs.disposePerspectiveCameraProjectionComponent
                                                ], _dispose(uid, /* tuple */[
                                                      GetComponentGameObjectService$Wonderjs.getBasicCameraViewComponent,
                                                      DisposeComponentGameObjectMainService$Wonderjs.disposeBasicCameraViewComponent
                                                    ], _disposeWithData(uid, isKeepOrder, /* tuple */[
                                                          GetComponentGameObjectService$Wonderjs.getTransformComponent,
                                                          DisposeComponentGameObjectMainService$Wonderjs.disposeTransformComponent
                                                        ], state))))))))))));
}

function dispose(uid, batchDisposeFunc, state) {
  return _dispose$1(uid, batchDisposeFunc, /* false */0, state);
}

function disposeKeepOrder(uid, batchDisposeFunc, state) {
  return _dispose$1(uid, batchDisposeFunc, /* true */1, state);
}

function batchDispose(uidArray, disposedUidMap, batchDisposeFunc, state) {
  var state$1 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeTransformComponent(disposedUidMap, state, BatchGetComponentGameObjectMainService$Wonderjs.batchGetTransformComponent(uidArray, state));
  var state$2 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeBasicCameraViewComponent(disposedUidMap, state$1, BatchGetComponentGameObjectMainService$Wonderjs.batchGetBasicCameraViewComponent(uidArray, state$1));
  var state$3 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposePerspectiveCameraProjectionComponent(disposedUidMap, state$2, BatchGetComponentGameObjectMainService$Wonderjs.batchGetPerspectiveCameraProjectionComponent(uidArray, state$2));
  var state$4 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeMeshRendererComponent(disposedUidMap, state$3, BatchGetComponentGameObjectMainService$Wonderjs.batchGetMeshRendererComponent(uidArray, state$3));
  var state$5 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeBoxGeometryComponent(disposedUidMap, state$4, BatchGetComponentGameObjectMainService$Wonderjs.batchGetBoxGeometryComponent(uidArray, state$4));
  var state$6 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeBasicMaterialComponent(disposedUidMap, state$5, BatchGetComponentGameObjectMainService$Wonderjs.batchGetBasicMaterialComponent(uidArray, state$5));
  var state$7 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeLightMaterialComponent(disposedUidMap, state$6, BatchGetComponentGameObjectMainService$Wonderjs.batchGetLightMaterialComponent(uidArray, state$6));
  var state$8 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeAmbientLightComponent(disposedUidMap, state$7, BatchGetComponentGameObjectMainService$Wonderjs.batchGetAmbientLightComponent(uidArray, state$7));
  var state$9 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeDirectionLightComponent(disposedUidMap, state$8, BatchGetComponentGameObjectMainService$Wonderjs.batchGetDirectionLightComponent(uidArray, state$8));
  var state$10 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposePointLightComponent(disposedUidMap, state$9, BatchGetComponentGameObjectMainService$Wonderjs.batchGetPointLightComponent(uidArray, state$9));
  var state$11 = DisposeComponentGameObjectMainService$Wonderjs.batchDisposeSourceInstanceComponent(disposedUidMap, state$10, batchDisposeFunc, BatchGetComponentGameObjectMainService$Wonderjs.batchGetSourceInstanceComponent(uidArray, state$10));
  return DisposeComponentGameObjectMainService$Wonderjs.batchDisposeObjectInstanceComponent(disposedUidMap, state$11, BatchGetComponentGameObjectMainService$Wonderjs.batchGetObjectInstanceComponent(uidArray, state$11));
}

export {
  _disposeWithData                ,
  _disposeSourceInstanceComponent ,
  _dispose$1                        as _dispose,
  dispose                         ,
  disposeKeepOrder                ,
  batchDispose                    ,
  
}
/* GetComponentGameObjectService-Wonderjs Not a pure module */