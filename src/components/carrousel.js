import React from "react";
import { TRENDING_MOVIES } from "../utils/variables.js";
import useFetch from "../hooks.js/useFetch";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'
import { SliderImagen } from "./commons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-regular-svg-icons";



const Slider = () => {
  const peliculasCarrousel = useFetch(TRENDING_MOVIES);
  const arrayCarrousel = peliculasCarrousel.slice(0, 5);


  return (
    <>

      <AwesomeSlider >
      {arrayCarrousel.map((preview) => (
          <>
           <SliderImagen>
            <div className="imagen-carrousel"> 
             <img src={`https://image.tmdb.org/t/p/original${preview.backdrop_path}`}></img> 
         </div>
         <div className="texto-carrousel">
              <div className="carrousel-ranking">
          
              <p>{preview.vote_average}</p>
 
          {`${preview.vote_average}` >= 2 ?  <FontAwesomeIcon icon={faStar} />   :   <FontAwesomeIcon icon={fasStar} />}
          {`${preview.vote_average}` >= 4   ?  <FontAwesomeIcon icon={faStar} />   :   <FontAwesomeIcon icon={fasStar} />}
          {`${preview.vote_average}` >= 6  ?  <FontAwesomeIcon icon={faStar} />   :   <FontAwesomeIcon icon={fasStar} />}
          {`${preview.vote_average}` >= 8   ?  <FontAwesomeIcon icon={faStar} />   :   <FontAwesomeIcon icon={fasStar} />}
          {`${preview.vote_average}` >= 10   ?  <FontAwesomeIcon icon={faStar} />   :   <FontAwesomeIcon icon={fasStar} />}

            
              </div>
              <div className="carrousel-titulo">
              <p>{preview.title}</p>
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
