import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import {TOP_RATED_SERIES} from "../../utils/variables.js";



const TopRatedSeries = ({title}) => {
  const series = useFetch(TOP_RATED_SERIES);

  return (
    <>
      <div>Hola soy series mejor puntuadas</div>

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

export default TopRatedSeries;