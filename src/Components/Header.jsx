import { BotonMenu } from "./BotonMenu";
import { BotonPerfil } from "./BotonPerfil";
import "../styles/header.css";
import { NavLinksMenu } from "./NavLinks";
import { NavLinksMenuAuth } from "./NavlinksAuth";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { NavLinks } from "./Nav";
import { NavlinksAuth } from "./NavAuth";
import logo from "../../favicon.svg"
import { useLogout } from "../../Hooks/useLogout";

export function Header() {
  const { login } = useContext(LoginContext);
  const [ menu, setMenu ] = useState(false);
  const [ header, setHeader ] = useState(true);
  const setLogout = useLogout();

  useEffect(() => {
    let prevScroll = window.scrollY;
    
    function efectoScroll() {
      const actualScroll = window.scrollY;

      if (actualScroll < prevScroll) {
        setHeader(true);
      } else {
        actualScroll > 80 && setHeader(false);
      }
     prevScroll = actualScroll;
    };

    window.addEventListener("scroll", efectoScroll);

    return () => {
      window.removeEventListener("scroll", efectoScroll);
    };
      
  }, [])

  function onClick(e) {
    if(e.target.id == "logout") {
      e.preventDefault();
      setLogout(null);
    }
    setMenu(false);
  }

  return (
    <>
      <header className={header ? "header" : "header header-fix"}>
        <BotonMenu menuOpen={{menu, setMenu}} />
        <div className="div-logo">
        <img className="logo" src={logo} alt="Mis Viajes" />
        <h1 className="heading1">Mis Viajes</h1>
        </div>
        {!login && <NavLinks />}
        {login && <NavlinksAuth onClick={onClick} />}
        <BotonPerfil onClick={onClick} avatarImg={login?.avatar && login.avatar} />
      </header>
      {menu && <div onClick={onClick} className="bg-black"></div>}
      
      {menu && !login && <NavLinksMenu onClick={onClick} />}
      {menu && login && <NavLinksMenuAuth onClick={onClick} />}
    </>
  );
}
