import { createContext, useEffect } from "react";
import { useState } from "react";
import { getToken } from "../../utils/getToken";


export const LoginContext = createContext();

export function LoginAuthProvider({children}) {
    const user = getToken()
    const [ login, setLogin ] = useState(user || null);

    useEffect(() => {
        const token = getToken();
        if (token && token.exp) {
            const expirationTimestamp = token.exp;
            const currentTimestamp = Math.floor(Date.now() / 1000);
      
            if (currentTimestamp <= expirationTimestamp) {
              setLogin(token);
            } else {
              // Si el token ha caducado, eliminarlo
              localStorage.removeItem("userToken");
              setLogin(null);
            }
        } else {
        setLogin(null);
        }

        window.addEventListener("storage", (e) => {
            if ( e.key == "userToken") {
                const updatedToken = getToken();

                if (updatedToken && updatedToken.exp) {
                  const expirationTimestamp = updatedToken.exp;
                  const currentTimestamp = Math.floor(Date.now() / 1000);
        
                  if (currentTimestamp <= expirationTimestamp) {
                    setLogin(updatedToken);
                  } else {
                    localStorage.removeItem("userToken");
                    setLogin(null);
                  }
                } else {
                  localStorage.removeItem("userToken");
                  setLogin(null);
                }
            }
        })
    }, [])

    return (
        <LoginContext.Provider value={{ login, setLogin }}>
            {children}
        </LoginContext.Provider>
    )
}