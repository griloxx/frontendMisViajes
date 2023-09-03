export function Home ({user, setUser}) {

    //Cerrar sesión
    const handleLogout = ()=> {
        setUser([])
    }

    return(
        <div>
            <h1>HOME</h1>
            <h2>Bienvenid@ {user} </h2>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    )
}