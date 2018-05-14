// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as Caml_int32                                from "../../../../../../../../node_modules/bs-platform/lib/es6/caml_int32.js";
import * as SparseMapService$Wonderjs                 from "../../../../atom/SparseMapService.js";
import * as TypeArrayService$Wonderjs                 from "../../../../primitive/buffer/TypeArrayService.js";
import * as ArrayService$WonderCommonlib              from "../../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/ArrayService.js";
import * as CopyTypeArrayService$Wonderjs             from "../../../../primitive/copy/CopyTypeArrayService.js";
import * as BufferPointLightService$Wonderjs          from "../../../../record/main/light/point/BufferPointLightService.js";
import * as SparseMapService$WonderCommonlib          from "../../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/SparseMapService.js";
import * as CreateTypeArrayPointLightService$Wonderjs from "../../../../record/all/light/point/CreateTypeArrayPointLightService.js";

function getColor(index, typeArr) {
  return TypeArrayService$Wonderjs.getFloat3(BufferPointLightService$Wonderjs.getColorIndex(index), typeArr);
}

function setColor(index, color, typeArr) {
  return TypeArrayService$Wonderjs.setFloat3(BufferPointLightService$Wonderjs.getColorIndex(index), color, typeArr);
}

function getIntensity(index, typeArr) {
  return typeArr[index];
}

function setIntensity(index, intensity, typeArr) {
  typeArr[index] = intensity;
  return typeArr;
}

function getConstant(index, typeArr) {
  return typeArr[index];
}

function setConstant(index, constant, typeArr) {
  typeArr[index] = constant;
  return typeArr;
}

function getLinear(index, typeArr) {
  return typeArr[index];
}

function setLinear(index, linear, typeArr) {
  typeArr[index] = linear;
  return typeArr;
}

function getQuadratic(index, typeArr) {
  return typeArr[index];
}

function setQuadratic(index, quadratic, typeArr) {
  typeArr[index] = quadratic;
  return typeArr;
}

function getRange(index, typeArr) {
  return typeArr[index];
}

function setRange(index, range, typeArr) {
  typeArr[index] = range;
  return typeArr;
}

function getDefaultColor() {
  return /* float array */[
          1,
          1,
          1
        ];
}

function getDefaultIntensity() {
  return 1;
}

function getDefaultConstant() {
  return 1;
}

function getDefaultLinear() {
  return 0.07;
}

function getDefaultQuadratic() {
  return 0.017;
}

function getDefaultRange() {
  return 65;
}

function setDefaultTypeArrData(count, param) {
  var defaultColor = /* float array */[
    1,
    1,
    1
  ];
  return ArrayService$WonderCommonlib.reduceOneParam((function (param, index) {
                return /* tuple */[
                        setColor(index, defaultColor, param[0]),
                        setIntensity(index, 1, param[1]),
                        setConstant(index, 1, param[2]),
                        setLinear(index, 0.07, param[3]),
                        setQuadratic(index, 0.017, param[4]),
                        setRange(index, 65, param[5])
                      ];
              }), /* tuple */[
              param[0],
              param[1],
              param[2],
              param[3],
              param[4],
              param[5]
            ], ArrayService$WonderCommonlib.range(0, count - 1 | 0));
}

function _setDefaultTypeArrData(count, param) {
  return /* tuple */[
          param[0],
          setDefaultTypeArrData(count, /* tuple */[
                param[1],
                param[2],
                param[3],
                param[4],
                param[5],
                param[6]
              ])
        ];
}

function _initBufferData() {
  var count = BufferPointLightService$Wonderjs.getBufferMaxCount(/* () */0);
  var buffer = BufferPointLightService$Wonderjs.createBuffer(count);
  var match = CreateTypeArrayPointLightService$Wonderjs.createTypeArrays(buffer, count);
  return _setDefaultTypeArrData(count, /* tuple */[
              buffer,
              match[0],
              match[1],
              match[2],
              match[3],
              match[4],
              match[5]
            ]);
}

function create() {
  var match = _initBufferData(/* () */0);
  var match$1 = match[1];
  return /* record */[
          /* index */0,
          /* buffer */match[0],
          /* colors */match$1[0],
          /* intensities */match$1[1],
          /* constants */match$1[2],
          /* linears */match$1[3],
          /* quadratics */match$1[4],
          /* ranges */match$1[5],
          /* mappedIndexMap */SparseMapService$WonderCommonlib.createEmpty(/* () */0),
          /* gameObjectMap */SparseMapService$WonderCommonlib.createEmpty(/* () */0)
        ];
}

function deepCopyForRestore(state) {
  var pointLightRecord = state[/* pointLightRecord */19];
  var index = pointLightRecord[/* index */0];
  var newrecord = state.slice();
  newrecord[/* pointLightRecord */19] = /* record */[
    /* index */index,
    /* buffer */pointLightRecord[/* buffer */1],
    /* colors */CopyTypeArrayService$Wonderjs.copyFloat32ArrayWithEndIndex(Caml_int32.imul(index, BufferPointLightService$Wonderjs.getColorsSize(/* () */0)), pointLightRecord[/* colors */2]),
    /* intensities */CopyTypeArrayService$Wonderjs.copyFloat32ArrayWithEndIndex(Caml_int32.imul(index, BufferPointLightService$Wonderjs.getIntensitiesSize(/* () */0)), pointLightRecord[/* intensities */3]),
    /* constants */CopyTypeArrayService$Wonderjs.copyFloat32ArrayWithEndIndex(Caml_int32.imul(index, BufferPointLightService$Wonderjs.getConstantsSize(/* () */0)), pointLightRecord[/* constants */4]),
    /* linears */CopyTypeArrayService$Wonderjs.copyFloat32ArrayWithEndIndex(Caml_int32.imul(index, BufferPointLightService$Wonderjs.getLinearsSize(/* () */0)), pointLightRecord[/* linears */5]),
    /* quadratics */CopyTypeArrayService$Wonderjs.copyFloat32ArrayWithEndIndex(Caml_int32.imul(index, BufferPointLightService$Wonderjs.getQuadraticsSize(/* () */0)), pointLightRecord[/* quadratics */6]),
    /* ranges */CopyTypeArrayService$Wonderjs.copyFloat32ArrayWithEndIndex(Caml_int32.imul(index, BufferPointLightService$Wonderjs.getRangesSize(/* () */0)), pointLightRecord[/* ranges */7]),
    /* mappedIndexMap */SparseMapService$Wonderjs.copy(pointLightRecord[/* mappedIndexMap */8]),
    /* gameObjectMap */SparseMapService$Wonderjs.copy(pointLightRecord[/* gameObjectMap */9])
  ];
  return newrecord;
}

export {
  getColor               ,
  setColor               ,
  getIntensity           ,
  setIntensity           ,
  getConstant            ,
  setConstant            ,
  getLinear              ,
  setLinear              ,
  getQuadratic           ,
  setQuadratic           ,
  getRange               ,
  setRange               ,
  getDefaultColor        ,
  getDefaultIntensity    ,
  getDefaultConstant     ,
  getDefaultLinear       ,
  getDefaultQuadratic    ,
  getDefaultRange        ,
  setDefaultTypeArrData  ,
  _setDefaultTypeArrData ,
  _initBufferData        ,
  create                 ,
  deepCopyForRestore     ,
  
}
/* SparseMapService-Wonderjs Not a pure module */