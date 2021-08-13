import { UserAction, UserActionTypes, UserState } from "../../types/user"

const initialState: UserState = {
  user: null,
  isAuth: false,
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.REGISTRATION:
      return { loading: true, error: null, isAuth: false, user: null };
    case UserActionTypes.REGISTRATION_SUCCESS:
      return { loading: false, isAuth: false, user: action.payload, error: null };
    case UserActionTypes.REGISTRATION_ERROR:
      return { loading: false, error: action.payload, isAuth: false, user: null };

    case UserActionTypes.LOGIN:
      return { loading: true, error: null, isAuth: false, user: null };
    case UserActionTypes.LOGIN_SUCCESS:
      return { loading: false, isAuth: true, user: action.payload, error: null };
    case UserActionTypes.LOGIN_ERROR:
      return { loading: false, error: action.payload, isAuth: false, user: null };
    case UserActionTypes.LOGIN_CHECK_ERROR:
      return { loading: false, error: null, isAuth: false, user: null };

    case UserActionTypes.LOGOUT:
      return { loading: true, error: null, isAuth: false, user: null };
    case UserActionTypes.LOGOUT_SUCCESS:
      return { loading: false, isAuth: false, user: null, error: null };
    case UserActionTypes.LOGOUT_ERROR:
      return { loading: false, error: action.payload, isAuth: false, user: null };
    default:
      return state;
  }
}
