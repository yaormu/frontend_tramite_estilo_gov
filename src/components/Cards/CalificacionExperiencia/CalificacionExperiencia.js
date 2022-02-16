import React, { useState } from 'react';
import "./CalificacionExperiencia.scss"

const CalificacionExperiencia = () => {

  const [isActive, setIsActive] = useState(false);

  const accordionData = {
    title: '¿Cómo fue tu experiencia durante el proceso?',
    content: <>
      <div className="accordion-body-califica">
        
      <div aria-label="enviar a email" className="email">
        <a href="https://" Target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </a>
        <p className='txt-experiencia'>FÁCIL</p>
      </div>

      <div aria-label="enviar a email" className="email">
          <a href="https://" Target="_blank">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </a>
        <p className='txt-experiencia'>DIFÍCIL</p>
      </div>
    </div>
    <div className="contenedor-comentarios col-12 mt-3 mb-2 p-0">
      <p className="mb-0 pb-1 title-comentario">Escribre tus comentarios:</p>
	    <textarea className="textoarea"
        placeholder="Queremos conocer tu experiencia ó sugerencias" 
      >
      </textarea>
    </div>
    <button className="btn-comentarios">
        envía tus comentarios
    </button>
    </>
  };

  const { title, content } = accordionData;


  return (
    <React.Fragment>
      <div className="accordion">
        <div className="accordion-item">
          <div 
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}  
          >
            <div>{title}</div>
            <div>
              {
                isActive ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                </svg> 
                : 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
              }
            </div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalificacionExperiencia;