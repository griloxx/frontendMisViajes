import ListaLinksAuth from "../data/nav-links-auth.json";
import { Link } from "react-router-dom";
import { Icon } from "./icons";

export function NavLinksMenuAuth({ onClick, manejarElCambioModo, modoOscuro }) {
  return (
    <nav>
      <ul className="nav-menu">
        {ListaLinksAuth.map((link, i) => {
          return (
            <li className="li-link" key={link.name + i}>
              <div>
                <Link
                  onClick={onClick}
                  id={link.id}
                  className="link"
                  to={link.url}
                >
                  {link.name}
                  <Icon icono={link.icono} />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="boton-modos-noche" onClick={manejarElCambioModo}>
        <div className={modoOscuro ? "modos" : "modos modos-oscuros"}></div>
      </div>
    </nav>
  );
}
