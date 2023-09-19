import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { FormContext } from "../context/FormContext";
import { API_HOST } from "../../utils/constants";

export function InputMultiFotos({ name, label, initialValue }) {
  //representa el estado de is se ha interactuado con input
  const [isTouched, setIsTouched] = useState(false);
  const [selectFiles, setSelectFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const fileInputRef = useRef(null);
  const formContext = useContext(FormContext);
  console.log(formContext.formValue)

  useEffect(() => {
    if (formContext.resetImage) {
      setSelectFiles([]);
    }
  }, [formContext.resetImage]);
  
  useEffect(() => {
    let urls;
     if(!initialValue) {
      urls = selectFiles.map((file) => {
        return URL.createObjectURL(file);
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
      setSelectFiles(urls)
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
  function onFileRemove(file) {
    
    const newFilesArray = selectFiles.filter((sF) => {
      return sF !== file;
    })
    setSelectFiles(newFilesArray);

    //se actiaza el estado del formulario
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
            <button type="button" className="delete" onClick={() => onFileRemove(file)}>
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
      </div>
    </div>
  );
}
