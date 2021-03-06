'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Sinon = require("wonder-bs-sinon/lib/js/src/sinon.js");
var Sinon$1 = require("sinon");
var Wonder_jest = require("wonder-bs-jest/lib/js/src/wonder_jest.js");
var TestTool$Wonderjs = require("../../../../tool/TestTool.js");
var EventTool$Wonderjs = require("../../../../unit/job/no_worker/tool/EventTool.js");
var FakeGlTool$Wonderjs = require("../../../../tool/gl/FakeGlTool.js");
var MainStateTool$Wonderjs = require("../../../../tool/service/state/MainStateTool.js");
var MouseEventTool$Wonderjs = require("../../../../unit/job/no_worker/tool/MouseEventTool.js");
var NoWorkerJobTool$Wonderjs = require("../../../../tool/service/job/no_worker/NoWorkerJobTool.js");
var NoWorkerJobConfigTool$Wonderjs = require("../../../../tool/service/noWorkerJob/NoWorkerJobConfigTool.js");
var CreateStateMainService$Wonderjs = require("../../../../../src/service/state/main/state/CreateStateMainService.js");
var ArcballCameraControllerAPI$Wonderjs = require("../../../../../src/api/camera_controller/ArcballCameraControllerAPI.js");
var ArcballCameraControllerTool$Wonderjs = require("../../../../tool/service/camera_controller/ArcballCameraControllerTool.js");

describe("test redo,undo arcballCameraController", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = /* record */[/* contents */CreateStateMainService$Wonderjs.createState(/* () */0)];
        var _prepareState = function () {
          var state = MouseEventTool$Wonderjs.prepareWithState(sandbox, TestTool$Wonderjs.initWithJobConfigWithoutBuildFakeDom(sandbox, undefined, undefined, undefined, undefined, undefined, NoWorkerJobConfigTool$Wonderjs.buildNoWorkerJobConfig(undefined, "\n        [\n    {\n      \"name\": \"default\",\n      \"jobs\": [\n        {\n          \"name\": \"init_event\"\n        },\n        {\n          \"name\": \"init_camera\"\n        }\n      ]\n    }\n  ]\n        ", undefined, "\n[\n\n    {\n          \"name\": \"init_event\"\n    },\n        {\n          \"name\": \"init_camera\"\n        }\n]\n        ", undefined, /* () */0), undefined, /* () */0), undefined, undefined, undefined, undefined, /* () */0);
          MouseEventTool$Wonderjs.setPointerLocked();
          return state;
        };
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = TestTool$Wonderjs.init(sandbox, undefined, undefined, /* () */0);
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("test redo/undo binded eventHandleFunc map", (function () {
                return Wonder_jest.test("test restore pointDragEventHandleFuncMap", (function () {
                              Sinon.createMethodStubWithJsObjSandbox(sandbox, console, "warn");
                              var state = _prepareState(/* () */0);
                              var match = ArcballCameraControllerTool$Wonderjs.createGameObject(state);
                              var state$1 = NoWorkerJobTool$Wonderjs.execInitJobs(match[0]);
                              var state$2 = ArcballCameraControllerAPI$Wonderjs.bindArcballCameraControllerEvent(match[3][0], state$1);
                              var state$3 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0), state$2);
                              var copiedState = MainStateTool$Wonderjs.deepCopyForRestore(state$3);
                              var match$1 = ArcballCameraControllerTool$Wonderjs.createGameObject(state$3);
                              var state$4 = ArcballCameraControllerAPI$Wonderjs.bindArcballCameraControllerEvent(match$1[3][0], match$1[0]);
                              var restoredState = MainStateTool$Wonderjs.restore(state$4, copiedState);
                              var preventDefaultFunc = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                              var restoredState$1 = MainStateTool$Wonderjs.setState(restoredState);
                              EventTool$Wonderjs.triggerDomEvent("mousewheel", EventTool$Wonderjs.getPointEventBindedDom(state$4), MouseEventTool$Wonderjs.buildMouseEvent(undefined, undefined, undefined, undefined, undefined, undefined, undefined, preventDefaultFunc, undefined, /* () */0));
                              EventTool$Wonderjs.restore(restoredState$1);
                              return Sinon.toCalledOnce(Wonder_jest.Expect[/* expect */0](preventDefaultFunc));
                            }));
              }));
        describe("deep copy perspectiveCameraProjection record", (function () {
                return Wonder_jest.test("shadow copy distanceMap", (function () {
                              var state = _prepareState(/* () */0);
                              var state$1 = NoWorkerJobTool$Wonderjs.execInitJobs(state);
                              var match = ArcballCameraControllerTool$Wonderjs.createGameObject(state$1);
                              var cameraController = match[3][0];
                              var state$2 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0), match[0]);
                              var copiedState = MainStateTool$Wonderjs.deepCopyForRestore(state$2);
                              var state$3 = ArcballCameraControllerAPI$Wonderjs.setArcballCameraControllerDistance(cameraController, 5, state$2);
                              var restoredState = MainStateTool$Wonderjs.restore(state$3, copiedState);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* <> */6], Wonder_jest.Expect[/* expect */0](ArcballCameraControllerAPI$Wonderjs.unsafeGetArcballCameraControllerDistance(cameraController, restoredState)), 5);
                            }));
              }));
        return /* () */0;
      }));

/*  Not a pure module */
