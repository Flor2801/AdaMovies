import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const BarraNavegacion = styled.div`
  height: 80px;
  width: 100%;
  background-color: #23272a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  position: relative;
  z-index: 10;

  .logo {
    p {
      font-size: 30px;
      color: red;
      margin-right: 40px;
      font-weight: 600;
      font-family: "Righteous", cursive;

      @media (max-width: 700px) {
        font-size: 20px;
      }

      @media (max-width: 500px) {
        font-size: 30px;
        margin-right: 10px;
      }
    }
  }

  .iconos {
    display: flex;
    margin-left: 15px;

    .icono {
      color: #fafafa;
      font-size: 25px;
      margin-left: 35px;
      padding: 0px;

      @media (max-width: 900px) {
        font-size: 15px;
      }

      @media (max-width: 900px) {
        margin-left: 15px;
      }

    }

    @media (max-width: 900px) {
      margin-left: 10px;
    }

    @media (max-width: 500px) {
      display: none;
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

    input {
      background-color: #e9e9e9;
      border-radius: 2px;
      width: 250px;
      height: 30px;
      display: inline;
      padding-left: 30px;

      @media (max-width: 900px) {
        width: 150px;
      }

      @media (max-width: 500px) {
        display: none;
      }
    }

    p {
      margin-right: 2px;

      @media (max-width: 650px) {
        display: none;
      }
    }

    .icono {
      position: relative;
      left: 25px;
      color: grey;
      font-size: 15px;
      @media (max-width: 500px) {
        display: none;
      }
    }
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const Navegacion = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const history = useHistory();

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
