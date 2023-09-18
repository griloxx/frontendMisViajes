import { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";


export function InputRadio({label, label2, label3, name, clase, value1, value2}) {

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
        <div className={`div-${clase}`}>
          <label >{label}</label>
          <input id={`radio-${value1}`} className={clase} type="radio" name={name} value={value1}  onChange={(e) => updateRequest(e.target.value)} checked={formC.formValue[name] === value1} />
          <label htmlFor={`radio-${value1}`}>{label2}</label>
          <input
            id={`radio-${value2}`}
            className={clase}
            type="radio"
            name={name}
            value={value2}
            onChange={(e) => updateRequest(e.target.value)}
            checked={formC.formValue[name] === value2}
          />
          <label htmlFor={`radio-${value2}`}>{label3}</label>
        </div>
    )
}