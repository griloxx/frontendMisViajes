import { Link } from "react-router-dom"
import ListaLinks  from "../data/nav-links.json"
import { Icon } from "./icons"


export function NavLinksMenu({onClick}) {


    return (
        <nav >
            <ul className="nav-menu">
                {ListaLinks.map((link, i) => {
                    return (
                        <li className="li-link" key={link.name+i}>
                            <div>
                                <Link onClick={onClick} className="link" to={link.url}>{link.name}
                                    <Icon icono={link.icono} />
                                </Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}