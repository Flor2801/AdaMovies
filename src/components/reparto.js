import { React } from "react";


const Reparto = () => {

  return (
    <>
      <div>Hola soy peliculas populares</div>

      <section>
        <p>PELICULAS POPULARES</p>
        <div>
          {peliculas.map((tarjeta) => (
            <>
              <Link to={`/peliculas/detalle/${tarjeta.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${tarjeta.poster_path}`}
                ></img>
              </Link>
              <p>{tarjeta.title}</p>
            </>
          ))}
        </div>
      </section>
      <div>PAGINADO</div>
    </>
  );
};

export default Reparto;