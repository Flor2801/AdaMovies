import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-regular-svg-icons";
import { TRENDING_MOVIES } from "../utils/variables.js";
import useFetch from "../hooks.js/useFetch";




const Ranking = ({preview}) => {

    const peliculasCarrousel = useFetch(TRENDING_MOVIES);
    const arrayCarrousel = peliculasCarrousel.slice(0, 5);

    return (
    <>

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

    </>
    )
}


export default Ranking