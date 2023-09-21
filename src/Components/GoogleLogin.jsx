import React, { useState, useEffect, useContext } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { servicioLoginUsuario } from '../Api/servicioLoginUsuario';
import { servicioRegistroUsuario } from '../Api/servicioRegistroUsuario';
import { useNavigate } from 'react-router';
import { useLogin } from '../../Hooks/useLogin';

function App({showToast}) {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const navigate = useNavigate();
    const setlogin = useLogin();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    
    async function registroGoogle() {
        const resultado = await servicioRegistroUsuario({
            name: profile.name,
            email: profile.email,
            password: profile.id,
            avatar: profile.picture
        })
        if (resultado.status == "ok") {
            showToast(6000, "exito", resultado.message);
          } else {
            showToast(6000, "error", resultado.message);
          }
        
    }
    async function loginGoogle() {
        const resultado = await servicioLoginUsuario({
            email: profile.email,
            password: profile.id,
        })
        if (resultado.status == "ok") {
            showToast(3000, "exito", resultado.message);
            setlogin(resultado.data.token);
            setTimeout(() => {
                navigate("/");
            }, 3000);
            
          } else {
            showToast(3000, "error", resultado.message);
          }
        
    }

    useEffect( () => {
       
        
        if(profile.id) {
            if(window.location.pathname === "/registro"){
                registroGoogle()
            } else {
                loginGoogle();
            }
        }

    }, [profile])

    useEffect(
        () => {
            if (user?.access_token) {
                
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div>
            <button onClick={() => login()}>Sign in with Google 🚀 </button>
        </div>
    );
}
export default App;