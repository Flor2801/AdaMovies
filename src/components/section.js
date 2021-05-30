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
            <p>{tarjeta.title}</p>
             {titulo === "Peliculas que son tendencia"  ?  <p>{tarjeta.title}</p>  :  <p>{tarjeta.name}</p>}
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
