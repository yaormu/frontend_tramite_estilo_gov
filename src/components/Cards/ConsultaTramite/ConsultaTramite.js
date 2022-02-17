import React from "react";
import { Link } from "react-router-dom";
import "./ConsultaTramite.scss";

export default function ConsultaTramite() {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="tarjeta-acciones mb-4">
        <div className="head-acciones titulo-acciones">
          <Link to="/ConsultaEstadoTramite" className="irTramite">
            <h6 className="titulo-card">
              Consulta el Estado de tu Solicitud
            </h6>
          </Link>          
        </div>
        <div className="body-acciones">
          <p className="texto-card">
            Consulta el estado de tu Trámite de Homologación de Equipos Terminales Móviles ante la Comisión de Regulación de Comunicaciones.
          </p>
        </div>
      </div>
    </div>
  );
}
