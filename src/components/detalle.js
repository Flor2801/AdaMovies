import { React, useEffect, useState } from "react";
import useFetch from "../hooks.js/useFetch";
import { Link, useParams } from "react-router-dom";

const VistaDetalle = () => {
  const [detalle, setDetalle] = useState([]);
  const [redesSociales, setRedesSociales] = useState([]);
  const [reparto, setReparto] = useState([]);
  const [videos, setVideos] = useState([]);
  const [similares, setSimilares] = useState([]);

  const [vistaInfo, setVistaInfo] = useState(true)
  const [vistaReparto, setVistaReparto] = useState(false)
  const [vistaVideos, setVistaVideos] = useState(false)
  const [vistaSimilares, setVistaSimilares] = useState(false)



  const verVistaInfo = () => {
      setVistaInfo(true)
      setVistaReparto(false)
      setVistaVideos(false)
      setVistaSimilares(false)
  }

  const verVistaReparto = () => {
    setVistaInfo(false)
    setVistaReparto(true)
    setVistaVideos(false)
    setVistaSimilares(false)
}

const verVistaVideos = () => {
    setVistaInfo(false)
    setVistaReparto(false)
    setVistaVideos(true)
    setVistaSimilares(false)
}

const verVistaSimilares = () => {
    setVistaInfo(false)
    setVistaReparto(false)
    setVistaVideos(false)
    setVistaSimilares(true)
}

  const params = useParams();


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetalle(data);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/external_ids?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setRedesSociales(data);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setReparto(data);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/337404/similar?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setSimilares(data);
      });
  }, []);


  console.log(detalle)
  console.log(reparto)
  console.log(videos)
  console.log(similares)

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
              titulo puntuacion descripcion duracion genero presupuesto
              recaudacion produccion redes sociales
            </div>
          )}
                    {vistaReparto && (
            <div>
              reparto
            </div>
          )}
                    {vistaSimilares && (
            <div>
            similares
            </div>
          )}
                 
        </div>
      </section>
    </>
  );
};

export default VistaDetalle;
