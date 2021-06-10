import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImagenDetalle } from "../components/commons.js";
import { InformacionDetalle } from "../components/commons.js";
import { VistaActores } from "../components/commons.js";
import { Tarjeta } from "../components/commons.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


const VistaDetalleSeries = () => {
  const [detalle, setDetalle] = useState([]);
  const [redes, setRedes] = useState([]);
  const [reparto, setReparto] = useState([]);
  const [similares, setSimilares] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [productores, setProductores] = useState([]);
  const [vistaInfo, setVistaInfo] = useState(true);
  const [vistaReparto, setVistaReparto] = useState(false);
  const [vistaSimilares, setVistaSimilares] = useState(false);

  console.log(detalle);
  console.log(generos);

  const verVistaInfo = () => {
    setVistaInfo(true);
    setVistaReparto(false);
    setVistaEpisodios(false);
    setVistaSimilares(false);
  };

  const verVistaReparto = () => {
    setVistaInfo(false);
    setVistaReparto(true);
    setVistaEpisodios(false);
    setVistaSimilares(false);
  };

  const verVistaEpisodios = () => {
    setVistaInfo(false);
    setVistaReparto(false);
    setVistaEpisodios(true);
    setVistaSimilares(false);
  };

  const verVistaSimilares = () => {
    setVistaInfo(false);
    setVistaReparto(false);
    setVistaEpisodios(false);
    setVistaSimilares(true);
  };

  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetalle(data);
        setGeneros(data.genres);
        setProductores(data.production_companies);
      });

    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}/external_ids?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => {
        setRedes(data);
      });

    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => {
        setReparto(data.cast);
      });

    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}/similar?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setSimilares(data.results);
      });

    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}/images?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setImagenes(data.posters);
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
          <button onClick={verVistaSimilares}>SIMILARES</button>
        </div>

        <div className="variables-detalle-vistas">
          {vistaInfo && (
            
            <div>
               <div className="variables-detalle-info">
              <div className="variables-detalle-info-img">
              <Link to={`/series/detalle/${detalle.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${detalle.poster_path}`}
                ></img>
              </Link>
              </div>

              <div className="variables-detalle-info-txt">
              <h4>{detalle.name}</h4>
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
              <p>
                Producción:{" "}
                {productores.map((productores) => (
                  <>
                 <span>{productores.name}</span>
                  </>
                ))}
              </p>
              <div className="variables-detalle-info-redes">
                     {detalle.homepage && <a href={`${detalle.homepage}`} target="_blank"> <FontAwesomeIcon icon={faLink} className="icono" /></a>}
                     {redes.imdb_id && <a href={`https://www.imdb.com/title/${redes.imdb_id}`} target="_blank"> <FontAwesomeIcon icon={faImdb} className="icono" /> </a>}
                     {redes.twitter_id && <a href={`https://twitter.com/${redes.twitter_id}`} target="_blank"> <FontAwesomeIcon icon={faTwitter} className="icono" /></a>}
                     {redes.facebook_id && <a href={`https://www.facebook.com/${redes.facebook_id}`} target="_blank"> <FontAwesomeIcon icon={faFacebook} className="icono" /></a>}
                     {redes.instagram_id && <a href={`https://www.instagram.com/${redes.instagram_id}`} target="_blank"> <FontAwesomeIcon icon={faInstagram} className="icono" /></a>}
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
                    <img src={`https://image.tmdb.org/t/p/w200${actores.profile_path}`}></img>
                  </Link>
                  <h4>{actores.name}</h4>
                  </Tarjeta>
                </>
              ))}
               </VistaActores>
            </div>
            
          )}
        

          {vistaSimilares && (
            <div>
               <VistaActores>
              {similares.map((similar) => (
                <>
                  <Tarjeta>
                  <Link to={`/series/detalle/${similar.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${similar.poster_path}`}
                    ></img>
                  </Link>
                  <h4>{similar.name}</h4>
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


export default VistaDetalleSeries;





