import React from "react";

import Navigation from "../../components/Navigation/Navigation";
import NavProceso from "../../components/NavProceso/NavProceso";

import SolicitudTramite from "../../components/Cards/SolicitudTramite/SolicitudTramite";
import ConsultaTramite from "../../components/Cards/ConsultaTramite/ConsultaTramite";

import CardTutoriales from "../../components/CardTutoriales/CardTutoriales"
import CardDudas from "../../components/CardDudas/CardDudas";

import "./Inicio.scss";
//import ContactForm from "../../components/ContactForm/ContactForm";
//import SelectsAnidados from "../../components/SelectsAnidados";


const Inicio = () => {
  
  /*
  Estados para cada boton
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);
  */
  return (
    <>
      <section className="section">
        <div className="row">
          <div className="col-md-8">
            <Navigation
              inicio="Inicio"
              paginaActual="Solicitud de Homologación"
            />
            <NavProceso /> <br />
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="inicio"
                role="tabpanel"
                aria-labelledby="inicio-tab"
              >

                <div>
                  {/*
                  <ContenedorBotones>
                    <Boton onClick={() => cambiarEstadoModal(!estadoModal)}>Modal 1</Boton>
                    {/*
                    Podria anexar más botones tipo modal, ejemplo:
                    <Boton onClick={() => cambiarEstadoModal(!estadoModal2)}>Modal 2</Boton>
                    <Boton onClick={() => cambiarEstadoModal(!estadoModal3)}>Modal 3</Boton>
                    */}
                  {/*
                  </ContenedorBotones>
                  */}
                  
                  {/*
                  Ejemplo para un modal 2 con diferentes estilos
                  <Modal
                    estado={estadoModal2}
                    cambiarEstado={cambiarEstadoModal2}
                    titulo="Venta modal 2"
                    mostrarHeader={false}
                    mostrarOverlay={false}
                    posicionModal={'end'}
                    padding={'20px'}
                  >
                  <Contenido>
                      <h1>Ventana Modal 2</h1>
                      <p>Reutilizable y con opciones de personalización.</p>
                    <Boton onClick={() => cambiarEstadoModal(!estadoModal)}>
                      Aceptar
                    </Boton>
                    </Contenido>
                  </Modal>
                  */}
                  {/*
                  Ejemplo para un modal 3 con diferentes estilos, con imagen
                  <Modal
                    estado={estadoModal3}
                    cambiarEstado={cambiarEstadoModal3}
                    titulo="Venta modal 3"
                    mostrarHeader={true}
                    mostrarOverlay={false}
                    posicionModal={'start'}
                    padding={'20px'}
                  >
                  <Contenido>
                      <img src="https://img.search.brave.com/HgCajLvNkz-WzUGdcQ0Ra96c_aM5UINLGqNd2vHHdQM/rs:fit:490:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/VnVKSHhlekFaN3pj/X19kRU9HcVhnSGFI/SyZwaWQ9QXBp" alt="" />
                    </Contenido>
                  </Modal>
                  */}
                </div>

                <h3 className="title-form">Solicitud de Homologación de Equipos Terminales Móviles</h3>
                <br />
                <article>
                  <h4 className="title-section">
                    ¿Qué es la homologación de un equípo terminal móvil?
                  </h4>
                  <br />
                  <p>Es un trámite por medio del cual la CRC busca:</p>
                  <ul className="list-info">
                    <li>
                      Que los dispositivos que ingresan al país cumplan con las
                      normas técnicas adoptadas en Colombia.
                    </li>
                    <li>
                      Garantizar la seguridad de los usuarios respecto a los
                      límites de exposición establecidos a nivel mundial.
                    </li>
                    <li>
                      Garantizar el correcto funcionamiento de los dispositivos
                      en las redes móviles del país.
                    </li>
                  </ul>
                  <br />
                  <h4 className="title-section">Requisitos:</h4>
                  <br />
                  <ol className="list-info">
                    <li>
                      Especificaciones de etiquetamiento del equipo (etiqueta o
                      label) que permitan comprobar la relación existente entre
                      el modelo y marca del equipo terminal y su IMEI.
                    </li>
                    <li>
                      Certificado de conformidad, declaración de conformidad u
                      otro documento que haga sus veces, siempre que sean de
                      tercera parte, expedido por los organismos de
                      certificación reconocidos a nivel nacional o internacional
                      como Organismos Acreditados o por autoridades competentes
                      de otros países, que den cuenta del cumplimiento de las
                      normas técnicas aplicables. (Opcional).
                    </li>
                    <li>Diligenciamiento del formulario en línea.</li>
                  </ol>
                </article>
              </div>
              <br/>
              <h4 className="title-section">Acciones del trámite:</h4>
            </div>
            <br/><br/><br/>
            <div className="cards row pt-4">
              <SolicitudTramite />
              <ConsultaTramite />  
                        
            </div>
          </div>

          <div className="col-lg-1"></div>

          <div className="col-lg-3 p-0">
            <aside className="aside">
              <br /><br />
              <CardTutoriales />
              <CardDudas />

              <br />
              <br />
            </aside>
          </div>
        </div>
      </section>
      {/*<ContactForm />
      <hr/>
      <SelectsAnidados />
      <hr/>*/}
      <br/><br/><br/><br/>
    </>
  );
};

export default Inicio;


