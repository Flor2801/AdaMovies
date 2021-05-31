import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import {ON_THE_AIR_SERIES} from "../../utils/variables.js";



const OnAirSeries = ({title}) => {
  const series = useFetch(ON_THE_AIR_SERIES);

  return (
    <>
      <div>Hola soy series en el aire</div>

      <section>
          <p>{title}</p>
        <div>
        {series.map((tarjeta) => (
            <>
              <p>{tarjeta.name}</p>
              <p>{tarjeta.id}</p>
              <Link to={`/series/detalle/${tarjeta.id}`}>
                <p>Link a detalle</p>
              </Link>

            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default OnAirSeries;