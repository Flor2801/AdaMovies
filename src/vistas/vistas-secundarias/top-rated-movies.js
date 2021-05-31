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
            <>
              <p>{tarjeta.title}</p>
              <p>{tarjeta.id}</p>
              <Link to={`/peliculas/detalle/${tarjeta.id}`}>
                <p>Link a detalle</p>
              </Link>

            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopRatedMovies;
