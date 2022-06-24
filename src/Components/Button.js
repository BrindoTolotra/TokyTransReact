export function ButtonReserver(){
    return(
        <>
            <button className="btn btn bouton-reserver">Réserver</button>
        </>
    )
}

export function ButtonLight({children}){
    return(
        <>
            <button className="btn btn-light">{children}</button >
        </>
    )
}