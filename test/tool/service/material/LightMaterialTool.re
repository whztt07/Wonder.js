open StateDataMainType;

open LightMaterialType;

let getRecord = state => RecordLightMaterialMainService.getRecord(state);

let createGameObject = state => {
  open LightMaterialAPI;
  open GameObjectAPI;
  let (state, material) = createLightMaterial(state);
  let (state, gameObject) = state |> createGameObject;
  let state =
    state |> addGameObjectLightMaterialComponent(gameObject, material);
  (state, gameObject, material);
};

let createGameObjectWithShareMaterial = (material, state) => {
  open LightMaterialAPI;
  open GameObjectAPI;
  let (state, gameObject) = state |> createGameObject;
  let state =
    state |> addGameObjectLightMaterialComponent(gameObject, material);
  (state, gameObject, material);
};

let createAndSetMapsWithMap = (material, diffuseMap, specularMap, state) => {
  let state =
    state |> LightMaterialAPI.setLightMaterialDiffuseMap(material, diffuseMap);
  let state =
    state
    |> LightMaterialAPI.setLightMaterialSpecularMap(material, specularMap);
  (state, (diffuseMap, specularMap));
};

let createAndSetMaps = (material, state) => {
  let (state, texture1) =
    BasicSourceTextureAPI.createBasicSourceTexture(state);
  let (state, texture2) =
    BasicSourceTextureAPI.createBasicSourceTexture(state);
  createAndSetMapsWithMap(material, texture1, texture2, state);
};

let createMaterialWithMap = state => {
  let (state, material) = LightMaterialAPI.createLightMaterial(state);

  let (state, (diffuseMap, specularMap)) =
    createAndSetMaps(material, state);

  (state, material, (diffuseMap, specularMap));

  let source1 = BasicSourceTextureTool.buildSource(10, 20);
  let source2 = BasicSourceTextureTool.buildSource(10, 20);

  let state =
    state
    |> BasicSourceTextureAPI.setBasicSourceTextureSource(diffuseMap, source1);
  let state =
    state
    |> BasicSourceTextureAPI.setBasicSourceTextureSource(specularMap, source1);

  (state, material, (diffuseMap, specularMap, source1, source2));
};

let createGameObjectWithMap = state => {
  let (state, gameObject, material) = createGameObject(state);
  let (state, (texture1, texture2)) = createAndSetMaps(material, state);
  (state, gameObject, (material, (texture1, texture2)));
};

let createGameObjectWithMaterial = (material, state) => {
  open GameObjectAPI;
  let (state, gameObject) = state |> createGameObject;
  let state =
    state |> addGameObjectLightMaterialComponent(gameObject, material);
  (state, gameObject, material);
};

let getDefaultShaderIndex = state =>
  DefaultTypeArrayValueService.getDefaultShaderIndex();

let getDefaultDiffuseColor = state => getRecord(state).defaultDiffuseColor;

let getDefaultSpecularColor = state => getRecord(state).defaultSpecularColor;

let getDefaultShininess = state => getRecord(state).defaultShininess;

let initMaterials = (gl, {gameObjectRecord} as state) => {
  let {index, disposedIndexArray} =
    RecordLightMaterialMainService.getRecord(state);
  InitInitLightMaterialService.init(
    gl,
    (
      JudgeInstanceMainService.buildMap(
        index,
        RecordLightMaterialMainService.getRecord(state).gameObjectsMap,
        gameObjectRecord,
      ),
      JudgeInstanceMainService.isSupportInstance(state),
    ),
    CreateInitLightMaterialStateMainService.createInitMaterialState(
      (index, disposedIndexArray),
      state,
    ),
  )
  |> ignore;
  state;
};

let getShaderIndex = (materialIndex: int, state) =>
  ShaderIndicesService.getShaderIndex(
    materialIndex,
    RecordLightMaterialMainService.getRecord(state).shaderIndices,
  );

/* let hasShaderIndex = (materialIndex: int, state: StateDataMainType.state) =>
   ShaderIndexLightMaterialMainService.hasShaderIndex(materialIndex, state); */
let setShaderIndex =
    (materialIndex: int, shaderIndex, state: StateDataMainType.state) =>
  ShaderIndexLightMaterialMainService.setShaderIndex(.
    materialIndex,
    shaderIndex,
    state,
  );

let dispose = (material, state: StateDataMainType.state) =>
  GameObjectTool.disposeGameObjectLightMaterialComponent(-1, material, state);

let initMaterial = (materialIndex, state) =>
  InitLightMaterialMainService.handleInitComponent(materialIndex, state);

let isMaterialDisposed = (material, state) => {
  open LightMaterialType;
  let {disposedIndexArray} = getRecord(state);
  disposedIndexArray |> Js.Array.includes(material);
};

let getDiffuseMapUnit = (material, state) =>
  OperateTypeArrayLightMaterialService.getDiffuseMapUnit(.
    material,
    getRecord(state).diffuseMapUnits,
  );

let setDiffuseMapUnit = (material, unit, state) => {
  OperateTypeArrayLightMaterialService.setDiffuseMapUnit(.
    material,
    unit,
    getRecord(state).diffuseMapUnits,
  )
  |> ignore;
  state;
};

let getSpecularMapUnit = (material, state) =>
  OperateTypeArrayLightMaterialService.getSpecularMapUnit(.
    material,
    getRecord(state).specularMapUnits,
  );

let setSpecularMapUnit = (material, unit, state) => {
  OperateTypeArrayLightMaterialService.setSpecularMapUnit(.
    material,
    unit,
    getRecord(state).specularMapUnits,
  )
  |> ignore;
  state;
};

let getTextureIndicesIndex = (material, state) =>
  BufferLightMaterialService.getTextureIndicesIndex(
    material,
    BufferSettingService.getTextureCountPerMaterial(state.settingRecord),
  );

let getDefaultTextureIndex = () =>
  BufferMaterialService.getDefaultTextureIndex();

let hasGameObject = (material, state) =>
  switch (
    GameObjectLightMaterialService.getGameObjects(material, getRecord(state))
  ) {
  | Some(arr) when arr |> Js.Array.length > 0 => true
  | _ => false
  };

let isNeedInitMaterial = (material, state) =>
  InitInitLightMaterialService.isNeedInitMaterial(
    material,
    getRecord(state).shaderIndices,
  );

let getEmptyMapUnitArray = (material, state) =>
  EmptyMapUnitArrayMapService._unsafeGetEmptyMapUnitArray(
    material,
    getRecord(state).emptyMapUnitArrayMap,
  );