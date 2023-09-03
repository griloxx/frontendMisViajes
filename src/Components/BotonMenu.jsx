import { useState } from "react";
import { Icon } from "./icons";

export function BotonMenu() {
  const [icono, setIcono] = useState("tsunami");
  
  const onClick= () => {
    setIcono(icono === "tsunami" ? "sweep" : "tsunami");
  };

  return (
    <div className="botonMenu">
      <Icon onClick={onClick}>
      {icono === "tsunami" ? "sweep" : "tsunami"}
      </Icon>
    </div>