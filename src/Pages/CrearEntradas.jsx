import Joi from "joi";
import { useToast } from "../../Hooks/useToast";
import { servicioCrearEntrada } from "../Api/servicioCrearEntrada";

const schema = Joi.object({
  titulo: Joi.string().max(150).required(),
  categoria: Joi.string().required(),
  lugar: Joi.string().max(150).required.apply.apply,
  texto: Joi.string().min(50).required(),
  fotosentradas: Joi.array().required().min(1),
});

export function CrearEntrada() {
  const { toastData, showToast } = useToast();
  const onSubmit = async (formValue) => {
    showToast(0, "", "");

    const resultado = await servicioCrearEntrada(formValue);
    if (resultado.status == "ok") {
      showToast(6000, "exito", resultado.message);
    } else {
      showToast(6000, "error", resultado.message);
    }
  };

  return (
    
  )
}
