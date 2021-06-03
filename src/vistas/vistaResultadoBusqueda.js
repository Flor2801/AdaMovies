import { React } from "react";
import useFetch from "../hooks.js/useFetch";
import Section from "../components/section";

const VistaResultadoBusqueda = ({ resultado }) => {
  return (
    <>
      <section>
        <p>RESULTADOS BUSQUEDA</p>
        <div>
          {resultado.map((tarjeta) => (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w200${resultado.poster_path}`}
              ></img>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default VistaResultadoBusqueda;
