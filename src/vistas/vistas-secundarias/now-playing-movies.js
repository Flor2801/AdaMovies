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

export default NowPlayingMovies;
