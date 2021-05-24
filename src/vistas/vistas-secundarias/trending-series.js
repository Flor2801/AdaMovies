import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import {TRENDING_SERIES} from "../../utils/variables.js";



const TrendingSeries = ({title}) => {
  const peliculas = useFetch(TRENDING_SERIES);

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

export default TrendingSeries;