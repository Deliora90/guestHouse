export interface IUser{
  email: string;
  isActivated: boolean;
  id: string;
}

export interface UserState {
  user: null | IUser;
  isAuth: boolean;
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  REGISTRATION = "REGISTRATION",
  REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS",
  REGISTRATION_ERROR = "REGISTRATION_ERROR",

  LOGIN = "LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_ERROR = "LOGIN_ERROR",

  LOGIN_CHECK_ERROR = "LOGIN_CHECK_ERROR",

  LOGOUT = "LOGOUT",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  LOGOUT_ERROR = "LOGOUT_ERROR",
}

interface RegistrationUserAction {
  type: UserActionTypes.REGISTRATION;
}
interface RegistrationUserSuccessAction {
  type: UserActionTypes.REGISTRATION_SUCCESS;
  payload: IUser;
}
interface RegistrationUserErrorAction {
  type: UserActionTypes.REGISTRATION_ERROR;
  payload: string;
}

interface LoginUserAction {
  type: UserActionTypes.LOGIN;
}
interface LoginUserSuccessAction {
  type: UserActionTypes.LOGIN_SUCCESS;
  payload: IUser;
}
interface LoginUserErrorAction {
  type: UserActionTypes.LOGIN_ERROR;
  payload: string;
}

interface LoginUserCheckErrorAction {
  type: UserActionTypes.LOGIN_CHECK_ERROR;
}

interface LogoutUserAction {
  type: UserActionTypes.LOGOUT;
}
interface LogoutUserSuccessAction {
  type: UserActionTypes.LOGOUT_SUCCESS;
}
interface LogoutUserErrorAction {
  type: UserActionTypes.LOGOUT_ERROR;
  payload: string;
}

export type UserAction =
  RegistrationUserAction
| RegistrationUserSuccessAction
| RegistrationUserErrorAction
| LoginUserAction
| LoginUserSuccessAction
| LoginUserErrorAction
| LoginUserCheckErrorAction
| LogoutUserAction
| LogoutUserSuccessAction
| LogoutUserErrorAction;
