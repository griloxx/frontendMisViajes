import { servicioRegistroUsuario } from "../Api/servicioRegistroUsuario";
import { Input } from "../Components/Input.jsx";
import "../Styles/crearUsuario.css";
import { FormularioImagenInput } from "../Components/CrearAvatar";
import { useToast } from "../../Hooks/useToast";
import { Toast } from "../Components/Toast";
import { Forms } from "../Components/Forms";
import { schemaRegistroUsuario } from "../../utils/schemas.js";

export const RegistroUsuario = () => {
  const { toastData, showToast } = useToast();
  const schema = schemaRegistroUsuario;
  const onSubmit = async (formValue) => {
    showToast(0, "", "");

    const resultado = await servicioRegistroUsuario(formValue);

    if (resultado.status == "ok") {
      showToast(6000, "exito", resultado.message);
    } else {
      showToast(6000, "error", resultado.message);
    }
  };

  return (
    <main className="crearRegistro">
      <section className="formularioRegistro">
        <h2 className="tituloRegistro">Registro</h2>

        <Forms schema={schema} clase="formRegistro" onSubmit={onSubmit}>
          <div className="div-form-reg">
            <Input
              label={"Nombre Usuario:"}
              type={"text"}
              name={"name"}
              clase={"input"}
            />
            <Input
              label={"Email:"}
              type={"email"}
              name={"email"}
              clase={"input"}
            />
            <Input
              label={"Password:"}
              type={"password"}
              name={"password"}
              clase={"input"}
              autocomplete={"off"}
            />
          </div>

          <div className="div-form-imguser">
            <FormularioImagenInput
              label={"Imagen de Perfil:"}
              name={"avatar"}
            />
          </div>
        </Forms>
      </section>
      <Toast toastData={toastData} />
    </main>
  );
};
