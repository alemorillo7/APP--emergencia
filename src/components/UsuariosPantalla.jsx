import MapView from "./MapView";
import { NavBar } from "./NavBar";



export const UsuariosPantalla = () => {


  
 

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
  );
};
