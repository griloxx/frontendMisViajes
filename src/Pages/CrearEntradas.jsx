import Joi from "joi";
import { useToast } from "../../Hooks/useToast";
import { servicioCrearEntrada } from "../Api/servicioCrearEntrada";
import { Forms } from "../Components/Forms";
import { Input } from "../Components/Input";
import { InputSelect } from "../Components/InputSelect";
import { InputTextArea } from "../Components/InputTextArea";
import "../Styles/entradas.css";
import { InputMultiFotos } from "../Components/inputMultiFotos";
import { Toast } from "../Components/Toast";
import { useGetLogin } from "../../Hooks/useGetLogin";
import { schemaCrearEntradas } from "../../utils/schemas.js";
import { useNavigate } from "react-router-dom";

export function CrearEntrada() {
  const { toastData, showToast } = useToast();
  const navigate = useNavigate();
  const schema = schemaCrearEntradas;
  useGetLogin();

  const onSubmit = async (formValue) => {
    showToast(0, "", "");

    const resultado = await servicioCrearEntrada(formValue);

    if (resultado.status == "ok") {
      showToast(3000, "exito", resultado.message);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      showToast(3000, "error", resultado.message);
    }
  };

  return (
    <main className="main-entradas">
      <h1>Crear Entrada</h1>
      <Forms clase={"form-entradas"} onSubmit={onSubmit} schema={schema}>
        <div className="div-entradas">
          <Input
            name={"titulo"}
            clase={"input"}
            type={"text"}
            label={"Titulo:"}
            autocomplete={"off"}
          />
          <InputSelect
            clase={"select"}
            label={"Categoria:"}
            name={"categoria"}
          />
          <Input
            name={"lugar"}
            clase={"input"}
            type={"text"}
            label={"Lugar:"}
            autocomplete={"off"}
          />
          <InputTextArea
            label={"Descripción:"}
            clase={"text-area"}
            maxChars={"150"}
            name={"texto"}
          />
        </div>
        <div className="div-fotos">
          <InputMultiFotos label={"Fotos Del Viaje"} name={"foto"} />
        </div>
      </Forms>
      <Toast toastData={toastData} />
    </main>
  );
}
