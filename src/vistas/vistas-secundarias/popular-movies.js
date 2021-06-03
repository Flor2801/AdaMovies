import { React, useEffect } from "react";
import useFetch from "../../hooks.js/useFetch";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { POPULAR_MOVIES } from "../../utils/variables.js";

const PopularMovies = () => {
  const peliculas = useFetch(POPULAR_MOVIES);
  

  return (
    <>

      <section>
        <p>PELICULAS POPULARES</p>
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
      <div>PAGINADO</div>
    </>
  );
};

export default PopularMovies;
