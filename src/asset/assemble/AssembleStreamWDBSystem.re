open WDType;

let assemble = (({buffers}: wd) as wd, default11Image, state) => {
  let (
    state,
    gameObjectArr,
    (geometryArr, geometryGameObjects, gameObjectGeometrys),
    (
      images,
      (basicSourceTextureArr, imageBasicSourceTextureIndices),
      (cubemapTextureArr, imageCubemapTextureIndices),
    ),
  ) =
    state
    |> BatchCreateSystem.batchCreate(true, wd)
    |> BatchOperateStreamSystem.batchOperate(wd, default11Image);

  let state =
    state
    |> SkyboxCubemapSystem.setSkyboxCubemap(
         SkyboxCubemapSystem.getSkyboxCubemap(wd, cubemapTextureArr, state),
       );

  let (state, rootGameObject) =
    (state, gameObjectArr) |> BuildRootGameObjectSystem.build(wd);

  let state =
    state
    |> DisposeGameObjectNotExistInSceneSystem.dispose(
         rootGameObject,
         gameObjectArr,
       );

  (
    state,
    rootGameObject,
    (geometryArr, geometryGameObjects, gameObjectGeometrys),
    (
      images,
      (basicSourceTextureArr, imageBasicSourceTextureIndices),
      (cubemapTextureArr, imageCubemapTextureIndices),
    ),
  );
};
