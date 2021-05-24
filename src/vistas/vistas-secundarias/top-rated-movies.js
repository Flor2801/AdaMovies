import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import { TOP_RATED_MOVIES } from "../../utils/variables.js";



const TopRatedMovies = () => {
  const peliculas = useFetch(TOP_RATED_MOVIES);

  return (
    <>
      <section>
        <p>PELICULAS MEJOR PUNTUADAS</p>
        <div>
          {peliculas.map((tarjeta) => (
            <Link>
              <p>{tarjeta.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopRatedMovies;
