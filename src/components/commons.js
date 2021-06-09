import styled from "styled-components";


export const Seccion = styled.section`
  width: 90%;
  margin: 60px 0px 0px 50px;
  font-family: "Montserrat", sans-serif;

  h3 {
    font-size: 25px;
    font-weight: 300;
    text-decoration: none;
    color: white;
    margin-bottom: 10px;
    margin: 20px 0px 0px 35px;
  }

  a {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 0px 0px 0px;
`;

export const Tarjeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 40px 30px 10px 0px;

  .titulo {
    height: 40px;
  }

  h4 {
    max-width: 180px;
    font-size: 12px;
    font-weight: 500;
    margin: 2px;
    color: white;
  }

  .vacio {
      width: 200;
      height: 300px;
      bacgroundcolor: white;
  }
`;

export const SeccionGeneral = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px;
  font-family: "Montserrat", sans-serif;

  h3 {
    font-size: 25px;
    font-weight: 300;
    text-decoration: none;
    color: white;
    margin-bottom: 10px;
  }

  .vista-tarjetas {
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    flex-shrink: 3;
  }

  .Paginado {
    div {
      padding: 100px 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        border: none;
        margin: 10px;
        background-color: #36393f;
        color: white;
        font-size: 20px;
      }

      .pagina-actual {
        background-color: grey;
        padding: 10px;
      }
    }
  }
`;

export const ImagenDetalle = styled.div`
  height: 400px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  img {
    width: 100%;
    position: relative;
    top: -120px;
  }
`;

export const InformacionDetalle = styled.div`
  .variables-detalle-secciones {
    font-family: "Montserrat", sans-serif;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      border: none;
      margin: 10px;
      background-color: #36393f;
      color: white;
      font-size: 15px;
      font-weight: 500;
    }
  }

  .variables-detalle-vistas {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .variables-detalle-info {
    width: 700px;
    height: 500px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .variables-detalle-info-img {
      margin-right: 30px;
    }

    .variables-detalle-info-txt {
      color: white;

      p {
        font-family: "Montserrat", sans-serif;
        font-size: 12px;
      }

      span {
          margin: 0px 10px 0px 10px; 
      }

      h4 {
        font-size: 25px;
        font-weight: 300;
        margin-top: 0px;
      }
    }
  }
`;

export const VistaActores = styled.section`
  margin: 10px 20px 0px 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap; 
`;

export const PieDePagina = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #23272a;
  margin-top: 300px;
  color: white;

  p {
    color: white;
    font-size: 15px;
    font-weight: 300;
    font-family: "Montserrat", sans-serif;
  }
`;
