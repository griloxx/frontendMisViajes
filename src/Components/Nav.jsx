import { Link } from "react-router-dom"
import ListaLinks  from "../data/nav-links.json"


export function NavLinks() {


    return (
        <nav className="nav" >
            <ul className="nav-revert">
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