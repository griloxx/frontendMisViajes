import React from "react";
import avatar from "../imagenes/avatar.jpg";
import { Link } from "react-router-dom";
import { API_HOST } from "../../utils/constants";
export function BotonPerfil({onClick, avatarImg}) {
  const rutaImagen = API_HOST + "/" + avatarImg;
  return (
    <Link to={"/modificar-usuario"} className="botone-perfil">
      <img onClick={onClick} className="imagen-avatar" src={avatarImg ? rutaImagen : avatar} alt="avatar" />
    </Link>
  );
}
