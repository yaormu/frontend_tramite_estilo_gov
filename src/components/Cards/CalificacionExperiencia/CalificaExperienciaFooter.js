import React, { useState } from "react";
import "./CalificaExperienciaFooter.scss";

const CalificaExperienciaFooter = () => {
  const [isActive, setIsActive] = useState(false);

 

  return (
    <React.Fragment>
      <div className="comentarios-footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5 className="titulo-exp">¿Cómo fue tu experiencia durante el proceso?</h5>
            </div>
            <div className="col-md-4">
              <div className="calificacionfacil" onclick="TramiteFacil()">
                <a className="calificaExpFooter">
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
                  <i className="fas fa-check-circle"></i> <span>FÁCIL</span>
                </a>
              </div>
              <div className="ml-4 mr-4"></div>
              <div className="calificaciondificil" onclick="TramiteDificil()">
                <a className="calificaExpFooter">
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
                  <i className="fas fa-times-circle"></i> 
                  <span>DIFÍCIL</span>
                </a>
              </div>
            </div>

            <div className="col-md-1 position-relative">
              <div className=" borde">&nbsp;</div>
            </div>
            <div className="col-md-4">
              <div
                style={{ display: "none" }}
                className="contenedor-comentarios col-12 mt-3 mb-2 p-0"
              >
                <p className="mb-0 pb-1">Escribre tus comentarios:</p>
                <textarea
                  id="comentarios-encuesta-footer"
                  placeholder="Queremos conocer tu experiencia, sugerencias y consejos..."
                ></textarea>

                <button
                  onclick="EnviarComentariosFooter();"
                  className="boton-submit btn btn-round btn-middle w-100  boton-inicio mt-2"
                >
                  ENVÍA TUS COMENTARIOS
                </button>
              </div>

              <button
                onclick="MostrarEnviarComentariosFooter();"
                className="btn btn-round btn-middle pt-2 pb-2 boton-inicio boton-despliegue "
              >
                ENVÍA TUS COMENTARIOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalificaExperienciaFooter;
