import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import {POPULAR_MOVIES} from "../../utils/variables.js";



const PopularMovies = () => {
  const peliculas = useFetch(POPULAR_MOVIES);

  return (
    <>
      <div>Hola soy peliculas populares</div>

      <section>
          <p>PELICULAS POPULARES</p>
        <div>
          {peliculas.map((tarjeta) => (
            <Link ><p>{tarjeta.name}</p></Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularMovies;
