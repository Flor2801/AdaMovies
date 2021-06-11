import React from "react";
import { Link } from "react-router-dom";
import { TRENDING_MOVIES } from "../utils/variables.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-regular-svg-icons";
import useFetch from "../hooks.js/useFetch";
import "react-awesome-slider/dist/styles.css";
import styled from "styled-components";
import Carousel from "nuka-carousel";

const ContenedorSlider = styled.div`
  position: relative;
  top: 0px;


  @media (max-width: 550px) {
    display: flex;
    justify-content: center;
    align-items: center;
    heigth: 500px;
  }
`;

const SliderImagen = styled.div`
  position: relative;
  top: 0px;

  .imagen-carrousel {

    img {
      position: relative;
      bottom: -30px;
      width: 100%;

      @media (max-width: 800px) {
        bottom: -60px;
      }

      @media (max-width: 650px) {
        bottom: -15px;
      }

    }
  }

  .texto-carrousel {
    width: 100%;
    height: 250px;
    position: absolute;
    bottom: 0px;
    left: 30px;
    color: white;
    background: linear-gradient(transparent, black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .carrousel-ranking {
      margin-top: 0px;
  
      margin-left: 40px;

      .iconos {
        color: blue;
        display: inline;
      }

      p {
        display: inline;
        margin-right: 20px;
        font-weight: 300;
      }

      .icono {
        color: blue;
      }
    }

    .carrousel-titulo {
      font-size: 35px;
      font-weight: 700;
      margin-top: 0px;
      padding: 0px;
      margin-left: 40px;
      margin-top: 0px;
      display: flex;

      h2 {
        margin: 0px;
      }
      @media (max-width: 950px) {
        font-size: 25px;
      }
      @media (max-width: 600px) {
        font-size: 20px;
      }
      @media (max-width: 450px) {
        font-size: 13px;
      }
    

  
    }
    .carrousel-descripcion {
      font-size: 16px;
      font-weight: 300;
      margin-left: 40px;
      max-width: 900px;

      @media (max-width: 1000px) {
        max-width: 700px;
        font-size: 13px;
      }

      @media (max-width: 800px) {
        max-width: 500px;
        p{
          margin-top: 0px;
        }
      }

      @media (max-width: 450px) {
        display: none;
      }
    }

    @media (max-width: 750px) {
      height: 150px;
      width: 100%;
      left: 10px;
      bottom: 0px;

    }

    @media (max-width: 450px) {
      position: absolute;
      height: 100px;
      left: 3px;
      max-width: 300px;

    }


    
  }
  }
`;

const Carrousel = () => {
  const peliculasCarrousel = useFetch(TRENDING_MOVIES);
  const arrayCarrousel = peliculasCarrousel.slice(0, 5);
  return (
    <>
    <ContenedorSlider>
      <Carousel>
        {arrayCarrousel.map((preview) => (
          <>
            <SliderImagen>
              <div className="imagen-carrousel">
                <Link to={`/peliculas/detalle/${preview.id}`}>
                  {" "}
                  <img
                    src={`https://image.tmdb.org/t/p/original${preview.backdrop_path}`}
                  ></img>
                </Link>
              </div>
              <div className="texto-carrousel">
                <div className="carrousel-ranking">
                  <p>{preview.vote_average}</p>
                  <div className="iconos">
                    {`${preview.vote_average}` >= 2 ? (
                      <FontAwesomeIcon icon={faStar} />
                    ) : (
                      <FontAwesomeIcon icon={fasStar} />
                    )}
                    {`${preview.vote_average}` >= 4 ? (
                      <FontAwesomeIcon icon={faStar} />
                    ) : (
                      <FontAwesomeIcon icon={fasStar} />
                    )}
                    {`${preview.vote_average}` >= 6 ? (
                      <FontAwesomeIcon icon={faStar} />
                    ) : (
                      <FontAwesomeIcon icon={fasStar} />
                    )}
                    {`${preview.vote_average}` >= 8 ? (
                      <FontAwesomeIcon icon={faStar} />
                    ) : (
                      <FontAwesomeIcon icon={fasStar} />
                    )}
                    {`${preview.vote_average}` >= 10 ? (
                      <FontAwesomeIcon icon={faStar} />
                    ) : (
                      <FontAwesomeIcon icon={fasStar} />
                    )}
                  </div>
                </div>

                <div className="carrousel-titulo">
                  <h2>{preview.title}</h2>
                </div>
                <div className="carrousel-descripcion">
                  <p>{preview.overview}</p>
                </div>
              </div>
            </SliderImagen>
          </>
        ))}
      </Carousel>
      </ContenedorSlider>
    </>
  );
};

export default Carrousel;
