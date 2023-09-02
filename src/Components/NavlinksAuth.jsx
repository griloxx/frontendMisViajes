import  ListaLinksAuth  from "../data/nav-links-auth.json"
import { Link } from "react-router-dom"


export function NavLinksMenuAuth() {


    return (
        <nav>
            <ul className="nav-menu">
                {ListaLinksAuth.map((link, i) => {
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