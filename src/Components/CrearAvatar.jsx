import { useContext, useRef, useState } from "react";
import { FormContext } from "../context/FormContext";
import avatar from "../imagenes/avatar.jpg";
import { API_HOST } from "../../utils/constants";

export function FormularioImagenInput({ name, label }) {
  //representa el estado de is se ha interactuado con input
  const [isTouched, setIsTouched] = useState(false);
  const [selectFiles, setSelectFiles] = useState(null);
  const fileInputRef = useRef(null);
  //Obtiene el estado del formulario
  const formContext = useContext(FormContext);

  function updateRequest(newFiles) {
    if (!isTouched) setIsTouched(true);
    if( newFiles?.length) {
      setSelectFiles(newFiles);

    //se actualizaa el estado del formulario
    formContext.updateFormValue({
      [name]: newFiles,
    });
  }
  }
  function onFileRemove() {
    setSelectFiles(null);
    
    //se actiaza el estado del formulario
    formContext.updateFormValue({
      [name]: null,
    });
  }
  function onAddFile(e) {
    e.preventDefault();
    fileInputRef.current.click();
  }
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="crear-avatar">
        <div className="imagen-perfil">
          {selectFiles?.length ? (
            <>
              <button
                className="delete"
                onClick={() => onFileRemove()}
              >
                X
              </button>
              <img
                className="avatar-form"
                src={URL.createObjectURL(selectFiles[0])}
                alt="avatar"
              />
              
            </>
          ) : (
            <img className="avatar-form" src={formContext.formValue?.avatar ? API_HOST + "/" + formContext.formValue.avatar : avatar} alt="avatar" />
          )}
        </div>
        <input
          ref={fileInputRef}
          name={name}
          type="file"
          className="hidden"
          onChange={(e) => updateRequest(e.target.files)}
          disabled={formContext.isLoading}
        />
        <button className="boton-simple" onClick={onAddFile}>
          Seleccionar Archivo
        </button>
      </div>
    </div>
  );
}
