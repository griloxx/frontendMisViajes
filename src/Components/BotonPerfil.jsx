import React, { useContext } from "react";
import avatar from "../imagenes/avatar.jpg";
import { Link } from "react-router-dom";
import { API_HOST } from "../../utils/constants";
import { LoginContext } from "../context/LoginContext";

export function BotonPerfil({onClick, avatarImg}) {
  const {login} = useContext(LoginContext);
  let rutaImagen;
  if(avatarImg && avatarImg[0] + avatarImg[1] === "ht") {
    rutaImagen = avatarImg;
  } else {
    rutaImagen = API_HOST + "/" + avatarImg ;
  }

  return (
    <Link to={login ? "/perfil" : "/registro"} className="botone-perfil">
      <img key={rutaImagen} onClick={onClick} className="imagen-avatar" src={avatarImg ? rutaImagen : avatar} alt="avatar" />
    </Link>
  );
}
