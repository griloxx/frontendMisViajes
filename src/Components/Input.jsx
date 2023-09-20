import { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";

export function Input({ label, type, name, clase, autocomplete, disabled }) {
  const [isTouched, setIsTouched] = useState(false);
  const formC = useContext(FormContext);

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
          disabled={formC.isLoading || disabled}
          className={clase}
          type={type}
          id={name}
          autoComplete={autocomplete ?? "on"}
          value={formC.formValue[name] ?? ""}
          onChange={(e) => updateRequest(e.target.value)}
        />
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
