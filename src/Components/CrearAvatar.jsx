import { useContext, useRef, useState } from "react";
import { FormContext } from "../context/FormContext";
import avatar from "../imagenes/avatar.jpg";

export function FormularioImagenInput({ name, label }) {
  //representa el estado de is se ha interactuado con input
  const [isTouched, setIsTouched] = useState(false);
  const [selectFiles, setSelectFiles] = useState(null);
  const fileInputRef = useRef(null);
  //Obtiene el estado del formulario
  const formContext = useContext(FormContext);
  console.log(selectFiles);
  console.log(avatar);
  function updateRequest(newFiles) {
    if (!isTouched) setIsTouched(true);
    setSelectFiles(newFiles);

    //se actualizaa el estado del formulario
    formContext.updateFormValue({
      [name]: newFiles,
    });
  }

  function onFileRemove(file) {
    setSelectFiles(null);
    console.log(formContext.formValue);
    //se actiaza el estado del formulario
    /*     formContext.updateFormValue({
      [name]: ,
    });

 */
  }
  function onAddFile() {
    fileInputRef.current.click();
  }
  return (
    <div>
      <label htmlFor={name}>Avatar:</label>
      <div>
      <div className="imagen-perfil">
        {selectFiles ? 
          <>
            <button onClick={() => onFileRemove(selectFiles[0])}>X</button>
            <img className="avatar-form" src={URL.createObjectURL(selectFiles[0])} alt="avatar" />
            
            
          </>
        
        : <img className="avatar-form" src={avatar} alt="avatar" />}
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
