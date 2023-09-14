import { useContext, useEffect, useState } from "react";
import { API_HOST } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { servicioConsultaEntrada } from "../Api/servicioConsultaEntrada";
import { BotonIcono } from "../Components/BotonIcono";
import avatar from "../imagenes/avatar.jpg";
import "../Styles/ConsultarEntrada.css";
import Comentarios from "../Components/Comentarios";
import { LoginContext } from "../context/LoginContext";
import { SliderImg } from "../Components/SliderImg";
import { Forms } from "../Components/Forms";
import { Input } from "../Components/Input";

export function ConsultarEntrada() {
  const { id } = useParams();
  const { login } = useContext(LoginContext);
  const [entrada, setEntrada] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


const [estadoComentarios, setEstadoComentarios] = useState(false);

function alternarComentarios() {
    setEstadoComentarios(!estadoComentarios)
}


  
  useEffect(() => {
    const consulta = async (id) => {
      const resultado = await servicioConsultaEntrada(id);
      setIsLoading(false);
      if (resultado) {
        console.log(resultado);
        setEntrada(resultado);
      } else {
        console.log(resultado.message);
      }
    };
    consulta(id);
  }, [id]);

  return (
    <>
      {!isLoading && (
        <article className="consulta-entrada">
          <header className="consulta-entrada-h">
            <img
              className="consulta-entrada-avatar"
              src={entrada.avatar ? API_HOST + "/" + entrada.avatar : avatar}
              alt="consulta-entrada-entrada"
            />
            <h2 className="consulta-entrada-titulo">{entrada.titulo}</h2>
          </header>
          <main>
            <SliderImg imagenes={entrada.fotos} />
            <div className="consulta-entrada-iconos">
              <div className="consulta-entrada-likes">
                <BotonIcono
                  icono={"Favorite"}
                  onClick={() => onClickCorazon(entrada.id)}
                  clase={"corazon-phone votado"}
                />
                <p>{entrada.total_votos}</p>
              </div>
              <div className="consulta-entrada-comments">
                <p>{entrada.total_comments}</p>
                <BotonIcono
                  icono={"Chat"} 
                  clase={"comentarios-phone"} 
                  onClick={alternarComentarios}
                />
              </div>
            </div>

            <div className="consulta-entrada-texto">
              <p>{entrada.texto}</p>
            </div>
          </main>
          <footer className="consulta-entrada-footer">
            <div>
              <Forms className="consulta-comentarios">
                <Comentarios estadoComentarios={estadoComentarios} comentarios={entrada.comments} />
                  {login && (
                    <>
                      <Input
                        label={"Comentarios:"}
                        Type="text"
                        id="comentarios"
                        name="comentarios"
                        clase="comments"
                        autocomplete={"off"}
                      />
                  </>
                  )}
              </Forms>
            </div>
          </footer>
        </article>
      )}
    </>
  );
}
