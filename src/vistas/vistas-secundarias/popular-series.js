import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import {POPULAR_SERIES} from "../../utils/variables.js";



const PopularSeries = ({title}) => {
  const peliculas = useFetch(POPULAR_SERIES);

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

export default PopularSeries;