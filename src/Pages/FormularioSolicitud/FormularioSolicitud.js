import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

// Estilos generales del formulario
import "./FormularioSolicitud.scss";

// Componentes obligatorios a mostrar en el sitio
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import NavProceso from "../../components/NavProceso/NavProceso";
import BotonTutoriales from "../../components/Botones/BotonTutoriales/BotonTutoriales";
import BotonDeDudas from "../../components/Botones/BotonDeDudas/BotonDeDudas";
import CalificacionExperiencia from "../../components/Cards/CalificacionExperiencia/CalificacionExperiencia";
import BotonInicio from "../../components/Botones/BotonInicio/BotonInicio";
import Footer from "../../components/Footer/Footer";
import FooterGov from "../../components/FooterGov/FooterGov";
// Modal a mostra antes de enviar información formulario
import Modal from "../../components/Modal/Modal"

// Importación iconos para mostrar en mensajes de error o exito
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle, faCheckCircle} from "@fortawesome/free-solid-svg-icons";

// Libreria para el uso de recaptcha
import ReCAPTCHA from "react-google-recaptcha";

// Libreria syled que nos permite crear componentes con diseños, despues la linea exportar se encuentran
import styled from "styled-components";
// Importación elementos html de componente con estilos predefinidos styled
import {Formulario, Label, Select, Boton, ContenedorTerminos, ContenedorBotonCentrado, LeyendaError, MensajeExito, MensajeError} from "./elementos/Formularios";
// Import componente styled con diseño predeterminado
import ComponenteInput from "./componentes/ComponenteInput";



