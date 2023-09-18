import { useContext, useEffect, useState } from "react";
import { API_HOST } from "../../utils/constants";
import { BotonIcono } from "./BotonIcono";
import { SliderPhone } from "./SliderPhone";
import { servicioListarEntradas } from "../Api/servicioListarEntradas";
import { LoginContext } from "../context/LoginContext";
import { servicioConsultaBusqueda } from "../Api/servicioConsultaBusqueda";
import { BotonIconoLike } from "./BotonIconoLike";


export function Entrada({searchParams, lastSearch}) {
    const {login} = useContext(LoginContext);
    const [entradas, setEntradas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function consultarEntradas() {
        let resultado;
        if(searchParams.size > 0 ) {
            resultado = await servicioConsultaBusqueda(searchParams.toString())
        } else {
            resultado = await servicioListarEntradas();
        } 
        setIsLoading(false);
        setEntradas(resultado.data);
        
    }

    useEffect(() => {

        consultarEntradas();

    }, [login, lastSearch])
    
    return (
        <ul>
        {!isLoading && (
            entradas?.length > 0 ? (
                entradas.map((entrada) => {
                return (
                    <li key={entrada.id}>
                        <article className="entrada-lista">
                            <header>
                                <img className="entrada-avatar" src={API_HOST + "/" + entrada.avatar} alt="usuario" />
                                <h2>{entrada.titulo}</h2>
                            </header>
                            <main>
                                <SliderPhone imagenes={entrada.fotos} />
                            </main>
                            <footer>
                                <div>
                                    <BotonIconoLike icono={"Favorite"} entrada={entrada} />
                                </div>
                                <div>
                                    <p>{entrada.total_comments}</p>
                                    <BotonIcono icono={"Chat"} clase={"comentarios-phone"}  />
                                </div>
                            </footer>
                        </article>
                    </li>
                )}))
                : (
                    <div className="div-caja-resultado">
                        <div className="div-sin-resultado">
                            <p>No se ha encontrado nada ningún post...</p>
                        </div>
                    </div>
                    
            )
            )}
        </ul>
    )
}