import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";
import GlobalStyle from "./assets/styles/global-styles";
import {theme} from 'assets/styles/theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
