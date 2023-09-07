import { BotonSimple } from "../Components/BotonSimple";
import { Forms } from "../Components/Forms";
import { Input } from "../Components/Input";
import "../Styles/ModificarUsuario.css";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";
import { servicioModificarUsuario } from "../Api/servicioModificarUsuario";
import { CURRENT_USER_STORAGE } from "../../utils/constants";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Hooks/useToast";
import { Toast } from "../Components/Toast";
import { FormularioImagenInput } from "../Components/CrearAvatar";
import Joi from "joi";
import { validate } from "../../utils/validations";
import { getToken } from "../../utils/getToken";

const schema = Joi.object({
  name: Joi.string().max(50).required(),
  password: Joi.string().min(6).max(100),
  avatar: Joi.allow("")
});


export function ModificarUsuario() {
  const navigate = useNavigate();

  const { login } = useContext(LoginContext);
  const  {name, avatar}  = getToken();
  
  const { toastData, showToast } = useToast();

  const [formState, setFormState] = useState({
    isTouched: false,
    isLoading: false,
    formValue: {name, avatar} || {},
  });

  const [,errors] = validate(schema, formState.formValue);

  useEffect(()=>{
    if(!login) {
      navigate("/");
    }
  },[])

  function updateFormValue(newFormValue) {
    setFormState((oldFormState) => {
      return {
        ...oldFormState,
        formValue: {
          ...oldFormState.formValue,
          ...newFormValue,
        },
      };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    
    setFormState((oldFormState) => {
      return {
        ...oldFormState,
        isTouched: true,
        isLoading: true,
      };
    });
    
    const [ isValid ] = validate(schema,formState.formValue);

    if(!isValid) {
      return setFormState((oldFormState) => {
        return {
          ...oldFormState,
          isTouched: true,
          isLoading: false,
        };
      });
    }
    //Reiniciar la toast si no hay ningun error en campos
    
    showToast(0, "", "");
    const {name, password} = formState.formValue;

    const modificarUsuario = await servicioModificarUsuario({name, password});

    if (modificarUsuario.status == "ok") {
        localStorage.setItem(CURRENT_USER_STORAGE, modificarUsuario.data)
        showToast(3000, "exito", modificarUsuario.message);
      } else if(modificarUsuario.status) {
        showToast(3000, "error", modificarUsuario.message);
      } else {
        showToast(3000, "error", modificarUsuario.message)
      }
      
      setFormState({
        isTouched: false,
        isLoading: false,
        formValue: {name,avatar},
    })
  }

  return (
    <main className="main mod-u">
        <h2 className="heading2-mod-u">Modificar Perfil</h2>
        <FormContext.Provider value={{ ...formState, errors, updateFormValue }}>
          <Forms clase={"form-mod-u"} onSubmit={onSubmit}>
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
              <FormularioImagenInput name={"avatar"} label={"Imagen de Perfil:"}/>
            </div>
          </Forms>
        
        <div>
          <BotonSimple onClick={onSubmit} clase={"boton-simple"}>
            Enviar
          </BotonSimple>
        </div>
        </FormContext.Provider>
        <Toast toastData={toastData} />
    </main>
  );
}
