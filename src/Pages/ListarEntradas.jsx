export function ListarEntradas({user, setUser}) {

    const handleLogout = ()=> {
        setUser([])
    }

    return (
        <div>
            <h1>Bienvenid@</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    )
}