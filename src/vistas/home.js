import { React, useState, useEffect } from "react";
import { TRENDING_MOVIES, TRENDING_SERIES } from "../utils/variables.js";
import Section from "../components/section";
import useFetch from "../hooks.js/useFetch";
import Slider from "../components/carrousel";
import styled from "styled-components";
import GlobalStyle from "../components/globalStyles.js";




const Home = () => {
  const peliculas = useFetch(TRENDING_MOVIES);
  const series = useFetch(TRENDING_SERIES);


  const SliderContenedor = styled.div`
  position: relative;
  top: -150px;
  }
  `

  return (
    <>
      <SliderContenedor>
      <Slider />
      </SliderContenedor>
    
      <Section item={peliculas} title="PELICULAS QUE SON TENDENCIA" url="/peliculas/tendencias" tipo="Peliculas" />
      <Section item={series} title="SERIES QUE SON TENDENCIA" url="/series/tendencias" tipo="Series"/>


    </>
  );
};

export default Home;
