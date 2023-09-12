import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { servicioConsultaEntrada } from "../Api/servicioCansultaEntrada";
import { Entrada } from "../Components/Entrada";

export function ConsultarEntrada() {
    const { id } = useParams();

    const [entrada, setEntrada] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() =>{
        const consulta = async (id) => {
            const resultado = await servicioConsultaEntrada(id);
            setIsLoading(false)
            if(resultado.data) {
                console.log(resultado.data);
                setEntrada(resultado.data);
            } else {
                console.log(resultado.message)
            }
        };
        consulta(id)
    },[id])

    return {
        <main>
            {!isLoading && 
                <>
                <article>
                    {entrada((entrada) => {
                        return <Entrada entrada ={entrada} />
                    })}
                </article>
                    
                </>}
        </main>
    }

}