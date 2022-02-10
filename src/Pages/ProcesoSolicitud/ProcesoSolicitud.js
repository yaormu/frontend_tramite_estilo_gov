import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import NavProceso from "../../components/NavProceso/NavProceso";
import BotonTutoriales from "../../components/Botones/BotonTutoriales/BotonTutoriales";
import BotonDeDudas from "../../components/Botones/BotonDeDudas/BotonDeDudas";
import CalificacionExperiencia from "../../components/Cards/CalificacionExperiencia/CalificacionExperiencia";
import BotonInicio from "../../components/Botones/BotonInicio/BotonInicio";
import Footer from "../../components/Footer/Footer";
import FooterGov from "../../components/FooterGov/FooterGov";

import Instancia3 from "../../components/NavProceso/Instancia3";
import Navegacion from "../../components/Navigation/Navegacion";


import { Boton } from "../FormularioSolicitud/elementos/Formularios";

const ProcesoSolicitud = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-8">
            <Navegacion
              inicio="Inicio"
              pagina="Solicitud de Homologación..."
              paginaActual="Resumen Radicación Solicitud"
            />
            <Instancia3 /> 
            <br/>
            <h3 className="title-form">
              Resumen Formulario de Solicitud de Homologación de Equipos Términales Móviles
            </h3>
            <br/>
            <p>
              Apreciado(a) ciudadano(a) su trámite ha sido radicado de forma satisfactoria en el sistema 
              de trámites.
              <br/>
              <strong>Número de trámite</strong>
              <br/>
              2022705202
              <br/>
              Por favor, conserve este número para realizar seguimiento al proceso del trámite
              de Homologación de Equipos Terminales Móviles
            </p>
            <br/>
            <p style={{color: "#A80521", fontSize: "15px"}}>
              Tiempo de respuesta aproximadamente en 10 días habiles (10-feb-2022)
            </p>
            <br/>
            <br/>

            
          
          <div>
          <Boton>
            <Link to="/">
              FINALIZAR RADICACIÓN
            </Link>
          </Boton>
          </div>  
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
      <Footer />
      <FooterGov />
    </>
  );
};

export default ProcesoSolicitud;
