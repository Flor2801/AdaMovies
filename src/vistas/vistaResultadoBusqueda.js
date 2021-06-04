import { React, useState, useEffect } from "react";
import useFetch from "../hooks.js/useFetch";
import Section from "../components/section";
import { Link, useHistory, useParams } from "react-router-dom";


const VistaResultadoBusqueda = () => {

  const [resultado, setResultado] = useState([])

  const history = useHistory();
  const params = useParams();

 
useEffect(() => {
  fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=6a93319b2d78795675b8bd9aa0965a95&
    language=en-US&query=${params.query}&page=1'`
  )
    .then((res) => res.json())
    .then((data) => {
      setResultado(data);
    });
}, []);

console.log(resultado)

  return (
    <>
      <section>
        <p>RESULTADOS BUSQUEDA</p>
        <div>
          {/* {resultado.map((resultado) => (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w200${resultado.poster_path}`}
              ></img>
            </>
          ))} */}
        </div>
      </section>
    </>
  );
};

export default VistaResultadoBusqueda;
