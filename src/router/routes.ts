import { IMenu } from "../models/IMenu";
import Main from "../pages/Main";
import AuthPage from "../pages/AuthPage";
import {
  MAIN_ROUTE,
  AUTH_ROUTE,
  ROOMS_ROUTE,
  PUBLICATIONS_ROUTE,
  INFO_ROUTE,
  BOARDING_ROUTE,
  REGISTRATION_ROUTE
} from "../utils/consts";
import Registration from "../pages/Registration";
import Rooms from "../pages/Rooms";
import Publications from "../pages/Publications";
import Info from "../pages/Info";
import Boarding from "../pages/Boarding";

export const publicRoutes: Array<IMenu> = [
  {
    path: MAIN_ROUTE,
    label: "Главная",
    Component: Main,
    exact: true,
    inNavbar: true
  },
  {
    path: ROOMS_ROUTE,
    label: "Номера и цены",
    Component: Rooms,
    exact: true,
    inNavbar: true
  },
  {
    path: PUBLICATIONS_ROUTE,
    label: "Статьи",
    Component: Publications,
    exact: true,
    inNavbar: true
  },
  {
    path: INFO_ROUTE,
    label: "Информация",
    Component: Info,
    exact: true,
    inNavbar: true
  },
  {
    path: BOARDING_ROUTE,
    label: "Полный пансион",
    Component: Boarding,
    exact: true,
    inNavbar: true
  },
  {
    path: AUTH_ROUTE,
    label: "Авторизация",
    Component: AuthPage,
    exact: true,
    inNavbar: false
  },
  {
    path: REGISTRATION_ROUTE,
    label: "Регистрация",
    Component: Registration,
    exact: true,
    inNavbar: false
  }
];
