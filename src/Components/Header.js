import { LinkNull } from "./Link"
import { Logo } from "./Logo"

export function Navbar(){
    return (
        <div id="navbar">
            <div id="navbar1">
                <Logo />
            </div>
            <div className="a"><LinkNull>Acceuil</LinkNull></div>
            <div className="a"><LinkNull>Réservation</LinkNull></div>
            <div className="a"><LinkNull>Contacts</LinkNull></div>
            <div className="a connect" ><LinkNull>Se connecter</LinkNull></div>
        </div>
    )
}

export function Head(){
    return (
        <div id="head">
            <h1>Transport Toky</h1>
            <p>Voyagez loin, dans le confort et la sécurité</p>
        </div>
    )
}

export function Header(){
    return (
        <header>
            <Navbar/>
            <Head/>
        </header>
    )
}