import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import { TRENDING_MOVIES } from "../../utils/variables.js";

const TrendingMovies = ({ title }) => {
  const peliculas = useFetch(TRENDING_MOVIES);
  console.log(peliculas)

  return (
    <>
      <div>PELICULAS QUE SON TENDENCIA</div>

      <section>
        <p>{title}</p>
        <div>
        {peliculas.map((tarjeta) => (
            <>
              <Link to={`/peliculas/detalle/${tarjeta.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${tarjeta.poster_path}`}
                ></img>
              </Link>
              <p>{tarjeta.title}</p>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default TrendingMovies;
