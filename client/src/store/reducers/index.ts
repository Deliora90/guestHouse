import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { globalReducer } from "./globalReducer";
import { roomReducer } from "./roomsReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  global: globalReducer,
  rooms: roomReducer,
});

export type RootState = ReturnType<typeof rootReducer>
