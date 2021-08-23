import { Dispatch } from "redux";
import { GlobalAction, GlobalActionTypes } from "../../types/global";
import { theme } from "../../utils/theme";

export const determineSize = () => {
  return (dispatch: Dispatch<GlobalAction>): void => {
    try {
      const width = document.documentElement.clientWidth;
      if (width <= theme.media.tabletLandscape) {
        dispatch({type: GlobalActionTypes.DETERMINE_SIZE, payload: false});
      } else {
        dispatch({type: GlobalActionTypes.DETERMINE_SIZE, payload: true})
      }
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  }
}
