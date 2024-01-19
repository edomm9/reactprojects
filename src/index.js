import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Weather from "./weather";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('Request failed with status code', error.response.status);
    console.error('Request URL:', error.config.url);
    console.error('Request data:', error.config.data);
    return Promise.reject(error);
  }
);


ReactDOM.render(
  <React.StrictMode>
    
    <Weather />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
