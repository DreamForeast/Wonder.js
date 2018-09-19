open StateDataMainType;

let _getChildren = (parent, transformRecord) =>
  HierachyTransformService.unsafeGetChildren(parent, transformRecord);

let rec _addChildren = (parentArr, transformRecord, childrenArr) => {
  let childrenArr = childrenArr |> Js.Array.concat(parentArr);

  parentArr
  |> WonderCommonlib.ArrayService.reduceOneParam(
       (. (transformRecord, childrenArr), parent) =>
         _addChildren(
           _getChildren(parent, transformRecord),
           transformRecord,
           childrenArr,
         ),
       (transformRecord, childrenArr),
     );
};

let getAllChildrenTransform = (gameObject, state) => {
  let (_, allTransformChildren) =
    _addChildren(
      _getChildren(
        GetComponentGameObjectService.unsafeGetTransformComponent(
          gameObject,
          state.gameObjectRecord,
        ),
        RecordTransformMainService.getRecord(state),
      ),
      RecordTransformMainService.getRecord(state),
      [||],
    );

  allTransformChildren;
};

let getAllGameObjects = (gameObject, state) => {
  let allTransformChildren = getAllChildrenTransform(gameObject, state);

  let transformRecord = RecordTransformMainService.getRecord(state);

  [|gameObject|]
  |> Js.Array.concat(
       allTransformChildren
       |> Js.Array.map(transform =>
            GameObjectTransformService.unsafeGetGameObject(
              transform,
              transformRecord,
            )
          ),
     );
};

let _getAllComponentsOfGameObject =
    (gameObject, getComponentFunc, {gameObjectRecord} as state) => {
  let (_, components) =
    getAllGameObjects(gameObject, state)
    |> WonderCommonlib.ArrayService.reduceOneParam(
         (. (gameObjectRecord, allComponents), gameObject) =>
           switch (getComponentFunc(. gameObject, gameObjectRecord)) {
           | None => (gameObjectRecord, allComponents)
           | Some(component) => (
               gameObjectRecord,
               allComponents |> ArrayService.push(component),
             )
           },
         (gameObjectRecord, [||]),
       );

  components;
};

let getAllDirectionLightComponentsOfGameObject = (gameObject, state) =>
  _getAllComponentsOfGameObject(
    gameObject,
    GetComponentGameObjectService.getDirectionLightComponent,
    state,
  );

let getAllPointLightComponentsOfGameObject = (gameObject, state) =>
  _getAllComponentsOfGameObject(
    gameObject,
    GetComponentGameObjectService.getPointLightComponent,
    state,
  );