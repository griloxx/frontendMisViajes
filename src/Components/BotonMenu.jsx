import { useState } from "react";
import { Icon } from "./icons";

export function BotonMenu() {
  const [icono, setIcono] = useState("tsunami");

  const onClicks = () => {
    setIcono(icono === "tsunami" ? "sweep" : "tsunami");
  };

  return (
    <div className="botonMenu">
      <Icon onClick={onClicks} icono={icono}></Icon>
    </div>
  );
}
