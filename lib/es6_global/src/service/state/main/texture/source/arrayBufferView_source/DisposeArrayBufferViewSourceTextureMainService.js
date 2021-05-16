

import * as Caml_array from "../../../../../../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as Caml_int32 from "../../../../../../../../../node_modules/bs-platform/lib/es6/caml_int32.js";
import * as Contract$WonderLog from "../../../../../../../../../node_modules/wonder-log/lib/es6_global/src/Contract.js";
import * as StateDataMain$Wonderjs from "../../../data/StateDataMain.js";
import * as IsDebugMainService$Wonderjs from "../../../state/IsDebugMainService.js";
import * as ArrayService$WonderCommonlib from "../../../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/ArrayService.js";
import * as DisposeTextureService$Wonderjs from "../../../../../primitive/texture/DisposeTextureService.js";
import * as DisposeComponentService$Wonderjs from "../../../../../primitive/component/DisposeComponentService.js";
import * as DisposeTypeArrayService$Wonderjs from "../../../../../primitive/buffer/DisposeTypeArrayService.js";
import * as BufferSizeTextureService$Wonderjs from "../../../../../record/main/texture/BufferSizeTextureService.js";
import * as DisposeTextureMainService$Wonderjs from "../../DisposeTextureMainService.js";
import * as IndexAllSourceTextureService$Wonderjs from "../../../../../record/all/texture/source/IndexAllSourceTextureService.js";
import * as IndexSourceTextureMainService$Wonderjs from "../IndexSourceTextureMainService.js";
import * as GroupArrayBufferViewSourceTextureService$Wonderjs from "../../../../../record/main/texture/source/arrayBufferView_source/GroupArrayBufferViewSourceTextureService.js";
import * as BufferArrayBufferViewSourceTextureService$Wonderjs from "../../../../../record/main/texture/source/arrayBufferView_source/BufferArrayBufferViewSourceTextureService.js";
import * as BufferArrayBufferViewSourceSizeTextureService$Wonderjs from "../../../../../record/main/texture/source/arrayBufferView_source/BufferArrayBufferViewSourceSizeTextureService.js";
import * as RecordArrayBufferViewSourceTextureMainService$Wonderjs from "./RecordArrayBufferViewSourceTextureMainService.js";

function isAlive(texture, param) {
  return DisposeTextureService$Wonderjs.isAlive(texture, param[/* disposedIndexArray */13]);
}

