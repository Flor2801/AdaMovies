import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
      <section>
        <p>PELICULAS POPULARES</p>
        <div>
          {detallePopulares.map((tarjeta) => (
            <>
              <Link to={`/peliculas/detalle/${tarjeta.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${tarjeta.poster_path}`}
                ></img>
              </Link>
              <p>{tarjeta.title}</p>
            </>
          ))}
        </div>
      </section>

      <div>
   
        <button onClick={() => setPaginaActual(1)}>PRIMERA</button>
        <button onClick={() => paginaActual==1 ? setPaginaActual(1) : setPaginaActual(paginaActual-1)}>ANTERIOR</button>

        <button>{paginaActual}</button> 

        <button onClick={() => setPaginaActual(paginaActual+1)}> {paginaActual+1} </button>
        <button onClick={() => setPaginaActual(paginaActual+2)}>{paginaActual+2}</button>
        <button onClick={() => setPaginaActual(paginaActual+3)}>{paginaActual+3}</button>

        <button>...</button>

        <button onClick={() => paginaActual == cantidadPaginasPopulares ? setPaginaActual(cantidadPaginasPopulares) : setPaginaActual(paginaActual-1)}>PROXIMA</button>
        <button onClick={() => setPaginaActual(cantidadPaginasPopulares)}>ULTIMA</button>

      </div>
    </>
  );
};

export default PopularMovies;
