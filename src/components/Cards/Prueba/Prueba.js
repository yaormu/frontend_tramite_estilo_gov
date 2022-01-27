import React, {useState} from "react";
//import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import FooterGov from "../../FooterGov/FooterGov";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import NavProceso from "../../NavProceso/NavProceso";

import BotonInicio from "../../Botones/BotonInicio/BotonInicio"
import BotonTutoriales from "../../Botones/BotonTutoriales/BotonTutoriales" 
import BotonDeDudas from "../../Botones/BotonDeDudas/BotonDeDudas"

import CalificacionExperiencia from "../CalificacionExperiencia/CalificacionExperiencia"

import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../../../Pages/FormularioSolicitud/elementos/Formularios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import ComponenteInput from "../../../Pages/FormularioSolicitud/componentes/ComponenteInput";

import "./Prueba.scss";

const Prueba = () => {

  const [persona, cambiarPersona] = useState({campo: '', valido: null});
  const [tipoId, cambiarTipoId] = useState({campo: '', valido: null});
  const [identificacion, cambiarIdentificacion] = useState({campo: '', valido: null});
  const [identificacion2, cambiarIdentificacion2] = useState({campo: '', valido: null});
  const [nombre, cambiarNombre] = useState({campo: '', valido: null});
  const [nombre2, cambiarNombre2] = useState({campo: '', valido: null});
  const [apellido, cambiarApellido] = useState({campo: '', valido: null});
  const [apellido2, cambiarApellido2] = useState({campo: '', valido: null});
  //const [correo, cambiarCorreo] = useState({campo: '', valido: null});
  //const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);  

  const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    identificacion: /^\d{6,14}$/, // 6 a 14 numeros.
    password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

  const validarIdentificacion2 = () => {
    if(identificacion.campo.length > 0) {
      if(identificacion.campo !== identificacion2.campo) {
        cambiarIdentificacion2((prevState) => {
          return {...prevState, valido: 'false'}
        })
      } else {
        cambiarIdentificacion2((prevState) => {
          return {...prevState, valido: 'true'}
        })
      }
    }
  }

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  }

  
  const onSubmit = (e) => {
    e.preventDefault();

    if(
      identificacion.valido === 'true' &&
      identificacion2.valido === 'true' &&
      nombre.valido === 'true' &&
      apellido.valido === 'true' &&
      terminos
    ){
      cambiarFormularioValido(true);
      cambiarPersona({campo: '', valido: null});
      cambiarTipoId({campo: '', valido: null});
      cambiarIdentificacion({campo: '', valido: null});
      cambiarIdentificacion2({campo: '', valido: null});
      cambiarNombre({campo: '', valido: null});
      cambiarNombre2({campo: '', valido: null});
      cambiarApellido({campo: '', valido: null});
      cambiarApellido2({campo: '', valido: null});
      cambiarTerminos(false)

      // ... Puedo ir código consumido externo como de una API
    } else {
      cambiarFormularioValido(false);
    }
  }

  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-8">
            <Navigation />
            <NavProceso /> <br />
            <h3 className="title-form">
              Formulario de Solicitud de Homologación de Equipos Terminales
              Móviles
            </h3>
            <br />
            <br />
            <Formulario className="row" onSubmit={onSubmit}>
                            
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
              {formularioValido === false && <MensajeError>
                <p>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <b>Error: </b> Por favor rellena el formulario correctamente.
                </p>
              </MensajeError>}
              <ContenedorBotonCentrado>
                <Boton id="envio" type="submit">ENVIAR</Boton>
                {
                  formularioValido === true && 
                  <MensajeExito id="msjexito">
                    <p>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <b>Exitosa: </b>Su solicitud se ha registrado satisfactoriamente
                    </p>
                  </MensajeExito>
                }
              </ContenedorBotonCentrado>
              
            </Formulario>
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

export default Prueba;
