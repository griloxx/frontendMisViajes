import { BotonIcono } from "../Components/BotonIcono";
import { Entrada } from "../Components/Entrada";
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
        />
      </>
    </main>
  );
}
