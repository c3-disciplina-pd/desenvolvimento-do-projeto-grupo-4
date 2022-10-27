import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "devextreme/dist/css/dx.material.blue.dark.css"; 
import ptMessages from "devextreme/localization/messages/pt.json";
import { locale, loadMessages } from "devextreme/localization";
import config from "devextreme/core/config";

import themes from 'devextreme/ui/themes';  

themes.current("material.blue.dark");

loadMessages(ptMessages);
locale("pt-BR");

config({
  defaultCurrency: "BRL",
  editorStylingMode: "outlined",
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
