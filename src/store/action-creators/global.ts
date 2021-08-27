import { Dispatch } from "redux";
import { GlobalAction, GlobalActionTypes } from "../../types/global";
import { theme } from "../../utils/theme";

const determineDevice = (width: number) => {
  if (width >= theme.media.tabletLandscape) {
    return "desktop";
  } else if (width >= theme.media.tablet) {
    return "tabletLandscape";
  } else if (width >= theme.media.phone) {
    return "tablet";
  } else {
    return "phone";
  }
}

export const determineSize = () => {
  return (dispatch: Dispatch<GlobalAction>): void => {
    try {
      const width = document.documentElement.clientWidth;
      const isDesktop = width > theme.media.tabletLandscape;
      const type = determineDevice(width);
      dispatch({ type: GlobalActionTypes.DETERMINE_SIZE, payload: { isDesktop: isDesktop, typeDevice: type } });
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  }
}
