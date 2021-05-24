import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import { UP_COMING_MOVIES } from "../../utils/variables.js";



const UpcomingMovies = () => {
  const peliculas = useFetch(UP_COMING_MOVIES);

  return (
    <>
      <section>
        <p>PELICULAS POR ESTRENARSE</p>
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

export default UpcomingMovies;
