import { Link } from "react-router-dom"
import ListaLinks  from "../data/nav-links.json"


export function NavLinksMenu() {


    return (
        <nav >
            <ul className="nav-menu">
                {ListaLinks.map((link, i) => {
                    return (
                        <li className="li-link" key={link.name+i}>
                            <Link className="link" to={link.url}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}