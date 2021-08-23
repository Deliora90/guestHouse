import { IRoom } from "../models/IRoom";

export interface RoomState {
  rooms: null | IRoom[];
  loading: boolean;
  error: null | string;
}

export enum RoomActionTypes {
  GET_ROOMS = "GET_ROOMS",
  GET_ROOMS_SUCCESS = "GET_ROOMS_SUCCESS",
  GET_ROOMS_ERROR = "GET_ROOMS_ERROR",
}

interface GetRoomsAction{
  type: RoomActionTypes.GET_ROOMS
}
interface GetRoomsSuccessAction{
  type: RoomActionTypes.GET_ROOMS_SUCCESS;
  payload: IRoom[];
}
interface GetRoomsErrorAction{
  type: RoomActionTypes.GET_ROOMS_ERROR;
  payload: string;
}

export type RoomAction =
    GetRoomsAction
  | GetRoomsSuccessAction
  | GetRoomsErrorAction;
