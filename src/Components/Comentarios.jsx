import { API_HOST } from "../../utils/constants";
import avatar from "../imagenes/avatar.jpg";

const Comentarios = ({ comentarios, estadoComentarios }) => {
  return (
    <div
      className={
        estadoComentarios
          ? "caja-comentarios ocultar-comentarios"
          : "caja-comentarios"
      }
    >
      <ul className="comentarios">
        {comentarios.length > 0 ? (
          comentarios.map((comentario, index) =>{
              const rutaImagen = API_HOST + "/" + comentario.avatar ;
            return(
            <li key={index} className="comentario">
              <img
                className="imagen-comentarios"
                src={
                  comentario?.avatar
                    ? rutaImagen
                    : avatar
                }
                alt={`Foto de ${comentario.name}`}
              />
              <div className="div-comentario">
                <p className="nombre-comentario">{comentario.name}</p>
                <p className="comentario-texto">{comentario.comentario}</p>
              </div>
            </li>
          )})
        ) : (
          <p className="mensaje-sin-comentarios">
            No hay comentarios para mostrar
          </p>
        )}
      </ul>
    </div>
  );
};

export default Comentarios;
