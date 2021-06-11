import styled from "styled-components";

export const Seccion = styled.div`
  width: 90%;
  margin: 20px 0px 0px 50px;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-wrap: wrap;

  h3 {
    font-size: 25px;
    font-weight: 300;
    text-decoration: none;
    color: white;
    margin-bottom: 10px;
    margin: 20px 0px 0px 0px;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 500px) {
    margin: 30px 0px 0px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    font-weight: 300;
    margin: 2px;
    color: white;
  }

  .vacio {
    width: 200;
    height: 300px;
    bacgroundcolor: white;
  }

  @media (max-width: 650px) {
    margin: 40px 20px 10px 0px;
  }
`;

export const SeccionGeneral = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }

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

        @media (max-width: 800px) {
          font-size: 18px;
        }

        @media (max-width: 500px) {
          font-size: 15px;
        }
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0px;

  @media (max-width: 900px) {
    height: 300px;
  }

  @media (max-width: 600px) {
    height: 200px;
  }

  @media (max-width: 450px) {
    height: 150px;
  }

  @media (max-width: 300px) {
    height: 100px;
  }

  img {
    width: 100%;
    position: relative;
    top: 30px;
  }
`;

export const InformacionDetalle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

      @media (max-width: 500px) {
        font-size: 13px;
      }
    }
  }

  .variables-detalle-vistas {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .variables-detalle-info {
    width: 700px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 650px) {
      width: 350px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

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

      @media (max-width: 900px) {
        max-width: 300px;
      }
    }

    .variables-detalle-info-redes {
      margin-top: 30px;

      .icono {
        font-size: 20px;
        color: white;
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
  width: 100%;
  background-color: #23272a;
  margin-top: 200px;
  color: white;
  position: relative;
  bottom: 0px;

  p {
    color: white;
    font-size: 15px;
    font-weight: 300;
    font-family: "Montserrat", sans-serif;

    @media (max-width: 900px) {
      margin: 0px 20px;
      max-width: 500px;
      text-align: center;
    }

    @media (max-width: 600px) {
      font-size: 13px;
      max-width: 300px;
    }

    @media (max-width: 500px) {
      font-size: 10px;
      max-width: 250px;
    }
  }
`;
