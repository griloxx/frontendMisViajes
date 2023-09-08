import { Forms } from "../Components/Forms";
import { Input } from "../Components/Input";
import "../Styles/ModificarUsuario.css";
import { servicioModificarUsuario } from "../Api/servicioModificarUsuario";
import { useToast } from "../../Hooks/useToast";
import { Toast } from "../Components/Toast";
import { FormularioImagenInput } from "../Components/CrearAvatar";
import Joi from "joi";
import { useLogin } from "../../Hooks/useLogin";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useGetLogin } from "../../Hooks/useGetLogin";

const schema = Joi.object({
  name: Joi.string().max(50).required(),
  password: Joi.string().min(6).max(100),
  avatar: Joi.allow(""),
});

export function ModificarUsuario() {
  const setlogin = useLogin();
  const {login} = useContext(LoginContext);
  const {name, avatar} = login || {};
  const { toastData, showToast } = useToast();

  useGetLogin();

  async function onSubmit(formValue) {
    showToast(0, "", "");
    const modificarUsuario = await servicioModificarUsuario(formValue);

    if (modificarUsuario.status == "ok") {

      setlogin(modificarUsuario.data);

      showToast(3000, "exito", modificarUsuario.message);

    } else {

      showToast(3000, "error", modificarUsuario.message);

    }
  }

  return (
    <main className="main mod-u">
      <h2 className="heading2-mod-u">Modificar Perfil</h2>

      <Forms clase={"form-mod-u"} onSubmit={onSubmit} initialValue={{name, avatar}} schema={schema}>
        <div className="div-form-inp">
          <Input
            name={"name"}
            clase={"input"}
            type={"text"}
            label={"Nombre:"}
            autocomplete={"off"}
          />
          <Input
            name={"password"}
            clase={"input"}
            type={"password"}
            label={"Password:"}
            autocomplete={"off"}
          />
        </div>
        <div className="div-form-img">
          <FormularioImagenInput name={"avatar"} label={"Imagen de Perfil:"} />
        </div>
      </Forms>

      <Toast toastData={toastData} />
    </main>
  );
}
