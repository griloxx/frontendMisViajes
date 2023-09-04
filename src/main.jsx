import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/index.css";
import "./Styles/utilidades.css";
import { BrowserRouter } from "react-router-dom";
import { Icon } from "./Components/icons.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Icon clase={"vuelo"} icono={"Flight"} />
      <Icon clase={"vuelo2"} icono={"Flight"} />
      <Icon clase={"vuelo3"} icono={"Flight"} />
      <Icon clase={"vuelo4"} icono={"Flight"} />
       <App />
    </BrowserRouter>
  </React.StrictMode>
);
