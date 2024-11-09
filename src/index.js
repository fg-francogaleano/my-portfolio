import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import AppMui from './MUI/AppMui';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <AppMui>
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
  // </AppMui>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
