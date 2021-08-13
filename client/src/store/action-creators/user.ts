import { UserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import AuthService from "../../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import { API_URL } from "../../http";

export const registrationUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch({ type: UserActionTypes.REGISTRATION });
      const response = await AuthService.registration(email, password);
      console.log("Response", response);
      localStorage.setItem('token', response.data.accessToken);
      dispatch({ type: UserActionTypes.REGISTRATION_SUCCESS, payload: response.data.user });
    } catch (err) {
      console.log(err.response?.data?.message);
      dispatch({
        type: UserActionTypes.REGISTRATION_ERROR,
        payload: "Ошибка при регистрации"
      });
    }
  };
}

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch({ type: UserActionTypes.LOGIN });
      const response = await AuthService.login(email, password);
      console.log("Response", response);
      localStorage.setItem('token', response.data.accessToken);
      dispatch({ type: UserActionTypes.LOGIN_SUCCESS, payload: response.data.user });
    } catch (err) {
      console.log(err.response?.data?.message);
      dispatch({
        type: UserActionTypes.LOGIN_ERROR,
        payload: "Ошибка при авторизации"
      });
    }
  };
}

export const logoutUser = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch({ type: UserActionTypes.LOGOUT });
      await AuthService.logout();
      localStorage.removeItem('token');
      dispatch({ type: UserActionTypes.LOGOUT_SUCCESS });
    } catch (err) {
      console.log(err.response?.data?.message);
      dispatch({
        type: UserActionTypes.LOGOUT_ERROR,
        payload: "Ошибка при выходе из аккаунта"
      });
    }
  };
}

export const checkAuthUser = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch({ type: UserActionTypes.LOGIN });
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true
      });
      console.log("Response", response);
      localStorage.setItem('token', response.data.accessToken);
      dispatch({ type: UserActionTypes.LOGIN_SUCCESS, payload: response.data.user });
    } catch (err) {
      console.log(err.response?.data?.message);
      dispatch({
        type: UserActionTypes.LOGIN_CHECK_ERROR
      });
    }
  };
}

