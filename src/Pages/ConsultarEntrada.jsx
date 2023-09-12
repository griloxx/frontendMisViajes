import { useEffect, useState } from "react";
import { API_HOST } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { servicioConsultaEntrada } from "../Api/servicioConsultaEntrada";
import { BotonIcono } from "../Components/BotonIcono";
import { SliderPhone } from "../Components/SliderPhone";
import avatar from "../imagenes/avatar.jpg";
import "../Styles/ConsultarEntrada.css";

export function ConsultarEntrada() {
  const { id } = useParams();

  const [entrada, setEntrada] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
            <SliderPhone imagenes={entrada.fotos} />
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
                <BotonIcono icono={"Chat"} clase={"comentarios-phone"} />
              </div>
            </div>
          </main>
          <footer className="consulta-entrada-footer">
            <form>
              <label htmlFor="comentarios">Comentario:</label>
              <input
                type="text"
                id="comentarios"
                name="comentarios"
                clase="comments"
              />
            </form>
          </footer>
        </article>
      )}
    </>
  );
}
