import { React } from "react";



const Section = ({ item, title }) => {
  const array = item.slice(0, 5);
  const titulo = title;
  console.log(titulo);

  return (
    <>
      <section>
        <p>{title}</p>

        <div>
          {array.map((tarjeta) => (
            <p>{tarjeta.name}</p>
    //  {titulo = "Peliculas que son tendencia"  ?  <p>{tarjeta.title}</p>  :  <p>{tarjeta.name}</p>}
          ))
          }
          
        </div>
      </section>
    </>
  );
};

export default Section;
