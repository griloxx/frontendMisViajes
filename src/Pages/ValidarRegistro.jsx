import { useEffect, useState } from "react";
import { servicioValidarUsuario } from "../Api/servicioValidarRegistro";
import { useParams } from "react-router-dom";
import "../Styles/ValidarRegistro.css";
export function ValidarRegistro() {
  const [isValid, setIsValid] = useState({
    isLoading: true,
    valid: false,
  });
  const { codigo } = useParams();
  useEffect(() => {
    const peticionApi = async (codigo) => {
      const validarUsuario = await servicioValidarUsuario(codigo);
      if (validarUsuario.status === "ok") {
        setIsValid((oldState) => {
          return {
            ...oldState,
            valid: true,
          };
        });
      }
    };
    peticionApi(codigo);
    setIsValid((oldState) => {
      return {
        ...oldState,
        isLoading: false,
      };
    });
  }, []);
  return (
    <main>
      <h1>Validar registro</h1>
      {isValid.valid ? (
        <p className="validacion-correcta">La validación fue exitosa.</p>
      ) : (
        <p className="validar-error">Error en la validación.</p>
      )}
    </main>
  );
}
