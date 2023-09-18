import { useState } from "react";
import { BotonSimple } from "./BotonSimple";
import { validate } from "../../utils/validations";
import { FormContext } from "../context/FormContext";
import { getToken } from "../../utils/getToken";

export function Forms({ clase, children, onSubmit, schema, initialValue }) {
  const [formState, setFormState] = useState({
    isTouched: false,
    isLoading: false,
    resetImage: false,
    formValue: initialValue || {},
  });
  
  const [, errors] = validate(schema, formState.formValue);

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

  async function onFormSubmit(e) {
    e.preventDefault();

    setFormState((oldFormState) => {
      return {
        ...oldFormState,
        isTouched: true,
        isLoading: true,
        resetImage: false
      };
    });

    const [isValid] = validate(schema, formState.formValue);

    if (!isValid) {
      return setFormState((oldFormState) => {
        return {
          ...oldFormState,
          isTouched: true,
          isLoading: false,
        };
      });
    }
    
    await onSubmit(formState.formValue);
    
    setFormState((oldFormState) => {
      return {
        ...oldFormState,
        resetImage: true
      };
    });

    if(initialValue) {
      const user = getToken();
      initialValue.avatar = user.avatar;
      initialValue.name = user.name;
    }
    if (formState.formValue.lugar || formState.formValue.categoria || formState.formValue.votos) {
      initialValue = formState.formValue;
    }
    setFormState({
      isTouched: false,
      isLoading: false,
      resetImage: true,
      formValue: initialValue || {},
    });
  }

  return (
    <FormContext.Provider value={{ ...formState, errors, updateFormValue }}>
      <form onSubmit={onFormSubmit} className={clase}>
        {children}
        <BotonSimple children={"Enviar"} onClick={onFormSubmit} clase={"oculto-busqueda"} />
      </form>
      <div className="div-boton-simple">
        <BotonSimple onClick={onFormSubmit} clase={"boton-simple"}>
          Enviar
        </BotonSimple>
      </div>
    </FormContext.Provider>
  );
}
