import "../Styles/LoginPage.css"
import { BotonSimple } from "../Components/BotonSimple"


export function LoginPage() {
    async function onSubmit(evt) {
        evt.preventDefault();

        const response = await fetch("http://localhost:3000/usuarios/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            }),
        });
        const result = await response.json();
        if (result.sucess) {
            console.log(result.data.token);
        } else {
            console.log(result.error);
        }
    }

    return (
        <main className="loginUser">
            <section className="loginSection">
                <h1 className="loginTitle">Iniciar sesión</h1>

                <form className="loginForm" onSubmit={onSubmit}>
                    <div className="loginInput">
                        <input type="email" name="Email" id="email" 
                        value={Email}
                        onChange={e => setEmail(e.target.value)}
                        />

                        <input type="password" name="Password" id="password" 
                        value={Password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <BotonSimple>Iniciar sesión</BotonSimple>

                    <p>¿No tienes cuenta?.<a href="./RegistroUsuario.jsx">Regístrate</a>
                    </p>
                </form>

            
                {error && <p>Todos los campos son obligatorios</p>}
            </section>
        </main>
    );
}