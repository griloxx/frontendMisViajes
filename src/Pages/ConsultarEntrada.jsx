import { useEffect, useState } from "react";
import { API_HOST } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { servicioConsultaEntrada } from "../Api/servicioCansultaEntrada";
import { BotonIcono } from "../Components/BotonIcono";
import { SliderPhone } from "../Components/SliderPhone";
import avatar from "../imagenes/avatar.jpg";

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
        <article className="consulta">
          <header className="consulta-header">
            <img
              className="entrada-avatar"
              src={entrada.avatar ? API_HOST + "/" + entrada.avatar : avatar}
              alt="consulta-entrada"
            />
            <h2>{entrada.titulo}</h2>
          </header>
          <main className="consulta-main">
            <SliderPhone imagenes={entrada.fotos} />
            <div>
              <BotonIcono
                icono={"Favorite"}
                onClick={() => onClickCorazon(entrada.id)}
                clase={"corazon-phone votado"}
              />
              <p>{entrada.total_votos}</p>
            </div>
            <div>
              <p>{entrada.total_comments}</p>
              <BotonIcono icono={"Chat"} clase={"comentarios-phone"} />
            </div>
          </main>
          <footer className="consulta-footer">
            <form>
              <label htmlFor="comentarios">Comentario:</label>
              <input
                type="text"
                id="comentarios"
                name="comentarios"
                clase="commets"
              />
            </form>
          </footer>
        </article>
      )}
    </>
  );
}
