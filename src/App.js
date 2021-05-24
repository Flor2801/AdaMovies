import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { React } from "react";

import Movies from "./vistas/movies";
import Series from "./vistas/series";
import Home from "./vistas/home";
import Navegacion from "./components/navegacion";
import Footer from "./components/footer";


function App() {


  return (
    <>
      <BrowserRouter>
        <Navegacion ></Navegacion>

        <Route exact path="/" component={Home} />
        <Route exact path="/peliculas" component={Movies}  />
        <Route exact path="/series" component={Series}  />


        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
