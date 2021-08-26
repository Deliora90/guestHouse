export interface GlobalState {
  isDesktop: boolean;
  typeDevice: "phone" | "tablet" | "tabletLandscape" | "desktop";
}
export enum GlobalActionTypes {
  DETERMINE_SIZE = "DETERMINE_SIZE",
}
interface DetermineSizeAction {
  type: GlobalActionTypes.DETERMINE_SIZE;
  payload: {isDesktop: boolean, typeDevice: "phone" | "tablet" | "tabletLandscape" | "desktop"};
}
export type GlobalAction =
  DetermineSizeAction;
