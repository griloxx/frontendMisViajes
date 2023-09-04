import React from "react";
import avatar from "../imagenes/avatar.jpg";
import { Link } from "react-router-dom";
export function BotonPerfil({onClick}) {
  return (
    <Link to={"/modificar-usuario"} className="botone-perfil">
      <img onClick={onClick} className="imagen-avatar" src={avatar} alt="avatar" />
    </Link>
  );
}
