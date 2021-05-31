import { React, useEffect, useState } from "react";
import useFetch from "../hooks.js/useFetch";
import { Link, useParams } from "react-router-dom";

const VistaDetalleSeries = () => {
  const [detalle, setDetalle] = useState([]);
  const [redesSociales, setRedesSociales] = useState([]);
  const [reparto, setReparto] = useState([]);
  const [videos, setVideos] = useState([]);
  const [similares, setSimilares] = useState([]);
  const [imagenes, setImagenes] = useState([]);

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

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetalle(data);
      });

    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}/external_ids?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setRedesSociales(data);
      });

    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setReparto(data.cast);
      });

    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}/videos?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.results);
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
        <p>Hola soy el detalle de la Pelicula o Serie</p>
        <div>PORTADA DE LA PELICULA O SERIE</div>

        <div>
          <button onClick={verVistaInfo}>INFO</button>
          <button onClick={verVistaReparto}>REPARTO</button>
          <button onClick={verVistaVideos}>VIDEOS</button>
          <button onClick={verVistaSimilares}>SIMILARES</button>
        </div>

        <div>
          {vistaInfo && (
            <div>
              imagen {imagenes}
              <p>titulo {detalle.name}</p>
              <p> puntuacion  {detalle.vote_average}</p>
              <p>descripcion  {detalle.overview}</p>
              <p>duracion  {detalle.runtime} min.</p>
              <p>genero</p>
              <p>presupuesto ${detalle.budget}</p>
              <p>recaudacion ${detalle.revenue}</p>
              <p>produccion {detalle.title}</p>
              <p>redes sociales</p>
            </div>
          )}
          {vistaReparto && (
            <div>
              {reparto.map((actores) => (
                <p>{actores.name}</p>
              ))}
            </div>
          )}
          {vistaVideos && (
            <div>
              {videos.map((videos) => (
                <p>{videos.name}</p>
              ))}
            </div>
          )}
          {vistaSimilares && (
            <div>
              {similares.map((similar) => (
                <p>{similar.name}</p>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default VistaDetalleSeries;
