import { ButtonLight } from "./Button";

export function Card({id,children}){
    return (
        <>
            <div id={id}>
                {children}
            </div>
        </>
    )
}

export function SectionQuality(){
    return(
        <>
        <section className="quality">
                <Card id="gauche">
                    <h7>TOKY TRANSPORT</h7>
                    <p>Livraison de votre colis partout à Madagascar</p>
                    <ButtonLight>Faire livrer mon colis</ButtonLight>
                </Card>
                <Card id="droite">
                    <Card id="one">
                        <p>Très sécurisé</p><br />
                        <img src="image/secure.png" alt="image" />
                    </Card>
                    <Card id="two">
                        <p>Qualité de service</p><br />
                        <img src="image/1851036.png" alt="image" />
                    </Card>
                    <Card id="three">
                        <p>Service rapide</p> <br />
                        <img src="image/kisspng-stopwatch-drawing-stock-photography-clip-art-5b0cf117e53b64.988121451527574807939.png" alt="image" />
                    </Card>
                    <Card id="four">
                        <p>95% des clients satisfaits</p>
                        <img src="image/73993545-pouce-icône-raster-symbole-noir-plat-le-pictogramme-est-isolé-sur-un-fond-blanc-conçu-pour-les-inter.webp" alt="image" />
                    </Card>
                </Card>
                <Card id="trois"></Card>
        </section>
        
        </>
    )
}