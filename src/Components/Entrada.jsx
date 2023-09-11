import { API_HOST } from "../../utils/constants";


export function Entrada({entrada}) {


    return (
        <li>
            <article>
                <header>
                    <h2>{entrada.titulo}</h2>
                    <img src={API_HOST + "/" + entrada.avatar} alt="usuario" />
                </header>
                <main></main>
                <footer></footer>
            </article>
        </li>
    )
}