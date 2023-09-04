import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../src/context/LoginContext";


export function useGetLogin() {
    const {login} = useContext(LoginContext)
    const navigate = useNavigate();
    useEffect(() => {
      if(!login) {
          navigate("/")
      }
    }, [login])
}