import React, { useEffect } from 'react';
import { useActions } from "./hooks/useActions";
import { BrowserRouter } from "react-router-dom";

import "./styles/App.scss";
import Main from './pages/Main';

function App(): JSX.Element {
  const { checkAuthUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuthUser();
    }
  }, [])


  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
