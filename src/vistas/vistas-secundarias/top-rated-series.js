import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import { TOP_RATED_SERIES } from "../../utils/variables.js";

const TopRatedSeries = ({ title }) => {
  const series = useFetch(TOP_RATED_SERIES);

  return (
    <>
      <div>SERIES MEJOR PUNTUADAS</div>

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

export default TopRatedSeries;
