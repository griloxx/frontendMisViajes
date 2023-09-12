import Joi from "joi";
import "../Styles/LoginPage.css";
import { Input } from "../Components/Input";
import { Forms } from "../Components/Forms";
import { servicioLoginUsuario } from "../Api/servicioLoginUsuario";
import { useToast } from "../../Hooks/useToast";
import { Toast } from "../Components/Toast";
import { useLogin } from "../../Hooks/useLogin";
import { useNavigate } from "react-router-dom";

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).max(20).required(),
});

export function LoginPage() {
  const setlogin = useLogin();
  const { toastData, showToast } = useToast();
  const navigate = useNavigate();
  async function onSubmit(formValue) {
    showToast(0, "", "");

    const loginUsuario = await servicioLoginUsuario(formValue);

    if (loginUsuario.status == "ok") {

      setlogin(loginUsuario.data.token);

      showToast(3000, "exito", loginUsuario.message);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      showToast(3000, "error", loginUsuario.message);
    }
  }

  return (
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
      </section>
      <Toast toastData={toastData} />
    </main>
  );
}
