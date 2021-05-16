'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Sinon = require("wonder-bs-sinon/lib/js/src/sinon.js");
var Sinon$1 = require("sinon");
var Wonder_jest = require("wonder-bs-jest/lib/js/src/wonder_jest.js");
var TestTool$Wonderjs = require("../../tool/TestTool.js");
var TypeArrayService$Wonderjs = require("../../../src/service/primitive/buffer/TypeArrayService.js");
var CreateStateMainService$Wonderjs = require("../../../src/service/state/main/state/CreateStateMainService.js");

Wonder_jest.describe("TypeArrayService", (function (param) {
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
        return Wonder_jest.describe("contract check", (function (param) {
                      Wonder_jest.describe("setUint32_1", (function (param) {
                              Wonder_jest.test("test not throw", (function (param) {
                                      TestTool$Wonderjs.openContractCheck(/* () */0);
                                      return Wonder_jest.Expect[/* toThrow */18](Wonder_jest.Expect[/* not__ */24](Wonder_jest.Expect[/* expect */0]((function (param) {
                                                            return TypeArrayService$Wonderjs.setUint32_1(0, 1, new Uint32Array(1));
                                                          }))));
                                    }));
                              return Wonder_jest.test("test throw", (function (param) {
                                            TestTool$Wonderjs.openContractCheck(/* () */0);
                                            return Wonder_jest.Expect[/* toThrowMessage */21]("expect not exceed bound", Wonder_jest.Expect[/* expect */0]((function (param) {
                                                              return TypeArrayService$Wonderjs.setUint32_1(0, 1, new Uint32Array(0));
                                                            })));
                                          }));
                            }));
                      Wonder_jest.describe("setFloat1", (function (param) {
                              return Wonder_jest.test("test throw", (function (param) {
                                            TestTool$Wonderjs.openContractCheck(/* () */0);
                                            return Wonder_jest.Expect[/* toThrowMessage */21]("expect not exceed bound", Wonder_jest.Expect[/* expect */0]((function (param) {
                                                              return TypeArrayService$Wonderjs.setFloat1(1, 1, new Float32Array(1));
                                                            })));
                                          }));
                            }));
                      return Wonder_jest.describe("setFloat3", (function (param) {
                                    Wonder_jest.test("test not throw", (function (param) {
                                            TestTool$Wonderjs.openContractCheck(/* () */0);
                                            return Wonder_jest.Expect[/* toThrow */18](Wonder_jest.Expect[/* not__ */24](Wonder_jest.Expect[/* expect */0]((function (param) {
                                                                  return TypeArrayService$Wonderjs.setFloat3(1, /* array */[
                                                                              1,
                                                                              2,
                                                                              3
                                                                            ], new Float32Array(4));
                                                                }))));
                                          }));
                                    return Wonder_jest.test("test throw", (function (param) {
                                                  TestTool$Wonderjs.openContractCheck(/* () */0);
                                                  return Wonder_jest.Expect[/* toThrowMessage */21]("expect not exceed bound", Wonder_jest.Expect[/* expect */0]((function (param) {
                                                                    return TypeArrayService$Wonderjs.setFloat3(1, /* array */[
                                                                                1,
                                                                                2,
                                                                                3
                                                                              ], new Float32Array(3));
                                                                  })));
                                                }));
                                  }));
                    }));
      }));

/*  Not a pure module */