import { NavBar } from "./NavBar"
import MapView from "./MapView"

export const PantallaGeneral = () => {
  return (
    <>
        <div className="usuarios-container">
    <div className="navBar-usuarios">

    <NavBar></NavBar>
    </div>
    <div className="mapa-usuarios">
    <MapView></MapView>
    </div>
    </div>
    
    </>
  )
}
