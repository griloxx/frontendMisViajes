import { useContext, useEffect, useState } from "react";
import { API_HOST, LOCAL_HOST } from "../../utils/constants";
import { BotonIcono } from "./BotonIcono";
import { SliderPhone } from "./SliderPhone";
import { servicioListarEntradas } from "../Api/servicioListarEntradas";
import { LoginContext } from "../context/LoginContext";
import { servicioConsultaBusqueda } from "../Api/servicioConsultaBusqueda";
import { BotonIconoLike } from "./BotonIconoLike";
import { Link } from "react-router-dom";
import { Icon } from "./icons";
import avatar from "../imagenes/avatar.jpg"
import { servicioBorrarEntradas } from "../Api/servicioBorrarEntradas";
import { servicioConsultaEntrada } from "../Api/servicioConsultarPerfil";


export function Entrada({searchParams, lastSearch, listaEntradas, showToast}) {
    const {login} = useContext(LoginContext);
    const [entradas, setEntradas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    async function consultarEntradas() {
        let resultado;
        if(searchParams?.size > 0 ) {
            resultado = await servicioConsultaBusqueda(searchParams.toString())
        } else {
            resultado = await servicioListarEntradas();
        } 
        setEntradas(resultado.data);
        setIsLoading(false);
        
    }

    async function onClickDelete(id) {
        setIsLoading(true);
        const borrar = await servicioBorrarEntradas(id);
        const consulta = await servicioConsultaEntrada();
        setIsLoading(false);
        setEntradas(consulta.data.entradas);

        if(borrar.status === "ok") {
            showToast(3000, "exito", borrar.message);
        }else {
            showToast(3000, "exito", borrar.message);
        }
    }

    useEffect(() => {

        if(!listaEntradas) {
            consultarEntradas();
            setIsLoading(false)
        } else {
            setEntradas(listaEntradas);
            setIsLoading(false);
        }

    }, [login, lastSearch]);
    
    return (
        <ul>
        {isLoading && (
        <div className="div-loader">
          <div className="div-sub-loader">
            <div className="loader"></div>
          </div>
        </div>
      )}
        {!isLoading && (
            entradas?.length > 0 ? (
                entradas.map((entrada) => {
                    let rutaImagen;
                        if(entrada?.avatar) {
                            rutaImagen = API_HOST + "/" + entrada.avatar ;
                        } 
                return (
                    <li key={entrada.id}>
                        <article className="entrada-lista">
                            <header>
                                <img className="entrada-avatar" src={entrada?.avatar ? rutaImagen : avatar} alt="usuario" />
                                <h2>
                                    <Link className="entrada-heading" to={`/entradas/${entrada.id}`}  >
                                        {entrada.titulo}
                                    </Link>
                                </h2>
                                {listaEntradas && (
                                    <>
                                        <Link className="perfil-editar" to={`/entradas/modificar/${entrada.id}`}>
                                            <Icon icono={"Edit"} />
                                        </Link>
                                        <Icon clase={"papelera"} onClick={() => onClickDelete(entrada.id)} icono={"delete_forever"} />
                                    </>
                                )}
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
                                    <Link className="perfil-boton" to={`/entradas/${entrada.id}`}>
                                        <BotonIcono icono={"Chat"} clase={"comentarios-phone"}  />
                                    </Link>
                                </div>
                            </footer>
                        </article>
                    </li>
                )}))
                : (
                    <li>
                        <div className="div-caja-resultado">
                            <div className="div-sin-resultado">
                                <p>No se ha encontrado nada ningún post...</p>
                            </div>
                        </div>
                    </li>
            )
            )}
        </ul>
    )
}