import { BotonMenu } from "./BotonMenu";
import { BotonPerfil } from "./BotonPerfil";
import "../styles/header.css";
import { NavLinksMenu } from "./NavLinks";
import { NavLinksMenuAuth } from "./NavlinksAuth";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";


export function Header() {

  const login = useContext(LoginContext)


  return (
    <>
      <header className="header">
        <BotonMenu />
        <h1>Mis Viajes</h1>
        <BotonPerfil />
      </header>
      {/* {!login && <NavLinksMenu />}
      {login && <NavLinksMenuAuth />} */}
    </>
  );
}
