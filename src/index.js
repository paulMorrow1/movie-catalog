import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NetflixContextProvider } from "./NetflixContext";
import Routes from "./Routes";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NetflixContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </NetflixContextProvider>
  </React.StrictMode>
);
