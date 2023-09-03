import { LoginForm } from '../Components/LoginForm'
import { Home } from './Home'
import { useState } from 'react'
import '../Styles/index.css'

function Login() {

    //Enviar a la pagina Home si el Name y Password son correctas
    const [user, setUser] =useState([])

    return (
        <div className='Login'>{
            user.length > 0
            ? <LoginForm setUser={setUser} />
            : <Home user={user} setUser={setUser}/>
        }
            
        </div>
    )
}

export default Login