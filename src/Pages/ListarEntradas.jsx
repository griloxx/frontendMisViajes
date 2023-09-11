import { useEffect, useState } from "react";
import { BotonIcono } from "../Components/BotonIcono";
import { servicioListarEntradas } from "../Api/servicioListarEntradas";
import { Entrada } from "../Components/Entrada";
import "../Styles/home.css";

export function ListarEntradas() {
  const [entradas, setEntradas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function consultarEntradas() {
    const resultado = await servicioListarEntradas();
    setIsLoading(false);
    if (resultado.data) {
      console.log(resultado.data);
      setEntradas(resultado.data);
    } else {
      console.log(resultado.message);
    }
  }
  useEffect(() => {
    consultarEntradas();
  }, []);

  return (
    <main>
        <>
          {!isLoading && (
            entradas.map((entrada) => {
              return <Entrada key={entrada.id} entrada={entrada} />;
            }))}
          <BotonIcono clase={"boton-busqueda"} icono={"travel_explore"} />
        </>
      
    </main>
  );
}
