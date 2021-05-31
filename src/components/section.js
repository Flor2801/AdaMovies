import { React } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Section = ({ item, title, url}) => {
  const array = item.slice(0, 5);
  const titulo = title;



  return (
    <>
      <section>
        <Link to={url}>
          <p>{title}</p>
        </Link>

        <div>
          {array.map((tarjeta) => (
         
            <>
            <img src={`https://image.tmdb.org/t/p/w200${tarjeta.poster_path}`}></img>
            <p>{tarjeta.title}</p>
             {titulo === "Peliculas"  ?  <p>{tarjeta.title}</p>  :  <p>{tarjeta.name}</p>}
             </>
          ))}
        </div>
      </section>

      {/* <BrowserRouter>
        <Route exact path={url} component={comp} />
      </BrowserRouter> */}
    </>
  );
};

export default Section;
