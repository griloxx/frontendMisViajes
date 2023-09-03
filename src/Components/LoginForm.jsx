import "../Styles/LoginForm.css"
import { useState } from "react"


export function LoginForm({setUser}) {
    const [ Name, setName] = useState("")
    const [ Password, setPassword] = useState("")

    //Error por si alguien no escribe alguno de los campos
    const [error, setError] = useState(false)

    //Para que al presionar el botón no se refresque la pantalla perdiendo los datos introducidos
    const handleSubmit = () => {
        e.preventDefault ()

        if(Name === "" || Password === ""){
            setError(true)
            return
        }

        setError(false)

        setUser([Name])

    }


    return(
        <section>
            <h1>Login</h1>

            <form className="LoginForm" onSubmit={handleSubmit}>
                <input type="text" 
                value={Name}
                onChange={e => setName(e.target.value)}
                />
                <input type="password"
                value={Password}
                onChange={e => setPassword(e.target.value)}
                />
                <button>Iniciar sesión</button>
            </form>

            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}