import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { React, useState } from "react";

import Peliculas from "./vistas/movies";
import Series from "./vistas/series";
import Home from "./vistas/home";
import Navegacion from "./components/navegacion";
import Footer from "./components/footer";




function App() {
  return (
    <>
      <BrowserRouter>

        <Navegacion></Navegacion> 
        
          <Route exact path="/home" component={Home} />
          <Route exact path="/peliculas" component={Peliculas} />
          <Route exact path="/series" component={Series} />

          <Home></Home>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
