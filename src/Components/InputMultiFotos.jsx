import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { FormContext } from "../context/FormContext";
import { API_HOST } from "../../utils/constants";
import { servicioBorrarFoto } from "../Api/servicioBorrarFoto";

export function InputMultiFotos({ name, label, initialValue }) {
  //representa el estado de is se ha interactuado con input
  const [isTouched, setIsTouched] = useState(false);
  const [selectFiles, setSelectFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const fileInputRef = useRef(null);
  const formContext = useContext(FormContext);
  
  useEffect(() => {
    if(!initialValue) {
      if (formContext.resetImage) {
        setSelectFiles([]);
    }
    }
  }, [formContext.resetImage]);
  
  useEffect(() => {
    let urls;
    
    if(selectFiles.some((file) => file instanceof File)) {
      urls = selectFiles.map((file) => {

        if (file instanceof File) {
          return URL.createObjectURL(file);

        } else if (file.id) {

          return API_HOST + "/" + file.foto;
        } 
      });
      
      setImageUrls(urls);
    
      return () => {
        urls.forEach((url) => {
          URL.revokeObjectURL(url);
        });
      };
    }
  }, [selectFiles]);

  useEffect(() => {
    if(initialValue) {
      const urls = initialValue.map((foto) => {
        return API_HOST + "/" + foto.foto;
      })
      setImageUrls(urls)
      setSelectFiles(initialValue)
    }
  }, [initialValue])

  function updateRequest(newFiles) {
    if (!isTouched) setIsTouched(true);
    const newFilesArray = [...selectFiles, ...newFiles];
    
    setSelectFiles(newFilesArray);
    

      //se actualizaa el estado del formulario
      formContext.updateFormValue({
        [name]: newFilesArray,
      });
    
  }
  function onFileRemove(e, file) {
    e.preventDefault()
    let newFilesArray;
    if(!(file instanceof File) && selectFiles.length > 1) {
      console.log("aki")
      async function borrarFoto() {
        const resultado = await servicioBorrarFoto(file.id, file)
      }
      borrarFoto()
      newFilesArray = selectFiles.filter((sF) => {
        return sF.id !== file.id;
      })
      setSelectFiles(newFilesArray);
      const urls = newFilesArray.map((foto) => {
        return API_HOST + "/" + foto.foto;
      })
      setImageUrls(urls)
    } else if(selectFiles.length > 1 ){
    
      newFilesArray = selectFiles.filter((sF) => {
        return sF !== file;
      })
      setSelectFiles(newFilesArray);
      
    } 
    formContext.updateFormValue({
      [name]: newFilesArray,
    });
  }
  

  function onAddFile(e) {
    e.preventDefault();
    fileInputRef.current.click();
  }
  return (
    <div>
      <label>{label}</label>
      <ul className="lista-fotos">
      {selectFiles.map((file,i) => (
        <li key={i}>
          <div className="div-multi-fotos">
            <button type="button" className="delete" onClick={(e) => onFileRemove(e, file)}>
              X
            </button>
            <img className="multi-fotos" src={imageUrls[i]} alt="viaje" />
          </div>
        </li>
      ))}
      </ul>
      <div className="input-fotos">
        <input
          ref={fileInputRef}
          name={name}
          id={name}
          type="file"
          className="hidden"
          onChange={(e) => updateRequest(e.target.files)}
          disabled={formContext.isLoading}
          multiple={true}
        />
        <button className="boton-simple" onClick={onAddFile}>
          Seleccionar Archivo
        </button>
        {!initialValue ? (formContext.isTouched || isTouched) &&
          formContext.errors &&
          formContext.errors[name] &&
          !formContext.isLoading && (
            <div className="div-error">
              <p className="error-form">{formContext.errors[name]}</p>
            </div>
          ) : formContext.errors &&
          formContext.errors[name] &&
          !formContext.isLoading && (
            <div className="div-error">
              <p className="error-form">{formContext.errors[name]}</p>
            </div>)}
      </div>
      
      
    </div>
    
  );
}
