

export function BotonSimple({clase, children, onClick}) {


    return(
        <button onClick={onClick}className={clase}>{children}</button>
    )
}