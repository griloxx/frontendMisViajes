import "../Styles/LoginPage.css"
import { BotonSimple } from "../Components/BotonSimple"
import { Input } from "../Components/Input";
import { Forms } from "../Components/Forms";
import { LoginContext } from "../context/LoginContext";
import { useContext, useState } from "react";

export function LoginPage() {
    const { login } = useContext(LoginContext);

    const { formState, setFormState } =useState ({
        isTouched: false,
        isLoading: false,
        formValue: {
            email: "",
            password: "",
        },
    });

    const { formValue } = formState;

    const handleChange = (evt) => {
        const {name, value } = evt.target;
        setFormState({
            ...formState,
            formState: {
                ...formValue,
                [name]: value,
            }
        })
    }

    async function onSubmit(evt) {
        evt.preventDefault();

        const response = await fetch("http://localhost:3000/usuarios/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formValue.email,
                password: formValue.password,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result.data.token);
        } else {
            console.log(result.error);
        }
    }

    return (
        <main className="loginUser">
            <h2 className="loginTitle">Iniciar sesión</h2>
                <Forms className="loginForm" onSubmit={onSubmit}>
                    <div className="div-form-log">
                        <Input
                            name={"email"}
                            clase={"input"}
                            type={"email"}
                            label={"Email:"}
                            autocomplete={"on"}
                            value={formValue.email}
                            onChange={handleChange}
                        />

                        <Input
                            name={"password"}
                            clase={"input"}
                            type={"password"}
                            label={"Password:"}
                            autocomplete={"off"}
                            value={formValue.password}
                            onChange={handleChange}
                        />
                    </div>
                </Forms>

                <div>
                    <BotonSimple onClick={onSubmit} clase={"boton-simple"}>
                        Iniciar sesión
                    </BotonSimple>
                </div>

                <p>¿No tienes cuenta?.<a href="./RegistroUsuario.jsx">Regístrate</a>
                </p>

                {error && <p>Todos los campos son obligatorios</p>}
        </main>
    );
}