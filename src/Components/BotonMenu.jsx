import { useState } from "react";
import { Icon } from "./icons";

export function BotonMenu(menuAbierto) {
  const [icono, setIcono] = useState("tsunami");

  const handleClick = () => {
    if (icono === "tsunami") {
      setIcono("sweep");
    } else {
      setIcono("menu");
    }
  };

  return (
    <div className="botonMenu">
      <button onClick={handleClick}>
        <Icon
          name={menuAbierto ? "tsunami" : "sweep"}
          style={{
            fontSize: "50px",
          }}
        />
      </button>
    </div>
  );
}
