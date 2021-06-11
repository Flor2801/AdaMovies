import { React, useState, useEffect } from "react";
import { TRENDING_MOVIES, TRENDING_SERIES } from "../utils/variables.js";
import Section from "../components/section";
import useFetch from "../hooks.js/useFetch";
import Slider from "../components/carrousel";
import styled from "styled-components";
import Carrousel from "../components/carrousel";
import { BuscadorHome } from "../components/commons.js";

import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


// 
const Home = () => {
  const peliculas = useFetch(TRENDING_MOVIES);
  const series = useFetch(TRENDING_SERIES);

  const [valorDelInput, setValorDelInput] = useState("");
  const history = useHistory();

  const busquedaTexto = (e) => {
    setValorDelInput(e.target.value);
  };

  const mostrarResultados = (e) => {
    e.preventDefault();

    if (valorDelInput == "") {
      history.push(`/`);
    } else {
      history.push(`/busqueda/${valorDelInput}`);
    }
  };

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
  `;

  return (
    <>
      <SliderContenedor>
        <Carrousel />
      </SliderContenedor>

      <BuscadorHome>
        <div className="navegacion-responsive">
          <div className="buscador-home-responsive">
            <form onSubmit={mostrarResultados}>
              <FontAwesomeIcon icon={faSearch} className="icono" />
              <input
                type="text"
                value={valorDelInput}
                onChange={busquedaTexto}
                placeholder="BUSCAR"
              ></input>
            </form>
          </div>

          <div className="selector-responsive">
            <Link to="/peliculas">
              {" "}
              <FontAwesomeIcon icon={faVideo} className="icono" />{" "}
            </Link>
            <Link to="/series">
              {" "}
              <FontAwesomeIcon icon={faTv} className="icono" />{" "}
            </Link>
          </div>
        </div>
      </BuscadorHome>

      <Section
        item={peliculas}
        title="PELICULAS QUE SON TENDENCIA"
        url="/peliculas/tendencias"
        tipo="Peliculas"
      />
      <Section
        item={series}
        title="SERIES QUE SON TENDENCIA"
        url="/series/tendencias"
        tipo="Series"
      />
    </>
  );
};

export default Home;
