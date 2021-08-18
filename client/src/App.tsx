import React, { useEffect } from 'react';
import { useActions } from "./hooks/useActions";
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import { Wrapper } from "./styles/layout";
import "./styles/App.scss";


function App(): JSX.Element {
  const { checkAuthUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuthUser();
    }
  }, [])


  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <AppRouter />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
