import { useEffect, useState } from "react";


export function useToast({tiempo, modelo, texto}) {
    const [ visible, setVisible ] = useState(true)


    useEffect(() => {
        const time = setTimeout(() => {
        setVisible(false);
        
        }, tiempo);
    return () => {
        clearTimeout(timer);
    }

    }, [tiempo])

    

    return visible ? (
        <div className="toast-div">
            <p className="toast-titulo">{modelo === "error" ? "Error" : "Exito"}</p>
            <p className={`toast ${modelo}`}>{texto}</p>
        </div>
    ) : null;

}