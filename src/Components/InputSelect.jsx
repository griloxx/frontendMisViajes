import { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";


export function InputSelect({label, name}) {

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
    useEffect(() => {
      if (!formC.isTouched) {
        setIsTouched(false);
      }
    }, [formC.isTouched]);

    return (
        <>
        <label htmlFor={name}>{label}</label>
        <select name={name} id={name} onChange={(e) => updateRequest(e.target.value) } value={formC.formValue[name] ?? ""}>
          <option value="">-----------------</option>
          <option value="Aventura">Aventura</option>
          <option value="Single">Single</option>
          <option value="Parejas">Parejas</option>
          <option value="Familia">Familia</option>
          <option value="Cultura">Cultura</option>
          <option value="Gastronomía">Gastronomia</option>
          <option value="Playa">Playa</option>
          <option value="Montaña">Montaña</option>
          <option value="Naturaleza">Naturaleza</option>
        </select>
        </>
    )
}