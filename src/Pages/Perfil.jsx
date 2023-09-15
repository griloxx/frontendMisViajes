import { useEffect } from "react"
import "../Styles/perfil.css"
import { servicioConsultaEntrada } from "../Api/servicioConsultarPerfil"

export function Perfil() {


    useEffect(() => {
        
        async function consulta() {
            const datos = await servicioConsultaEntrada();
            console.log(datos)
        }
        consulta();
    }, [])

    return (
        <main className="main-perfil">

        </main>
    )
}