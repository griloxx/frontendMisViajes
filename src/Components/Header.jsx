import { BotonMenu } from "./BotonMenu";
import { BotonPerfil } from "./BotonPerfil";
import "../styles/header.css";
import { NavLinksMenu } from "./NavLinks";
import { NavLinksMenuAuth } from "./NavlinksAuth";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { NavLinks } from "./Nav";
import { NavlinksAuth } from "./NavAuth";
import { useLogout } from "../../Hooks/useLogout";
import imgLogo from "../imagenes/LogoImg.png";
import { HeaderContext } from "../context/HeaderContext";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/searchContext";

export function Header() {
  const { login } = useContext(LoginContext);
  const [menu, setMenu] = useState(false);
  const { header, setHeader } = useContext(HeaderContext);
  const navigate = useNavigate("/");
  const setLogout = useLogout();
  const { setSearchParams, lastSearch, setLastSearch } =
    useContext(SearchContext);
  const [modoOscuro, setModoOscuro] = useState(false);

  const manejarElCambioModo = () => {
    setModoOscuro(!modoOscuro);
  };

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
    }

    window.addEventListener("scroll", efectoScroll);

    return () => {
      window.removeEventListener("scroll", efectoScroll);
    };
  }, []);

  function onClick(e) {
    if (e.target.id === "logout") {
      e.preventDefault();
      setLogout(null);
    }
    if (e.target.id === "home" || e.target.id === "logo") {
      e.preventDefault();
      setSearchParams({});
      setLastSearch(!lastSearch);
      navigate("/");
    }

    setMenu(false);
  }

  return (
    <>
      <header className={header ? "header" : "header header-fix"}>
        <BotonMenu menuOpen={{ menu, setMenu }} />
        <div className="div-logo">
          <Link onClick={onClick} to={"/"}>
            <img
              id="logo"
              className="logo-img"
              src={imgLogo}
              alt="Mis Viajes"
            />
          </Link>
        </div>
        {!login && <NavLinks onClick={onClick} />}
        {login && <NavlinksAuth onClick={onClick} />}
        <div className="boton-modo-noche">
          <div className={`Header ${modoOscuro ? "modo-oscuro" : ""}`}>
            <button onClick={manejarElCambioModo}>
              {/*{modoOscuro ? "modo-claro" : "modo-oscuro"}{" "}*/}
            </button>
          </div>
        </div>
        <BotonPerfil
          onClick={onClick}
          avatarImg={login?.avatar && login.avatar}
        />
      </header>
      {menu && <div onClick={onClick} className="bg-black"></div>}

      {menu && !login && <NavLinksMenu onClick={onClick} />}
      {menu && login && <NavLinksMenuAuth onClick={onClick} />}
    </>
  );
}
