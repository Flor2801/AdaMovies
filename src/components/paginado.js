import { React, useState } from "react";


const Paginado = ({pagina, total, funcion}) => {

const [paginaComponente, setPaginaComponente] = useState(1);

const cambiar = () => {
  funcion(paginaComponente);
} 


return (
    <>
 <div>
   <button onClick={() => setPaginaComponente(1), cambiar}>PRIMERA</button>
   <button onClick={() => pagina === 1 ? setPaginaComponente(1) : setPaginaComponente(pagina-1) ,cambiar}>ANTERIOR</button>

   <button>{pagina}</button> 

   <button onClick={() => setPaginaComponente(pagina+1), cambiar} >{pagina+1} </button>
   <button onClick={() => setPaginaComponente(pagina+2), cambiar} >{pagina+2}</button>
   <button onClick={() => setPaginaComponente(pagina+3), cambiar} >{pagina+3}</button>

   <button>...</button>

   <button onClick={() => pagina === total ? setPaginaComponente(total)
    : setPaginaComponente(pagina-1), cambiar}>PROXIMA</button>

   <button onClick={() => setPaginaComponente(total), cambiar}>ULTIMA</button>
 </div>
    </>
  );
};


export default Paginado;
