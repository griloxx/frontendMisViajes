import { useContext } from "react";
import { FormContext } from "../context/FormContext";


export function BotonSimple({clase, children, onClick}) {
    const formC = useContext(FormContext)


    return(
        <button onClick={onClick}className={clase} disabled={formC.isLoading} >{children}</button>
    )
}