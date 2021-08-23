import { RoomAction, RoomActionTypes, RoomState } from "../../types/rooms";

const initialState: RoomState = {
  rooms: null,
  loading: false,
  error: null
}

export const roomReducer = (state = initialState, action: RoomAction): RoomState => {
  switch (action.type) {
    case (RoomActionTypes.GET_ROOMS):
      return { rooms: state.rooms, loading: true, error: null };
    case (RoomActionTypes.GET_ROOMS_SUCCESS):
      return { rooms: action.payload, loading: false, error: null };
    case (RoomActionTypes.GET_ROOMS_ERROR):
      return { rooms: state.rooms, error: action.payload, loading: false };
    default:
      return state;
  }
}
