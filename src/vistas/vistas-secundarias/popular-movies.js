import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SeccionGeneral } from "../../components/commons.js";
import { Tarjeta } from "../../components/commons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";






const PopularMovies = () => {

  const [paginaActual, setPaginaActual] = useState(1);
  const [detallePopulares, setDetallePopulares] = useState([]);
  const [paginasPopulares, setPaginasPopulares] = useState([]);
  const cantidadPaginasPopulares = Number(paginasPopulares);


  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=8cd74c1ce651a04254aaab08ea9e9585&language=en-US&page=${paginaActual}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetallePopulares(data.results);
        setPaginasPopulares(data.total_pages);
      });
  }, [paginaActual]);





  return (
    <>

      <SeccionGeneral>
     
      <h3>PELICULAS POPULARES</h3>

       
        <div className="vista-tarjetas">
          {detallePopulares.map((tarjeta) => (
            <>
            <Tarjeta >
            <div>
              <Link to={`/peliculas/detalle/${tarjeta.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${tarjeta.poster_path}`}
                ></img>
              </Link>
              </div>
              <div>
              <p>{tarjeta.title}</p>
              </div>
              </Tarjeta >
            </>
          ))}
        </div>

        <div className="Paginado">
   
      <div className="Paginado-botones">
        <button onClick={() => setPaginaActual(1)}><FontAwesomeIcon icon={faAngleDoubleLeft} className="icono" /></button>
        <button onClick={() => paginaActual===1 ? setPaginaActual(1) : setPaginaActual(paginaActual-1)}><FontAwesomeIcon icon={faAngleLeft} className="icono" /></button>
        <button className="pagina-actual">{paginaActual}</button> 

       { paginaActual !== cantidadPaginasPopulares ?
         <>
        <button onClick={() => setPaginaActual(paginaActual+1)}>{paginaActual+1}</button>
        <button onClick={() => setPaginaActual(paginaActual+2)}>{paginaActual+2}</button>
        <button onClick={() => setPaginaActual(paginaActual+3)}>{paginaActual+3}</button>
         </>
         : <div></div>
       }

        <button>...</button>
        <button onClick={() => paginaActual === cantidadPaginasPopulares ? setPaginaActual(cantidadPaginasPopulares) : setPaginaActual(paginaActual+1)}> <FontAwesomeIcon icon={faAngleRight} className="icono" /></button>
        <button onClick={() => setPaginaActual(cantidadPaginasPopulares)}><FontAwesomeIcon icon={faAngleDoubleRight} className="icono" /></button>
        </div>
      </div>
        </SeccionGeneral>

    </>
  );
};

export default PopularMovies;
