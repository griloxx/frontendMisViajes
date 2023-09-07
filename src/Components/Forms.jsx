import { useState } from "react";

export function Forms({ clase, children, onSubmit, schema, initialValue }) {
  const [formState, setFormState] = useState({
    isTouched: false,
    isLoading: false,
    formValue: initialValue || {},
  });

  const [, errors] = validate(schema, formState.formValue);

  function updateFormValue(newFormValue) {
    setFormState((oldFormState) => {
      return {
        ...oldFormState,
        formValue: {
          ...oldFormState.formValue,
          ...newFormValue,
        },
      };
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    setFormState((oldFormState) => {
      return {
        ...oldFormState,
        isTouched: true,
        isLoading: true,
      };
    });

    const [isValid] = validate(schema, formState.formValue);

    if (!isValid) {
      return setFormState((oldFormState) => {
        return {
          ...oldFormState,
          isTouched: true,
          isLoading: false,
        };
      });
    }
    await onSubmit(formState.formValue);

    setFormState({
      isTouched: false,
      isLoading: false,
      formValue: {},
    });
  }

  return (
    <FormContext.Provider value={{ ...formState, errors, updateFormValue }}>
      <form onSubmit={onFormSubmit} className={clase}>
        {children}
      </form>
    </FormContext.Provider>
  );
}
