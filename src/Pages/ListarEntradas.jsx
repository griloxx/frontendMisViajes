import { BotonIcono } from "../Components/BotonIcono";
import { Entrada } from "../Components/Entrada";
import "../Styles/home.css";
import { MenuBusqueda } from "../Components/MenuBusqueda";
import { useState } from "react";

export function ListarEntradas() {
  const [menu, setmenu] = useState(false);

  function handleClick() {
    setmenu(!menu);
  }
  return (
    <main>
      <>
        <MenuBusqueda menu={menu} />
        <Entrada />
        <BotonIcono
          clase={"boton-busqueda"}
          icono={"travel_explore"}
          onClick={handleClick}
        />
      </>
    </main>
  );
}
