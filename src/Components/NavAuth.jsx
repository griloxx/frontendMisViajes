import { Link } from "react-router-dom"
import  ListaLinksAuth  from "../data/nav-links-auth.json"


export function NavlinksAuth({onClick}) {


    return (
        <nav className="nav" >
            <ul className="nav-revert">
                {ListaLinksAuth.map((link, i) => {
                    return (
                        <li className="li-link" key={link.name+i}>
                            <Link onClick={onClick} id={link.id} className="link" to={link.url}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}