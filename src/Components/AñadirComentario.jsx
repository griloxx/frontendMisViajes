import { useParams } from "react-router-dom";
import { Toast } from "./Toast";
import { servicioAñadirComentario } from "../Api/servicioAñadirComentario";
import { useToast } from "../../Hooks/useToast";
import Joi from "joi";
import { Forms } from "./Forms";
import Comentarios from "./Comentarios";
import { Input } from "./Input";

const schema = Joi.object({
  comentario: Joi.string().required(),
});
export function AñadirComentario() {
  const { id } = useParams();
  const { toastData, showToast } = useToast;

  async function onSubmit(formValue) {
    showToast(0, "", "");

    console.log("hola aqui llego");
    const resultado = await servicioAñadirComentario(id, formValue);
    console.log(resultado);
    if (resultado.status == ok) {
      showToast(6000, "exito", resultado.message);
    } else {
      showToast(6000, "error", resultado.message);
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
              name="comentarios"
              clase="comments"
              autocomplete={"off"}
            />
          </>
        )}
      </Forms>
      <Toast toastData={toastData} />
    </>
  );
}
