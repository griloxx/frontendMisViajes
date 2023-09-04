import { useState } from "react";
import { Icon } from "./icons";

export function BotonMenu({menuOpen}) {
  const [icono, setIcono] = useState("tsunami");


  const onClicks = () => {
    setIcono(icono === "tsunami" ? "sweep" : "tsunami");
    const { menu, setMenu } = menuOpen;
    !menu ? setMenu(true) : setMenu( false)
    
  };

  return (
    <div className="boton-menu">
      <Icon onClick={onClicks} icono={icono}></Icon>
    </div>
  );
}
