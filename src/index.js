import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import   registerServiceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss"
ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root"));


registerServiceWorker();