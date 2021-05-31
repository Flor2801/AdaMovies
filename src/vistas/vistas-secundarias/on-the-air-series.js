import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import { ON_THE_AIR_SERIES } from "../../utils/variables.js";

const OnAirSeries = ({ title }) => {
  const series = useFetch(ON_THE_AIR_SERIES);

  return (
    <>
      <div><p>SERIES AL AIRE</p></div>

      <section>
        <p>{title}</p>
        <div>
          {series.map((tarjeta) => (
            <>
              <Link to={`/series/detalle/${tarjeta.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${tarjeta.poster_path}`}
                ></img>{" "}
              </Link>
              <p>{tarjeta.name}</p>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default OnAirSeries;
