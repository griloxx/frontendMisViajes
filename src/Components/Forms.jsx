

export function Forms({clase, children}) {


    return(
        <form className={clase} >
            {children}
        </form>
    )
}