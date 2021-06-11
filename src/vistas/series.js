import { React } from "react";
import useFetch from "../hooks.js/useFetch";
import {POPULAR_SERIES, TOP_RATED_SERIES,ON_THE_AIR_SERIES } from "../utils/variables.js";
import Section from "../components/section";



const Series = () => {
  const populares = useFetch(POPULAR_SERIES);
  const mejores_criticas = useFetch(TOP_RATED_SERIES);
  const al_aire = useFetch(ON_THE_AIR_SERIES);


  return (
    <>
      <Section item={populares} title="Series Populares" url="/series/populares" tipo="Series"/>
      <Section item={mejores_criticas} title="Series con mejores críticas" url="/series/mejores-criticas" tipo="Series"/>
      <Section item={al_aire} title="Series al aire" url="/series/al-aire" tipo="Series" />
    </>
  );
};

export default Series;