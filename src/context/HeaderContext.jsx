import { createContext, useState } from "react";


export const HeaderContext = createContext();

export function HeaderProvider({children}) {

    const [header, setHeader] = useState(true);


    return (
        <HeaderContext.Provider value={{header, setHeader}}>
            {children}
        </HeaderContext.Provider>
    )
}