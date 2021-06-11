import { React, useState, useEffect } from "react";
import { TRENDING_MOVIES, TRENDING_SERIES } from "../utils/variables.js";
import Section from "../components/section";
import useFetch from "../hooks.js/useFetch";
import Slider from "../components/carrousel";
import styled from "styled-components";
import Carrousel from "../components/carrousel";



const Home = () => {
  const peliculas = useFetch(TRENDING_MOVIES);
  const series = useFetch(TRENDING_SERIES);


  const SliderContenedor = styled.div`
  position: relative;
  top: -120px;

  @media (max-width: 950px) {
    top: -100px;
  }

  @media (max-width: 850px) {
    top: -60px;
  }

  @media (max-width: 550px) {
    top: -40px;
  }

  @media (max-width: 550px) {
    top: -30px;
  }
  
  `

  return (
    <>
      <SliderContenedor>
      {/* <Slider /> */}
      <Carrousel />
      </SliderContenedor>
    
      <Section item={peliculas} title="PELICULAS QUE SON TENDENCIA" url="/peliculas/tendencias" tipo="Peliculas" />
      <Section item={series} title="SERIES QUE SON TENDENCIA" url="/series/tendencias" tipo="Series"/>


    </>
  );
};

export default Home;
