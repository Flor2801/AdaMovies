import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { POPULAR_MOVIES } from "../../utils/variables.js";
import VistaDetalle from "../../components/detalle";


const PopularMovies = () => {
  const peliculas = useFetch(POPULAR_MOVIES);
  console.log(peliculas);

  return (
    <>
      <div>Hola soy peliculas populares</div>

      <section>
        <p>PELICULAS POPULARES</p>
        <div>
          {peliculas.map((tarjeta) => (
            <>
              <p>{tarjeta.title}</p>
              <p>{tarjeta.id}</p>
              <Link to={`/peliculas/${tarjeta.id}`}>
                <p>Link a detalle</p>
              </Link>

            </>
          ))}
        </div>
      </section>
      <div>PAGINADO</div>
      


    </>
  );
};

export default PopularMovies;
