import styled from "styled-components";




export const Navegacion = styled.div`
  height: 80px;
  margin: 50px 50px;
  background-color: #23272a;
  position: relative;
  z-index: 10;
  h3 {
    font-size: 20px;
    text-decoration: none;
    color: white;
  }
`;



export const SliderImagen = styled.div`
  position: relative;

  .imagen-carrousel {
    height: 650px;
    img {
        width: 100%;
        height: 100%,
    }
  }

  .texto-carrousel {
    width: 100%;
    height: 250px;
    position: relative;
    bottom: 50px;
    color: white;
    background-color: #23272a;
    display: flex;
    flex-direction: column;

    .carrousel-ranking {
       margin-left: 40px;
       height: 50px;
    }

    .carrousel-titulo {
        font-size: 30px;
        height: 100px;
        margin-left: 40px;
    }
    .carrousel-descripcion {
        font-size: 12px;
        height: 100px;
        margin-left: 40px;
    }
  }
 
`;

export const Seccion = styled.section`
  width: 90%;
  margin: 50px 50px;

  h3 {
    font-size: 20px;
    text-decoration: none;
    color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 0px;
`;

export const Tarjeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 50px 30px 10px 0px;

  .titulo {
    height: 40px;
  }

  p {
    max-width: 150px;
    font-size: 15px;
    margin: 2px;
    color: white;
  }
`;


export const SeccionGeneral = styled.section`
 display: flex;
 flex-direction:column;
 margin: 50px;

 h3 {
    font-size: 20px;
    text-decoration: none;
    color: white;
  }

 .vista-tarjetas {
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    flex-shrink: 3;

 }

 .tarjeta {
    display: flex;
    flex-direction:column;
    margin: 10px;
 }


 .Paginado {

    div {
    padding: 100px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;


    button {
        border:none;
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
  }
`;
