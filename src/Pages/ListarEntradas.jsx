import { BotonIcono } from "../Components/BotonIcono";
import { Entrada } from "../Components/Entrada";
import React, { useState, useEffect } from "react";
import "../Styles/home.css";
import { MenuBusqueda } from "../Components/MenuBusqueda";

export function ListarEntradas() {
  return (
    <main>
      <>
        <MenuBusqueda />
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
