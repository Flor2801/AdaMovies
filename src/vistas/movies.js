import { React } from "react";
import useFetch from "../hooks.js/useFetch";
import {POPULAR_MOVIES, TOP_RATED_MOVIES, NOW_PLAYING_MOVIES, UP_COMING_MOVIES,} from "../utils/variables.js";
import Section from "../components/section";
import PopularMovies from '../vistas/vistas-secundarias/popular-movies'
import NowPlayingMovies from '../vistas/vistas-secundarias/now-playing-movies'
import TopRatedMovies from '../vistas/vistas-secundarias/top-rated-movies'
import UpcomingMovies from '../vistas/vistas-secundarias/upcoming-movies'



const Peliculas = () => {
  const populares = useFetch(POPULAR_MOVIES);
  const mejores_criticas = useFetch(TOP_RATED_MOVIES);
  const estrenos = useFetch(UP_COMING_MOVIES);
  const en_cines = useFetch(NOW_PLAYING_MOVIES);

  return (
    <>
      <Section item={populares} title="Películas Populares" url="/peliculas/populares" comp={PopularMovies} />
      <Section item={mejores_criticas} title="Películas con mejores críticas" url="/peliculas/mejores-criticas" comp={TopRatedMovies} />
      <Section item={estrenos} title="Películas a estrenarse" url="/peliculas/a-estrenarse" comp={UpcomingMovies} />
      <Section item={en_cines} title="Películas en cines" url="/peliculas/en-cines" comp={NowPlayingMovies} />

      {/* <Section item={en_cines} title="Películas en cines" url="/movies/now-playing" comp={VistaCompleta} cont={NOW_PLAYING_MOVIES} /> */}

    </>
  );
};

export default Peliculas;
