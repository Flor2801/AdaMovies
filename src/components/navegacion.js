import { React, useState } from "react";
import { Link, useHistory, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navegacion = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const history = useHistory();

  const BarraNavegacion = styled.div`
    height: 80px;
    width: 100%;
    background-color: #23272a;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;

.logo {




  p {
    font-size: 30px;
    color: white;
    margin-right: 40px;
    font-weight: 600;
    font-family: 'Righteous', cursive;
  }
 
}    
    .iconos {
      display: flex;
      margin-left: 15px;

      .icono {
        color: #fafafa;
        font-size: 70x;
        margin-left: 35px;
        padding: 0px;
        font-size: 20px;
      
      }
    }

    P {
      margin-left: 10px;
      margin-right: 10px;
      display: inline;
    }

    form {
      color: white;
      font-size: 12px;
      margin-left: -450px;
  
      input {
        background-color: #E9E9E9;
        border-radius: 2px;
        width: 250px;
        height: 30px;
        display: inline;
        padding-left: 30px;
      }

      .icono {
        position: relative;
        left: 25px;
        color: grey;
        font-size: 15px;
      }
    }
  `;

  const busquedaTexto = (e) => {
    setValorDelInput(e.target.value);
  };

  const mostrarResultados = (e) => {
    e.preventDefault();

    if (valorDelInput == "") {
      history.push(`/`);
    } else {
      history.push(`/busqueda/${valorDelInput}`);
    }
  };

  return (
    <>
      <BarraNavegacion>
        <div className="iconos">
          <Link to="/">
            {" "}
            <FontAwesomeIcon icon={faHome} className="icono" />{" "}
          </Link>
          <Link to="/peliculas">
            {" "}
            <FontAwesomeIcon icon={faVideo} className="icono" />{" "}
          </Link>
          <Link to="/series">
            {" "}
            <FontAwesomeIcon icon={faTv} className="icono" />{" "}
          </Link>
        </div>
        <div>
          <form onSubmit={mostrarResultados}>
            <p>BÚSQUEDA</p>
            <FontAwesomeIcon icon={faSearch} className="icono" />
            <input
              type="text"
              value={valorDelInput}
              onChange={busquedaTexto}
            ></input>
          </form>
        </div>
        <div className="logo">
          <p>ADAMOVIES</p>
        </div>
      </BarraNavegacion>
    </>
  );
};

export default Navegacion;
