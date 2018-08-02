open StateDataMainType;

let createState = () => {
  stateRecord: {
    unsafeGetStateFunc:
      (.) => StateDataMainService.unsafeGetState(StateDataMain.stateData),
    setStateFunc:
      (. state) =>
        StateDataMainService.setState(StateDataMain.stateData, state),
  },
  settingRecord: RecordSettingService.create(),
  jobRecord: RecordJobService.create(),
  noWorkerJobRecord: None,
  workerJobRecord: None,
  renderConfigRecord: None,
  gpuDetectRecord: RecordGPUDetectService.create(),
  viewRecord: RecordViewService.create(),
  sourceInstanceRecord: None,
  objectInstanceRecord: RecordObjectInstanceService.create(),
  deviceManagerRecord: RecordDeviceManagerService.create(),
  gameObjectRecord: RecordGameObjectService.create(),
  transformRecord: None,
  sceneRecord: None,
  basicCameraViewRecord: RecordBasicCameraViewService.create(),
  perspectiveCameraProjectionRecord:
    RecordPerspectiveCameraProjectionService.create(),
  arcballCameraControllerRecord: RecordArcballCameraControllerService.create(),
  basicMaterialRecord: None,
  lightMaterialRecord: None,
  sourceTextureRecord: None,
  basicSourceTextureRecord: None,
  arrayBufferViewSourceTextureRecord: None,
  directionLightRecord: RecordDirectionLightMainService.create(),
  pointLightRecord: RecordPointLightMainService.create(),
  boxGeometryRecord: RecordBoxGeometryMainService.create(),
  customGeometryRecord: None,
  meshRendererRecord: None,
  shaderRecord: RecordShaderService.create(),
  glslRecord: RecordGLSLService.create(),
  programRecord: RecordProgramService.create(),
  glslLocationRecord: RecordGLSLLocationService.create(),
  glslSenderRecord: RecordGLSLSenderAllService.create(),
  glslChunkRecord: ShaderChunkSystem.create(),
  renderRecord: None,
  timeControllerRecord: RecordTimeControllerService.create(),
  vboBufferRecord: RecordVboBufferService.create(),
  globalTempRecord: RecordGlobalTempService.create(),
  typeArrayPoolRecord: RecordTypeArrayPoolService.create(),
  workerInstanceRecord: RecordWorkerInstanceService.create(),
  workerDataRecord: RecordWorkerDataService.create(),
  workerDetectRecord: RecordWorkerDetectService.create(),
  browserDetectRecord: RecordBrowserDetectAllService.create(),
  eventRecord: RecordEventMainService.create(),
  imguiRecord: RecordIMGUIMainService.create(),
  apiRecord: RecordAPIMainService.create(),
};