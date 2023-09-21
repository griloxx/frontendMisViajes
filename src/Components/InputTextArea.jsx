import { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";

export function InputTextArea({ label, name, clase, disabled, maxChars }) {
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
      <div className="div-text-area">
        <textarea
          disabled={formC.isLoading || disabled}
          className={clase}
          id={name}
          name={name}
          value={formC.formValue[name] ?? ""}
          onChange={(e) => updateRequest(e.target.value)}
        />
        {maxChars && (
          <p>
            {formC.formValue[name]?.length ?? 0} / {maxChars}
          </p>
        )}
        {(formC.isTouched || isTouched) &&
          formC.errors &&
          formC.errors[name] &&
          !formC.isLoading && (
            <p className="error-form">{formC.errors[name]}</p>
          )}
      </div>
    </>
  );
}
