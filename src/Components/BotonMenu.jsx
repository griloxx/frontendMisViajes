import { useEffect, useState } from "react";
import { Icon } from "./icons";

export function BotonMenu({menuOpen}) {
  const [icono, setIcono] = useState("tsunami");
  const {menu, setMenu} = menuOpen;


  const onClicks = () => {
    !menu ? setMenu(true) : setMenu( false)
  };

  useEffect(() => {
    menu ? setIcono("sweep") : setIcono("tsunami");
  }, [menu])

  return (
    <div className="boton-menu">
      <Icon onClick={onClicks} icono={icono}></Icon>
    </div>
  );
}
