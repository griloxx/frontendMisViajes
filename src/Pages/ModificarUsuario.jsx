import { BotonSimple } from "../Components/BotonSimple"
import { Forms } from "../Components/Forms"
import { Input } from "../Components/Input"
import "../Styles/ModificarUsuario.css"
import avatar from "../imagenes/avatar.jpg"


export function ModificarUsuario() {


    return(
        <main className="main mod-u" >
            <h2 className="heading2-mod-u">Modificar Perfil</h2>
            <Forms clase={"form-mod-u"} >
                <div className="div-form-inp">
                    <Input name={"name"} clase={"input"} type={"text"} label={"Nombre:"} autocomplete={"off"} />
                    <Input name={"password"} clase={"input"} type={"password"} label={"Password:"} autocomplete={"off"} />
                </div>
                <div className="div-form-img">
                    <Input name={"avatar"} clase={"hidden"} type={"file"} label={"Imagen de Perfil:"} />
                    <BotonSimple clase={"boton-simple"}>Seleccionar Archivo</BotonSimple>
                    <div className="imagen-perfil">
                        <img className="avatar-form" src={avatar} alt="avatar" />
                    </div>
                </div>
            </Forms>
            <div>
                <BotonSimple clase={"boton-simple"} >Enviar</BotonSimple>
            </div>
        </main>
        
    )
}