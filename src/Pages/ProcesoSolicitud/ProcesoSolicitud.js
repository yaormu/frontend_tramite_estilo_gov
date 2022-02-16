import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
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
              paginaActual="Resumen Solicitud Homologación"
            />
            <Instancia3 />
            <br />
            <h3 className="title-form">
              Resumen Solicitud Homologación Equipo Términal Móvil
            </h3>
            <br />
            

            <div className="container p-0">
              <div className="row">
                
                <div className="col-md-12 p-0">
                  <p>
                    La información ha sido guardada exitosamente, el número de radicado es: 2021705216.
                    Por favor, conserva este número para realizar seguimiento al proceso del trámite de Homologación 
                    de Equipos Terminales Móviles.
                  </p>
            
                  <p style={{ color: "#A80521", fontSize: "15px" }}>
                    Tiempo de Respuesta aproximadamente en 10 días habiles
                    a partir de la fecha rádicado.
                  </p>
                </div>
                
                <div className="col-md-6 p-1">
                  <strong>Fecha de registro</strong>
                  <p>2021-09-28 10:45</p>
                </div>

                <div className="col-md-6 p-1">
                  <strong>Número de radicado</strong>
                  <p>2022705216</p>
                </div>

                <div className="titulo-indicativo col-md-12">
                  <h3 className="subtitle-form">
                    Datos de identificación
                  </h3>
                </div>

                <div className="col-md-6 p-1">
                  <strong>Tipo de Persona</strong>
                  <p>Natural</p>
                </div>

                <div className="col-md-6 p-1">
                  <strong>Tipo de Identificación</strong>
                  <p>1091452369</p>
                </div>

                <span/>

                <div className="col-md-6 p-1">
                  <strong>Nombre Completo</strong>
                  <p>CARLOS ALBERTO ORJUELA BENITEZ</p>
                </div>

                <span/>

                <div className="col-md-6 p-1">
                  <strong>País</strong>
                  <p>Colombia</p>
                </div>

                <div className="col-md-6 p-1">
                  <strong>Departamento</strong>
                  <p>Bogotá D.C.</p>
                </div>

                <div className="col-md-6 p-1">
                  <strong>Municipio</strong>
                  <p>Bogotá D.C.</p>
                </div>

                <div className="col-md-6 p-1">
                  <strong>Dirección</strong>
                  <p>CARRERA 90 NO 132-45</p>
                </div>

                <div className="col-md-6 p-1">
                  <strong>Correo electrónico</strong>
                  <p>Cninguno8403@hotmail.com</p>
                </div>

                <div className="col-md-6 p-1">
                  <strong>Teléfono remitente</strong>
                  <p>6013198300</p>
                </div>

                <div className="titulo-indicativo col-md-12">
                  <h3 className="subtitle-form">
                    Características del terminal móvil
                  </h3>
                </div>

                <div className="col-md-6 p-1">
                  <strong>Tipo de Dispositivo</strong>
                  <p>Teléfono Inteligente</p>
                </div>

                <span/>

                <div className="col-md-6 p-1">
                  <strong>Marca</strong>
                  <p>APPLE</p>
                </div>

                <div className="col-md-6 p-1">
                  <strong>Nombre Comercial</strong>
                  <p>IPHONE 11</p>
                </div>

                <div className="col-md-6 p-1">
                  <strong>Modelo</strong>
                  <p>A1778</p>
                </div>

                <div className="col-md-6 p-1">
                  <strong>Fabricante</strong>
                  <p>APPLE</p>
                </div>

                <div className="tabla">
                  <p className="titulo-tabla">TAC</p>
                  <table className="rwd-table">
                    <tr>
                      <th>Número</th>
                    </tr>
                    <tr>
                      <td data-th="etiqueta">01013200</td>
                    </tr>
                    
                  </table>
                </div>

                <div>
                  <br/><br/>
                </div>

                <div className="tabla">
                  <p className="titulo-tabla">Archivos adjuntos</p>
                  <table className="rwd-table">
                    <tr>
                      <th>Nombre del Archivo</th>
                      <th>Tipo</th>
                      <th>Tamaño(MB)</th>
                    </tr>
                    <tr>
                      <td data-th="etiqueta">SPOT CON CÓDIGOS VIGENTES</td>
                      <td data-th="archivo">xlsx</td>
                      <td data-tj="accion">0.14</td>
                    </tr>
                    <tr>
                      <td data-th="etiqueta">INFORME MARCACION 06_09_2021</td>
                      <td data-th="archivo">xlsx</td>
                      <td data-tj="accion">0.01</td>
                    </tr>
                  </table>
                </div>
                
              </div>
            </div>
            <br />

            <div>
              <Boton>
                <Link to="/">FINALIZAR RADICACIÓN</Link>
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