const FormularioSolicitud = () => {
  // Validar estado de los campos
  const [persona, cambiarPersona] = useState({ campo: "", valido: null });
  const [tipoId, cambiarTipoId] = useState({ campo: "", valido: null });
  const [identificacion, cambiarIdentificacion] = useState({campo:"",valido: null});
  const [identificacion2, cambiarIdentificacion2] = useState({campo:"", valido:null});
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [nombre2, cambiarNombre2] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [apellido2, cambiarApellido2] = useState({ campo: "", valido: null });
  const [pais, cambiarPais] = useState({ campo: "", valido: null });
  const [departamento, cambiarDepartamento] = useState({campo:"", valido: null});
  const [municipio, cambiarMunicipio] = useState({ campo: "", valido: null });
  const [direccion, cambiarDireccion] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
  const [terminos, cambiarTerminos] = useState(false);
  const [tipoDeDispositivo, cambiarTipoDeDispositivo] = useState({campo:"", valido:null});
  const [marca, cambiarMarca] = useState({ campo: "", valido: null });
  const [nombreComercial, cambiarNombreComercial] = useState({campo:"", valido:null});
  const [modelo, cambiarModelo] = useState({ campo: "", valido: null });
  const [fabricante, cambiarFabricante] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  // Referencia al captcha
  const captcha = useRef(null);

  // Dependiendo el estado seleccionado en lista desplegable, mostrar x campos en formulario
  const [tipoPersona, setTipoPersona] = useState(null);
  const [tipoIdentificacion, setTipoIdentificacion] = useState(null);
  const [tipoDispositivo, setTipoDispositivo] = useState(null);
  // Mostrar y ocultar modal
  const [estadoModal, cambiarEstadoModal] = useState(false);

  //Dependiendo estado captcha a seleccionado dejar enviar formulario
  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const [usuarioValido, cambiarUsuarioValido] = useState(false);

  // Expresiones regulares para validar que los campos cumplan con las condiciones
  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    identificacion: /^\d{6,14}$/, // 6 a 14 numeros.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const validarIdentificacion2 = () => {
    if (identificacion.campo.length > 0) {
      if (identificacion.campo !== identificacion2.campo) {
        cambiarIdentificacion2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        cambiarIdentificacion2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  };

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      cambiarCaptchaValido(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //Colocar aquí la validación de los inputs del formulario. Si son correctos ya podemos enviar el formulario, actualizar la interfaz etc
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      cambiarCaptchaValido(true);
    } else {
      console.log("Por favor acepta el captcha");
      cambiarCaptchaValido(false);
    }

    if (
      identificacion.valido === "true" &&
      identificacion2.valido === "true" &&
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      terminos
    ) {
      cambiarFormularioValido(true);
      cambiarPersona({ campo: "", valido: null });
      cambiarTipoId({ campo: "", valido: null });
      cambiarIdentificacion({ campo: "", valido: null });
      cambiarIdentificacion2({ campo: "", valido: null });
      cambiarNombre({ campo: "", valido: null });
      cambiarNombre2({ campo: "", valido: null });
      cambiarApellido({ campo: "", valido: null });
      cambiarApellido2({ campo: "", valido: null });
      cambiarTerminos(false);

      // ... Puedo ir código consumido externo como de una API
    } else {
      cambiarFormularioValido(false);
    }
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          
          <div className="col-md-8">
            <Navigation />
            <NavProceso /> 
            
            <br/>
            <h3 className="title-form">
              Formulario de Solicitud de Homologación de Equipos Terminales
              Móviles
            </h3>
            <br/>
            <br/>
            
            <Formulario className="row" onSubmit={onSubmit}>
              
              <div className="titulo-indicativo">
                <h4 className="subtitle-form">Datos de identificación</h4>
                <p className="txt-obliga">*Campos obligatorios</p>
              </div>

              <span/>

              <div>
                <Label htmlFor="tipoPersona">Tipo de Persona *</Label>
                <Select id="tipoPersona" data-toggle="tooltip" 
                  title="Seleccionar como persona Natural o Juridica"
                  onChange={() => {
                    setTipoPersona(!tipoPersona);
                  }} 
                >
                  <option value="" disabled selected hidden
                  
                  >Ej. Natural</option>
                  <option value="natural">Natural</option>
                  <option value="juridica">Juridica</option>
                </Select>
                <LeyendaError>Campo tipo persona es requerido</LeyendaError>
              </div>

              

              <div>
                <Label htmlFor="tipoId">Tipo de Identificación *</Label>
                <Select id="tipoIdentificacion" data-toggle="tooltip" title="Seleccionar tipo documento de Identificación">
                  <option value="1" selected>Cédula de Ciudadania</option>
                  <option value="2">Cédula extranjeria</option>
                  <option value="3">ID pasaporte</option>
                </Select>
                <LeyendaError>Campo tipo iden es requerido</LeyendaError>
              </div>
              
              
              {tipoPersona ? (
          <>
          <input
                tipo="text"
                label="Tipo de Persona *"
                placeholder="Ej: Natural"
                name="persona"
                leyendaError="Campo tipo de persona es requerido"
              />          
              

              <input
                tipo="text"
                label="Tipo de Identificación *"
                placeholder="Ej: Cédula de Ciudadania"
                name="tipoId"
                leyendaError="Campo tipo de identificación reque"
              />
          </>
        ) : (
          <div style={{ color: "blue" }}>Div 2</div>
        )}
              

              

              

              {/*
              <ComponenteInput
                estado={persona}
                cambiarEstado={cambiarPersona}
                tipo="text"
                label="Tipo de Persona *"
                placeholder="Ej: Natural"
                name="persona"
                leyendaError="Campo tipo de persona es requerido"
                expresionRegular={expresiones.persona}
              />          
              

              <ComponenteInput
                estado={tipoId}
                cambiarEstado={cambiarTipoId}
                tipo="text"
                label="Tipo de Identificación *"
                placeholder="Ej: Cédula de Ciudadania"
                name="tipoId"
                leyendaError="Campo tipo de identificación requerido"
                expresionRegular={expresiones.tipoId}
              />
              */}

              <ComponenteInput
                estado={identificacion}
                cambiarEstado={cambiarIdentificacion}
                tipo="text"
                label="Número de Identificación *"
                placeholder="Ej: 1234567890"
                name="identificacion"
                leyendaError="Campo número de identificación es requerido, solo se permiten números y minimo 6 digitos"
                expresionRegular={expresiones.identificacion}
              />

              <ComponenteInput
                estado={identificacion2}
                cambiarEstado={cambiarIdentificacion2}
                tipo="text"
                label="Confirmar Número de Identificación *"
                placeholder="Ej: 1234567890"
                name="identificacion"
                leyendaError="Campo confirmar número de identificación es requerido, y debe ser igual al campo número de identificación"
                funcion={validarIdentificacion2}
              />

              <ComponenteInput
                estado={nombre}
                cambiarEstado={cambiarNombre}
                tipo="text"
                label="Primer Nombre *"
                placeholder="Ej: Pepito"
                name="nombre"
                leyendaError="Campo primer nombre es requerido, solo se aceptan letras"
                expresionRegular={expresiones.nombre}
              />

              <ComponenteInput
                estado={nombre2}
                cambiarEstado={cambiarNombre2}
                tipo="text"
                label="Segundo Nombre"
                placeholder="Ej: Andres"
                name="nombre2"
              />

              <ComponenteInput
                estado={apellido}
                cambiarEstado={cambiarApellido}
                tipo="text"
                label="Primer Apellido *"
                placeholder="Ej: Perez"
                name="apellido"
                leyendaError="Campo primer apellido es requerido, solo se aceptan letras"
                expresionRegular={expresiones.nombre}
              />

              <ComponenteInput
                estado={apellido2}
                cambiarEstado={cambiarApellido2}
                tipo="text"
                label="Segundo Apellido"
                placeholder="Ej: Rodriguez"
                name="apellido2"
                leyendaError="Campo requerido"
                expresionRegular={expresiones.apellido2}
              />

              <div className="col-md-12 titulo-indicativo">
                <h4 className="subtitle-form">Datos de contacto y ubicación</h4>
                <p className="txt-obliga">*Campos obligatorios</p>
              </div>
              <br />

              <ComponenteInput
                estado={pais}
                cambiarEstado={cambiarPais}
                tipo="text"
                label="Pais *"
                placeholder="Ej: Colombia"
                name="pais"
                leyendaError="Campo es requerido, solo se aceptan letras"
                expresionRegular={expresiones.nombre}
              />

              <ComponenteInput
                estado={departamento}
                cambiarEstado={cambiarDepartamento}
                tipo="text"
                label="Departamento *"
                placeholder="Ej: Cundinamarca"
                name="departamento"
                leyendaError="Campo es requerido, solo se aceptan letras"
                expresionRegular={expresiones.nombre}
              />

              <ComponenteInput
                estado={municipio}
                cambiarEstado={cambiarMunicipio}
                tipo="text"
                label="Municipio *"
                placeholder="Ej: Madrid"
                name="municipio"
                leyendaError="Campo es requerido, solo se aceptan letras"
                expresionRegular={expresiones.nombre}
              />

              <ComponenteInput
                estado={direccion}
                cambiarEstado={cambiarDireccion}
                tipo="text"
                label="Dirección *"
                placeholder="Ej: CL 1 23 45"
                name="direccion"
                leyendaError="Campo es requerido, solo se aceptan letras"
                expresionRegular={expresiones.nombre}
              />

              <ComponenteInput
                estado={correo}
                cambiarEstado={cambiarCorreo}
                tipo="text"
                label="Correo Electrónico *"
                placeholder="Ej: falso@gmail.com"
                name="correo"
                leyendaError="Campo es requerido"
                expresionRegular={expresiones.correo}
              />

              <ComponenteInput
                estado={correo}
                cambiarEstado={cambiarCorreo}
                tipo="text"
                label="Confirmar Correo Electrónico *"
                placeholder="Ej: falso@gmail.com"
                name="correo"
                leyendaError="Campo es requerido"
                expresionRegular={expresiones.correo}
              />

              <ComponenteInput
                estado={telefono}
                cambiarEstado={cambiarTelefono}
                tipo="text"
                label="Teléfono Remitente *"
                placeholder="Ej: 300 123 45 67"
                name="telefono"
                leyendaError="Campo es requerido, solo números"
                expresionRegular={expresiones.telefono}
              />

              <br />

              <div className="col-md-12 titulo-indicativo">
                <h4 className="subtitle-form">
                  Características del terminal móvil
                </h4>
                <p className="txt-obliga">*Campos obligatorios</p>
              </div>
              <br />

              <ComponenteInput
                estado={tipoDeDispositivo}
                cambiarEstado={cambiarTipoDeDispositivo}
                tipo="text"
                label="Tipo de Dispositivo *"
                placeholder="Ej: Télefono Inteligente"
                name="tipoDeDispositivo"
                leyendaError="Campo es requerido, solo se aceptan letras"
                expresionRegular={expresiones.nombre}
              />

              <br />

              <ComponenteInput
                estado={marca}
                cambiarEstado={cambiarMarca}
                tipo="text"
                label="Marca *"
                placeholder="Ej: Apple"
                name="marca"
                leyendaError="Campo es requerido, solo se aceptan letras"
                expresionRegular={expresiones.nombre}
              />

              <ComponenteInput
                estado={nombreComercial}
                cambiarEstado={cambiarNombreComercial}
                tipo="text"
                label="Nombre Comercial *"
                placeholder="Ej: Serie 3"
                name="nombreComercial"
                leyendaError="Campo es requerido, solo se aceptan letras"
                expresionRegular={expresiones.nombre}
              />

              <ComponenteInput
                estado={modelo}
                cambiarEstado={cambiarModelo}
                tipo="text"
                label="Modelo *"
                placeholder="Ej: Once"
                name="modelo"
                leyendaError="Campo es requerido, solo se aceptan letras"
                expresionRegular={expresiones.nombre}
              />

              <ComponenteInput
                estado={fabricante}
                cambiarEstado={cambiarFabricante}
                tipo="text"
                label="Fabricante"
                placeholder="Ej: Huawei"
                name="fabricante"
                leyendaError="Campo requerido"
                expresionRegular={expresiones.apellido2}
              />
            </Formulario>
            <br />
            <br />
            <div className="col-md-12 titulo-indicativo">
              <h4 className="subtitle-form">TAC *</h4>
              <p className="txt-obliga">
                En esta sección podrá agregar múltiples TAC para el modelo de
                terminal que está homologando. Tenga en cuenta que la CRC
                validará los TAC registrados en la solicitud ante la base de
                datos de la GSMA.
              </p>
              <br />
              <div>
                <span class="button-carga-principal btn-file">
                  Agregar TAC
                  <input type="file" />
                </span>
              </div>
              <br />
              <br />
            </div>
            <div class="tabla">
              <p class="titulo-tabla">Listado de TAC</p>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="titulo-tableta">
                      TAC
                    </th>
                    <th scope="col" class="titulo-tableta">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Sin datos</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <div className="col-md-12 titulo-indicativo">
              <h4 className="subtitle-form"> Archivos Adjuntos</h4>
              <p className="txt-obliga">Por favor tenga en cuenta:</p>
              <p className="txt-obliga">
                ** El tamaño total de todos los archivos adjuntos no podrá ser
                mayor a 30 MB.
              </p>
              <p className="txt-obliga">
                ** Formatos admitidos para archivos adjuntos: Pdf, Doc, Docx,
                Xls, Xlsx, Gif, Png, Jpeg, Tif, Tiff, Zip y Rar
              </p>
              <br/>
              
              <div>
                <span class="button-carga-principal btn-file">
                  Etiqueta del equipo
                  <input type="file" />
                </span>
              </div>
              <br />
              <br />
              <div>
                <span class="button-carga btn-file">
                  Certificado de conformidad de normas técnicas
                  <input type="file" />
                </span>
              </div>
              <br />
              <br />

              <div class="tabla">
                <p class="titulo-tabla">Documentos a legalizar</p>
                
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" class="titulo-tableta">
                        Nombre del Archivo
                      </th>
                      <th scope="col" class="titulo-tableta">
                        Archivo Cargado
                      </th>
                      <th scope="col" class="titulo-tableta">
                        Eliminar Archivo
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Etiqueta del equipo *</th>
                      <td>...</td>
                      <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Certificado de conformidad de normas técnicas (opcional)
                      </th>
                      <td>...</td>
                      <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <div className="col-md-12 titulo-indicativo">
              <h4 className="subtitle-form">Verificación de Seguridad *</h4>
            </div>
            <br />
            <ContenedorTerminos>
              <Label>
                <input
                  type="checkbox"
                  name="terminos"
                  id="terminos"
                  checked={terminos}
                  onChange={onChangeTerminos}
                />
                Acepto que he leido los Términos y condiciones *
              </Label>
            </ContenedorTerminos>
            {formularioValido === false && (
              <MensajeError>
                <p>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <b>Error: </b> Por favor rellena el formulario correctamente.
                </p>
              </MensajeError>
            )}
            <ContenedorBotonCentrado>
              <Boton id="envio" type="submit" onClick={() => cambiarEstadoModal(!estadoModal)}>
                ENVIAR
              </Boton>
              {formularioValido === true && (
                <MensajeExito id="msjexito">
                  <p>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <b>Exitosa: </b>Su solicitud se ha registrado
                    satisfactoriamente
                  </p>
                </MensajeExito>
              )}
            </ContenedorBotonCentrado>
          </div>

          <div className="col-md-1"></div>
          
          <div className="col-md-3 p-0">
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
      {/* END CONTAINER */}
      </div>
      <Footer />
      <FooterGov />

      {/* MODAL DE ACEPTAR FORMULARIO */}
      <Modal
            estado={estadoModal}
            cambiarEstado={cambiarEstadoModal}
            titulo=""
            mostrarHeader={true}
            mostrarOverlay={true}
            posicionModal={"start"}
            padding={"20px"}
          >
            {!usuarioValido && (
              <Contenido>
                <form>
                <h1>
                  Términos y condiciones de uso del Sistema de Homologación de
                  equipos terminales
                </h1>
                <h6>
                  <strong>1. Del Servicio</strong>
                  
                  Por lo anterior, para homologar un equipo terminal móvil en
                  Colombia, se debe realizar OBLIGATORIAMENTE la solicitud en
                  línea a través del formulario establecido para el efecto en el
                  portal web (www.tramitescrcom.gov.co), en el cual se deberá
                  suministrar la información requerida en
                  (http://bit.ly/homologarcelular). Allí podrá encontrar una
                  guía del paso a paso en videos para realizar este trámite.
                </h6>
                <br />

                <ContenedorBotonCentrado className="recaptcha">
                  <ReCAPTCHA
                    ref={captcha}
                    sitekey="6Lc9VDIeAAAAAHHQA1wEjx1FKlTy9uWIrZKGwwvN"
                    onChange={onChange}
                  />
                </ContenedorBotonCentrado>
                
                {captchaValido === false && <div className="error-captcha">Por favor acepta el captcha</div>}
                <ContenedorBotones>
                  <Boton type="submit">
                    <Link to="/SolicitudHomologacion" className="irTramite">
                      ACEPTAR
                    </Link>
                  </Boton>
                  <br />
                  <Boton2 onClick={() => cambiarEstadoModal(!estadoModal)}>
                    RECHARZAR
                  </Boton2>
                </ContenedorBotones>
                </form>
              </Contenido>
            )}
            {
              usuarioValido &&
              <div>
                <h1>Bienvenido</h1>
              </div>
            }
          </Modal>
    </>
  );
};

export default FormularioSolicitud;
/*
const Boton = styled.button`
  border-radius: 20px;
  border_radius: 100px;
  border: none;
  background: #1766dc;
  cursor: pointer;
  display: block;
  font: normal bold 15px/5px "Works Sans", sans-serif;
  padding: 10px 30px;
  transition: 0.3s ease all;

  a {
    color: #ffff;
  }

  &:hover {
    background: #004884;
  }
`;
*/
const Boton2 = styled.button`
  border-radius: 20px;
  border: 2px solid #3366cc;
  background: #ffff;
  color: #3366cc;
  cursor: pointer;
  display: block;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  padding: 10px 30px;
  transition: 0.3s ease all;

  &:hover {
    background: #0066ff;
    color: #ffff;
  }
`;

const Contenido = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  max-height: calc(100vh - 210px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  h1 {
    color: #13386d;
    font: normal 600 18px/10px "Montserrat", sans-serif;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  h6 {
    color: #4b4b4b;
    font: normal normal 1rem/10px "Works Sans", sans-serif;
    margin: 0;
    text-align: left;
    line-height: 1.5;
  }

  a {
    font: normal normal 1rem/10px "Works Sans", sans-serif;
  }
`;

const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
