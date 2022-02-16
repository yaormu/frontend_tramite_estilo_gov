import React, { useState } from "react";
import styled from "styled-components";

function DragArea() {
  const [seleccionArchivo, setSeleccionArchivo] = useState(null);
  const [seleccionArchivo2, setSeleccionArchivo2] = useState(null);

  const onFileChange = (e) => {
    //console.log(e.target.files);
    const file = e.target.files[0];

    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = (e) => {
        e.preventDefault();
        console.log(e);
        setSeleccionArchivo(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
      };
    }
  };

  const onFileChange2 = (e) => {
    //console.log(e.target.files);
    const file = e.target.files[0];

    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = (e) => {
        e.preventDefault();
        console.log(e);
        setSeleccionArchivo2(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
      };
    }
  };

  return (
    <div>
      <StyleDragArea>
        <br />
        <p> Etiqueta del Equipo *</p>
        <div className="image-upload-wrap">
          <input
            className="file-upload-input"
            type="file"
            accept="image/*, application/pdf,application/vnd.ms-excel"
            multiple
            onChange={(e) => {
              onFileChange(e);
            }}
          />
          <div className="text-information">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="35"
              fill="currentColor"
              className="bi bi-paperclip"
              viewBox="0 0 16 16"
            >
              <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
            </svg>
            <h3>Arrastre aquí su archivo o haga click para añadir.</h3>
          </div>
        </div>
        <br />
        <p> Certificado de conformidad de normas técnicas (opcional)</p>
        <div className="image-upload-wrap2">
          <input
            className="file-upload-input"
            type="file"
            accept="image/*, application/pdf,application/vnd.ms-excel"
            multiple
            onChange={(e) => {
              onFileChange2(e);
            }}
          />
          <div className="text-information">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="35"
              fill="currentColor"
              className="bi bi-paperclip"
              viewBox="0 0 16 16"
            >
              <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
            </svg>
            <h3>Arrastre aquí su archivo o haga click para añadir.</h3>
          </div>
        </div>
      </StyleDragArea>
      <br />
      <br />
      <div className="tabla">
        <p className="titulo-tabla">Archivos para Homologación</p>
        <table className="rwd-table">
          <tr>
            <th>Nombre del Archivo</th>
            <th>Archivo Cargado	</th>
            <th>Eliminar Archivo</th>
          </tr>
          <tr>
            <td data-th="etiqueta">Etiqueta del equipo *</td>
            <td data-th="archivo"> <img
                        src={seleccionArchivo}
                        alt=""
                        height="20px"
                        width="70px"
                      /></td>
            <td data-tj="accion"></td>
          </tr>
          <tr>
            <td data-th="etiqueta">Certificado de conformidad de normas técnicas (opcional)</td>
            <td data-th="archivo"></td>
            <td data-tj="accion"></td>
          </tr>
        </table>
      </div>
      <div className="center"></div>
    </div>
  );
}

export default DragArea;

const StyleDragArea = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .file-upload-content {
    display: none;
    text-align: center;
  }
  .file-upload-input {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }
  .image-upload-wrap {
    position: relative;
    height: 100px;
    border: 2px dashed #3366cc;
    margin: 0px;

    h3 {
      font: normal bold 1rem/30px "Work Sans", san serif;
      color: #3366cc;
    }

    svg {
      fill: #3366cc;
      float: left;
    }
  }
  .image-upload-wrap:hover {
    background-color: #3366cc;
    border: 2px solid #3366cc;

    h3 {
      color: #ffff;
    }

    svg {
      fill: #ffff;
    }
  }
  .text-information {
    margin-top: 30px;
    text-align: left;
  }

  .image-upload-wrap2 {
    background-color: #3366cc;
    position: relative;
    height: 100px;
    border: 2px solid #3366cc;
    margin: 0px;

    h3 {
      font: normal bold 1rem/30px "Work Sans", san serif;
      color: #ffff;
    }

    svg {
      fill: #ffff;
      float: left;
    }
  }
  .image-upload-wrap2:hover {
    background-color: #ffff;

    border: 2px dashed #3366cc;

    h3 {
      color: #3366cc;
    }

    svg {
      fill: #3366cc;
    }
  }
`;
