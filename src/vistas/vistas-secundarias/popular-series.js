import { React } from "react";
import useFetch from "../../hooks.js/useFetch";
import { Link } from "react-router-dom";
import { POPULAR_SERIES } from "../../utils/variables.js";

const PopularSeries = ({ title }) => {
  const series = useFetch(POPULAR_SERIES);
  console.log(series);

  return (
    <>
      <div>SERIES POPULARES</div>

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

export default PopularSeries;
