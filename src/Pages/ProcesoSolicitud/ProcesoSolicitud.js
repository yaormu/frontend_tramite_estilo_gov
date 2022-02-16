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
            <p>La información ha sido guardada exitosamente, el número de radicado es: 2021705216.
            Por favor, conserva este número para realizar seguimiento al
              proceso del trámite de Homologación de Equipos Terminales Móviles.</p>
            

            <p style={{ color: "#A80521", fontSize: "15px" }}>
              Tiempo de Respuesta aproximadamente en 10 días habiles
              a partir de la fecha rádicado.
            </p>

            <div className="container">
              <div className="row">
                <div className="titulo-indicativo col-md-12">
                  <h4 className="subtitle-form">
                    Datos de identificación:
                  </h4>
                </div>
                <div className="col-md-6">Primer Nombre: Jose</div>
                <div className="col-md-6">Segundo Nombre: Heriberto</div>
                <span />
                <div className="col-md-6">Primer Apellido: Salazar</div>
                <div className="col-md-6">Segundo Apellido: Guerrero</div>
                <div className="titulo-indicativo">
                  <h4 className="subtitle-form">
                    Datos de Contacto y ubicación:
                  </h4>
                </div>
                <div className="col-md-6">País: Colombia</div>
                <div className="col-md-6">Departamento: Cundinamarca</div>
                <span />
                <div className="col-md-6">Ciudad: Bógota D.C.</div>
                <div className="col-md-6">
                  Dirección: Calle 93 # 12 - 25 Barrio Sur
                </div>
                <div className="col-md-6">
                  Correo Electronico: don@gmail.com
                </div>
                <div className="col-md-6">Número de Contacto: 3002563314</div>
                <div className="titulo-indicativo col-md-12">
                  <h4 className="subtitle-form">
                    Características del terminal móvil:
                  </h4>
                </div>
                <div className="col-md-6">Tipo de Dispositivo: Telefono Inteligente</div>
                <div className="col-md-6">Marca: Huawei</div>
                <div className="col-md-6">Nombre Comercial: P30</div>
                <div className="col-md-6">Modelo: Lite</div>
                <div className="col-md-6">Fabricante: Huawei Corporation</div>

                <div className="titulo-indicativo col-md-12">
                  <h4 className="subtitle-form">
                    Listado de TAC:
                  </h4>
                </div>
                <div className="col-md-6">Número de TAC: 02124654</div>

                <div className="titulo-indicativo col-md-12">
                  <h4 className="subtitle-form">
                    Archivos Adjunto:
                  </h4>
                </div>
                <div className="col-md-6">Documento: Imagen3.jpg</div>

                <div className="titulo-indicativo col-md-12">
                  <h4 className="subtitle-form">
                    Archivos para Homologación:
                  </h4>
                </div>
                <div className="col-md-6">Etiqueta del equipo: Equipo.pdf</div>
                <div className="col-md-6">Certificado de Conformidad: NA</div>
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
