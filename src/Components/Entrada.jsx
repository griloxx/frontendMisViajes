import { API_HOST } from "../../utils/constants";
import { BotonIcono } from "./BotonIcono";
import { SliderPhone } from "./SliderPhone";


export function Entrada({entrada}) {


    return (
        <ul>
            <li>
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
                            <BotonIcono icono={"Favorite"} clase={"corazon-phone"}  />
                            <p>{entrada.total_votos}</p>
                        </div>
                        <BotonIcono icono={"Chat"} clase={"comentarios-phone"}  />
                    </footer>
                </article>
            </li>
        </ul>
    )
}