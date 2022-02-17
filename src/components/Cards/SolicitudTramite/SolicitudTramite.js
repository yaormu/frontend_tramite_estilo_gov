import React from "react";

import "./SolicitudTramite.scss";
import { Link } from "react-router-dom";



export default function SolicitudTramite() {
  

  return (
    <div className="col-12 col-sm-6 col-lg-4" >
      <div className="tarjeta-acciones mb-4">
        <div className="head-acciones">
          
        <Link to="/SolicitudHomologacion" className="irTramite">
            <h6 className="titulo-card">
              Solicita el Trámite de Homologación
            </h6>
          </Link>  
        </div>
        <div className="body-acciones">
          <p className="texto-card">
            Realiza la solicitud del Trámite de Homologación de Equipos Terminales Móviles ante la Comisión de Regulación de Comunicaciones.
          </p>
        </div>
      </div>
    </div>
  );
}

