import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import {TOP_RATED_SERIES} from "../../utils/variables.js";



const TopRatedSeries = ({title}) => {
  const peliculas = useFetch(TOP_RATED_SERIES);

  return (
    <>
      <div>Hola soy peliculas populares</div>

      <section>
          <p>{title}</p>
        <div>
          {peliculas.map((tarjeta) => (
            <Link ><p>{tarjeta.name}</p></Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopRatedSeries;