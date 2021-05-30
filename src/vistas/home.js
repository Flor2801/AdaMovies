import { React, useState, useEffect } from "react";
import Section from "../components/section";
import Carrousel from "./carrousel";
import { TRENDING_MOVIES, TRENDING_SERIES } from "../utils/variables.js";
import useFetch from "../hooks.js/useFetch";
import TrendingMovies from '../vistas/vistas-secundarias/trending-movies'
import TrendingSeries from '../vistas/vistas-secundarias/trending-series'
import { BrowserRouter, Route, Link } from "react-router-dom";




const Home = () => {
  const peliculas = useFetch(TRENDING_MOVIES);
  const series = useFetch(TRENDING_SERIES);

  return (
    <>
      <Carrousel />

      <Section item={peliculas} title="Peliculas que son tendencia" url="/peliculas/tendencia"/>
      <Section item={series} title="Series que son tendencia" url="/series/tendencia"/>

    </>
  );
};

export default Home;
