import { React, useState, useEffect } from "react";
import useFetch from "../../hooks.js/useFetch";
import Section from "../../components/section";
import { Link, useParams, useLocation } from "react-router-dom";
import { SeccionGeneral } from "../../components/commons.js";
import { Tarjeta } from "../../components/commons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";



const VistaResultadoBusqueda = () => {
  const [resultado, setResultado] = useState([]);
  const params = useParams();
  const [paginaActual, setPaginaActual] = useState(1);
  const [paginasBusqueda, setPaginasBusqueda] = useState([]);
  const cantidadPaginasBusqueda = Number(paginasBusqueda);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=6a93319b2d78795675b8bd9aa0965a95&
    language=en-US&query=${params.query}&page=${paginaActual}'`
    )
      .then((res) => res.json())
      .then((data) => {
        setResultado(data.results);
        setPaginasBusqueda(data.total_pages);
      });
  }, [paginaActual]);


  return (
    <>
      <SeccionGeneral>
        <h3>RESULTADOS BUSQUEDA</h3>
        <div>
          <div className="vista-tarjetas">
            {resultado.map((resultado) => (
              <>
                <Tarjeta>
                  <div>
                    <Link to={`/peliculas/detalle/${resultado.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w200${resultado.poster_path}`}
                      ></img>
                    </Link>
                  </div>
                  <div>
                    <h4>{resultado.title}</h4>
                  </div>
                </Tarjeta>
              </>
            ))}
          </div>
        </div>

        <div className="Paginado">
          <div className="Paginado-botones">
            <button onClick={() => setPaginaActual(1)}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} className="icono" />
            </button>
            <button
              onClick={() =>
                paginaActual === 1
                  ? setPaginaActual(1)
                  : setPaginaActual(paginaActual - 1)
              }
            >
              <FontAwesomeIcon icon={faAngleLeft} className="icono" />
            </button>
            <button className="pagina-actual">{paginaActual}</button>

            {paginaActual !== cantidadPaginasBusqueda ? (
              <>
                <button onClick={() => setPaginaActual(paginaActual + 1)}>{paginaActual + 1}</button>
                <button onClick={() => setPaginaActual(paginaActual + 2)}>{paginaActual + 2}</button>
                <button onClick={() => setPaginaActual(paginaActual + 3)}>{paginaActual + 3}</button>
              </>
            ) : (
              <div></div>
            )}

            <button>...</button>
            <button
              onClick={() =>
                paginaActual === cantidadPaginasBusqueda
                  ? setPaginaActual(cantidadPaginasBusqueda)
                  : setPaginaActual(paginaActual + 1)
              }
            >
              {" "}
              <FontAwesomeIcon icon={faAngleRight} className="icono" />
            </button>
            <button onClick={() => setPaginaActual(cantidadPaginasBusqueda)}>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="icono" />
            </button>
          </div>
        </div>
      </SeccionGeneral>
    </>
  );
};

export default VistaResultadoBusqueda;
