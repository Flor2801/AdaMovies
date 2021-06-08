import React from "react";
import { TRENDING_MOVIES } from "../utils/variables.js";
import useFetch from "../hooks.js/useFetch";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'


const Slider = () => {
  const peliculasCarrousel = useFetch(TRENDING_MOVIES);
  const arrayCarrousel = peliculasCarrousel.slice(0, 5);
 


  return (
    <>
      <AwesomeSlider >
      {arrayCarrousel.map((preview) => (
          <>
            <div> 
             <img src={`https://image.tmdb.org/t/p/original${preview.backdrop_path}`}></img> 
         </div>
         <div>
              <p>{preview.vote_average}</p>
            </div>
        <div>
              <p>{preview.title}</p>
            </div>
            <div>
              <p>{preview.overview}</p>
            </div>
          
          </>
        ))}
        </AwesomeSlider>

    </>
  );
};

export default Slider;
