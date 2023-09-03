import Joi from "joi";
import { useNavigate } from "react-router-dom";
import { servicioRegistroUsuario } from "../Api/servicioRegistroUsuario";
import { Input } from "../Components/Input";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  avatar: Joi.string(),
});

export const RegistroUsuario = () => {
  const navigate = useNavigate();

  async function enviarRegistro() {
    const resultado = await servicioRegistroUsuario(requerirObjeto);
    if (resultado.success) {
      navigate(`/validar-email?email=${requerirObjeto.email}`);
    } else {
      throw new Error(error.me);
    }
  }

  return (
    <section>
      <h1>Registro</h1>
      <form onSubmit={enviarRegistro}>
        <Input label={"Nombre:"} type={"text"} name={"name"} clase={"input"} />
        <label htmlFor="name">Nombre de ususario</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="avatar">Foto Avatar</label>
        <input type="image" id="avatar" name="avatar" />
        <button className="boton-simple" type="submit">
          Registro
        </button>
      </form>
    </section>
  );
};
