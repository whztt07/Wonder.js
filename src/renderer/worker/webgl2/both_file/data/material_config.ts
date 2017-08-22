export const webgl2_material_config = {
    "shaders":{
        "materialShaders":{
            "BasicRender":[
                { "type": "group", "value": "engineMaterialTop" },

                "BasicMaterialColorShaderLib",
                "BasicShaderLib",

                {
                    "type": "branch",
                    "branch": (materialIndex, {
                        getMapCount
                    }, {
                                   MapManagerDataFromSystem
                               }) => {
                        if (getMapCount(materialIndex, MapManagerDataFromSystem) === 1) {
                            return "BasicMapShaderLib";
                        }
                    }
                },


                "BasicEndShaderLib",

                { "type": "group", "value": "engineMaterialEnd" }
            ],
            "FrontRenderLight": [
                { "type": "group", "value": "engineMaterialTop" },

                "NormalMatrixNoInstanceShaderLib",
                "NormalCommonShaderLib",
                "LightCommonShaderLib",
                "LightSetWorldPositionShaderLib",

                {
                    "type": "branch",
                    "branch": (materialIndex, {
                        hasDiffuseMap,
                        hasSpecularMap
                    }, {
                                   LightMaterialDataFromSystem
                               }) => {
                        if (hasDiffuseMap(LightMaterialDataFromSystem)
                            || hasSpecularMap(LightMaterialDataFromSystem)) {
                            return "CommonLightMapShaderLib";
                        }
                    }
                },
                {
                    "type": "branch",
                    "branch": (materialIndex, {
                        hasDiffuseMap
                    }, {
                                   LightMaterialDataFromSystem
                               }) => {
                        if (hasDiffuseMap(LightMaterialDataFromSystem)) {
                            return "DiffuseMapShaderLib";
                        }

                        return "NoDiffuseMapShaderLib";
                    }
                },
                {
                    "type": "branch",
                    "branch": (materialIndex, {
                        hasSpecularMap
                    }, {
                                   LightMaterialDataFromSystem
                               }) => {
                        if (hasSpecularMap(LightMaterialDataFromSystem)) {
                            return "SpecularMapShaderLib";
                        }

                        return "NoSpecularMapShaderLib";
                    }
                },

                "NoLightMapShaderLib",
                "NoEmissionMapShaderLib",
                "NoNormalMapShaderLib",
                "NoShadowMapShaderLib",
                "LightShaderLib",
                "PointLightShaderLib",
                "LightEndShaderLib",
                { "type": "group", "value": "engineMaterialEnd" }
            ],
            "GBuffer": [
                { "type": "group", "value": "engineMaterialTop" },

                "NormalMatrixNoInstanceShaderLib",
                "NormalCommonShaderLib",
                "GBufferCommonShaderLib",
                "GBufferSetWorldPositionShaderLib",

                {
                    "type": "branch",
                    "branch": (materialIndex, {
                        hasDiffuseMap,
                        hasSpecularMap
                    }, {
                                   LightMaterialDataFromSystem
                               }) => {
                        if (hasDiffuseMap(materialIndex, LightMaterialDataFromSystem)
                            || hasSpecularMap(materialIndex, LightMaterialDataFromSystem)) {
                            return "CommonLightMapShaderLib";
                        }
                    }
                },
                {
                    "type": "branch",
                    "branch": (materialIndex, {
                        hasDiffuseMap
                    }, {
                                   LightMaterialDataFromSystem
                               }) => {
                        if (hasDiffuseMap(materialIndex, LightMaterialDataFromSystem)) {
                            return "DiffuseMapShaderLib";
                        }

                        return "NoDiffuseMapShaderLib";
                    }
                },
                {
                    "type": "branch",
                    "branch": (materialIndex, {
                        hasSpecularMap
                    }, {
                                   LightMaterialDataFromSystem
                               }) => {
                        if (hasSpecularMap(materialIndex, LightMaterialDataFromSystem)) {
                            return "SpecularMapShaderLib";
                        }

                        return "NoSpecularMapShaderLib";
                    }
                },

                "GBufferNoNormalMapShaderLib",
                "GBufferShaderLib",
                "GBufferEndShaderLib",
                { "type": "group", "value": "engineMaterialEnd" }
            ]
        },
        "noMaterialShaders": {
            "DeferDirectionLightPass": [
                { "type": "group", "value": "deferLightPassUbo" },

                "DirectionLightUboShaderLib",

                "DeferLightPassCommonShaderLib",
                "DeferDirectionLightPassCommonShaderLib",

                { "type": "group", "value": "deferLightPassLightMap" },
                "DeferDirectionLightPassNoNormalMapShaderLib",


                "DeferLightPassShaderLib",
                "DeferDirectionLightPassShaderLib",


                "DeferLightPassEndShaderLib"
            ],
            "DeferPointLightPass": [
                { "type": "group", "value": "deferLightPassUbo" },

                "PointLightUboShaderLib",

                "DeferLightPassCommonShaderLib",
                "DeferPointLightPassCommonShaderLib",

                { "type": "group", "value": "deferLightPassLightMap" },
                "DeferPointLightPassNoNormalMapShaderLib",


                "DeferLightPassShaderLib",
                "DeferPointLightPassShaderLib",


                "DeferLightPassEndShaderLib"
            ]
        }
    },
    "shaderLibGroups": {
        "engineMaterialTop": [
            "CommonShaderLib",
            "ModelMatrixNoInstanceShaderLib",
            "VerticeCommonShaderLib",
            "CameraUboShaderLib"
        ],

        "deferLightPassUbo": [
            "CameraUboShaderLib",
            "LightUboShaderLib"
        ],
        "deferLightPassLightMap": [
            "DeferLightPassNoNormalMapShaderLib",
            "NoLightMapShaderLib",
            "NoEmissionMapShaderLib",
            "NoShadowMapShaderLib"
        ],
        // "deferLightPass": [
        //         "CameraUboShaderLib",
        //         "LightUboShaderLib",
        //
        //         "DeferLightPassCommonShaderLib",
        //         "DeferLightPassNoNormalMapShaderLib",
        //
        //         "DeferLightPassShaderLib",
        //         "DeferLightPassEndShaderLib"
        // ],
        "engineMaterialEnd": [
            "EndShaderLib"
        ]
    }
}
