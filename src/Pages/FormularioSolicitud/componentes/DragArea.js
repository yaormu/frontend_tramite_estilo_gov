import React, { useState } from "react";
import styled from "styled-components";

function DragArea() {
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const changeImage = (e) => {
    console.log(e.target.files);
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
      };
    }
  };
  return (
    <div>
      <StyleDragArea>
        <br />
        <div className="image-upload-wrap">
          <input
            className="file-upload-input"
            type="file"
            accept="image/*, pdf, xls"
            multiple
            onChange={(e) => {
              changeImage(e);
            }}
          />
          <div className="text-information">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
              <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
            </svg>
            <h3>Arrastre aquí su archivo o haga click para añadir.</h3>
          </div>
        </div>

        <div className="center">
          <img
            src={ImageSelectedPrevious}
            alt=""
            height="150px"
            width="55px"
          />
        </div>
      </StyleDragArea>
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
    border: 2px dashed #3366CC;
    margin: 0px;

    h3 {
      font: normal bold 1rem/30px "Work Sans", san serif;
      color: #3366CC;
    }

    svg {
      fill: #3366CC;
      float: left;
    }
  }
  .image-upload-wrap:hover {
    background-color: #3366CC;
    border: 2px solid #3366CC;

    h3 {
      color: #FFFF;
    }

    svg {
      fill: #FFFF;
    }
  }
  .text-information {
    margin-top: 30px;
    text-align: left;
  }

  
`;
