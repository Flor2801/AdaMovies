import { React, useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


const Navegacion = () => {
  return (
    <>
      <div className="iconos">
        <p>SOY la barra de navegacion</p>
        <p>
          <Link to="/home">Home</Link>
        </p>
        <p>
          <Link to="/peliculas">Peliculas</Link>
        </p>
        <p>
          <Link to="/series">Series</Link>
        </p>

      </div>
    </>
  );
};

export default Navegacion;
