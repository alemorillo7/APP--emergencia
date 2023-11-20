import  { useState, useEffect } from "react";
import { NavBar } from "./NavBar";
import MapView from "./MapView";

export const ClientesPantalla = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "http://190.183.59.149/consatmobile/api/api.asp?q=clients"

      //  " http://190.183.59.149/consatmobile/api/api.asp?q=login&u=alejandro&p=alejandro"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <>
    <div className="navBar-clientes">
    <NavBar></NavBar>
    </div>
      
      <div className="clientes-container">
        {/* MapView con el 70% de la pantalla */}
        <div className="mapa-clientes">
        <MapView ></MapView>
        </div>
        

        {/* Lista de clientes con el 30% de la pantalla */}
        <div className="lista-clientes">
          <div className="titulo-lista-clientes">
            <h2>Lista de Clientes</h2>
          </div>
          <ul>
            {users.map((user) => (
              <li key={user.id} onClick={() => openModal(user)}>
                {user.apynom}<br />
                Email: {user.mail} <br />
                Ciudad: {user.localidad} <br />
                Telefono: {user.telefono}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal */}
      {selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedUser.apynom}</h2>
            <p>Email: {selectedUser.mail}</p>
            <p>Ciudad: {selectedUser.localidad}</p>
            <p>Telefono: {selectedUser.telefono}</p>
            <button className="btn btn-primary" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
