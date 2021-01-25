import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import reportWebVitals from './reportWebVitals';
import CustomThemeProvider from './themes/CustomThemeProvider'
import { CssBaseline } from '@material-ui/core';


ReactDOM.render(
  // <React.StrictMode>
    <CustomThemeProvider>
      <CssBaseline />
      <App />
    </CustomThemeProvider>
  // </React.StrictMode>,
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
