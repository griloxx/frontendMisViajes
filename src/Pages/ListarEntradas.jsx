import { BotonIcono } from "../Components/BotonIcono";
import { Entrada } from "../Components/Entrada";
import "../Styles/home.css";
import { MenuBusqueda } from "../Components/MenuBusqueda";
import { useEffect, useState } from "react";

export function ListarEntradas() {
  const [menu, setMenu] = useState(false);
  const [display, setDisplay] = useState(false);

  function handleClick() {
    setMenu(!menu);
  }

  useEffect(() => {
    let prevScroll = window.scrollY;

    function efectoScroll() {
      const actualScroll = window.scrollY;

      if (actualScroll < prevScroll) {
        setDisplay(false);
      } else {
        actualScroll > 80 && setDisplay(true);
      }
      prevScroll = actualScroll;
    }

    window.addEventListener("scroll", efectoScroll);

    return () => {
      window.removeEventListener("scroll", efectoScroll);
    };
  }, []);

  return (
    <main>
      <>
        <MenuBusqueda display={display} menu={menu} />
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
