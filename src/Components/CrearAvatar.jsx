import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { FormContext } from "../context/FormContext";
import avatar from "../imagenes/avatar.jpg";
import { API_HOST, LOCAL_HOST } from "../../utils/constants";
import { LoginContext } from "../context/LoginContext";

export function FormularioImagenInput({ name, label }) {
  //representa el estado de is se ha interactuado con input
  const [isTouched, setIsTouched] = useState(false);
  const [selectFiles, setSelectFiles] = useState(null);
  const fileInputRef = useRef(null);
  //Obtiene el estado del formulario
  const formContext = useContext(FormContext);
  let rutaImagen;
  if(formContext.formValue?.avatar) {
    rutaImagen = API_HOST + "/" + formContext.formValue.avatar ;
  } 


  useEffect(() => {
    if (formContext.resetImage) {
      setSelectFiles(null);
    }
  }, [formContext.resetImage]);

  const imageUrl = useMemo(() => {
    if (selectFiles?.length) {
      return URL.createObjectURL(selectFiles[0]);
    } else {
      return formContext.formValue?.avatar &&
        formContext.formValue?.avatar !== "sinAvatar"
        ? rutaImagen
        : avatar;
    }
  }, [selectFiles, formContext.formValue?.avatar]);

  function updateRequest(newFiles) {
    if (!isTouched) setIsTouched(true);
    if (newFiles?.length) {
      setSelectFiles(newFiles);

      //se actualizaa el estado del formulario
      formContext.updateFormValue({
        [name]: newFiles,
      });
    }
  }
  function onFileRemove(e) {
    e.preventDefault();
    setSelectFiles(null);

    //se actiaza el estado del formulario
    formContext.updateFormValue({
      [name]: "sinAvatar",
    });
  }

  function onAddFile(e) {
    e.preventDefault();
    fileInputRef.current.click();
  }
  return (
    <div>
      <label>{label}</label>
      <div className="crear-avatar">
        <div className="imagen-perfil">
          <button className="delete" onClick={onFileRemove}>
            X
          </button>
          <img className="avatar-form" src={imageUrl} alt="avatar" />
        </div>
        <input
          ref={fileInputRef}
          name={name}
          id={name}
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
