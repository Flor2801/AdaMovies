import { React, useState } from "react";
import { Link, useHistory, useParams, useLocation  } from "react-router-dom";




const Navegacion = () => {

 const [valorDelInput, setValorDelInput] = useState('')
 const history = useHistory();

 const busquedaTexto = (e) => {
 setValorDelInput(e.target.value)
 }

 const mostrarResultados = (e) => {
   e.preventDefault()


if (valorDelInput == '') {
  history.push(`/`)
}
else {
   history.push(`/busqueda/${valorDelInput}`)}
}

  
  return (
    <>
      <div className="iconos">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/peliculas">Peliculas</Link></p>
        <p><Link to="/series">Series</Link></p>
        <form onSubmit={mostrarResultados}><p>Buscar</p><input type="text" value={valorDelInput} onChange={busquedaTexto}></input></form>
      </div>
    </>
  );
};

export default Navegacion;
