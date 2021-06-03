import { React, useState } from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {

  
 const [value, setValue] = useState('')


 const busquedaTexto = (e) => {
 enviarTexto(value)
 setValue(e.target.value)
 }


  return (
    <>
      <div className="iconos">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/peliculas">Peliculas</Link>
        </p>
        <p>
          <Link to="/series">Series</Link>
        </p>
        <p>Buscar</p>
        <input type="text" onChange={busquedaTexto}></input>
      </div>
    </>
  );
};

export default Navegacion;
