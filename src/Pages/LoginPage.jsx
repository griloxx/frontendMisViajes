import Joi from "joi";
import "../Styles/LoginPage.css";
import { Input } from "../Components/Input";
import { Forms } from "../Components/Forms";
import { servicioLoginUsuario } from "../Api/servicioLoginUsuario";
import { useToast } from "../../Hooks/useToast";
import { Toast } from "../Components/Toast";
import { useLogin } from "../../Hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "../Components/GoogleLogin";
import { schemaLogin } from "../../utils/schemas";

export function LoginPage() {
  const setlogin = useLogin();
  const { toastData, showToast } = useToast();
  const navigate = useNavigate();
  const schema = schemaLogin;

  async function onSubmit(formValue) {
    showToast(0, "", "");

    const loginUsuario = await servicioLoginUsuario(formValue);

    if (loginUsuario.status == "ok") {
      setlogin(loginUsuario.data.token);

      showToast(1500, "exito", loginUsuario.message);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      showToast(3000, "error", loginUsuario.message);
    }
  }

  return (
    <GoogleOAuthProvider clientId="<688034065812-8gifiqs9opmc9uori870ubef2fhjoga1.apps.googleusercontent.com>">
      <main className="log-u">
        <section className="section-log-u">
          <h2 className="heading2-log-u">Iniciar sesión</h2>
          <div className="div-border-form">
            <Forms schema={schema} onSubmit={onSubmit}>
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
          </div>
          <App />
        </section>
        <Toast toastData={toastData} />
      </main>
    </GoogleOAuthProvider>
  );
}
