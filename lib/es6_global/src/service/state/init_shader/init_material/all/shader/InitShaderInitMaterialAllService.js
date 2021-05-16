

import * as Caml_array from "../../../../../../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as AllProgramService$Wonderjs from "../../../../../record/all/program/AllProgramService.js";
import * as ShaderIndexAllShaderService$Wonderjs from "../../../../../record/all/shader/ShaderIndexAllShaderService.js";
import * as MaterialsMapAllShaderService$Wonderjs from "../../../../../record/all/shader/MaterialsMapAllShaderService.js";
import * as ShaderLibShaderIndexAllShaderService$Wonderjs from "../../../../../record/all/shader/ShaderLibShaderIndexAllShaderService.js";

function _join(array) {
  var output = "";
  for(var i = 0 ,i_finish = array.length - 1 | 0; i <= i_finish; ++i){
    output = output + Caml_array.caml_array_get(array, i)[/* name */0];
  }
  return output;
}

var _buildShaderIndexMapKey = _join;

function _createProgramAndInit(gl, shaderIndex, param, programRecord) {
  return AllProgramService$Wonderjs.initShader(param[0], param[1], gl, AllProgramService$Wonderjs.registerProgram(shaderIndex, programRecord, gl.createProgram()));
}

function _initNewShader(param, param$1, param$2, param$3) {
  var shaderLibDataArr = param$1[1];
  var gl = param$1[0];
  var shaderIndex = param[0];
  ShaderLibShaderIndexAllShaderService$Wonderjs.setShaderIndex(param[1], shaderIndex, param$3[0]);
  var match = param$2[0](shaderLibDataArr, param$2[1], /* tuple */[
        param$3[2],
        param$3[5]
      ]);
  var program = _createProgramAndInit(gl, shaderIndex, /* tuple */[
        match[0],
        match[1]
      ], param$3[1]);
  var recordTuple = param$2[2](/* tuple */[
        gl,
        shaderIndex,
        program
      ], shaderLibDataArr, /* tuple */[
        param$3[3],
        param$3[4]
      ]);
  param$2[3](gl, /* tuple */[
        program,
        shaderIndex,
        shaderLibDataArr
      ], recordTuple);
  return shaderIndex;
}

function _initShader(materialIndex, param, param$1, param$2) {
  var shaderRecord = param$2[0];
  var shaderLibDataArr = param[1];
  var key = _join(shaderLibDataArr);
  var match = ShaderLibShaderIndexAllShaderService$Wonderjs.getShaderIndex(key, shaderRecord);
  if (match !== undefined) {
    var shaderIndex = match;
    MaterialsMapAllShaderService$Wonderjs.addMaterialWithoutDuplicate(shaderIndex, materialIndex, shaderRecord);
    return shaderIndex;
  } else {
    var shaderIndex$1 = ShaderIndexAllShaderService$Wonderjs.genereateShaderIndex(shaderRecord);
    var shaderRecord$1 = MaterialsMapAllShaderService$Wonderjs.addMaterialWithoutDuplicate(shaderIndex$1, materialIndex, shaderRecord);
    return _initNewShader(/* tuple */[
                shaderIndex$1,
                key
              ], /* tuple */[
                param[0],
                shaderLibDataArr
              ], /* tuple */[
                param$1[0],
                param$1[1],
                param$1[2],
                param$1[3]
              ], /* tuple */[
                shaderRecord$1,
                param$2[1],
                param$2[2],
                param$2[3],
                param$2[4],
                param$2[5]
              ]);
  }
}

function initMaterialShader(materialIndex, param, param$1, param$2) {
  return _initShader(materialIndex, /* tuple */[
              param[0],
              param[1]
            ], /* tuple */[
              param$1[0],
              param$1[1],
              param$1[2],
              param$1[3]
            ], /* tuple */[
              param$2[0],
              param$2[1],
              param$2[2],
              param$2[3],
              param$2[4],
              param$2[5]
            ]);
}

function reInitMaterialShader(materialIndex, param, param$1, param$2) {
  return _initShader(materialIndex, /* tuple */[
              param[0],
              param[1]
            ], /* tuple */[
              param$1[0],
              param$1[1],
              param$1[2],
              param$1[3]
            ], /* tuple */[
              param$2[0],
              param$2[1],
              param$2[2],
              param$2[3],
              param$2[4],
              param$2[5]
            ]);
}

export {
  _join ,
  _buildShaderIndexMapKey ,
  _createProgramAndInit ,
  _initNewShader ,
  _initShader ,
  initMaterialShader ,
  reInitMaterialShader ,
  
}
/* AllProgramService-Wonderjs Not a pure module */
