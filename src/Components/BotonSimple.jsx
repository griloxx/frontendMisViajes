import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export function BotonSimple({ clase, children, onClick }) {
  const formC = useContext(FormContext);

  return (
    <button onClick={onClick} id="oculto" className={clase} disabled={formC.isLoading}>
      {children}
    </button>
  );
}
