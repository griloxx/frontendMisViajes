import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";


export function Input({
  label,
  type,
  name,
  clase,
  autocomplete,
}) {

  const [ isTouched, setIsTouched ] = useState(false);
  const formC = useContext(FormContext);

  function updateRequest(value) {
    if(!isTouched) {
      setIsTouched(true);
    }
    
    formC.updateFormValue({
      [name]: value,
    })
  }



  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className={clase}
        type={type}
        id={name}
        autoComplete={autocomplete ?? "on"}
        value={formC.formValue[name] ?? ""}
        onChange={(e) => updateRequest(e.target.value)}
      />
    </>
  );
}
