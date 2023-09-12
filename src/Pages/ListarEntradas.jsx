import { BotonIcono } from "../Components/BotonIcono";
import { Entrada } from "../Components/Entrada";
import "../Styles/home.css";

export function ListarEntradas() {
 
  

  return (
    <main>
        <>
          <Entrada />
          <BotonIcono clase={"boton-busqueda"} icono={"travel_explore"} />
        </>
      
    </main>
  );
}
