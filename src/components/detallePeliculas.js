import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImagenDetalle } from "../components/commons.js";
import { InformacionDetalle } from "../components/commons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VistaActores } from "../components/commons.js";
import { Tarjeta } from "../components/commons.js";
// import { fabImdb } from "@fortawesome/free-solid-svg-icons";
// import { fabFacebook } from "@fortawesome/free-solid-svg-icons";
// import { fabInstagram } from "@fortawesome/free-solid-svg-icons";
// import { faLink } from "@fortawesome/free-solid-svg-icons";
// import { fabTwitter } from "@fortawesome/free-solid-svg-icons";

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
  console.log(params);

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
        <ImagenDetalle>
          <img
            src={`https://image.tmdb.org/t/p/original${detalle.backdrop_path}`}
          ></img>
        </ImagenDetalle>

        <InformacionDetalle>
          <div className="variables-detalle-secciones">
            <button onClick={verVistaInfo}>INFO</button>
            <button onClick={verVistaReparto}>REPARTO</button>
            <button onClick={verVistaVideos}>VIDEOS</button>
            <button onClick={verVistaSimilares}>SIMILARES</button>
          </div>

          <div className="variables-detalle-vistas">
            {vistaInfo && (
              <div>
                <div className="variables-detalle-info">
                  <div className="variables-detalle-info-img">
                    <Link to={`/peliculas/detalle/${detalle.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w200${detalle.poster_path}`}
                      ></img>
                    </Link>
                  </div>
                  <div className="variables-detalle-info-txt">
                    <h4>{detalle.title}</h4>
                    <p>{detalle.vote_average}</p>
                    <p>{detalle.overview}</p>
                    <p>Duración: {detalle.runtime} min.</p>
                    <p>
                      Géneros:{" "}
                      {generos.map((generos) => (
                        <>
                      <span>{generos.name}</span>
                        </>
                      ))}
                    </p>
                    <p>Presupuesto: ${detalle.budget}</p>
                    <p>Recaudación: ${detalle.revenue}</p>
                    <p>
                      Producción:{" "}
                      {produccion.map((productores) => (
                        <>
                       <span>{productores.name}</span>
                        </>
                      ))}
                    </p>
                    <div>
                {detalle.homepage && (
                  <a href={`${detalle.homepage}`} target="_blank">
                    <p>WEB</p>
                  </a> 
                )}
                {/* {detalle.homepage && (<a href={`${detalle.homepage}`} target="_blank"><FontAwesomeIcon icon={faLink} className="icono" /></a>)}
                {redes.imdb_id && <a href={`https://www.imdb.com/title/${redes.imdb_id}`} target="_blank"> <FontAwesomeIcon icon={ fabImdb } className="icono" /> </a>}
                {redes.twitter_id && <a href={`https://twitter.com/${redes.twitter_id}`} target="_blank"> <FontAwesomeIcon icon={ fabTwitter } className="icono" /></a>}
                {redes.facebook_id && <a href={`https://www.facebook.com/${redes.facebook_id}`} target="_blank"> <FontAwesomeIcon icon={ fabFacebook } className="icono" /></a>}
                {redes.instagram_id && <a href={`https://www.instagram.com/${redes.instagram_id}`} target="_blank"> <FontAwesomeIcon icon={ fabInstagram } className="icono" /></a>} */}
              </div>
                  </div>
                </div>
              </div>
            )}

            {vistaReparto && (
              <div>
                <VistaActores>
                  {reparto.map((actores) => (
                    <>
                      <Tarjeta>
                        <Link>
                          <img
                            src={`https://image.tmdb.org/t/p/w200${actores.profile_path}`}
                          ></img>
                        </Link>
                        <h4>{actores.name}</h4>
                      </Tarjeta>
                    </>
                  ))}
                </VistaActores>
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
                <VistaActores>
                  {similares.map((similar) => (
                    <>
                      <Tarjeta>
                        <Link to={`/peliculas/detalle/${similar.id}`}>
                          <img
                            src={`https://image.tmdb.org/t/p/w200${similar.poster_path}`}
                          ></img>
                        </Link>
                        <h4>{similar.title}</h4>
                      </Tarjeta>
                    </>
                  ))}
                </VistaActores>
              </div>
            )}
          </div>
        </InformacionDetalle>
      </section>
    </>
  );
};

export default VistaDetallePeliculas;
