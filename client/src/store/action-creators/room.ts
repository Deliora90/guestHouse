import { RoomAction, RoomActionTypes } from "../../types/rooms";
import { Dispatch } from "redux";
import RoomService from "../../services/RoomService";

export const getAllRooms = (data: { dateIn: Date, dateOut: Date, amountPerson: number }) => {
  return async (dispatch: Dispatch<RoomAction>): Promise<void> => {
    try {
      dispatch({type: RoomActionTypes.GET_ROOMS});
      const response = await RoomService.getAllRooms(data);
      dispatch({ type: RoomActionTypes.GET_ROOMS_SUCCESS, payload: response.data.rooms });
    } catch (err) {
      console.log(err.response?.data?.message);
      dispatch(({
        type: RoomActionTypes.GET_ROOMS_ERROR,
        payload: "Ошибка при получении данных о комнатах"
      }))
    }
  };
}
