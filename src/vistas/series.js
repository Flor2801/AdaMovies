import { React } from "react";
import useFetch from "../hooks.js/useFetch";
import {POPULAR_SERIES, TOP_RATED_SERIES,ON_THE_AIR_SERIES } from "../utils/variables.js";
import Section from "../components/section";
import PopularSeries from '../vistas/vistas-secundarias/popular-series'
import OnAirSeries from '../vistas/vistas-secundarias/on-the-air-series'
import TopRatedSeries from '../vistas/vistas-secundarias/top-rated-series'



const Series = () => {
  const populares = useFetch(POPULAR_SERIES);
  const mejores_criticas = useFetch(TOP_RATED_SERIES);
  const al_aire = useFetch(ON_THE_AIR_SERIES);


  return (
    <>
      <Section item={populares} title="Series Populares" url="/series/populares" comp={PopularSeries} />
      <Section item={mejores_criticas} title="Series con mejores críticas" url="/series/mejores-criticas" comp={TopRatedSeries} />
      <Section item={al_aire} title="Series en el aire" url="/series/en-el-aire" comp={OnAirSeries} />
    </>
  );
};

export default Series;