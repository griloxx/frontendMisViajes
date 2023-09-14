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
      <div className="comentarios">
        {comentarios.map((comentario, index) => (
          <div key={index} className="comentario">
            <img
              className="imagen-comentarios"
              src={
                comentario.avatar ? API_HOST + "/" + comentario.avatar : avatar
              }
              alt={`Foto de ${comentario.name}`}
            />
            <div>
              <p>{comentario.name}</p>
              <p>{comentario.comentario}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comentarios;
