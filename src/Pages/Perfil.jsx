import { useEffect, useState } from "react"
import "../Styles/perfil.css"
import { servicioConsultaEntrada } from "../Api/servicioConsultarPerfil"
import { API_HOST } from "../../utils/constants";
import avatar from "../imagenes/avatar.jpg";

export function Perfil() {
    const [ datos, setDatos ] = useState({});

    const diferenciaTime = datos.create_date ? new Date() - new Date(datos.create_date) : 0;

    const dias = Math.floor(diferenciaTime / (1000 * 60 * 60 * 24));

    useEffect(() => {
        
        async function consulta() {
            const consulta = await servicioConsultaEntrada();
            setDatos(consulta.data)
        }
        consulta();
        
    }, [])

    return (
        <main className="main-perfil">
            <section className="contenedor-perfil">
                <div>
                    <img className="img-perfil" src={datos.avatar ? API_HOST + "/" + datos.avatar : avatar} alt="Usuario" />
                </div>
                <div>
                    <h2>Datos Usuario</h2>
                </div>
                <div>
                    <p>Nombre:<span>{datos.name}</span></p>
                </div>
                <div>
                    <p>Email:<span>{datos.email}</span></p>
                </div>
                <div>
                    <p>Usuario desde hace:<span>{dias}</span></p>
                </div>
            </section>
        </main>
    )
}