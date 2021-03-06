'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Sinon = require("wonder-bs-sinon/lib/js/src/sinon.js");
var Sinon$1 = require("sinon");
var Wonder_jest = require("wonder-bs-jest/lib/js/src/wonder_jest.js");
var TestTool$Wonderjs = require("../../../../tool/TestTool.js");
var CameraTool$Wonderjs = require("../../../../tool/service/camera/CameraTool.js");
var GameObjectAPI$Wonderjs = require("../../../../../src/api/GameObjectAPI.js");
var MainStateTool$Wonderjs = require("../../../../tool/service/state/MainStateTool.js");
var GameObjectTool$Wonderjs = require("../../../../tool/service/gameObject/GameObjectTool.js");
var BasicCameraViewAPI$Wonderjs = require("../../../../../src/api/camera/BasicCameraViewAPI.js");
var SparseMapService$WonderCommonlib = require("wonder-commonlib/lib/js/src/SparseMapService.js");

describe("BasicCameraView", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = /* record */[/* contents */MainStateTool$Wonderjs.createState(/* () */0)];
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = TestTool$Wonderjs.init(sandbox, undefined, undefined, /* () */0);
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("createBasicCameraView", (function () {
                Wonder_jest.test("create a new camera which is just index(int)", (function () {
                        var match = BasicCameraViewAPI$Wonderjs.createBasicCameraView(state[0]);
                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](match[1]), 0);
                      }));
                describe("change state", (function () {
                        return Wonder_jest.test("state->index + 1", (function () {
                                      var match = BasicCameraViewAPI$Wonderjs.createBasicCameraView(state[0]);
                                      var record = match[0][/* basicCameraViewRecord */13];
                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](record[/* index */0]), 1);
                                    }));
                      }));
                return /* () */0;
              }));
        describe("unsafeGetBasicCameraViewGameObject", (function () {
                return Wonder_jest.test("get cameraView's gameObject", (function () {
                              var match = BasicCameraViewAPI$Wonderjs.createBasicCameraView(state[0]);
                              var cameraView = match[1];
                              var match$1 = GameObjectAPI$Wonderjs.createGameObject(match[0]);
                              var gameObject = match$1[1];
                              var state$1 = GameObjectAPI$Wonderjs.addGameObjectBasicCameraViewComponent(gameObject, cameraView, match$1[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicCameraViewAPI$Wonderjs.unsafeGetBasicCameraViewGameObject(cameraView, state$1)), gameObject);
                            }));
              }));
        describe("isActiveBasicCameraView", (function () {
                return Wonder_jest.test("test", (function () {
                              var match = BasicCameraViewAPI$Wonderjs.createBasicCameraView(state[0]);
                              var cameraView = match[1];
                              var state$1 = BasicCameraViewAPI$Wonderjs.setActiveBasicCameraView(cameraView, false, match[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicCameraViewAPI$Wonderjs.isActiveBasicCameraView(cameraView, state$1)), false);
                            }));
              }));
        describe("activeBasicCameraView", (function () {
                describe("ensure only has one active basicCameraView", (function () {
                        return Wonder_jest.test("active this one, unactive other ones", (function () {
                                      var match = BasicCameraViewAPI$Wonderjs.createBasicCameraView(state[0]);
                                      var cameraView1 = match[1];
                                      var match$1 = BasicCameraViewAPI$Wonderjs.createBasicCameraView(match[0]);
                                      var cameraView2 = match$1[1];
                                      var match$2 = BasicCameraViewAPI$Wonderjs.createBasicCameraView(match$1[0]);
                                      var cameraView3 = match$2[1];
                                      var state$1 = BasicCameraViewAPI$Wonderjs.activeBasicCameraView(cameraView3, BasicCameraViewAPI$Wonderjs.setActiveBasicCameraView(cameraView3, false, BasicCameraViewAPI$Wonderjs.setActiveBasicCameraView(cameraView2, true, BasicCameraViewAPI$Wonderjs.setActiveBasicCameraView(cameraView1, true, match$2[0]))));
                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                      BasicCameraViewAPI$Wonderjs.isActiveBasicCameraView(cameraView1, state$1),
                                                      BasicCameraViewAPI$Wonderjs.isActiveBasicCameraView(cameraView2, state$1),
                                                      BasicCameraViewAPI$Wonderjs.isActiveBasicCameraView(cameraView3, state$1)
                                                    ]), /* tuple */[
                                                  false,
                                                  false,
                                                  true
                                                ]);
                                    }));
                      }));
                return /* () */0;
              }));
        describe("unactiveBasicCameraView", (function () {
                return Wonder_jest.test("unactive this one(not affect other ones)", (function () {
                              var match = BasicCameraViewAPI$Wonderjs.createBasicCameraView(state[0]);
                              var cameraView1 = match[1];
                              var match$1 = BasicCameraViewAPI$Wonderjs.createBasicCameraView(match[0]);
                              var cameraView2 = match$1[1];
                              var state$1 = BasicCameraViewAPI$Wonderjs.unactiveBasicCameraView(cameraView2, BasicCameraViewAPI$Wonderjs.setActiveBasicCameraView(cameraView2, true, BasicCameraViewAPI$Wonderjs.setActiveBasicCameraView(cameraView1, true, match$1[0])));
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                              BasicCameraViewAPI$Wonderjs.isActiveBasicCameraView(cameraView1, state$1),
                                              BasicCameraViewAPI$Wonderjs.isActiveBasicCameraView(cameraView2, state$1)
                                            ]), /* tuple */[
                                          true,
                                          false
                                        ]);
                            }));
              }));
        describe("getActiveBasicCameraView", (function () {
                Wonder_jest.test("test has none", (function () {
                        var match = BasicCameraViewAPI$Wonderjs.createBasicCameraView(state[0]);
                        var match$1 = BasicCameraViewAPI$Wonderjs.createBasicCameraView(match[0]);
                        var state$1 = BasicCameraViewAPI$Wonderjs.setActiveBasicCameraView(match$1[1], false, BasicCameraViewAPI$Wonderjs.setActiveBasicCameraView(match[1], false, match$1[0]));
                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicCameraViewAPI$Wonderjs.getActiveBasicCameraView(state$1)), undefined);
                      }));
                Wonder_jest.test("test has one", (function () {
                        var match = BasicCameraViewAPI$Wonderjs.createBasicCameraView(state[0]);
                        var cameraView1 = match[1];
                        var match$1 = BasicCameraViewAPI$Wonderjs.createBasicCameraView(match[0]);
                        var state$1 = BasicCameraViewAPI$Wonderjs.setActiveBasicCameraView(match$1[1], false, BasicCameraViewAPI$Wonderjs.setActiveBasicCameraView(cameraView1, true, match$1[0]));
                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicCameraViewAPI$Wonderjs.getActiveBasicCameraView(state$1)), cameraView1);
                      }));
                return Wonder_jest.test("if has >= 2, contract error", (function () {
                              var match = BasicCameraViewAPI$Wonderjs.createBasicCameraView(state[0]);
                              var match$1 = BasicCameraViewAPI$Wonderjs.createBasicCameraView(match[0]);
                              var state$1 = BasicCameraViewAPI$Wonderjs.setActiveBasicCameraView(match$1[1], true, BasicCameraViewAPI$Wonderjs.setActiveBasicCameraView(match[1], true, match$1[0]));
                              return Wonder_jest.Expect[/* toThrowMessage */20]("expect only has one active cameraView at most", Wonder_jest.Expect[/* expect */0]((function () {
                                                return BasicCameraViewAPI$Wonderjs.getActiveBasicCameraView(state$1);
                                              })));
                            }));
              }));
        describe("dispose component", (function () {
                var _prepareTwo = function (state) {
                  var match = CameraTool$Wonderjs.createCameraGameObject(state);
                  var match$1 = CameraTool$Wonderjs.createCameraGameObject(match[0]);
                  return /* tuple */[
                          match$1[0],
                          match[1],
                          match[3][0],
                          match$1[1],
                          match$1[3][0]
                        ];
                };
                describe("dispose data", (function () {
                        return Wonder_jest.test("remove from isActiveMap, gameObjectMap", (function () {
                                      var match = CameraTool$Wonderjs.createCameraGameObject(state[0]);
                                      var basicCameraView1 = match[3][0];
                                      var state$1 = GameObjectTool$Wonderjs.disposeGameObjectBasicCameraViewComponent(match[1], basicCameraView1, match[0]);
                                      var match$1 = state$1[/* basicCameraViewRecord */13];
                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                      SparseMapService$WonderCommonlib.has(basicCameraView1, match$1[/* isActiveMap */1]),
                                                      SparseMapService$WonderCommonlib.has(basicCameraView1, match$1[/* gameObjectMap */2])
                                                    ]), /* tuple */[
                                                  false,
                                                  false
                                                ]);
                                    }));
                      }));
                describe("test add new one after dispose old one", (function () {
                        Wonder_jest.test("use disposed index as new index firstly", (function () {
                                var match = _prepareTwo(state[0]);
                                var basicCameraView1 = match[2];
                                var state$1 = GameObjectTool$Wonderjs.disposeGameObjectBasicCameraViewComponent(match[1], basicCameraView1, match[0]);
                                var match$1 = CameraTool$Wonderjs.createCameraGameObject(state$1);
                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](match$1[3][0]), basicCameraView1);
                              }));
                        return Wonder_jest.test("if has no disposed index, get index from meshRendererRecord.index", (function () {
                                      var match = _prepareTwo(state[0]);
                                      var basicCameraView1 = match[2];
                                      var state$1 = GameObjectTool$Wonderjs.disposeGameObjectBasicCameraViewComponent(match[1], basicCameraView1, match[0]);
                                      var match$1 = CameraTool$Wonderjs.createCameraGameObject(state$1);
                                      var match$2 = CameraTool$Wonderjs.createCameraGameObject(match$1[0]);
                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                      match$1[3][0],
                                                      match$2[3][0]
                                                    ]), /* tuple */[
                                                  basicCameraView1,
                                                  match[4] + 1 | 0
                                                ]);
                                    }));
                      }));
                describe("contract check", (function () {
                        return Wonder_jest.test("expect dispose the alive component, but actual not", (function () {
                                      var match = _prepareTwo(state[0]);
                                      var basicCameraView1 = match[2];
                                      var gameObject1 = match[1];
                                      var state$1 = GameObjectTool$Wonderjs.disposeGameObjectBasicCameraViewComponent(gameObject1, basicCameraView1, match[0]);
                                      return Wonder_jest.Expect[/* toThrowMessage */20]("expect dispose the alive component, but actual not", Wonder_jest.Expect[/* expect */0]((function () {
                                                        GameObjectTool$Wonderjs.disposeGameObjectBasicCameraViewComponent(gameObject1, basicCameraView1, state$1);
                                                        return /* () */0;
                                                      })));
                                    }));
                      }));
                return /* () */0;
              }));
        return /* () */0;
      }));

/*  Not a pure module */
