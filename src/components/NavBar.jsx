import { NavLink, Link } from "react-router-dom"


export const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{ width: '100%' }}>
    <Link to="/" className="navbar-brand" href="#">MIEMERGENCIA24</Link>
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
      <button className="btn btn-primary float-right mr-3" >Salir</button>
    </div>
  </div>
</nav>
    
    </>
  )
}
