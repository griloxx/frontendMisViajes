import Joi from "joi";
import { useNavigate } from "react-router-dom";
import { servicioRegistroUsuario } from "../Api/servicioRegistroUsuario";
import { Input } from "../Components/Input.jsx";
import "../Styles/crearUsuario.css";
import avatar from "../imagenes/avatar.jpg";
import { useState } from "react";
import { FormContext } from "../context/FormContext";
import { FormularioImagenInput } from "../Components/CrearAvatar";
import { useToast } from "../../Hooks/useToast";
import { Toast } from "../Components/Toast";
import { API_HOST } from "../../utils/constants";
import { validate } from "../../utils/validations";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  avatar: Joi.string(),
});

export const RegistroUsuario = () => {
  const navigate = useNavigate();

  const { toastData, showToast } = useToast();

  const [requerirObjeto, setRequerirObjeto] = useState({
    isTouched: false,
    isLoading: false,
    formValue: {},
  });

  const [, errors] = validate(schema, requerirObjeto.formValue);

  const updateFormValue = (nuevoValor) => {
    setRequerirObjeto((antiguoValor) => {
      return {
        ...antiguoValor,
        formValue: {
          ...antiguoValor.formValue,
          ...nuevoValor,
        },
      };
    });
  };

  const enviarRegistro = async (e) => {
    e.preventDefault();

    setRequerirObjeto((antiguoValor) => {
      return {
        ...antiguoValor,
        isTouched: true,
        isLoading: true,
      };
    });

    showToast(0, "", "");
    const { name, email, password, avatar } = FormData;
    const resultado = await servicioRegistroUsuario({ name, email, password });
    console.log(servicioRegistroUsuario());

    if (resultado.status == "ok") {
      localStorage.setItem(API_HOST, resultado.data);
      showToast(3000, "exito", resultado.message);
    } else if (resultado.status) {
      showToast(3000, "error", resultado.message);
    } else {
      showToast(3000, "error", resultado.message);
    }

    setRequerirObjeto({
      isTouched: false,
      isLoading: false,
      formValue: {},
    });
    console.log(resultado);
  };

  return (
    <main className="crearRegistro">
      <section className="formularioRegistro">
        <h2 className="tituloRegistro">Registro</h2>
        <FormContext.Provider
          value={{ ...requerirObjeto, errors, updateFormValue }}
        >
          <form className="formRegistro" onSubmit={enviarRegistro}>
            <div className="div-form-reg">
              <Input
                label={"Nombre:"}
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
              <FormularioImagenInput />
            </div>
          </form>
        </FormContext.Provider>

        <div>
          <button className="boton-simple" onClick={enviarRegistro}>
            Registro
          </button>
        </div>
      </section>
      <Toast toastData={toastData} />
    </main>
  );
};
