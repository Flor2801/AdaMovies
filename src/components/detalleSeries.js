import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const VistaDetalleSeries = () => {
  const [detalle, setDetalle] = useState([]);
  const [redes, setRedes] = useState([]);
  const [reparto, setReparto] = useState([]);
  const [similares, setSimilares] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [cantidadTemporadas, setCantidadTemporadas] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [productores, setProductores] = useState([]);

  const [vistaInfo, setVistaInfo] = useState(true);
  const [vistaReparto, setVistaReparto] = useState(false);
  const [vistaEpisodios, setVistaEpisodios] = useState(false);
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
      `https://api.themoviedb.org/3/tv/${params.id}?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetalle(data);
        setGeneros(data.genres);
        setProductores(data.production_companies);
      });

    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}/external_ids?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setRedes(data);
      });

    // fetch(
    //   `https://api.themoviedb.org/3/tv/${params.id}/season/1?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setEpisodios(data.results);
    //   });

    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=8cd74c1ce651a04254aaab08ea9e9585&&language=en-US`
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
        <p>Hola soy el detalle de la Pelicula o Serie</p>
        <div>PORTADA DE LA PELICULA O SERIE</div>

        <div>
          <button onClick={verVistaInfo}>INFO</button>
          <button onClick={verVistaReparto}>REPARTO</button>
          <button onClick={verVistaEpisodios}>EPISODIOS</button>
          <button onClick={verVistaSimilares}>SIMILARES</button>
        </div>

        <div>
          {vistaInfo && (
            <div>
              <Link to={`/series/detalle/${detalle.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${detalle.backdrop_path}`}
                ></img>
              </Link>
              <p>{detalle.name}</p>
              <p>{detalle.vote_average}</p>
              <p>{detalle.overview}</p>

              <p>Temporadas {detalle.number_of_seasons}</p>
              <p>Episodios {detalle.number_of_episodes}</p>
              {/* <p>duracion {detalle.episode_run_time[0]}</p> */}

              <p>Generos:</p>
              {generos.map((generos) => (<><div><p>{generos.name}</p></div></>))}

              <p>Produccion:</p>
              {productores.map((productores) => (<><div><p>{productores.name}</p></div></>))}

              <div>
                {detalle.homepage && (<a href={`${detalle.homepage}`} target="_blank"><p>WEB</p></a>)}
                {redes.imdb_id && <a href={`https://www.imdb.com/title/${redes.imdb_id}`} target="_blank"><p>IMDB</p></a>}
                {redes.twitter_id && <a href={`https://twitter.com/${redes.twitter_id}`} target="_blank"><p>TW</p></a>}
                {redes.facebook_id && <a href={`https://www.facebook.com/${redes.facebook_id}`} target="_blank"><p>FB</p></a>}
                {redes.instagram_id && <a href={`https://www.instagram.com/${redes.instagram_id}`} target="_blank"><p>IG</p></a>}
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
          {/* {vistaEpisodios && (
            <div>
              {episodios.map((episodios) => (
                <p>{episodios.name}</p>
              ))}
            </div>
          )} */}
          {vistaSimilares && (
            <div>
              {similares.map((similar) => (
                <>
                  <Link to={`/series/detalle/${similar.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${similar.poster_path}`}
                    ></img>
                  </Link>

                  <p>{similar.name}</p>
                </>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default VistaDetalleSeries;
