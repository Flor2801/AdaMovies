import { React, useEffect, useState } from "react";
import useFetch from "../../hooks.js/useFetch";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { POPULAR_MOVIES } from "../../utils/variables.js";

const PopularMovies = () => {
  const peliculas = useFetch(POPULAR_MOVIES);
  let paginaActual = 1;
  const paginaDos = paginaActual+1;
  const paginaTres = paginaDos+1;
  const [detallePopulares, setDetallePopulares] = useState([]);
  const [paginasPopulares, setPaginasPopulares] = useState([]);

  const cantidadPaginasPopulares = Number(paginasPopulares);
  const arrayPaginas = [];

  const crearArray = (cantidadPaginasPopulares) => {
    for (let i = 1; i < cantidadPaginasPopulares; i++) {
    arrayPaginas.push([i]); } 
    return arrayPaginas;
  };
  crearArray(cantidadPaginasPopulares);




  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=8cd74c1ce651a04254aaab08ea9e9585&language=en-US&page=${paginaActual}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetallePopulares(data);
        setPaginasPopulares(data.total_pages);
      });
  }, [paginaActual]);

  return (
    <>
      <section>
        <p>PELICULAS POPULARES</p>
        <div>
          {peliculas.map((tarjeta) => (
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
   
        <button onClick={() => paginaActual = 1}>PRIMERA</button>
        <button onClick={() => paginaActual = paginaActual-1}>ANTERIOR</button>

        <button>{paginaActual}</button>

        <button onClick={() => paginaActual = paginaActual+1}>{paginaDos}</button>
        <button onClick={() => paginaActual = paginaActual+2}>{paginaTres}</button>

        <button>...</button>

        <button onClick={() => paginaActual = paginaActual+1}>PROXIMA</button>
        <button onClick={() => paginaActual = cantidadPaginasPopulares}>ULTIMA</button>


      </div>
    </>
  );
};

export default PopularMovies;
