let getMaterialData = (state: StateDataType.state) => MaterialSystem.getMaterialData(state);

let unsafeGetShaderIndex = (materialIndex: int, state: StateDataType.state) =>
  MaterialSystem.unsafeGetShaderIndex(materialIndex, state);

let hasShaderIndex = (materialIndex: int, state: StateDataType.state) =>
  MaterialShaderIndexCommon.hasShaderIndex(materialIndex, state);

let setShaderIndex = (materialIndex: int, shaderIndex, state: StateDataType.state) =>
  MaterialSystem.setShaderIndex(materialIndex, shaderIndex, state);

let isMaterial = (material) => {
  open Wonder_jest;
  open Expect;
  open! Expect.Operators;
  expect(material) >= 0
};

let dispose = (material, state: StateDataType.state) =>
  MaterialDisposeComponentCommon.handleDisposeComponent(material, state);

let prepareForInit = (state) =>
  state |> MaterialAdmin.pregetGLSLData([@bs] DeviceManagerSystem.getGl(state));

let initMaterial = (materialIndex, state) =>
  MaterialInitComponentCommon.initMaterial(
    [@bs] DeviceManagerSystem.getGl(state),
    materialIndex,
    state
  );

let isMaterialDisposed = (material, state) => {
  open MaterialType;
  let {disposedIndexArray} = MaterialSystem.getMaterialData(state);
  disposedIndexArray |> Js.Array.includes(material)
};

let getGroupCount = (material, state) => MaterialGroupCommon.getGroupCount(material, state);