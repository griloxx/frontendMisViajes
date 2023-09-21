import { useContext, useEffect } from "react";
import { SearchContext } from "../src/context/searchContext";


export function useResetSearch() {
    const {setSearchParams, lastSearch, setLastSearch} = useContext(SearchContext);

    

    return ( formValue ) => {
        if(!formValue) formValue = {};
        setSearchParams(new URLSearchParams(formValue));
        setLastSearch(!lastSearch);
    }
  }