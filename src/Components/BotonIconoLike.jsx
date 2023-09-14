import { useContext, useEffect, useState } from "react";
import { servicioVotar } from "../Api/servicioVotar";
import { LoginContext } from "../context/LoginContext";

export function BotonIconoLike({icono, entrada}) {
  const {login} = useContext(LoginContext);
  const [votos, setVotos] = useState(false);

  async function onClickCorazon(id) {
    if(login) {
        const votar = await servicioVotar(id);
        if(votar.data !== 0){
          setVotos(true)
          entrada.votos ++
        } else {
            setVotos(false)
            entrada.votos > 0 && entrada.votos --
          }
        
    }
  }

  useEffect(() => {
    entrada && entrada.yaVotado && setVotos(true);

  }, [])

  return (
    <>
      <button onClick={() => onClickCorazon(entrada.id)} className={votos ? "corazon-phone votado" : "corazon-phone"} >
        <span className="material-symbols-outlined">{icono}</span>
      </button>
      <p>{entrada && entrada.votos}</p>
    </>
  );
}
