import { useContext, useEffect, useRef, useState } from "react";
import { FormContext } from "../context/FormContext";

export function Input({ label, type, name, clase, autocomplete, disabled }) {
  const [isTouched, setIsTouched] = useState(false);
  const [ checked, setChecked ] = useState(false);
  const formC = useContext(FormContext);
  const passwordRef = useRef(null);
  const checkBoxRef = useRef(null);

  function onChangeInput() {
    if(checkBoxRef.current.checked) {
      passwordRef.current.type = "text"
    } else {
      passwordRef.current.type = "password"
    }
    setChecked(!checked);
  }
  

  function updateRequest(value) {
    if (!isTouched) {
      setIsTouched(true);
    }

    formC.updateFormValue({
      [name]: value,
    });
  }
  useEffect(() => {
    if (!formC.isTouched) {
      setIsTouched(false);
    }
  }, [formC.isTouched]);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="caja-comentarios-input">
        <input
          ref={passwordRef} 
          disabled={formC.isLoading || disabled}
          className={clase}
          type={type}
          id={name}
          autoComplete={autocomplete ?? "on"}
          value={formC.formValue[name] ?? ""}
          onChange={(e) => updateRequest(e.target.value)}
        />
        {type === "password" && <input ref={checkBoxRef} onClick={onChangeInput} className={!checked ? "ojo" : "ojo-abierto"} type="checkbox">
        </input>}
        {(formC.isTouched || isTouched) &&
          formC.errors &&
          formC.errors[name] &&
          !formC.isLoading && (
            <div className="div-error">
              <p className="error-form">{formC.errors[name]}</p>
            </div>
          )}
      </div>
    </>
  );
}
