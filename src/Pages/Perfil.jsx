import { useEffect, useState } from "react"
import "../Styles/perfil.css"
import { servicioConsultaEntrada } from "../Api/servicioConsultarPerfil"
import { API_HOST } from "../../utils/constants";
import avatar from "../imagenes/avatar.jpg";
import { Icon } from "../Components/icons";
import { Link } from "react-router-dom";
import { useGetLogin } from "../../Hooks/useGetLogin";
import { Entrada } from "../Components/Entrada";

export function Perfil() {
    const [ datos, setDatos ] = useState({});
    useGetLogin();
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
            <div className="sup-contenedor-perfil">
                <section className="contenedor-perfil">
                    <div>
                        <img className="img-perfil" src={datos.avatar ? API_HOST + "/" + datos.avatar : avatar} alt="Usuario" />
                    </div>
                    <div className="perfil-heading">
                        <h1>Datos Usuario</h1>
                    </div>
                    <div className="perfil-datos">
                        <p>Nombre:<span className="perfil-texto">{datos.name}</span></p>
                    </div>
                    <div className="perfil-datos">
                        <p>Email:<span className="perfil-texto">{datos.email}</span></p>
                    </div>
                    <div className="perfil-datos">
                        <p>Usuario desde hace:<span className="perfil-texto">{dias} días</span></p>
                    </div>
                    <Link className="perfil-editar" to={"/modificar-usuario"}>
                        <Icon icono={"Edit"} />
                    </Link>
                </section>
            </div>
            {datos?.entradas && (
                <Entrada listaEntradas={datos.entradas} />
            )}
        </main>
    )
}