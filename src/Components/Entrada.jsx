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
import avatar from "../imagenes/avatar.jpg";
import { servicioBorrarEntradas } from "../Api/servicioBorrarEntradas";

export function Entrada({ searchParams, lastSearch, listaEntradas }) {
  const { login } = useContext(LoginContext);
  const [entradas, setEntradas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function consultarEntradas() {
    let resultado;
    if (searchParams?.size > 0) {
      resultado = await servicioConsultaBusqueda(searchParams.toString());
    } else {
      resultado = await servicioListarEntradas();
    }
    setEntradas(resultado.data);
    setIsLoading(false);
  }

  async function onClickDelete(id) {
    const borrar = await servicioBorrarEntradas(id);
    consultarEntradas();
  }
  useEffect(() => {
    if (!listaEntradas) {
      consultarEntradas();
    } else {
      setEntradas(listaEntradas);
      setIsLoading(false);
    }
  }, [login, lastSearch]);

  return (
    <ul>
      {!isLoading &&
        (entradas?.length > 0 ? (
          entradas.map((entrada) => {
            return (
              <li key={entrada.id}>
                <article className="entrada-lista">
                  <header>
                    <img
                      className="entrada-avatar"
                      src={
                        entrada.avatar
                          ? API_HOST + "/" + entrada.avatar
                          : avatar
                      }
                      alt="usuario"
                    />
                    <h2>
                      <Link
                        className="entrada-heading"
                        to={`/entradas/${entrada.id}`}
                      >
                        {entrada.titulo}
                      </Link>
                    </h2>
                    {listaEntradas && (
                      <>
                        <Link
                          className="perfil-editar"
                          to={`/entradas/modificar/${entrada.id}`}
                        >
                          <Icon icono={"Edit"} />
                        </Link>
                        <Icon
                          clase={"papelera"}
                          icono={"delete_forever"}
                          onClick={() => onClickDelete(entrada.id)}
                        />
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
                      <Link
                        className="perfil-boton"
                        to={`/entradas/${entrada.id}`}
                      >
                        <BotonIcono
                          icono={"Chat"}
                          clase={"comentarios-phone"}
                        />
                      </Link>
                    </div>
                  </footer>
                </article>
              </li>
            );
          })
        ) : (
          <div className="div-caja-resultado">
            <div className="div-sin-resultado">
              <p>No se ha encontrado nada ningún post...</p>
            </div>
          </div>
        ))}
    </ul>
  );
}
