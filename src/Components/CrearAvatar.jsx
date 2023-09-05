import { useContext, useRef, useState } from "react";
import { FormContext } from "../context/FormContext";

export function FormularioImagenInput({name, label}){
    //representa el estado de is se ha interactuado con input
    const[isTouched, setIsTouched]= useState(false);
    const[selectFiles, setSelectFiles]= useState([]);
    const fileInputRef = useRef(null);
    //Obtiene el estado del formulario
    const formContext = useContext(FormContext);

    function updateRequest(newFiles) {
        if(!isTouched) setIsTouched(true);
        const newFilesArray=[...selectFiles,...newFiles];
        setSelectFiles(newFilesArray);
        //se actualizaa el estado del formulario
        formContext.updateFormValue({
            [name]: newFilesArray,
        });
    }


    function onFileRemove(file){
    const newFilesArray = selectFiles.filter((sF) => sF != file);

    setSelectFiles(newFilesArray);
    //se actiaza el estado del formulario
    formContext.updateFormValue({
        [name]: newFilesArray
    });

    }
    function onAddFile(){
        fileInputRef.current.click();

    }
    return (
        <div>
            <label htmlFor={name}>{Seleccionar Archivo}</label>
            <div>
                {selectedFiles.map((file) => (
                <>
                 <button onClick={() => onFileRemove(file)}>
                    <Icon name={"delete"} />
                 </button>
                 <img src={URL.createObjectURL(file)} />
                </>
                )                 
                }
                
                <input
                ref={fileInputRef} 
                name={name}
                type="file" 
                onChange={(e)=> updateRequest(e.target.files)}
                disabled={formContext.isLoading} />
                <button onClick={onAddFile}>Seleccionar Archivo</button>
                               
            </div>
            {(formContext.IsTouched || IsTouched ) && formContext.errors && formContext.errors.[name] &&(
                <p>{formContext.errors[name]}</p>
            )} 
        </div>
    );
                
}
