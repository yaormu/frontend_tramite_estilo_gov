import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import "./SolicitudTramite.scss";
import { Link } from "react-router-dom";
import Modal from "../../Modal/Modal";

import { ContenedorBotonCentrado } from "../../../Pages/FormularioSolicitud/elementos/Formularios";

export default function SolicitudTramite() {
  const [estadoModal, cambiarEstadoModal] = useState(false);

  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const [usuarioValido, cambiarUsuarioValido] = useState(false);

  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      cambiarCaptchaValido(true);
    }
  };

  const submit = (e) => {
    e.preventDefault();

    //Colocar aquí la validación de los inputs del formulario. Si son correctos ya podemos enviar el formulario, actualizar la interfaz etc
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      cambiarCaptchaValido(true);
    } else {
      console.log("Por favor acepta el captcha");
      cambiarCaptchaValido(false);
    }
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4" >
      <div className="tarjeta-acciones mb-4">
        <div className="head-acciones">
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
                <form onSubmit={submit}>
                <h1>
                  Términos y condiciones de uso del Sistema de Homologación de
                  equipos terminales
                </h1>
                <h6>
                  <strong>1. Del Servicio</strong>
                  <br />
                  Trámite por medio del cual la CRC busca que un equipo terminal
                  móvil tenga un adecuado funcionamiento e interacción con las
                  redes de comunicaciones del país en términos de sus
                  frecuencias de operación y que cumpla con los estándares
                  internacionales sobre los límites de exposición humana a los
                  campos electromagnéticos para un uso seguro por parte del
                  usuario interesado
                  <br />
                  Por lo anterior, para homologar un equipo terminal móvil en
                  Colombia, se debe realizar OBLIGATORIAMENTE la solicitud en
                  línea a través del formulario establecido para el efecto en el
                  portal web (www.tramitescrcom.gov.co), en el cual se deberá
                  suministrar la información requerida en
                  (http://bit.ly/homologarcelular). Allí podrá encontrar una
                  guía del paso a paso en videos para realizar este trámite.
                </h6>
                <h6>
                  <strong>2. De Las Responsabilidades de la CRC</strong>
                  <br />
                  La CRC es el órgano encargado de promover la competencia en
                  los mercados, promover el pluralismo informativo, evitar el
                  abuso de posición dominante, regular los mercados de las redes
                  y los servicios de comunicaciones y garantizar la protección
                  de los derechos de los usuarios; con el fin que la prestación
                  de los servicios sea económicamente eficiente, y refleje altos
                  niveles de calidad, de las redes y los servicios de
                  comunicaciones, incluidos los servicios de televisión abierta
                  radiodifundida y de radiodifusión sonora.
                  <br />
                  La CRC estudiará cada solicitud de homologación y dará la
                  respuesta pertinente.
                </h6>
                <h6>
                  <strong>3. Uso de los Datos Personales</strong>
                  <br />
                  La CRC garantiza que los datos suministrados por el usuario
                  sólo serán utilizados para la administración y gestión del
                  trámite de homologación, conforme a la Ley 1581 de 2012 y de
                  acuerdo con la{" "}
                  <a href="https://www.crcom.gov.co/uploads/images/files/Politica%20de%20Tratamiento%20Info%20Personal.pdf">
                    Política de Tratamiento de Información Personal
                  </a>
                </h6>
                <h6>
                  <strong>4. De los Costos</strong>
                  <br />
                  El trámite no tiene costo alguno.
                </h6>
                <br />
                <h1>Politica de tratamiento de datos personales</h1>
                <h6>
                  La Comisión de Regulación de Comunicaciones, como responsable
                  del tratamiento de la información, manifiesta que no
                  compartirá ni entregará a terceros no autorizados expresamente
                  por el titular, la información de carácter personal, dada por
                  los ciudadanos a la entidad, en cumplimiento de lo establecido
                  en la Ley 1581 de 2012, para la protección de Datos
                  Personales, la Ley Estatutaria 1266 de 2008,con las
                  disposiciones generales del Habeas Data y la regulación del
                  manejo de la información contenida en las bases de datos
                  personales, así como la Ley 1712 de 2014, Ley de Transparencia
                  y Derecho de Acceso a la Información Pública Nacional.
                  <br />
                  Para más información puedes consultar aquí la{" "}
                  <a href="https://www.crcom.gov.co/uploads/images/files/Politica%20de%20Tratamiento%20Info%20Personal.pdf">
                    Política de Tratamiento de Información Personal
                  </a>
                </h6>

                <br />
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
          <h6
            className="titulo-card"
            onClick={() => cambiarEstadoModal(!estadoModal)}
          >
            Solicita el Trámite de Homologación
          </h6>
        </div>
        <div className="body-acciones">
          <p className="texto-card">
            Realice la solicitud del tramite ante la Comisión de Regulación de
            Comunicaciones.
          </p>
        </div>
      </div>
    </div>
  );
}

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
