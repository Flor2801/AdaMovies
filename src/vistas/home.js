import { React, useState, useEffect } from "react";
import Section from "../components/section";
import Carrousel from "./carrousel";
import { TRENDING_MOVIES, TRENDING_SERIES } from "../utils/variables.js";
import useFetch from "../hooks.js/useFetch";

const Home = () => {

  const peliculas = useFetch(TRENDING_MOVIES)
  const series = useFetch(TRENDING_SERIES)

console.log(peliculas)
console.log(series)

  return (
    <>
      <Carrousel />

      <Section item={peliculas} title='Peliculas que son tendencia'/>
      <Section item={series}  title= 'Series que son tendencia'/>
    </>
  );
};

export default Home;
