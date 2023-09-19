import { API_HOST } from "../../utils/constants";

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
        {comentarios.map((comentario, index) => (
          <li key={index} className="comentario">
            <img
              className="imagen-comentarios"
              src={
                comentario.avatar ? API_HOST + "/" + comentario.avatar : avatar
              }
              alt={`Foto de ${comentario.name}`}
            />
            <div className="div-comentario">
              <p className="nombre-comentario">{comentario.name}</p>
              <p className="comentario-texto">{comentario.comentario}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comentarios;
