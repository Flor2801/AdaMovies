import { React, useEffect, useState } from "react";
import useFetch from "../hooks.js/useFetch";
import { Link, useParams } from "react-router-dom";

const VistaDetallePeliculas = () => {
  const [detalle, setDetalle] = useState([]);
  const [redes, setRedes] = useState([]);
  const [reparto, setReparto] = useState([]);
  const [videos, setVideos] = useState([]);
  const [similares, setSimilares] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [produccion, setProduccion] = useState([]);


  const [vistaInfo, setVistaInfo] = useState(true);
  const [vistaCasting, setVistaCasting] = useState(false);



  const verVistaInfo = () => {
    setVistaInfo(true);
    setVistaReparto(false);
    setVistaVideos(false);
    setVistaSimilares(false);
  };

  const verVistaCasting = () => {
    setVistaInfo(false);
    setVistaReparto(true);
    setVistaVideos(false);
    setVistaSimilares(false);
  };


  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetalle(data);
        setProduccion(data.production_companies);
        setGeneros(data.genres);
      });
  }, []);

  return (
    <>
      <section>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${detalle.backdrop_path}`}
          ></img>
        </div>

        <div>
          <button onClick={verVistaInfo}>INFO</button>
          <button onClick={verVistaCasting}>REPARTO</button>

        </div>

        <div>
          {vistaInfo && (
            <div>
             
             <p>FOTO ACTOR</p>
                {/* <img
                  src={`https://image.tmdb.org/t/p/w200${detalle.poster_path}`}
                ></img> */}
              <p>NOMBRE</p>
              <p>DESCRIPCION</p>

              <div>
                {detalle.homepage && (
                  <a href={`${detalle.homepage}`} target="_blank">
                    <p>WEB</p>
                  </a>
                )}
                {redes.imdb_id && <p>IMDB</p>}
                {redes.twitter_id && <p>TWITTER</p>}
                {redes.facebook_id && <p>FACEBOOK</p>}
                {redes.instagram_id && (
                  <a
                    href={`https://www.instagram.com/${redes.instagram_id}`}
                    target="_blank"
                  >
                    <p>INSTAGRAM</p>
                  </a>
                )}
              </div>
            </div>
          )}

          {vistaCasting && (
            <div>
              {/* {reparto.map((actores) => (
                <>
                  <Link>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actores.profile_path}`}
                    ></img>
                  </Link>
                  <p>{actores.name}</p>
                </>
              ))} */}
            </div>
          )}
         

        </div>
      </section>
    </>
  );
};

export default VistaDetallePeliculas;