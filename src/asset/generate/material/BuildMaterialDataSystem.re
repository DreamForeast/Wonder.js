let _buildLightMaterialData =
    (
      lightMaterialDataMap,
      imageUint8ArrayDataMap,
      (totalByteLength, byteOffset, bufferViewDataArr),
      state,
    ) => {
  let (
    (lightMaterialDataArr, textureDataArr, samplerDataArr, imageUint8DataArr),
    (
      textureIndexMap,
      samplerIndexMap,
      imageMap,
      imageUint8ArrayMap,
      imageResultUint8ArrayMap,
    ),
    (totalByteLength, byteOffset, bufferViewDataArr),
  ) =
    lightMaterialDataMap
    |> SparseMapService.reduceValid(
         (.
           (
             (
               lightMaterialDataArr,
               textureDataArr,
               samplerDataArr,
               imageUint8DataArr,
             ),
             (
               textureIndexMap,
               samplerIndexMap,
               imageMap,
               imageUint8ArrayMap,
               imageResultUint8ArrayMap,
             ),
             (totalByteLength, byteOffset, bufferViewDataArr),
           ),
           (lightMaterial, name),
         ) => {
           let diffuseMap =
             OperateLightMaterialMainService.getDiffuseMap(
               lightMaterial,
               state,
             );

           switch (diffuseMap) {
           | None =>
             let (
               (
                 lightMaterialDataArr,
                 textureDataArr,
                 samplerDataArr,
                 imageUint8DataArr,
               ),
               (textureIndexMap, samplerIndexMap, imageMap),
               (totalByteLength, byteOffset, bufferViewDataArr),
             ) =
               BuildLightMaterialNoDiffuseMapSystem.build(
                 (lightMaterial, name),
                 (
                   (
                     lightMaterialDataArr,
                     textureDataArr,
                     samplerDataArr,
                     imageUint8DataArr,
                   ),
                   (textureIndexMap, samplerIndexMap, imageMap),
                 ),
                 (totalByteLength, byteOffset, bufferViewDataArr),
                 state,
               );

             (
               (
                 lightMaterialDataArr,
                 textureDataArr,
                 samplerDataArr,
                 imageUint8DataArr,
               ),
               (
                 textureIndexMap,
                 samplerIndexMap,
                 imageMap,
                 imageUint8ArrayMap,
                 imageResultUint8ArrayMap,
               ),
               (totalByteLength, byteOffset, bufferViewDataArr),
             );
           | Some(diffuseMap) =>
             BuildLightMaterialDiffuseMapSystem.build(
               (lightMaterial, diffuseMap, name),
               (
                 (
                   lightMaterialDataArr,
                   textureDataArr,
                   samplerDataArr,
                   imageUint8DataArr,
                 ),
                 (
                   textureIndexMap,
                   samplerIndexMap,
                   imageMap,
                   imageUint8ArrayMap,
                   imageUint8ArrayDataMap,
                   imageResultUint8ArrayMap,
                 ),
               ),
               (totalByteLength, byteOffset, bufferViewDataArr),
               state,
             )
           };
         },
         (
           ([||], [||], [||], [||]),
           (
             WonderCommonlib.SparseMapService.createEmpty(),
             WonderCommonlib.HashMapService.createEmpty(),
             WonderCommonlib.SparseMapService.createEmpty(),
             WonderCommonlib.SparseMapService.createEmpty(),
             WonderCommonlib.SparseMapService.createEmpty(),
           ),
           (totalByteLength, byteOffset, bufferViewDataArr),
         ),
       );

  (
    (lightMaterialDataArr, textureDataArr, samplerDataArr, imageUint8DataArr),
    (
      textureIndexMap,
      samplerIndexMap,
      imageMap,
      imageResultUint8ArrayMap,
    ),
    (totalByteLength, byteOffset, bufferViewDataArr),
  );
};

let build =
    (
      basicMaterialDataMap,
      lightMaterialDataMap,
      imageUint8ArrayDataMap,
      (totalByteLength, byteOffset, bufferViewDataArr),
      state,
    ) => {
  WonderLog.Contract.requireCheck(
    () => {
      open WonderLog;
      open Contract;
      open Operators;

      GenerateCommon.checkShouldHasNoSlot(basicMaterialDataMap);
      GenerateCommon.checkShouldHasNoSlot(lightMaterialDataMap);
    },
    IsDebugMainService.getIsDebug(StateDataMain.stateData),
  );

  let (
    (lightMaterialDataArr, textureDataArr, samplerDataArr, imageUint8DataArr),
    (
      textureIndexMap,
      samplerIndexMap,
      imageMap,
      imageResultUint8ArrayMap,
    ),
    (totalByteLength, byteOffset, bufferViewDataArr),
  ) =
    _buildLightMaterialData(
      lightMaterialDataMap,
      imageUint8ArrayDataMap,
      (totalByteLength, byteOffset, bufferViewDataArr),
      state,
    );

  let basicMaterialDataArr =
    basicMaterialDataMap
    |> SparseMapService.reduceValid(
         (. basicMaterialDataArr, (basicMaterial, name)) =>
           BuildBasicMaterialNoMapSystem.build(
             (basicMaterial, name),
             basicMaterialDataArr,
             state,
           ),
         [||],
       );

  (
    basicMaterialDataArr,
    lightMaterialDataArr,
    textureDataArr,
    samplerDataArr,
    imageUint8DataArr,
    imageResultUint8ArrayMap,
    (totalByteLength, bufferViewDataArr),
  );
};