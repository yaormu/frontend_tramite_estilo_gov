import React from "react";
//import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
//import NavProceso from "../../components/NavProceso/NavProceso";
import BotonTutoriales from "../../components/Botones/BotonTutoriales/BotonTutoriales";
import BotonDeDudas from "../../components/Botones/BotonDeDudas/BotonDeDudas";
import CalificacionExperiencia from "../../components/Cards/CalificacionExperiencia/CalificacionExperiencia";
import BotonInicio from "../../components/Botones/BotonInicio/BotonInicio";
import Footer from "../../components/Footer/Footer";
import FooterGov from "../../components/FooterGov/FooterGov";

//import { Boton } from "../FormularioSolicitud/elementos/Formularios";

import Navegacion from "../../components/Navigation/Navegacion";
import Instancia4 from "../../components/NavProceso/Instancia4";
import CalificaExperienciaFooter from "../../components/Cards/CalificacionExperiencia/CalificaExperienciaFooter";

// Estilos generales del formulario
import "./RespuestaSolicitud.scss";

const RespuestaSolicitud = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-8">
            <Navegacion
              inicio="Inicio"
              pagina="Solicitud de Homologación"
              paginaActual="Conoce el Estado de tú Solicitud"
            />
            <Instancia4 />
            <br />
            <h3 className="title-form">Conoce el Estado de tú Solicitud</h3>
            <br />
            <p>
              A continuación presentamos la RespuestaSolicitud del estado de tu trámite
              presentado ante la Comisión de Regulación de Comuinicaciones:
            </p>
            <br />
            <p style={{ color: "#A80521", fontSize: "15px" }}>
              El tiempo aproximado de respuesta a la solicitud es de quince (15) dias hábiles
              apartir de la fecha de radicado:
            </p>
            <br />

            <table className="rwd-table">
              <tr>
                <th>Estado de Trámite</th>
                <th>Fecha Radicación</th>
                <th>Fecha Salida</th>
                <th>Radicación Salida</th>
                <th>Documento</th>
              </tr>
              <tr>
                <td data-th="estado">Pendiente</td>
                <td data-th="radicado">10-02-2022</td>
                <td data-th="salida"></td>
                <td data-th="salidaRadicado"></td>
                <td data-th="documento">
                  <a className="mostraDocumento" href="#" Target="_blank"></a>
                </td>
              </tr>
            </table>
            <br />
            <br />

            <br />
            <br />
          </div>

          <div className="col-lg-1"></div>
          <div className="col-lg-3 p-0">
            <aside className="aside">
              <br />
              <br />
              <BotonTutoriales />
              <BotonDeDudas />
              <br />
              <br />
              <CalificacionExperiencia />
              <br />
              <br />
              <BotonInicio />
            </aside>
          </div>
        </div>
      </div>
      <CalificaExperienciaFooter />
      <Footer />
      <FooterGov />
    </>
  );
};

export default RespuestaSolicitud;
