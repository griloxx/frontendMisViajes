import { BotonSimple } from "../Components/BotonSimple";
import { Forms } from "../Components/Forms";
import { Input } from "../Components/Input";
import "../Styles/ModificarUsuario.css";
import avatar from "../imagenes/avatar.jpg";
import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import { servicioModificarUsuario } from "../Api/servicioModificarUsuario";
import { CURRENT_USER_STORAGE } from "../../utils/constants";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Hooks/useToast";
import { Toast } from "../Components/Toast";



export function ModificarUsuario() {
  const navigate = useNavigate();

  const { login } = useContext(LoginContext);

  const { toastData, showToast } = useToast();


  const [formState, setFormState] = useState({
    isTouched: false,
    isLoading: false,
    formValue: {},
  });

  // useEffect(()=>{
  //   if(!login) {
  //     navigate("/");
  //   }
  // },[])

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
    showToast(0, "", "");
    setFormState((oldFormState) => {
      return {
        ...oldFormState,
        isTouched: true,
        isLoading: true,
      };
    });

    const modificarUsuario = await servicioModificarUsuario(formState.formValue);

    if (modificarUsuario.status == "ok") {
        localStorage.setItem(CURRENT_USER_STORAGE, modificarUsuario.data)

        showToast(3000, "exito", modificarUsuario.message);

        setFormState({
          isTouched: false,
          isLoading: false,
          formValue: {},
      })
      } else {

        showToast(3000, "error", modificarUsuario.message);
      }

      
    console.log(modificarUsuario)

  }

  return (
    <main className="main mod-u">
        <h2 className="heading2-mod-u">Modificar Perfil</h2>
        <FormContext.Provider value={{ ...formState, updateFormValue }}>
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
              <Input
                name={"avatar"}
                clase={"hidden"}
                type={"file"}
                label={"Imagen de Perfil:"}
              />
              <BotonSimple clase={"boton-simple"}>
                Seleccionar Archivo
              </BotonSimple>
              <div className="imagen-perfil">
                <img className="avatar-form" src={avatar} alt="avatar" />
              </div>
            </div>
          </Forms>
        </FormContext.Provider>
        <div>
          <BotonSimple onClick={onSubmit} clase={"boton-simple"}>
            Enviar
          </BotonSimple>
        </div>
        <Toast toastData={toastData} />
    </main>
  );
}
