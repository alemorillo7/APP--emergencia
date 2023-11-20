import MapView from "./MapView";
import { NavBar } from "./NavBar";
import { useState, useEffect } from "react";
import { obtenerAlertas } from "../hooks/grillaAlertas";

// AlertasPantalla.jsx
export const AlertasPantalla = () => {
  const [grillaAlertas, setgrillaAlertas] = useState([]);
  const [mostrarGrilla, setmostrarGrilla] = useState(false);

  // Función para cargar las alertas y mostrar la grilla
  const cargarAlertas = () => {
    const nuevasAlertas = obtenerAlertas();
    setgrillaAlertas(nuevasAlertas);
    setmostrarGrilla(true);
  };

  // UseEffect para cargar las alertas al montar el componente
  useEffect(() => {
    cargarAlertas();
  }, []);

  return (
    <div className="alerta-container">
      {/* MapView */}
      <MapView className={`map-view ${mostrarGrilla ? 'hidden' : ''}`} />

      {/* Renderiza el componente NavBar y pasa la función cargarAlertas como prop */}
      <NavBar cargarAlertas={cargarAlertas} className="navBar-alertas" />

      {/* Botón para mostrar la grilla */}
      <button onClick={cargarAlertas} className="btn-primary">
        Mostrar Grilla
      </button>

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
