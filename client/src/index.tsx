import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import App from './App';
import { store } from "./store/index";
import { Provider } from "react-redux";
import { Global } from "./styles/global";
import { theme } from "./utils/theme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
