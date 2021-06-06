import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import { NOW_PLAYING_MOVIES } from "../../utils/variables.js";



const NowPlayingMovies = () => {
  const peliculas = useFetch(NOW_PLAYING_MOVIES);

  return (
    <>
      <section>
        <p>PELICULAS EN CINES</p>
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

export default NowPlayingMovies;
