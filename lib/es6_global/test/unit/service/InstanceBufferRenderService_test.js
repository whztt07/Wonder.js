

import * as Curry from "../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Sinon from "../../../../../node_modules/wonder-bs-sinon/lib/es6_global/src/sinon.js";
import * as Sinon$1 from "sinon";
import * as Caml_array from "../../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as Wonder_jest from "../../../../../node_modules/wonder-bs-jest/lib/es6_global/src/wonder_jest.js";
import * as TestTool$Wonderjs from "../../tool/TestTool.js";
import * as MainStateTool$Wonderjs from "../../tool/service/state/MainStateTool.js";
import * as RenderStateTool$Wonderjs from "../../tool/state/RenderStateTool.js";
import * as TypeArrayPoolTool$Wonderjs from "../../tool/structure/TypeArrayPoolTool.js";
import * as TypeArrayPoolService$Wonderjs from "../../../src/service/record/main/typeArrayPool/TypeArrayPoolService.js";
import * as SparseMapService$WonderCommonlib from "../../../../../node_modules/wonder-commonlib/lib/es6_global/src/SparseMapService.js";
import * as InstanceBufferRenderService$Wonderjs from "../../../src/service/state/render/vboBuffer/InstanceBufferRenderService.js";

describe("InstanceBufferRenderService", (function () {
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
        describe("getOrCreateMatrixFloat32Array", (function () {
                return Wonder_jest.test("test get typeArr from pool", (function () {
                              var capacityMap = SparseMapService$WonderCommonlib.createEmpty(/* () */0);
                              var matrixFloat32ArrayMap = SparseMapService$WonderCommonlib.createEmpty(/* () */0);
                              var typeArr1 = new Float32Array(/* array */[
                                    0,
                                    0,
                                    1
                                  ]);
                              TypeArrayPoolTool$Wonderjs.addFloat32TypeArrayToPool(typeArr1, 1000, TypeArrayPoolService$Wonderjs.getFloat32ArrayPoolMap(state[0][/* typeArrayPoolRecord */35]));
                              var typeArr2 = InstanceBufferRenderService$Wonderjs.getOrCreateMatrixFloat32Array(0, 12, /* tuple */[
                                    capacityMap,
                                    matrixFloat32ArrayMap
                                  ], RenderStateTool$Wonderjs.createState(state[0]));
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                              typeArr2,
                                              Caml_array.caml_array_get(TypeArrayPoolTool$Wonderjs.getFloat32ArrayPoolMap(state[0][/* typeArrayPoolRecord */35]), typeArr1.length).length
                                            ]), /* tuple */[
                                          typeArr1,
                                          0
                                        ]);
                            }));
              }));
        return /* () */0;
      }));

export {
  
}
/*  Not a pure module */
