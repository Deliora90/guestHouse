import $api from "../http";
import { AxiosResponse } from "axios";
import { RoomsResponse } from "../models/response/RoomsResponse";

export default class RoomService {
  static getAllRooms(data:{ dateIn: Date, dateOut: Date, amountPerson: number }): Promise<AxiosResponse<RoomsResponse>>{
    return $api.post<RoomsResponse>('/types/getAll', { ...data });
  }
}
