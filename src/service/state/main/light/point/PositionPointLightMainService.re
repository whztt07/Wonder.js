open StateDataMainType;

let getPosition = (index, state) =>
  state
  |> PositionLightMainService.getPosition(
       GameObjectPointLightService.unsafeGetGameObject(index, state.pointLightRecord)
     );