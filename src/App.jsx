import { Navigate, Route, Routes } from "react-router-dom"


import { HomePantalla } from "./components/HomePantalla"
import { AlertasPantalla } from "./components/AlertasPantalla"
import { ClientesPantalla } from "./components/ClientesPantalla"
import { UsuariosPantalla } from "./components/UsuariosPantalla"

export const App = () => {
  return (
    <>
      
      
      <Routes>
        <Route path="/" element={<HomePantalla></HomePantalla>}></Route>
        <Route path="/alertas" element={<AlertasPantalla></AlertasPantalla>}></Route>
        <Route path="/clientes" element={<ClientesPantalla></ClientesPantalla>}></Route>
        <Route path="/usuarios" element={<UsuariosPantalla></UsuariosPantalla>}></Route>
        <Route path="/*" element={<Navigate to="/"/>}></Route>
      </Routes>
        
    </>
  )
}
