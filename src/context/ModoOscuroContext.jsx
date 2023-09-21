import { createContext, useEffect, useState } from "react";

export const ModoOscuroContext = createContext();
export function ModoOscuroProvider({ children }) {
  const [modoOscuro, setModoOscuro] = useState(false);
  useEffect(() => {
    const body = document.getElementById("body");
    !modoOscuro
      ? body.classList.add("oscuro")
      : body.classList.remove("oscuro");
  }, [modoOscuro]);
  return (
    <ModoOscuroContext.Provider value={{ modoOscuro, setModoOscuro }}>
      {children}
    </ModoOscuroContext.Provider>
  );
}
