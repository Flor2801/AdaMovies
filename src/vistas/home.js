import { React, useState, useEffect } from "react";
import Section from "../components/section";
import SimpleSlider from "../components/carrousel";
import { TRENDING_MOVIES, TRENDING_SERIES } from "../utils/variables.js";
import useFetch from "../hooks.js/useFetch";



const Home = () => {
  const peliculas = useFetch(TRENDING_MOVIES);
  const series = useFetch(TRENDING_SERIES);



  return (
    <>
      
 <SimpleSlider />

      <Section item={peliculas} title="Peliculas que son tendencia" url="/peliculas/tendencias" tipo="Peliculas" />
      <Section item={series} title="Series que son tendencia" url="/series/tendencias" tipo="Series"/> 

    </>
  );
};

export default Home;
