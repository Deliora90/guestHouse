export interface GlobalState {
  isDesktop: boolean;
}
export enum GlobalActionTypes {
  DETERMINE_SIZE = "DETERMINE_SIZE"
}
interface DetermineSizeAction {
  type: GlobalActionTypes.DETERMINE_SIZE;
  payload: boolean;
}
export type GlobalAction =
  DetermineSizeAction;
