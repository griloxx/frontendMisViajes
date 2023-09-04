import { useContext } from "react";
import { LoginContext } from "../src/context/LoginContext";
import jwtDecode from "jwt-decode";


export function useLogin() {
    const { setLogin } = useContext(LoginContext);

    return ( token ) => {
        localStorage.setItem("userToken", token);
        const user = jwtDecode(token);
        setLogin(user);
    }


}