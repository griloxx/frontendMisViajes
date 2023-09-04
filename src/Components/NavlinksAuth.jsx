import  ListaLinksAuth  from "../data/nav-links-auth.json"
import { Link } from "react-router-dom"
import { Icon } from "./icons"


export function NavLinksMenuAuth({onClick}) {


    return (
        <nav>
            <ul className="nav-menu">
                {ListaLinksAuth.map((link, i) => {
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