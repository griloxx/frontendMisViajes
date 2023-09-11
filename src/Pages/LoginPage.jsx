import Joi from "joi";
import "../Styles/LoginPage.css"
import { Input } from "../Components/Input";
import { Forms } from "../Components/Forms";
import { LoginContext } from "../context/LoginContext";
import { useContext, useState } from "react";
import { servicioLoginUsuario } from "../Api/servicioLoginUsuario";
import { useToast } from "../../Hooks/useToast";

const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).max(20).required(),
});

export function LoginPage() {
    const {login} = useContext(LoginContext);
    const {email} = login || {};
    const { toastData, showToast } = useToast();

    async function onSubmit(servicioLoginUsuario) { 
        showToast(0, "", "");
    const loginUsuario = await servicioLoginUsuario(formValue);

    if (loginUsuario.status == "ok") {

        setlogin(loginUsuario.data);

        showToast(3000, "exito", loginUsuario.message);

    } else {

        showToast(3000, "error", loginUsuario.message);

    }
    }

    return (
        <main className="log-u">
            <section className="section-log-u">
                <h2 className="heading2-log-u">Iniciar sesión</h2>
                
                <Forms schema={schema} className="form-log-u" onSubmit={onSubmit} initialValue={email}>
                    <div className="div-form-log">
                        <Input
                            name={"email"}
                            clase={"input"}
                            type={"email"}
                            label={"Email:"}
                            autocomplete={"on"}                            
                        />

                        <Input
                            name={"password"}
                            clase={"input"}
                            type={"password"}
                            label={"Password:"}
                            autocomplete={"off"}                            
                        />
                    </div>
                </Forms>
            </section>
        </main>
    );
};