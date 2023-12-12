import { Navigate, Route, Routes } from "react-router-dom"

import { AlertasPantalla}  from "./components/AlertasPantalla"
import { ClientesPantalla } from "./components/ClientesPantalla"
import { UsuariosPantalla } from "./components/UsuariosPantalla"
import { PantallaGeneral } from "./components/PantallaGeneral"
import { HomePantalla } from "./components/HomePantalla"

export const App = () => {
  return (
    <>
      
      
      <Routes >
        <Route path="/home" element={<HomePantalla></HomePantalla>}></Route>
        <Route path="/general" element={<PantallaGeneral></PantallaGeneral>}></Route>
        <Route path="/alertas" element={<AlertasPantalla></AlertasPantalla>}></Route>
        <Route path="/clientes" element={<ClientesPantalla></ClientesPantalla>}></Route>
        <Route path="/usuarios" element={<UsuariosPantalla></UsuariosPantalla>}></Route>
        <Route path="/*" element={<Navigate to="/home"/>}></Route>
      </Routes>
        
    </>
  )
}
