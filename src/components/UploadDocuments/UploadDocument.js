import React, { useState } from "react";
// Libreria para subir archivos
import { useFileUpload } from "use-file-upload";

import styled from "styled-components";

export default function UploadDocument() {
  const [file, selectFile] = useFileUpload();
  const [file2, selectFile2] = useFileUpload();
  

  const removeFile = (name) => {
    const newFiles = file2.filter((file) => file.name !== name)
    selectFile2(newFiles)
  }

  return (
    <>
      <PrimaryButton
        onClick={() => {
          // Single File Upload accepts only images
          selectFile(
            {
              accept: "image/*, application/pdf,application/vnd.ms-excel",
            },
            ({ source, name, size, file }) => {
              // file - is the raw File Object
              console.log({ source, name, size, file });
              // Todo: Upload to cloud.
            }
          );
        }}
      >
        Etiqueta del equipo*
      </PrimaryButton>

      <br />
      <br />

      <SecondaryButton
        onClick={() => {
          // Single File Upload accepts only images
          selectFile2(
            {
              accept: "image/*, application/pdf,application/vnd.ms-excel",
            },
            ({ source, name, size, file }) => {
              // file - is the raw File Object
              console.log({ source, name, size, file });
              // Todo: Upload to cloud.
            }
          );
        }}
      >
        Certificado de conformidad de normas técnias (opcional)
      </SecondaryButton>

      {/* <img src={file.source} alt="preview" /> */}
      <div className="tabla">
        <p className="titulo-tabla">Archivos para Homologación</p>
        <table className="rwd-table">
          <tr>
            <th>Nombre del Archivo</th>
            <th>Archivo Cargado </th>
            <th>Accion</th>
          </tr>
          <tr>
            <td data-th="etiqueta">Etiqueta del equipo *</td>
            <td data-th="archivo" id="archivo1">
              {file ? <span>{file.name}</span> : <span>Sin Datos</span>}
            </td>
            <td data-tj="accion">
              <span 
                onClick={
                  () => document.getElementById("archivo1").innerHTML="<span>Sin Datos</span>"
                }>
                  ELIMINAR
              </span>
            </td>
          </tr>
          <tr>
            <td data-th="etiqueta">
              Certificado de conformidad de normas técnicas (opcional)
            </td>
            <td data-th="archivo" id="archivo2">
              {file2 ? <span>{file2.name}</span> : <span>Sin Datos</span>}
            </td>
            <td data-tj="accion">
              <span 
                onClick={
                () => document.getElementById("archivo2").innerHTML="<span>Sin Datos</span>"
                }>
                ELIMINAR
              </span>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

const Boton = styled.button`
  border-radius: 20px;
  border: 2px solid #1766dc;
  background: #1766dc;
  color: #ffff;
  cursor: pointer;
  display: block;
  font: normal bold 15px "Works Sans", sans-serif;
  padding: 15px 10px;
  transition: 0.3s ease all;
  width: 30%;

  &:hover {
    background: #004884;
    border-color: #004884;
  }
`;

const PrimaryButton = styled(Boton)`
  background-color: #1766dc;
  color: #ffff;
  width: 25%;
  height: auto;
  padding: 10px 10px 10px 10px;
`;

const SecondaryButton = styled(Boton)`
  background-color: #ffff;
  color: #1766dc;
  width: 58%;
  height: auto;
  padding: 10px 10px 10px 10px;
  margin: -30px 0px 20px 0px;

  &:hover {
    background: #004884;
    color: #ffff;
  }
`;