import { BotonIcono } from "../Components/BotonIcono";
import { Entrada } from "../Components/Entrada";
import "../Styles/home.css";
import { MenuBusqueda } from "../Components/MenuBusqueda";
import { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../context/HeaderContext";
import { useSearchParams } from "react-router-dom";

export function ListarEntradas() {
  const [menu, setMenu] = useState(false);
  const { setHeader } = useContext(HeaderContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [lastSearch, setLastSearch] = useState(false);

  function handleClick() {
    setMenu(!menu);
    const actualScroll = window.scrollY;
    if (actualScroll > 80) {
      setHeader(true);
      setMenu(!menu);
    }
  }

  useEffect(() => {
    let prevScroll = window.scrollY;

    function efectoScroll() {
      const actualScroll = window.scrollY;

      if (actualScroll < prevScroll) {
        setMenu(false);
      } else {
        if (actualScroll > 80) {
          setMenu(false);
        }
      }
      prevScroll = actualScroll;
    }

    window.addEventListener("scroll", efectoScroll);

    return () => {
      window.removeEventListener("scroll", efectoScroll);
    };
  }, []);

  // setSearchParams(new URLSearchParams({nombre}))

  async function onSubmit(formValue) {
    setSearchParams(new URLSearchParams(formValue));
    setLastSearch(!lastSearch);
  }

  return (
    <main className="main-listar-entradas">
      <>
        <MenuBusqueda menu={menu} onSubmit={onSubmit} />
        <Entrada searchParams={searchParams} lastSearch={lastSearch} />
        <BotonIcono
          clase={"boton-busqueda"}
          icono={"travel_explore"}
          onClick={handleClick}
        />
      </>
    </main>
  );
}
