import { NavBar } from "./NavBar";
import { useState } from "react";
import {obtenerAlertas} from "../hooks/grillaAlertas"
import { AlertasPantalla } from "./AlertasPantalla";

export const UsuariosPantalla = () => {

  const [grillaAlertas, setgrillaAlertas] = useState([]);
  const [mostrarGrilla, setmostrarGrilla] = useState(false);

  // Función para cargar las alertas y mostrar la grilla
  const cargarAlertas = () => {
    const nuevasAlertas = obtenerAlertas();
    setgrillaAlertas(nuevasAlertas);
    setmostrarGrilla(true);
  };
 

  return (
    <div>
      <AlertasPantalla></AlertasPantalla>
       {/* Renderiza el componente NavBar y pasa la función cargarAlertas como prop */}
      <NavBar cargarAlertas= {cargarAlertas}></NavBar>
      <button onClick={cargarAlertas}>Grilla</button>
       {/* Condición para renderizar la grilla si mostrarGrilla es true */}
      {mostrarGrilla && (
        <div className="grilla-alertas">
          <h3>Alertas Recibidas</h3>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Mensaje</th>
              </tr>
            </thead>
            <tbody>
     {/* Mapea las alertas para renderizar filas de la tabla */}
              {grillaAlertas.map((alerta) => (
                <tr key={alerta.id}>
                  <td>{alerta.fecha}</td>
                  <td>{alerta.mensaje}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
