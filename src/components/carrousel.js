import React from "react";
// import Slider from "infinite-react-carousel";
import Carousel from 'react-elastic-carousel';
import { TRENDING_MOVIES } from "../utils/variables.js";
import useFetch from "../hooks.js/useFetch";

const SimpleSlider = () => {
  const peliculasCarrousel = useFetch(TRENDING_MOVIES);
  const arrayCarrousel = peliculasCarrousel.slice(0, 5);
  console.log(arrayCarrousel)

  return (
    <>
      <Carousel >
      {arrayCarrousel.length && arrayCarrousel.map((preview) => (
          <>
            <div> 
       
             <img
                src={`https://image.tmdb.org/t/p/w500${preview.backdrop_path}`}
              ></img> 
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
        </Carousel>

    </>
  );
};

export default SimpleSlider;
