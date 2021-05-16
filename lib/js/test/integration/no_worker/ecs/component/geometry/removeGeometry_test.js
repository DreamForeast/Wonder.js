'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Sinon = require("wonder-bs-sinon/lib/js/src/sinon.js");
var Sinon$1 = require("sinon");
var Wonder_jest = require("wonder-bs-jest/lib/js/src/wonder_jest.js");
var TestTool$Wonderjs = require("../../../../../tool/TestTool.js");
var GeometryAPI$Wonderjs = require("../../../../../../src/api/geometry/GeometryAPI.js");
var GeometryTool$Wonderjs = require("../../../../../tool/service/geometry/GeometryTool.js");
var GameObjectAPI$Wonderjs = require("../../../../../../src/api/GameObjectAPI.js");
var CreateStateMainService$Wonderjs = require("../../../../../../src/service/state/main/state/CreateStateMainService.js");

Wonder_jest.describe("remove geometry", (function (param) {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = /* record */[/* contents */CreateStateMainService$Wonderjs.createState(/* () */0)];
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = TestTool$Wonderjs.init(sandbox, undefined, undefined, /* () */0);
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        return Wonder_jest.describe("removeGameObjectGeometryComponent", (function (param) {
                      Wonder_jest.test("remove from gameObject", (function (param) {
                              var match = GeometryTool$Wonderjs.createGameObject(state[0]);
                              var gameObject = match[1];
                              var state$1 = GameObjectAPI$Wonderjs.removeGameObjectGeometryComponent(gameObject, match[2], match[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */25][/* = */5], Wonder_jest.Expect[/* expect */0](GameObjectAPI$Wonderjs.hasGameObjectGeometryComponent(gameObject, state$1)), false);
                            }));
                      Wonder_jest.test("remove from gameObjectsMap", (function (param) {
                              var match = GeometryTool$Wonderjs.createGameObject(state[0]);
                              var geometry = match[2];
                              var state$1 = GameObjectAPI$Wonderjs.removeGameObjectGeometryComponent(match[1], geometry, match[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */25][/* = */5], Wonder_jest.Expect[/* expect */0](GeometryAPI$Wonderjs.unsafeGetGeometryGameObjects(geometry, state$1)), /* array */[]);
                            }));
                      Wonder_jest.describe("test remove shared geometry from gameObject", (function (param) {
                              return Wonder_jest.test("remove gameObject", (function (param) {
                                            var match = GeometryAPI$Wonderjs.createGeometry(state[0]);
                                            var geometry1 = match[1];
                                            var match$1 = GameObjectAPI$Wonderjs.createGameObject(match[0]);
                                            var gameObject1 = match$1[1];
                                            var state$1 = GameObjectAPI$Wonderjs.addGameObjectGeometryComponent(gameObject1, geometry1, match$1[0]);
                                            var match$2 = GameObjectAPI$Wonderjs.createGameObject(state$1);
                                            var gameObject2 = match$2[1];
                                            var state$2 = GameObjectAPI$Wonderjs.addGameObjectGeometryComponent(gameObject2, geometry1, match$2[0]);
                                            var match$3 = GameObjectAPI$Wonderjs.createGameObject(state$2);
                                            var gameObject3 = match$3[1];
                                            var state$3 = GameObjectAPI$Wonderjs.addGameObjectGeometryComponent(gameObject3, geometry1, match$3[0]);
                                            var state$4 = GameObjectAPI$Wonderjs.removeGameObjectGeometryComponent(gameObject1, geometry1, state$3);
                                            return Curry._2(Wonder_jest.Expect[/* Operators */25][/* = */5], Wonder_jest.Expect[/* expect */0](GeometryAPI$Wonderjs.unsafeGetGeometryGameObjects(geometry1, state$4)), /* array */[
                                                        gameObject3,
                                                        gameObject2
                                                      ]);
                                          }));
                            }));
                      return Wonder_jest.describe("not dispose data", (function (param) {
                                    Wonder_jest.test("not change disposeCount", (function (param) {
                                            var match = GeometryTool$Wonderjs.createGameObject(state[0]);
                                            var state$1 = GameObjectAPI$Wonderjs.removeGameObjectGeometryComponent(match[1], match[2], match[0]);
                                            return Curry._2(Wonder_jest.Expect[/* Operators */25][/* = */5], Wonder_jest.Expect[/* expect */0](GeometryTool$Wonderjs.getRecord(state$1)[/* disposeCount */16]), 0);
                                          }));
                                    return Wonder_jest.test("not add to disposedIndexArray", (function (param) {
                                                  var match = GeometryTool$Wonderjs.createGameObject(state[0]);
                                                  var state$1 = GameObjectAPI$Wonderjs.removeGameObjectGeometryComponent(match[1], match[2], match[0]);
                                                  return Curry._2(Wonder_jest.Expect[/* Operators */25][/* = */5], Wonder_jest.Expect[/* expect */0](GeometryTool$Wonderjs.getRecord(state$1)[/* disposedIndexArray */19]), /* array */[]);
                                                }));
                                  }));
                    }));
      }));

/*  Not a pure module */