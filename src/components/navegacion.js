import { React, useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Peliculas from "./movies";
import Series from "./series";
import Home from "./home";


const Navegacion = () => {
  return (
    <>
      <BrowserRouter>

      <p>SOY la barra de navegacion</p>

      <div className="iconos">
        <p>
          <Link to="/home">Home</Link>
        </p>
        <p>
          <Link to="/peliculas">Peliculas</Link>
        </p>
        <p>
          <Link to="/series">Series</Link>
        </p>



        <Route exact path="/home" component={Home} />
        <Route exact path="/peliculas" component={Peliculas} />
        <Route exact path="/series" component={Series} />

        </div>

      </BrowserRouter>



  
    </>
  );
};

export default Navegacion;
