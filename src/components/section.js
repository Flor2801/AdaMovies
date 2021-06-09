import { React } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/commons.js";
import { Seccion } from "../components/commons.js";
import { Tarjeta } from "../components/commons.js";

const Section = ({ item, title, url, tipo }) => {
  const array = item.slice(0, 5);
  const peliculaOserie = tipo;

  return (
    <>
   <Seccion >
        <Link to={url}>
          <h3>{title}</h3>
        </Link>

        <Container >
       
          {array.map((tarjeta) => (
            <>
            <Tarjeta>
          <div>
          {peliculaOserie == "Peliculas" ? <Link to={`/peliculas/detalle/${tarjeta.id}`}><img src={`https://image.tmdb.org/t/p/w200${tarjeta.poster_path}`}></img></Link>
         : <Link to={`/series/detalle/${tarjeta.id}`}><img src={`https://image.tmdb.org/t/p/w200${tarjeta.poster_path}`}></img></Link>}
          </div >
          <div className="titulo">{peliculaOserie == "Peliculas" ? (<p>{tarjeta.title}</p>) : (<p>{tarjeta.name}</p>)} </div>
          </Tarjeta>
            </>
          ))}
     
        </Container>
        </Seccion>

    </>
  );
};

export default Section;
