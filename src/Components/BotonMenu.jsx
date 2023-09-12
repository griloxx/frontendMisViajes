import { useEffect, useState } from "react";
import { Icon } from "./icons";

export function BotonMenu({menuOpen}) {
  const [icono, setIcono] = useState("tsunami");
  const {menu, setMenu} = menuOpen;


  const onClicks = () => {
    !menu ? setMenu(true) : setMenu(false)
  };

  useEffect(() => {
    if (menu) {
      setIcono("sweep")
      document.body.classList.add("no-overflow");
    } else {
      setIcono("tsunami");
      document.body.classList.remove("no-overflow")
    }
  }, [menu])

  return (
    <div className="boton-menu">
      <Icon onClick={onClicks} icono={icono}></Icon>
    </div>
  );
}
