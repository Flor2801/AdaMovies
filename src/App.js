import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { React } from "react";
// Vistas Principales
import Movies from "./vistas/movies";
import Series from "./vistas/series";
import Home from "./vistas/home";
import Navegacion from "./components/navegacion";
import Footer from "./components/footer";
// Vista Home
import TrendingMovies from './vistas/vistas-secundarias/trending-movies'
import TrendingSeries from './vistas/vistas-secundarias/trending-series'
// Vistas Secundarias
import PopularMovies from './vistas/vistas-secundarias/popular-movies'
import TopRatedMovies from './vistas/vistas-secundarias/top-rated-movies'
import UpComingMovies from './vistas/vistas-secundarias/upcoming-movies'
import NowPlayingMovies from './vistas/vistas-secundarias/now-playing-movies'
import PopularSeries from './vistas/vistas-secundarias/popular-series'
import TopRatedSeries from './vistas/vistas-secundarias/top-rated-series'
import OnAirSeries from './vistas/vistas-secundarias/on-the-air-series'

import VistaDetallePeliculas from "./components/detallePeliculas";
import VistaDetalleSeries from "./components/detalleSeries";

import VistaResultadosBusqueda from "./vistas/vistaResultadoBusqueda";


function App() {


  return (
    <>
      <BrowserRouter>
        <Navegacion ></Navegacion>

        <Route exact path="/" component={Home} />
        <Route exact path="/peliculas" component={Movies}  />
        <Route exact path="/series" component={Series}  />

        <Route exact path="/peliculas/tendencias" component={TrendingMovies} />
        <Route exact path="/series/tendencias" component={TrendingSeries}  />

        <Route exact path="/peliculas/populares" component={PopularMovies} />
        <Route exact path="/peliculas/mejores-criticas" component={TopRatedMovies}  />
        <Route exact path="/peliculas/a-estrenarse" component={UpComingMovies} />
        <Route exact path="/peliculas/en-cines" component={NowPlayingMovies}  />

        <Route exact path="/series/populares" component={PopularSeries} />
        <Route exact path="/series/mejores-criticas" component={TopRatedSeries}  />
        <Route exact path="/series/al-aire" component={OnAirSeries} />

        <Route  exact path={`/peliculas/detalle/:id`} component={VistaDetallePeliculas}/>
        <Route  exact path={`/series/detalle/:id`} component={VistaDetalleSeries}/>

        <Route  exact path={`/busqueda/:query`} component={VistaResultadosBusqueda}/>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
