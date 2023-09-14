import { useParams } from "react-router-dom";
import { Toast } from "./Toast";
import { servicioAñadirComentario } from "../Api/servicioAñadirComentario";
import Joi from "joi";
import { Forms } from "./Forms";
import Comentarios from "./Comentarios";
import { Input } from "./Input";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const schema = Joi.object({
  comentario: Joi.string().required(),
});
export function AñadirComentario({entrada, showToast}) {
  const { id } = useParams();
  const {login} = useContext(LoginContext);

  async function onSubmit(formValue) {
    showToast(0, "", "");

    const resultado = await servicioAñadirComentario(id, formValue);
    
    if (resultado.status == "ok") {
      showToast(36000, "exito", resultado.message);
    } else {
      showToast(36000, "error", resultado.message);
    }
  }

  return (
    <>
      <Forms onSubmit={onSubmit} schema={schema}>
        <Comentarios comentarios={entrada.comments} />
        {login && (
          <>
            <Input
              label={"Añadir Comentario:"}
              type="text"
              id="comentarios"
              name="comentario"
              clase="comments"
              autocomplete={"off"}
            />
          </>
        )}
      </Forms>
    </>
  );
}
