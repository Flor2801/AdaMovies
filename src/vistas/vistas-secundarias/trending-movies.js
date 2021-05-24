import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import {TRENDING_MOVIES} from "../../utils/variables.js";



const TrendingMovies = ({title}) => {
  const peliculas = useFetch(TRENDING_MOVIES);

  return (
    <>
      <div>Hola soy peliculas populares</div>

      <section>
          <p>{title}</p>
        <div>
          {peliculas.map((tarjeta) => (
            <Link ><p>{tarjeta.title}</p></Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default TrendingMovies;