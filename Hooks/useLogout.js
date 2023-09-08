import { useContext } from "react";
import { LoginContext } from "../src/context/LoginContext";


export function useLogout() {
    const { setLogin } = useContext(LoginContext);
    return () => {
        localStorage.removeItem("userToken");
        setLogin(null);
    }
}