function _disposeData(texture, textureIndexInTypeArr, state) {
  var arrayBufferViewSourceTextureRecord = RecordArrayBufferViewSourceTextureMainService$Wonderjs.getRecord(state);
  var newrecord = Caml_array.caml_array_dup(state);
  newrecord[/* arrayBufferViewSourceTextureRecord */19] = /* record */[
    /* index */arrayBufferViewSourceTextureRecord[/* index */0],
    /* wrapSs */DisposeTypeArrayService$Wonderjs.deleteAndResetUint8(Caml_int32.imul(textureIndexInTypeArr, BufferSizeTextureService$Wonderjs.getWrapSsSize(/* () */0)), BufferArrayBufferViewSourceTextureService$Wonderjs.getDefaultWrapS(/* () */0), arrayBufferViewSourceTextureRecord[/* wrapSs */1]),
    /* wrapTs */DisposeTypeArrayService$Wonderjs.deleteAndResetUint8(Caml_int32.imul(textureIndexInTypeArr, BufferSizeTextureService$Wonderjs.getWrapTsSize(/* () */0)), BufferArrayBufferViewSourceTextureService$Wonderjs.getDefaultWrapT(/* () */0), arrayBufferViewSourceTextureRecord[/* wrapTs */2]),
    /* magFilters */DisposeTypeArrayService$Wonderjs.deleteAndResetUint8(Caml_int32.imul(textureIndexInTypeArr, BufferSizeTextureService$Wonderjs.getMagFiltersSize(/* () */0)), BufferArrayBufferViewSourceTextureService$Wonderjs.getDefaultMagFilter(/* () */0), arrayBufferViewSourceTextureRecord[/* magFilters */3]),
    /* minFilters */DisposeTypeArrayService$Wonderjs.deleteAndResetUint8(Caml_int32.imul(textureIndexInTypeArr, BufferSizeTextureService$Wonderjs.getMinFiltersSize(/* () */0)), BufferArrayBufferViewSourceTextureService$Wonderjs.getDefaultMinFilter(/* () */0), arrayBufferViewSourceTextureRecord[/* minFilters */4]),
    /* formats */DisposeTypeArrayService$Wonderjs.deleteAndResetUint8(Caml_int32.imul(textureIndexInTypeArr, BufferSizeTextureService$Wonderjs.getFormatsSize(/* () */0)), BufferArrayBufferViewSourceTextureService$Wonderjs.getDefaultFormat(/* () */0), arrayBufferViewSourceTextureRecord[/* formats */5]),
    /* types */DisposeTypeArrayService$Wonderjs.deleteAndResetUint8(Caml_int32.imul(textureIndexInTypeArr, BufferSizeTextureService$Wonderjs.getTypesSize(/* () */0)), BufferArrayBufferViewSourceTextureService$Wonderjs.getDefaultType(/* () */0), arrayBufferViewSourceTextureRecord[/* types */6]),
    /* isNeedUpdates */DisposeTypeArrayService$Wonderjs.deleteAndResetUint8(Caml_int32.imul(textureIndexInTypeArr, BufferSizeTextureService$Wonderjs.getIsNeedUpdatesSize(/* () */0)), BufferArrayBufferViewSourceTextureService$Wonderjs.getDefaultIsNeedUpdate(/* () */0), arrayBufferViewSourceTextureRecord[/* isNeedUpdates */7]),
    /* flipYs */DisposeTypeArrayService$Wonderjs.deleteAndResetUint8(Caml_int32.imul(textureIndexInTypeArr, BufferSizeTextureService$Wonderjs.getFlipYsSize(/* () */0)), BufferArrayBufferViewSourceTextureService$Wonderjs.getDefaultFlipY(/* () */0), arrayBufferViewSourceTextureRecord[/* flipYs */8]),
    /* widths */DisposeTypeArrayService$Wonderjs.deleteAndResetUint16(Caml_int32.imul(textureIndexInTypeArr, BufferArrayBufferViewSourceSizeTextureService$Wonderjs.getWidthsSize(/* () */0)), BufferArrayBufferViewSourceTextureService$Wonderjs.getDefaultWidth(/* () */0), arrayBufferViewSourceTextureRecord[/* widths */9]),
    /* heights */DisposeTypeArrayService$Wonderjs.deleteAndResetUint16(Caml_int32.imul(textureIndexInTypeArr, BufferArrayBufferViewSourceSizeTextureService$Wonderjs.getHeightsSize(/* () */0)), BufferArrayBufferViewSourceTextureService$Wonderjs.getDefaultHeight(/* () */0), arrayBufferViewSourceTextureRecord[/* heights */10]),
    /* sourceMap */DisposeComponentService$Wonderjs.disposeSparseMapData(texture, arrayBufferViewSourceTextureRecord[/* sourceMap */11]),
    /* glTextureMap */arrayBufferViewSourceTextureRecord[/* glTextureMap */12],
    /* disposedIndexArray */arrayBufferViewSourceTextureRecord[/* disposedIndexArray */13],
    /* needAddedSourceArray */DisposeTextureMainService$Wonderjs.disposeNeedAddedSourceArray(texture, arrayBufferViewSourceTextureRecord[/* needAddedSourceArray */14]),
    /* needInitedTextureIndexArray */DisposeTextureMainService$Wonderjs.disposeNeedInitedSourceArray(texture, arrayBufferViewSourceTextureRecord[/* needInitedTextureIndexArray */15]),
    /* needDisposedTextureIndexArray */arrayBufferViewSourceTextureRecord[/* needDisposedTextureIndexArray */16],
    /* nameMap */DisposeComponentService$Wonderjs.disposeSparseMapData(texture, arrayBufferViewSourceTextureRecord[/* nameMap */17]),
    /* materialsMap */arrayBufferViewSourceTextureRecord[/* materialsMap */18]
  ];
  return newrecord;
}

