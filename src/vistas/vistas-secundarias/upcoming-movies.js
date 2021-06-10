import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SeccionGeneral } from "../../components/commons.js";
import { Tarjeta } from "../../components/commons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";





const UpcomingMovies = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const [detalle, setDetalle] = useState([]);
  const [paginas, setPaginas] = useState([]);
  const paginasTotales = Number(paginas);

  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=8cd74c1ce651a04254aaab08ea9e9585&language=en-US&page=${paginaActual}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetalle(data.results);
        setPaginas(data.total_pages);
      });
  }, [paginaActual]);


  return (
    <>
     
     <SeccionGeneral>
      <h3>PELICULAS A ESTRENARSE</h3>
       
        <div className="vista-tarjetas">
          {detalle.map((tarjeta) => (
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
              <h4>{tarjeta.title}</h4>
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

       { paginaActual !== paginasTotales ?
         <>
        <button onClick={() => setPaginaActual(paginaActual+1)}>{paginaActual+1}</button>
        <button onClick={() => setPaginaActual(paginaActual+2)}>{paginaActual+2}</button>
        <button onClick={() => setPaginaActual(paginaActual+3)}>{paginaActual+3}</button>
         </>
         : <div></div>
       }

        <button>...</button>
        <button onClick={() => paginaActual === paginasTotales ? setPaginaActual(paginasTotales) : setPaginaActual(paginaActual+1)}> <FontAwesomeIcon icon={faAngleRight} className="icono" /></button>
        <button onClick={() => setPaginaActual(paginasTotales)}><FontAwesomeIcon icon={faAngleDoubleRight} className="icono" /></button>
        </div>
      </div>
        </SeccionGeneral>

    </>
  );
};

export default UpcomingMovies;
