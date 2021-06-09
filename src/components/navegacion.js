import { React, useState } from "react";
import { Link, useHistory, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navegacion = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const history = useHistory();

  const BarraNavegacion = styled.div`
    height: 80px;
    background-color: #23272a;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .iconos {
      display: flex;
      margin-left: 30px;
      margin-right: 70px;

      .icono {
        color: #fafafa;
        font-size: 50x;
        margin: 12px;
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
        border-radius: 3px;

        &:focus {
          border: none;
        }

        &:active {
          border: none;
        }
        border: none;
        width: 200px;
        height: 30px;
        display: inline;
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
            <input
              type="text"
              value={valorDelInput}
              onChange={busquedaTexto}
            ></input>
          </form>
        </div>
      </BarraNavegacion>
    </>
  );
};

export default Navegacion;
