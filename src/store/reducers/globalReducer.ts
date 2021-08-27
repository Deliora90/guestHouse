import { GlobalAction, GlobalActionTypes, GlobalState} from "../../types/global";

const initialState: GlobalState = {
  isDesktop: true,
  typeDevice: "desktop"
}

export const globalReducer = (state = initialState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case GlobalActionTypes.DETERMINE_SIZE:
      return { isDesktop: action.payload.isDesktop, typeDevice: action.payload.typeDevice };
    default:
      return state;
  }
}
