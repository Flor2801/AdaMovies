import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import { POPULAR_SERIES } from "../../utils/variables.js";

const PopularSeries = ({ title }) => {
  const series = useFetch(POPULAR_SERIES);
  console.log(series)

  return (
    <>
      <div>Hola soy series populares </div>

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

export default PopularSeries;
