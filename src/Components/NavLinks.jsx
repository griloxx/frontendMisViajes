import { Link } from "react-router-dom";
import ListaLinks from "../data/nav-links.json";
import { Icon } from "./icons";

export function NavLinksMenu({ onClick, manejarElCambioModo, modoOscuro }) {
  return (
    <nav>
      <ul className="nav-menu">
        {ListaLinks.map((link, i) => {
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
