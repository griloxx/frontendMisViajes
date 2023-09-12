import { useContext, useEffect, useState } from "react";
import { API_HOST } from "../../utils/constants";
import { servicioVotar } from "../Api/servicioVotar";
import { BotonIcono } from "./BotonIcono";
import { SliderPhone } from "./SliderPhone";
import { servicioListarEntradas } from "../Api/servicioListarEntradas";
import { LoginContext } from "../context/LoginContext";


export function Entrada() {
    const {login} = useContext(LoginContext);
    const [votos, setVotos] = useState(false);
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
    }, [votos]);

    async function onClickCorazon(id) {
        if(login) {
            await servicioVotar(id);
            !votos ? setVotos(true) : setVotos(false);
        }
      }


    return (
        <ul>
        {!isLoading && (
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
                                <BotonIcono icono={"Favorite"} onClick={() => onClickCorazon(entrada.id)} clase={entrada.yaVotado ? "corazon-phone votado" : "corazon-phone"}  />
                                <p>{entrada.votos}</p>
                            </div>
                            <div>
                                <p>{entrada.total_comments}</p>
                                <BotonIcono icono={"Chat"} clase={"comentarios-phone"}  />
                            </div>
                        </footer>
                    </article>
                </li>
            )}))}
        </ul>
    )
}