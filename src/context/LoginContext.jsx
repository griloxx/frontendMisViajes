import { createContext, useEffect } from "react";
import { useState } from "react";
import { getToken } from "../../utils/getToken";


export const LoginContext = createContext();

export function LoginAuthProvider({children}) {
    const [ login, setLogin ] = useState(null);

    useEffect(() => {
        
        setLogin(getToken());

        window.addEventListener("storage", (e) => {
            if ( e.key == "userToken") {
                setLogin(getToken());
            }
        })
    }, [])

    return (
        <LoginContext.Provider value={{ login, setLogin }}>
            {children}
        </LoginContext.Provider>
    )
}