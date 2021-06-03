import { React, useState, useEffect } from "react";
import Section from "../components/section";
import Carrousel from "./carrousel";
import { TRENDING_MOVIES, TRENDING_SERIES } from "../utils/variables.js";
import useFetch from "../hooks.js/useFetch";
import VistaResultadoBusqueda from "./vistaResultadoBusqueda.js";



const Home = () => {
  const peliculas = useFetch(TRENDING_MOVIES);
  const series = useFetch(TRENDING_SERIES);

  
  const [resultados, setResultados] = useState(false)
  const [home, setHome] = useState(true)
  const [datoBusqueda, setDatoBusqueda]  = useState('')
  const [resultado, setResultado] = useState([])

const enviarTexto = (texto) => {
  setDatoBusqueda(texto)
  setResultados(true)
  setHome(false)
}

useEffect(() => {
  fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=6a93319b2d78795675b8bd9aa0965a95&language=en-US&query=${datoBusqueda}&page=1'`
  )
    .then((res) => res.json())
    .then((data) => {
      setResultado(data);
    });
}, [datoBusqueda]);


  return (
    <>
      <Carrousel />

      { home && <>
      <Section item={peliculas} title="Peliculas que son tendencia" url="/peliculas/tendencias" tipo="Peliculas" />
      <Section item={series} title="Series que son tendencia" url="/series/tendencias" tipo="Series"/> </>}
     
     {resultados &&
      <VistaResultadoBusqueda  resultados={resultado} />}


    </>
  );
};

export default Home;
