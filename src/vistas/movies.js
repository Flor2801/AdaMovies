import { React } from "react";
import useFetch from "../hooks.js/useFetch";
import {POPULAR_MOVIES, TOP_RATED_MOVIES, NOW_PLAYING_MOVIES, UP_COMING_MOVIES,} from "../utils/variables.js";
import Section from "../components/section";


// Vista general de Peliculas

const Peliculas = () => {
  
// Llamamos a la información 
  const populares = useFetch(POPULAR_MOVIES);
  const mejores_criticas = useFetch(TOP_RATED_MOVIES);
  const estrenos = useFetch(UP_COMING_MOVIES);
  const en_cines = useFetch(NOW_PLAYING_MOVIES);

// Se muestra la informacion en secciones
  return (
    <>
      <Section item={populares} title="Películas Populares" url="/peliculas/populares" tipo="Peliculas"/>
      <Section item={mejores_criticas} title="Películas con mejores críticas" url="/peliculas/mejores-criticas" tipo="Peliculas" />
      <Section item={estrenos} title="Películas a estrenarse" url="/peliculas/a-estrenarse" tipo="Peliculas" />
      <Section item={en_cines} title="Películas en cines" url="/peliculas/en-cines"  tipo="Peliculas"/>

    </>
  );
};

export default Peliculas;
