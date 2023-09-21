import { createContext, useEffect, useState } from "react";

export const ModoOscuroContext = createContext();
export function ModoOscuroProvider({ children }) {
  const [modoOscuro, setModoOscuro] = useState(true);
  useEffect(() => {
    const html = document.getElementById("html");
    !modoOscuro
      ? html.classList.add("oscuro")
      : html.classList.remove("oscuro");
  }, [modoOscuro]);
  return (
    <ModoOscuroContext.Provider value={{ modoOscuro, setModoOscuro }}>
      {children}
    </ModoOscuroContext.Provider>
  );
}
