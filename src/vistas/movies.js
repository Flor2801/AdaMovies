import { React } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks.js/useFetch";
import { POPULAR_MOVIES, TOP_RATED_MOVIES, NOW_PLAYING_MOVIES, UP_COMING_MOVIES } from "../utils/variables.js";




const Peliculas = () => {

const populares = useFetch(POPULAR_MOVIES)
const mejores_criticas = useFetch(TOP_RATED_MOVIES)
const estrenos = useFetch(UP_COMING_MOVIES)
const en_cines = useFetch(NOW_PLAYING_MOVIES)


 return (
    <>


      <Section item={populares} title="¨Películas Populares" />
      <Section item={mejores_criticas} title="Películas con mejores críticas" />
      <Section item={estrenos} title="Películas a estrenarse" />
      <Section item={en_cines} title="Películas en cines" />
    </>

  );
}

export default Peliculas;