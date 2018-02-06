var LightTool = (function () {
    return {
        createAmbientLight: function (state) {
            var [state, light] = wd.createAmbientLight(state);

            var state = wd.setAmbientLightColor(light, [0.2, 0.2, 0.2], state);


            var [state, obj] = wd.createGameObject(state);



            state = wd.addGameObjectAmbientLightComponent(obj, light, state);

            return [state, obj];
        },
        createDirectionLight: function (state) {
            var [state, light] = wd.createDirectionLight(state);

            var state = wd.setDirectionLightColor(light, [1.0, 0.0, 0.0], state);



            var [state, obj] = wd.createGameObject(state);



            // var transform = wd.getGameObjectTransformComponent(obj, state);

            // state = wd.setTransformLocalPosition(transform, [0, 0, 30], state);


            state = wd.addGameObjectDirectionLightComponent(obj, light, state);

            return [state, obj];
        },
        createPointLight: function (state) {
            var [state, light] = wd.createPointLight(state);

            var state = wd.setPointLightColor(light, [1.0, 0.0, 1.0], state);
            var state = wd.setPointLightRangeLevel(light, 9, state);




            var [state, obj] = wd.createGameObject(state);





            state = wd.addGameObjectPointLightComponent(obj, light, state);




            var [state, material] = wd.createLightMaterial(state);

            state = wd.setLightMaterialDiffuseColor(material, [0.5, 1.0, 0.2], state);

            var [state, meshRenderer] = wd.createMeshRenderer(state);

            state = wd.addGameObjectLightMaterialComponent(obj, material, state);
            state = wd.addGameObjectMeshRendererComponent(obj, meshRenderer, state);


            var [state, geometry] = wd.createBoxGeometry(state);

            state = wd.setBoxGeometryConfigData(geometry, {
                width: 2,
                height: 2,
                depth: 2
            }, state);




            state = wd.addGameObjectGeometryComponent(obj, geometry, state);

            return [state, obj];
        }
    }
})()