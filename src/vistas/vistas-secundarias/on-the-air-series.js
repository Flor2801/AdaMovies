import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import {ON_THE_AIR_SERIES} from "../../utils/variables.js";



const OnAirSeries = ({title}) => {
  const peliculas = useFetch(ON_THE_AIR_SERIES);

  return (
    <>
      <div>Hola soy series en el aire</div>

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

export default OnAirSeries;