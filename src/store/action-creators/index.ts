import * as UserActionCreators from "./user";
import * as GlobalActionCreators from "./global";
import * as RoomActionCreators from "./room";

export default {
  ...UserActionCreators,
  ...GlobalActionCreators,
  ...RoomActionCreators,
};
