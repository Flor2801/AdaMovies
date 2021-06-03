import { React } from "react";
import { Link } from "react-router-dom";

const Section = ({ item, title, url, tipo }) => {
  const array = item.slice(0, 5);
  const peliculaOserie = tipo;

  return (
    <>
      <section>
        <Link to={url}>
          <p>{title}</p>
        </Link>

        <div>
          {array.map((tarjeta) => (
            <>
          {peliculaOserie == "Peliculas" ? <Link to={`/peliculas/detalle/${tarjeta.id}`}><img src={`https://image.tmdb.org/t/p/w200${tarjeta.poster_path}`}></img></Link>
         : <Link to={`/series/detalle/${tarjeta.id}`}><img src={`https://image.tmdb.org/t/p/w200${tarjeta.poster_path}`}></img></Link>}
          {peliculaOserie == "Peliculas" ? (<p>{tarjeta.title}</p>) : (<p>{tarjeta.name}</p>)}
            </>
          ))}
        </div>
      </section>

    </>
  );
};

export default Section;
