'use strict';

var CameraTool$Wonderjs = require("../../service/camera/CameraTool.js");
var ArrayService$Wonderjs = require("../../../../src/service/atom/ArrayService.js");
var InstanceTool$Wonderjs = require("../../service/instance/InstanceTool.js");
var GameObjectAPI$Wonderjs = require("../../../../src/api/GameObjectAPI.js");
var SourceInstanceAPI$Wonderjs = require("../../../../src/api/SourceInstanceAPI.js");
var ArrayService$WonderCommonlib = require("wonder-commonlib/lib/js/src/ArrayService.js");
var FrontRenderLightJobTool$Wonderjs = require("../../job/no_worker/loop/FrontRenderLightJobTool.js");

function createSourceInstanceGameObject(sandbox, count, state) {
  var match = FrontRenderLightJobTool$Wonderjs.prepareGameObject(sandbox, state);
  var gameObject = match[1];
  var match$1 = SourceInstanceAPI$Wonderjs.createSourceInstance(match[0]);
  var sourceInstance = match$1[1];
  var state$1 = GameObjectAPI$Wonderjs.addGameObjectSourceInstanceComponent(gameObject, sourceInstance, match$1[0]);
  var match$2 = ArrayService$WonderCommonlib.reduceOneParam((function (param, param$1) {
          var match = SourceInstanceAPI$Wonderjs.createObjectInstanceGameObject(sourceInstance, param[0]);
          return /* tuple */[
                  match[0],
                  /* :: */[
                    match[1],
                    param[1]
                  ]
                ];
        }), /* tuple */[
        state$1,
        /* [] */0
      ], ArrayService$Wonderjs.range(0, count - 1 | 0));
  return /* tuple */[
          match$2[0],
          gameObject,
          match[2],
          match$2[1]
        ];
}

function prepare(sandbox, count, state) {
  var state$1 = InstanceTool$Wonderjs.setGPUDetectDataAllowBatchInstance(state);
  var match = createSourceInstanceGameObject(sandbox, count, state$1);
  var match$1 = CameraTool$Wonderjs.createCameraGameObject(match[0]);
  return /* tuple */[
          match$1[0],
          match[1],
          match[2],
          match[3]
        ];
}

exports.createSourceInstanceGameObject = createSourceInstanceGameObject;
exports.prepare = prepare;
/* CameraTool-Wonderjs Not a pure module */