open StateInitLightMaterialType;

open LightMaterialType;

let createInitMaterialState =
    (
      (index, disposedIndexArray),
      {
        directionLightRecord,
        pointLightRecord,
        shaderRecord,
        programRecord,
        glslRecord,
        glslSenderRecord,
        glslLocationRecord,
        glslChunkRecord
      } as state: StateDataMainType.state
    )
    : StateInitLightMaterialType.initLightMaterialState => {
  let {shaderIndices} = RecordLightMaterialMainService.getRecord(state);
  {
    directionLightRecord: {index: directionLightRecord.index},
    pointLightRecord: {index: pointLightRecord.index},
    materialRecord: {index, disposedIndexArray, shaderIndices},
    renderConfigRecord: RecordRenderConfigMainService.getRecord(state),
    shaderRecord,
    programRecord,
    glslRecord,
    glslSenderRecord,
    glslLocationRecord,
    glslChunkRecord
  }
};