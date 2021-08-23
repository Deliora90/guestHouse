import { GlobalAction, GlobalActionTypes, GlobalState} from "../../types/global";

const initialState: GlobalState = {
  isDesktop: true
}

export const globalReducer = (state = initialState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case GlobalActionTypes.DETERMINE_SIZE:
      return { isDesktop: action.payload };
    default:
      return state;
  }
}
