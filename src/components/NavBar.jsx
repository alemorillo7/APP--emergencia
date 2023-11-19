import { NavLink, Link, useNavigate,  } from "react-router-dom"
import { useState } from "react"
import {obtenerAlertas} from "../hooks/grillaAlertas"

export const NavBar = () => {

const history= useNavigate()

  const handleSalir= ()=>{
    localStorage.removeItem(`token`)
// Navega a la ruta '/' utilizando la función history
    history(`/`)
  }

  const [alertas, setalertas] = useState([])

  const conteoAlertas=()=>{
    const nuevasAlertas= obtenerAlertas();
    setalertas(nuevasAlertas)
    
  }


  const estilosTitulo=()=>{
    //funcion para cambiar de color las letras del titulo
    const titulo= "MIEMERGENCIA24"
    const primerasDosLetras= titulo.substring(0,2)
    const letrasIntermedias= titulo.substring(2, 12)
    const ultimosNumeros= titulo.substring(12,14)

    return{
      primerasDosLetras,
      letrasIntermedias,
      ultimosNumeros
    }
  }
  const {primerasDosLetras,letrasIntermedias,ultimosNumeros}= estilosTitulo()

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{ width: '100%' }}>
    <Link to="/" className="navbar-brand"></Link>
    {/*----------------implemente los colores del titulo-----------------------*/}
    <a href="/" className="navbar-brand" style={{ color: 'black' }}> 
          {primerasDosLetras}
          <span style={{ color: 'red' }}>{letrasIntermedias }</span>
          <span style={{ color: 'black' }}>{ultimosNumeros }</span>
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/alertas" className="nav-link">ALERTAS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/clientes" className="nav-link">CLIENTES</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/usuarios" className="nav-link" >USUARIOS</NavLink>
        </li>
      </ul>
      <div className="alertas-nav">
       <button onClick={conteoAlertas} style={{backgroundColor:alertas.length > 0 ? "yellow" : "transparent",
                 color: '#fff',
                 border: 'none',
                 padding: '5px 10px',
                 borderRadius: '50%',
                 fontSize: '16px',}}>⚠{alertas.length}</button>
      </div>
      
      <button className="btn btn-primary float-right mr-3" onClick={handleSalir}>
              Salir
            </button>
     
     
    </div>
  </div>
</nav>
    
    </>
  )
}