function handleDispose(isRemoveTexture, materialData, textureArr, state) {
  Contract$WonderLog.requireCheck((function (param) {
          return DisposeComponentService$Wonderjs.checkComponentShouldAliveWithBatchDispose(textureArr, isAlive, RecordArrayBufferViewSourceTextureMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  return ArrayService$WonderCommonlib.reduceOneParam((function (state, texture) {
                var arrayBufferViewSourceTextureRecord = RecordArrayBufferViewSourceTextureMainService$Wonderjs.getRecord(state);
                var arrayBufferViewSourceTextureRecord$1 = GroupArrayBufferViewSourceTextureService$Wonderjs.removeMaterial(materialData, texture, arrayBufferViewSourceTextureRecord);
                if (isRemoveTexture) {
                  var newrecord = Caml_array.caml_array_dup(state);
                  newrecord[/* arrayBufferViewSourceTextureRecord */19] = arrayBufferViewSourceTextureRecord$1;
                  return newrecord;
                } else {
                  var match = GroupArrayBufferViewSourceTextureService$Wonderjs.isGroupArrayBufferViewSourceTexture(texture, arrayBufferViewSourceTextureRecord$1);
                  if (match) {
                    var newrecord$1 = Caml_array.caml_array_dup(state);
                    newrecord$1[/* arrayBufferViewSourceTextureRecord */19] = arrayBufferViewSourceTextureRecord$1;
                    return newrecord$1;
                  } else {
                    var textureIndexInTypeArr = IndexAllSourceTextureService$Wonderjs.getArrayBufferViewSourceTextureIndexInTypeArray(texture, IndexSourceTextureMainService$Wonderjs.getArrayBufferViewSourceTextureIndexOffset(state));
                    var state$1 = _disposeData(texture, textureIndexInTypeArr, state);
                    var arrayBufferViewSourceTextureRecord$2 = RecordArrayBufferViewSourceTextureMainService$Wonderjs.getRecord(state$1);
                    var newrecord$2 = Caml_array.caml_array_dup(state$1);
                    newrecord$2[/* arrayBufferViewSourceTextureRecord */19] = /* record */[
                      /* index */arrayBufferViewSourceTextureRecord$2[/* index */0],
                      /* wrapSs */arrayBufferViewSourceTextureRecord$2[/* wrapSs */1],
                      /* wrapTs */arrayBufferViewSourceTextureRecord$2[/* wrapTs */2],
                      /* magFilters */arrayBufferViewSourceTextureRecord$2[/* magFilters */3],
                      /* minFilters */arrayBufferViewSourceTextureRecord$2[/* minFilters */4],
                      /* formats */arrayBufferViewSourceTextureRecord$2[/* formats */5],
                      /* types */arrayBufferViewSourceTextureRecord$2[/* types */6],
                      /* isNeedUpdates */arrayBufferViewSourceTextureRecord$2[/* isNeedUpdates */7],
                      /* flipYs */arrayBufferViewSourceTextureRecord$2[/* flipYs */8],
                      /* widths */arrayBufferViewSourceTextureRecord$2[/* widths */9],
                      /* heights */arrayBufferViewSourceTextureRecord$2[/* heights */10],
                      /* sourceMap */arrayBufferViewSourceTextureRecord$2[/* sourceMap */11],
                      /* glTextureMap */arrayBufferViewSourceTextureRecord$2[/* glTextureMap */12],
                      /* disposedIndexArray */DisposeTextureService$Wonderjs.addDisposeIndex(textureIndexInTypeArr, arrayBufferViewSourceTextureRecord$2[/* disposedIndexArray */13]),
                      /* needAddedSourceArray */arrayBufferViewSourceTextureRecord$2[/* needAddedSourceArray */14],
                      /* needInitedTextureIndexArray */arrayBufferViewSourceTextureRecord$2[/* needInitedTextureIndexArray */15],
                      /* needDisposedTextureIndexArray */arrayBufferViewSourceTextureRecord$2[/* needDisposedTextureIndexArray */16],
                      /* nameMap */arrayBufferViewSourceTextureRecord$2[/* nameMap */17],
                      /* materialsMap */arrayBufferViewSourceTextureRecord$2[/* materialsMap */18]
                    ];
                    return newrecord$2;
                  }
                }
              }), state, textureArr);
}

export {
  isAlive ,
  _disposeData ,
  handleDispose ,
  
}
/* Contract-WonderLog Not a pure module */
