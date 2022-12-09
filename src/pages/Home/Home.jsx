import React, { useEffect, useState } from 'react';
import Button from '../../common/Button/button';
import logo from '../../logo.svg';
import { SeleccionController } from '../../networking/controllers/seleccion-controller';
import './home.css';

function Home() {
  const [selecciones, setSelecciones] = useState({});
  useEffect(() => {
    async function getSeleccion() {
      const seleccionn = await SeleccionController.getSeleccion();
      setSelecciones(seleccionn);
    }
    getSeleccion();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <p>
          Edit
          <code>
            src/App.js
          </code>
          and save to reload.
        </p>
        {selecciones.map((seleccion) => <p>{seleccion.nombre}</p>)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="Grupos">
          <h1>Grupo A</h1>
          <h1>Grupo B</h1>
          <h1>Grupo C</h1>
          <h1>Grupo D</h1>
          <h1>Grupo F</h1>
          <h1>Grupo G</h1>
          <h1>Grupo H</h1>
        </div>
      </header>
    </div>
  );
}

export default Home;
