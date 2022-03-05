import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import FooterGov from "../../components/FooterGov/FooterGov";
import Header from "../../components/Header/Header";
import Navegacion from "../../components/Navigation/Navegacion";
import NavProceso from "../../components/NavProceso/NavProceso";

import CardTutoriales from "../../components/CardTutoriales/CardTutoriales";
import CardDudas from "../../components/CardDudas/CardDudas";
import BotonInicio from "../../components/Botones/BotonInicio/BotonInicio";

import CalificacionExperiencia from "../../components/CalificacionExperiencia/CalificacionExperiencia"
import CalificaExperienciaFooter from "../../components/CalificacionExperiencia/CalificaExperienciaFooter"

import {
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

import "./ConsultaEstadoTramite.scss";

// Libreria syled que nos permite crear componentes con diseños, despues la linea exportar se encuentran
import styled from "styled-components";

import {
  MensajeExito,
  MensajeError,
} from "../FormularioSolicitud/elementos/Formularios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComponenteInput from "../../Pages/FormularioSolicitud/componentes/ComponenteInput";

const ConsultaEstadoTramite = () => {
  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const [usuarioValido, cambiarUsuarioValido] = useState(false);
  const [radicado, cambiarRadicado] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    numRadicado: /^\d{9,11}$/, // min 9 y max 11 numeros.
  };

  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      cambiarCaptchaValido(true);
    }
  };

  const submit = (e) => {
    e.preventDefault();

    //Colocar aquí la validación de los inputs del formulario
    //Si son correctos ya podemos enviar el formulario, actualizar la interfaz etc
    if (radicado.valido === "true") {
      cambiarFormularioValido(true);
      cambiarRadicado(true);
    } else {
      cambiarFormularioValido(false);
    }

    //console.log("Comprobando envio del formulario")
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      cambiarUsuarioValido(true);
      cambiarCaptchaValido(true);
    } else {
      console.log("Por favor acepta el captcha");
      cambiarUsuarioValido(false);
      cambiarCaptchaValido(false);
    }
  };

  return (
    <>
      <div className="container" id="container">
        <Header />
        <div className="row">
          {!usuarioValido && (
            <div className="col-md-8">
              <Navegacion
                inicio="Inicio"
                pagina="Solicitud de Homologación"
                paginaActual="Conoce el Estado de tú Solicitud"
              />
              <NavProceso /> <br />
              <h3 className="title-form">Conoce el Estado de tú Solicitud</h3>
              <br />
              <p>
                A través de la siguiente funcionalidad, consulte el estado de
                sus solicitudes presentadas ante la Comisión de Regulación de
                Comunicaciones. La búsqueda la puede realizar diligenciando los
                campos dispuestos continuación:
              </p>
              <br />
              <br />
              
              <Formulario action="" onSubmit={submit}>
                <div className="col-md-5" >
                  <ComponenteInput
                    estado={radicado}
                    cambiarEstado={cambiarRadicado}
                    tipo="text"
                    label="Ingrese Número de Radicado*"
                    placeholder="Ej: 202201204578"
                    name="radicado"
                    leyendaError="Campo es requerido, solo se permiten números y minimo 6 digitos"
                    expresionRegular={expresiones.numRadicado}
                  />
                </div>

                <br/>

                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6Lc9VDIeAAAAAHHQA1wEjx1FKlTy9uWIrZKGwwvN"
                  onChange={onChange}
                />

                {captchaValido === false && (
                  <>
                    <p className="error-captcha">Por favor acepta el captcha</p>
                  </>
                )}

                <br/>

                <BotonEstado type="submit">
                  <Link to="/RespuestaSolicitud">CONSULTAR</Link>
                </BotonEstado>

              </Formulario>
            </div>
          )}
          {
            usuarioValido === true && 
            formularioValido === true && 
            captchaValido === true && (
              <MensajeExito id="msjexito">
                    <p>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <b>Exitosa: </b>Su solicitud se ha registrado
                      satisfactoriamente
                    </p>
                  <h1>VEGAAA</h1>
                    
                  </MensajeExito>
            )
          }
          <div className="col-lg-1"></div>
          <div className="col-lg-3 p-0">
            <aside className="aside">
              <br />
              <br />
              <CardTutoriales />
              <CardDudas />
              <CalificacionExperiencia />
              <br />
              <BotonInicio name="volver a inicio del tramite" />
            </aside>
          </div>
        </div>
      </div>
      {
         
        captchaValido === false && (
        <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error: </b> Por favor rellena el formulario, campo número
            radicado erroneo o captcha sin marcar!
          </p>
        </MensajeError>
      )}

      {
        captchaValido === true && (
        <MensajeExito id="msjexito">
                    <p>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <b>Validación Exitosa: </b> Procede a consultar
                    </p>
                  
                    
                  </MensajeExito>
        )
      }


      <CalificaExperienciaFooter />
      <Footer />
      <FooterGov />
    </>
  );
};

export default ConsultaEstadoTramite;

const BotonEstado = styled.button`
  background-color: #3366cc;
  border-radius: 30px;
  border: 2px solid #3366cc;
  padding: 9px 60px 9px 60px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin: 10px -12px 10px 0px;
  text-transform: uppercase;
  text-align: center;
  width: 30%;

  a {
    color: #ffff;
    font: normal normal 15px "Work Sans", sanf-serif;
  }

  &:hover {
    background-color: #13386d;
    border-color: #13386d;
    color: red;
    text-color: red;
  }
`;

const Formulario = styled.form `
    
`;