import { useParams } from "react-router-dom";
import { servicioAñadirComentario } from "../Api/servicioAñadirComentario";
import Joi from "joi";
import { Forms } from "./Forms";
import Comentarios from "./Comentarios";
import { Input } from "./Input";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { servicioConsultaEntrada } from "../Api/servicioConsultaEntrada";
import { schemaAñadirCometnario } from "../../utils/schemas";

export function AñadirComentario({
  entrada,
  showToast,
  estadoComentarios,
  clase,
  alternarComentarios,
  setEntradas,
}) {
  const { id } = useParams();
  const { login } = useContext(LoginContext);
  const schema = schemaAñadirCometnario;
  async function onSubmit(formValue) {
    showToast(0, "", "");
    if (!login) {
      return showToast(3000, "error", "Tiene que estar logueado");
    }
    const resultado = await servicioAñadirComentario(id, formValue);

    if (resultado.status == "ok") {
      const data = await servicioConsultaEntrada(id);

      if (data) {
        setEntradas(data);
      } else {
        showToast(3000, "error", data.message);
      }
      showToast(3000, "exito", resultado.message);
    } else {
      showToast(3000, "error", resultado.message);
    }
  }

  return (
    <>
      <Forms onSubmit={onSubmit} schema={schema} clase={clase}>
        <div className="div-caja-comentarios">
          <div
            className={estadoComentarios ? "" : "div-cierre-comentarios"}
            onClick={alternarComentarios}
          ></div>
          <div className="caja-comentarios-desktop">
            <Comentarios
              estadoComentarios={estadoComentarios}
              comentarios={entrada.comments}
            />

            <Input
              label={"Añadir Comentario:"}
              type="text"
              id="comentarios"
              name="comentario"
              clase="comments"
              autocomplete={"off"}
            />
          </div>
        </div>
      </Forms>
    </>
  );
}
