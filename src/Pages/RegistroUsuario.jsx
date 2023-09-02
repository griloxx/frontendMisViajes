import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { servicioRegistroUsuario } from "../Api/servicioRegistroUsuario";

export const RegistroUsuario = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass1, setPass1] = useState();
  const [pass2, setPass2] = useState();
  const [avatar, setAvatar] = useState();
  const [error, setError] = useState();

  const handleForm = async (e)={
    e.preventDefault(),
    setError("");
    
    if (pass1 !== pass2){
        setError("La contraseña no coincide")

        return;

    }
    try{
        await servicioRegistroUsuario
        (email, password: pass1)
        navigate("/login")
    }catch(error){
        setError(error.message)
    }

  }


  return (
    <section>
      <h1>Registro</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Nombre de ususario</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="pass1">Contraseña</label>
        <input
          type="pass1"
          id="pass1"
          name="pass1"
          required
          onChange={(e) => setPass1(e.target.value)}
        />
        <label htmlFor="pass2">Comprobar contraseña</label>
        <input
          type="pass2"
          id="pass2"
          name="pass2"
          required
          onChange={(e) => setPass2(e.target.value)}
        />
        <label htmlFor="avatar">Foto Avatar</label>
        <input
          type="image"
          id="avatar"
          name="avatar"
          onChange={(e) => setAvatar(e.target.value)}
        />
        <button>Registro</button>
      </form>
    </section>
  );
};
