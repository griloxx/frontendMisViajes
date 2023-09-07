import Joi from "joi";
import { useNavigate } from "react-router-dom";
import { servicioRegistroUsuario } from "../Api/servicioRegistroUsuario";
import { Input } from "../Components/Input.jsx";
import "../Styles/crearUsuario.css";
import avatar from "../imagenes/avatar.jpg";
import { useState } from "react";
import { FormContext } from "../context/FormContext";
import { FormularioImagenInput } from "../Components/CrearAvatar";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  avatar: Joi.string(),
});

export const RegistroUsuario = () => {
  const navigate = useNavigate();

  const [requerirObjeto, setRequerirObjeto] = useState({
    isTouched: false,
    isLoading: false,
    formValue: {},
  });

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

    const resultado = await servicioRegistroUsuario(requerirObjeto.formValue);
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
        <FormContext.Provider value={{ ...requerirObjeto, updateFormValue }}>
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

            <div className="div-form-avatar">
              <FormularioImagenInput name={"imagen"} label={"Imagen de Perfil:"} />
            </div>
          </form>
        </FormContext.Provider>

        <div>
          <button className="boton-simple" onClick={enviarRegistro}>
            Registro
          </button>
        </div>
      </section>
    </main>
  );
};
