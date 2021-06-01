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
  const [vistaReparto, setVistaReparto] = useState(false);
  const [vistaVideos, setVistaVideos] = useState(false);
  const [vistaSimilares, setVistaSimilares] = useState(false);

  console.log(videos);

  const verVistaInfo = () => {
    setVistaInfo(true);
    setVistaReparto(false);
    setVistaVideos(false);
    setVistaSimilares(false);
  };

  const verVistaReparto = () => {
    setVistaInfo(false);
    setVistaReparto(true);
    setVistaVideos(false);
    setVistaSimilares(false);
  };

  const verVistaVideos = () => {
    setVistaInfo(false);
    setVistaReparto(false);
    setVistaVideos(true);
    setVistaSimilares(false);
  };

  const verVistaSimilares = () => {
    setVistaInfo(false);
    setVistaReparto(false);
    setVistaVideos(false);
    setVistaSimilares(true);
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

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/external_ids?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setRedes(data);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setReparto(data.cast);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.results);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setSimilares(data.results);
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
          <button onClick={verVistaReparto}>REPARTO</button>
          <button onClick={verVistaVideos}>VIDEOS</button>
          <button onClick={verVistaSimilares}>SIMILARES</button>
        </div>

        <div>
          {vistaInfo && (
            <div>
              <Link to={`/peliculas/detalle/${detalle.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${detalle.poster_path}`}
                ></img>
              </Link>
              <p>{detalle.title}</p>
              <p>{detalle.vote_average}</p>
              <p>{detalle.overview}</p>
              <p>Duración: {detalle.runtime} min.</p>
              <p>
                Géneros:{" "}
                {generos.map((generos) => (
                  <>
                    <p>{generos.name}</p>
                  </>
                ))}
              </p>
              <p>Presupuesto: ${detalle.budget}</p>
              <p>Recaudación: ${detalle.revenue}</p>
              <p>
                Producción:{" "}
                {produccion.map((productores) => (
                  <>
                    <p>{productores.name}</p>
                  </>
                ))}
              </p>

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

          {vistaReparto && (
            <div>
              {reparto.map((actores) => (
                <>
                  <Link>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actores.profile_path}`}
                    ></img>
                  </Link>
                  <p>{actores.name}</p>
                </>
              ))}
            </div>
          )}
          {vistaVideos && (
            <div>
  <a
                    href={`https://www.youtube.com/watch?v=jBa_aHwCbC4`}
                    target="_blank"
                  >
                    <iframe
                      width="300"
                      height="200"
                      src={`https://www.youtube.com/watch?v=jBa_aHwCbC4`}
                    ></iframe>
                  </a>


              {videos.map((videos) => (
                <>
                  <a
                    href={`https://www.youtube.com/watch?v=${videos.key}`}
                    target="_blank"
                  >
                    <iframe
                      width="300"
                      height="200"
                      src={`https://www.youtube.com/watch?v=${videos.key}`}
                    ></iframe>
                  </a>
                  <p>{videos.name}</p>
                </>
              ))}
            </div>
          )}
          {vistaSimilares && (
            <div>
              {similares.map((similar) => (
                <>
                  <Link to={`/peliculas/detalle/${similar.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${similar.poster_path}`}
                    ></img>
                  </Link>
                  <p>{similar.title}</p>
                </>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default VistaDetallePeliculas;
