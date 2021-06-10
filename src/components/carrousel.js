import React from "react";
import { TRENDING_MOVIES } from "../utils/variables.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-regular-svg-icons";
import useFetch from "../hooks.js/useFetch";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import "react-awesome-slider/dist/styles.css";
import styled from "styled-components";



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
        bottom: -75px;
      }
    }
  }

  .texto-carrousel {
    width: 100%;
    height: 250px;
    position: absolute;
    bottom: -30px;
    left: 30px;
    color: white;
    background: linear-gradient(transparent, black);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    .carrousel-ranking {
      margin-top: 0px;
      height: 20px;
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
      font-size: 38px;
      font-weight: 700;
      height: 80px;
      margin-top: 0px;
      padding: 0px;
      margin-left: 40px;
      margin-top: 0px;
      display: flex;

      h2 {
        margin: 0px;
      }
    }
    .carrousel-descripcion {
      font-size: 12px;
      font-weight: 300;
      height: 120px;
      margin-left: 40px;
      max-width: 700px;
    }
  }
`;

const Slider = () => {
  const peliculasCarrousel = useFetch(TRENDING_MOVIES);
  const arrayCarrousel = peliculasCarrousel.slice(0, 5);

  return (
    <>
      <AwesomeSlider cssModule={AwesomeSliderStyles}>
        {arrayCarrousel.map((preview) => (
          <>
            <SliderImagen>
              <div className="imagen-carrousel">
                <img
                  src={`https://image.tmdb.org/t/p/original${preview.backdrop_path}`}
                ></img>
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
      </AwesomeSlider>
    </>
  );
};

export default Slider;
