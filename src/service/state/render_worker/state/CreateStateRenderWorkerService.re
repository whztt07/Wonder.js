open StateDataRenderWorkerType;

let createState = () => {
  sceneRecord: RecordRenderWorkerSceneService.create(),
  settingRecord: RecordRenderWorkerSettingService.create(),
  renderConfigRecord: None,
  basicMaterialRecord: None,
  lightMaterialRecord: None,
  meshRendererRecord: None,
  basicSourceTextureRecord: None,
  arrayBufferViewSourceTextureRecord: None,
  directionLightRecord: None,
  pointLightRecord: None,
  transformRecord: None,
  boxGeometryRecord: RecordBoxGeometryRenderWorkerService.create(),
  customGeometryRecord: None,
  sourceInstanceRecord: RecordRenderWorkerSourceInstanceService.create(),
  gpuDetectRecord: {
    extensionInstancedArrays: None,
    precision: None,
    maxTextureUnit: None,
  },
  shaderRecord: RecordShaderService.create(),
  glslRecord: RecordGLSLService.create(),
  programRecord: RecordProgramService.create(),
  glslLocationRecord: RecordGLSLLocationService.create(),
  glslSenderRecord: RecordGLSLSenderAllService.create(),
  glslChunkRecord: ShaderChunkSystem.create(),
  deviceManagerRecord: RecordDeviceManagerService.create(),
  renderRecord: RecordRenderWorkerRenderService.create(),
  typeArrayPoolRecord: RecordTypeArrayPoolService.create(),
  globalTempRecord: RecordGlobalTempService.create(),
  vboBufferRecord: RecordVboBufferService.create(),
  workerDetectRecord: None,
  browserDetectRecord: None,
  apiRecord: RecordAPIRenderWorkerService.create(),
  imguiRecord: WonderImgui.ManageIMGUIAPI.createRecord(),
  customRecord: RecordRenderWorkerCustomService.create(),
};