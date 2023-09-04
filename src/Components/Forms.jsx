

export function Forms({clase, children, onSubmit}) {


    return(
        <form onSubmit={onSubmit} className={clase} >
            {children}
        </form>
    )
}