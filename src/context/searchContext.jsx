import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";


export const SearchContext = createContext();


export function SearchProvider({children}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const [lastSearch, setLastSearch] = useState(false);


    return (
        <SearchContext.Provider value={{searchParams, setSearchParams, lastSearch, setLastSearch}}>
            {children}
        </SearchContext.Provider>
    )
}
