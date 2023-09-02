import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/index.css";
import "./Styles/utilidades.css";
import { BrowserRouter } from "react-router-dom";
import { LoginContext } from "./context/LoginContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContext.Provider value={false}>
        <App />
      </LoginContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
