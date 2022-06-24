import { ButtonReserver } from "./Button"

export function Hello({id}){
    return (
        <div id={id}>
            <p>Salama! <br/>Bonjour! <br/>Hello!</p>
         </div>
    )
}

export function AproposTokytrans({id}){
    return(
    <>
        <div id={id}>
            <p>
                Toky transport est une coopérative de transport terrestre de voyageurs basée à
                Antananarivo, desservant plusieurs axes de la Grande Île dont les axes
                Antananarivo-Majunga et Antananarivo-Tamatave. <br/>
                    Elle dispose aussi d’agences dans les provinces et propose des prestations à
                    partir de 20 000 Ar. <br/>
                        Toky transport se distingue de ses concurrents de par la qualité de son parc
                        automobile.
                        Les véhicules « taxi brousse » utilisés sont récents et régulièrement
                        entretenus par des professionnels.
                </p>
                <ButtonReserver/>
            </div>
        </>
    )
}

export function SectionApropos(){
    return(
        <>
            <section className="a-propos">
                <Hello id="left" />
                <AproposTokytrans id="right" />
            </section>
            
        </>
    )
}