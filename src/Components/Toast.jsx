import React, { useState, useEffect } from "react";

export function Toast({ toastData }) {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    
    if (toastData) {
      setIsVisible(true);
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, toastData.tiempo);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [toastData]);

  let tiempo;
  let modelo;
  let texto;

  if (toastData) {
    tiempo = toastData.tiempo / 1000;
    modelo = toastData.modelo;
    texto = toastData.texto;
  }

  return (
    isVisible && (
      <div className="toast-fix">
        <div className={`toast-div ${toastData.modelo}`}>
          <p className="toast-titulo">{modelo === "error" ? "Error" : "Exito"}</p>
          <p className={"toast"}>{texto}</p>
          <div style={{ animationDuration: tiempo + "s" }} className="toast-barra"></div>
        </div>
      </div>
    )
  );
}