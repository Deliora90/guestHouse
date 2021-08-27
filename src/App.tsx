import React, { useEffect } from 'react';
import { useActions } from "./hooks/useActions";
import { HashRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import "./styles/App.scss";
import { useTypesSelector } from './hooks/useTypesSelector';

function App(): JSX.Element {
  const { checkAuthUser, determineSize, getAllRooms } = useActions();
  const { rooms } = useTypesSelector(state => state.rooms);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuthUser();
    }
    getAllRooms({ dateIn: new Date(), dateOut: new Date(), amountPerson: 2});
  }, []);

  useEffect(() => {
    console.log("GetRooms:", rooms);
  }, [rooms]);

  useEffect(() => {
    determineSize();
    window.addEventListener("resize", determineSize);
    return (() => {
      window.removeEventListener("resize", determineSize);
    })
  }, []);

  return (
    <HashRouter>
      <Header />
      <AppRouter />
    </HashRouter>
  );
}

export default App;
