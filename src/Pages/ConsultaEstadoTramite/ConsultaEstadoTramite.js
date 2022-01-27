import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import FooterGov from "../../components/FooterGov/FooterGov";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import NavProceso from "../../components/NavProceso/NavProceso";

import BotonTutoriales from "../../components/Botones/BotonTutoriales/BotonTutoriales";
import BotonDeDudas from "../../components/Botones/BotonDeDudas/BotonDeDudas";
import BotonInicio from "../../components/Botones/BotonInicio/BotonInicio";

import CalificacionExperiencia from "../../components/Cards/CalificacionExperiencia/CalificacionExperiencia";

import {
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

import "./ConsultaEstadoTramite.scss";

import {
  Formulario,
  ContenedorBotonCentrado,
  Boton,
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
    numRadicado: /^\d{6,14}$/, // 6 a 14 numeros.
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
      <div className="container">
        <Header />
        <div className="row">
          {!usuarioValido && (
            <div className="col-md-8">
              <Navigation />
              <NavProceso /> <br />
              <h3 className="title-form-radicado">Consultar Mis Trámites</h3>
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
                <ContenedorBotonCentrado>
                  <ComponenteInput
                    estado={radicado}
                    cambiarEstado={cambiarRadicado}
                    tipo="text"
                    label="Ingrese Número de Rádicado *"
                    placeholder="Ej: 123456789012"
                    name="radicado"
                    leyendaError="Campo es requerido, solo se permiten números y minimo 6 digitos"
                    expresionRegular={expresiones.numRadicado}
                  />
                </ContenedorBotonCentrado>

                <ContenedorBotonCentrado className="recaptcha">
                  <ReCAPTCHA
                    ref={captcha}
                    sitekey="6Lc9VDIeAAAAAHHQA1wEjx1FKlTy9uWIrZKGwwvN"
                    onChange={onChange}
                  />
                </ContenedorBotonCentrado>

                {/*captchaValido === false && (
                  <div className="error-captcha">
                    Por favor acepta el captcha
                  </div>
                )*/}
                {formularioValido === false && 
                 captchaValido === false &&(
                  <MensajeError>
                    <p>
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                      <b>Error: </b> Por favor rellena el formulario, campo número radicado erroneo o captcha sin marcar!
                    </p>
                  </MensajeError>
                )}

                <ContenedorBotonCentrado>
                  <Boton type="submit">
                    <Link to="/ProcesoSolicitud">CONSULTAR</Link>
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
              </Formulario>
            </div>
          )}
          {/*usuarioValido && (
            <div>
              <h1>BIENVENIDO A VER EL PROCESO COMO VA</h1>
            </div>
          )*/}
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

export default ConsultaEstadoTramite;
