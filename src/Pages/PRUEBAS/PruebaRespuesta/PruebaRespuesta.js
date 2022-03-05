import React, {useState, useRef} from "react";
import {Link} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";

// Estilos generales del formulario
import "../../../Pages/FormularioSolicitud/FormularioSolicitud.scss";

// Componentes obligatorios a mostrar en el sitio
import Header from "../../../components/Header/Header";
import Navegacion from "../../../components/Navigation/Navegacion";
import NavProceso from "../../../components/NavProceso/NavProceso";

import CardTutoriales from "../../../components/CardTutoriales/CardTutoriales";
import CardDudas from "../../../components/CardDudas/CardDudas";

import CalificacionExperiencia from "../../../components/CalificacionExperiencia/CalificacionExperiencia";
import CalificaExperienciaFooter from "../../../components/CalificacionExperiencia/CalificaExperienciaFooter";

import BotonInicio from "../../../components/Botones/BotonInicio/BotonInicio";
import Footer from "../../../components/Footer/Footer";
import FooterGov from "../../../components/FooterGov/FooterGov";
// Modal a mostra antes de enviar información formulario
import ModalStyled from "../../../components/Modal/ModalStyled";

// Importación iconos para mostrar en mensajes de error o exito
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

// Libreria para el uso de recaptcha
import ReCAPTCHA from "react-google-recaptcha";

// Libreria syled que nos permite crear componentes con diseños, despues la linea exportar se encuentran
import styled from "styled-components";
// Importación elementos html de componente con estilos predefinidos styled
import { Formulario, Label, Select, ContenedorTerminos, LeyendaError, MensajeExito, MensajeError, } from "../../FormularioSolicitud/elementos/Formularios";
// Import componente styled con diseño predeterminado
import ComponenteInput from "../../FormularioSolicitud/componentes/ComponenteInput";
import ComponenteInputDisabled from "../../FormularioSolicitud/componentes/ComponenteInputDisabled";
import DragArea from "../../../components/UploadDocuments/DragArea";
import MenuDesplegable from "../../../components/MenuDesplegable/MenuDesplegable";

const FormularioSolicitud = () => {
  // Validar Datos de identificación
  const [persona, cambiarPersona] = useState({campo: "", valido: null});
  const [tipoId, cambiarTipoId] = useState({campo: "", valido: null});
  const [identificacion, cambiarIdentificacion] = useState({campo: "",valido: null});
  const [identificacion2, cambiarIdentificacion2] = useState({campo: "", valido: null});
  const [nombre, cambiarNombre] = useState({campo: "", valido: null});
  const [nombre2, cambiarNombre2] = useState({campo: "", valido: null});
  const [apellido, cambiarApellido] = useState({campo: "", valido: null});
  const [apellido2, cambiarApellido2] = useState({campo: "", valido: null});

  // Validar Datos de contacto y ubicación
  const [nit, cambiarNit] = useState({campo: "", valido: null});
  const [nit2, cambiarNit2] = useState({campo: "", valido: null});
  const [nombreEmpresa, cambiarNombreEmpresa] = useState({campo: "", valido: null});
  const [nombreRLoApoderado, cambiarNombreRLoApoderado] = useState({campo: "", valido: null});
  const [digitoVerificacion, cambiarDigitoVerificacion] = useState({campo: "", valido: null});
  const [digitoVerificacion2, cambiarDigitoVerificacion2] = useState({campo: "", valido: null});

  // Validar Datos de contacto y ubicación
  const [pais, cambiarPais] = useState({campo: "", valido: null});
  const [departamento, cambiarDepartamento] = useState({campo: "", valido: null});
  const [municipio, cambiarMunicipio] = useState({campo: "", valido: null});
  const [direccion, cambiarDireccion] = useState({campo: "", valido: null});
  const [correo, cambiarCorreo] = useState({campo: "", valido: null});
  const [correo2, cambiarCorreo2] = useState({campo: "", valido: null});
  const [telefono, cambiarTelefono] = useState({campo: "", valido: null});

  // Validar Características del terminal móvil
  const [nombreOtroDispositivo, cambiarNombreOtroDispositivo] = useState({campo: "", valido: null});
  const [marca, cambiarMarca] = useState({campo: "", valido: null});
  const [nombreComercial, cambiarNombreComercial] = useState({campo: "", valido: null});
  const [modelo, cambiarModelo] = useState({ campo: "", valido: null });
  const [fabricante, cambiarFabricante] = useState({ campo: "", valido: null });
  const [casoUsoDispositivo, cambiarCasoUsoDispositivo] = useState({campo: "", valido: null});
  const [marcaEquipoAnfitrion, cambiarMarcaEquipoAnfitrion] = useState({campo: "", valido: null});
  const [modeloEquipoAnfitrion, cambiarModeloEquipoAnfitrion] = useState({campo: "", valido: null});
  // Validar formulario y términos condiciones
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [terminos, cambiarTerminos] = useState(false);
  const [autorizaDatos, cambiarAutorizaDatos] = useState(false);

  // Referencia al captcha
  const captcha = useRef(null);

  // Dependiendo el estado seleccionado en lista desplegable, mostrar x campos en formulario
  const [tipoPersona, setTipoPersona] = useState(null);
  const [tipoIdentificacion, setTipoIdentificacion] = useState(null);
  const [tipoDispositivo, setTipoDispositivo] = useState(null);
  // Mostrar y ocultar modal
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [estadoModalTerminos, cambiarEstadoModalTerminos] = useState(false);
  const [estadoModalDatos, cambiarEstadoModalDatos] = useState(false);

  //Dependiendo estado captcha a seleccionado dejar enviar formulario
  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const [usuarioValido, cambiarUsuarioValido] = useState(false);

  //
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  // Expresiones regulares para validar que los campos cumplan con las condiciones
  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    identificacion: /^\d{6,14}$/, // 6 a 14 numeros.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    digitoV: /^\d{1,1}$/, // 1 a 1 numero.
  };

  // Campo confirmar Número de Identificación se igual campo a comprobar
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

  // Campo confirmar Número de NIT se igual campo a comprobar
  const validarNit2 = () => {
    if (nit.campo.length > 0) {
      if (nit.campo !== nit2.campo) {
        cambiarNit2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        cambiarNit2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  // Campo confirmar Número Digito veririfcacion (DV) igual campo a comprobar
  const validarDigitoVerificacion2 = () => {
    if (digitoVerificacion.campo.length > 0) {
      if (digitoVerificacion.campo !== digitoVerificacion2.campo) {
        cambiarDigitoVerificacion2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        cambiarDigitoVerificacion2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  // Campo confirmar correo electronico igual campo a comprobar
  const validarCorreo2 = () => {
    if (correo.campo.length > 0) {
      if (correo.campo !== correo2.campo) {
        cambiarCorreo2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        cambiarCorreo2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  // Obtener los datos del formulario
  const [formValues, setFormValues] = useState({
    tipoIdentificacion: "",
    tipoId: "",
    identificacion: "",
    identificacion2: "",
    nit: "",
    digitoVerificacion: "",
    nombreEmpresa: "",
    nombre: "",
    nombre2: "",
    apellido: "",
    apellido2: "",
    marca: "",
    nombreComercial: "",
    fabricante: "",
    casoUsoDispositivo: "",
    marcaModulo: "",
    modelo: "",
    modeloModuloInterno: "",
    marcaEquipoFabricante: "",
    modeloEquipoAnfitrion: "",
    nombreOtroDispositivo: "",
    direccion: "",
    correo: "",
    telefono: "",
    departamento: "",
    municipio: "",
    pais: "",
    tipoPersona: "",
    tipoDispositivo: "",
  });

  

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  };

  const onChangeDatos = (e) => {
    cambiarAutorizaDatos(e.target.checked);
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

  // Selección tipo persona
  function getTipoPersonaDiv() {
    switch (tipoPersona) {
      case "natural":
        return (
          <>
            <div className="col-md-6">
              <Label htmlFor="tipoId">Tipo de Identificación *</Label>
              <Select
                id="tipoIdentificacion"
                data-toggle="tooltip"
                title="Seleccionar tipo documento de Identificación"
                name="tipoIdentificacion"
              >
                <option value="1" selected>
                  Cédula de Ciudadania
                </option>
                <option value="2">Cédula extranjeria</option>
                <option value="3">ID pasaporte</option>
              </Select>
              <LeyendaError>Campo tipo iden es requerido</LeyendaError>
            </div>

            <div className="col-md-6">
            <ComponenteInput
              estado={identificacion}
              cambiarEstado={cambiarIdentificacion}
              tipo="text"
              label="Número de Identificación *"
              placeholder="Ej: 1001245785"
              name="identificacion"
              leyendaError="Campo requerido, solo se aceptan números y minimo 6 digitos"
              expresionRegular={expresiones.identificacion}
            />
            </div>

            <div className="col-md-6">
            <ComponenteInput
              estado={identificacion2}
              cambiarEstado={cambiarIdentificacion2}
              tipo="text"
              label="Confirmar Número de Identificación *"
              placeholder="Ej: 1001245785"
              name="identificacion2"
              leyendaError="Campo requerido, debe ser igual al campo identificación"
              funcion={validarIdentificacion2}
            />
            </div>

            <div className="col-md-6">
            <ComponenteInput
              estado={nombre}
              cambiarEstado={cambiarNombre}
              tipo="text"
              label="Primer Nombre *"
              placeholder="Ej: Pepito"
              name="nombre"
              leyendaError="Campo requerido, solo se aceptan letras"
              expresionRegular={expresiones.nombre}
            />
            </div>

            <div className="col-md-6">
            <ComponenteInput
              estado={nombre2}
              cambiarEstado={cambiarNombre2}
              tipo="text"
              label="Segundo Nombre"
              placeholder="Ej: Andres"
              name="nombre2"
            />
            </div>

            <div className="col-md-6">
            <ComponenteInput
              estado={apellido}
              cambiarEstado={cambiarApellido}
              tipo="text"
              label="Primer Apellido *"
              placeholder="Ej: Perez"
              name="apellido"
              leyendaError="Campo requerido, solo se aceptan letras"
              expresionRegular={expresiones.nombre}
            />
            </div>

            <div className="col-md-6">
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
            </div>
          </>
        );
      case "juridica":
        return (
          <>
            <div className="col-md-6">
              <Label htmlFor="tipoId">Tipo de Identificación *</Label>
              <Select
                id="tipoIdentificacion"
                data-toggle="tooltip"
                title="Seleccionar tipo documento de Identificación"
                name="tipoIdentificacion"
              >
                <option value="1" selected>
                  Número de Identificación Tributaria (NIT)
                </option>
              </Select>
              <LeyendaError>Campo tipo iden es requerido</LeyendaError>
            </div>

            <div className="col-md-6">
            <ComponenteInput
              estado={nit}
              cambiarEstado={cambiarNit}
              tipo="text"
              label="Número de Identificación *"
              placeholder="Ej: 8603842563"
              name="nit"
              leyendaError="Campo requerido, solo se aceptan números"
              expresionRegular={expresiones.identificacion}
            />
            </div>

            <div className="col-md-6">
            <ComponenteInput
              estado={digitoVerificacion}
              cambiarEstado={cambiarDigitoVerificacion}
              tipo="text"
              label="Digito Verificación *"
              placeholder="Ej: 8"
              name="digitoVerificacion"
              leyendaError="Campo requerido, solo se un número"
              expresionRegular={expresiones.digitoV}
            />
            </div>

            <div className="col-md-6">
            <ComponenteInput
              estado={nit2}
              cambiarEstado={cambiarNit2}
              tipo="text"
              label="Confirmar Número de Identificación *"
              placeholder="Ej: 8603842563"
              name="nit2"
              leyendaError="Campo requerido, coincidir con número nit ingresado"
              funcion={validarNit2}
            />
            </div>

            <div className="col-md-6">
            <ComponenteInput
              estado={digitoVerificacion2}
              cambiarEstado={cambiarDigitoVerificacion2}
              tipo="text"
              label="Confirmar Digito Verificación*"
              placeholder="Ej: 8"
              name="digitoVerificacion2"
              leyendaError="Campo es requerido, coincidir con número DV ingresado"
              expresionRegular={expresiones.digitoV}
              funcion={validarDigitoVerificacion2}
            />
            </div>

            <div className="col-md-6">
            <ComponenteInput
              estado={nombreEmpresa}
              cambiarEstado={cambiarNombreEmpresa}
              tipo="text"
              label="Nombre de la empresa *"
              placeholder="Ej: Microchips y Telecomunicaciones SAS"
              name="nombreEmpresa"
              leyendaError="Campo es requerido"
              expresionRegular={expresiones.nombre}
            />
            </div>

            <div className="col-md-6">
            <ComponenteInput
              estado={nombreRLoApoderado}
              cambiarEstado={cambiarNombreRLoApoderado}
              tipo="text"
              label="Nombre Representante Legal o APoderado*"
              placeholder="Ej: Pablo Jesus Lozada Cortez"
              name="apellido"
              leyendaError="Campo primer apellido es requerido, solo se aceptan letras"
              expresionRegular={expresiones.nombre}
            />
            </div>
          </>
        );
      default:
        return (
          <>
          <div className="col-md-6">
          <ComponenteInputDisabled
              estado={tipoId}
              cambiarEstado={cambiarTipoId}
              tipo="text"
              label="Tipo de Identificación *"
              placeholder="Ej: Cédula de Ciudadania"
              name="tipoId"
            />
          </div>
            
            <div className="col-md-6">
            <ComponenteInputDisabled
              estado="identificacionSeleccion"
              tipo="text"
              label="Número de Identificación *"
              placeholder="Ej: 1234567890"
              name="identificacionSeleccion"
            />
            </div>
            
            <div className="col-md-6">
              <ComponenteInputDisabled
              estado={nit2}
              cambiarEstado={cambiarNit2}
              tipo="text"
              label="Confirmar Número de Identificación *"
              placeholder="Ej: 1234567890"
              name="identificacion"
            />
            </div>
            
          </>
        );
    }
  }

  // Selección tipo dispositivo
  function getTipoDispositivoDiv() {
    switch (tipoDispositivo) {
      case "dispositivo":
        return (
          <>
            <span />
            <ComponenteInput
              estado={marca}
              cambiarEstado={cambiarMarca}
              tipo="text"
              label="Marca *"
              placeholder="Ej: Apple"
              name="marca"
              leyendaError="Campo es requerido"
              
            />
            <ComponenteInput
              estado={nombreComercial}
              cambiarEstado={cambiarNombreComercial}
              tipo="text"
              label="Nombre Comercial *"
              placeholder="Ej: Serie 3"
              name="nombreComercial"
              leyendaError="Campo es requerido"
              
            />

            <ComponenteInput
              estado={modelo}
              cambiarEstado={cambiarModelo}
              tipo="text"
              label="Modelo *"
              placeholder="Ej: Once"
              name="modelo"
              leyendaError="Campo es requerido"
              
            />

            <ComponenteInput
              estado={fabricante}
              cambiarEstado={cambiarFabricante}
              tipo="text"
              label="Fabricante"
              placeholder="Ej: Huawei"
              name="fabricante"
            />
            
            <ComponenteInput
              estado={casoUsoDispositivo}
              cambiarEstado={cambiarCasoUsoDispositivo}
              tipo="text"
              label="Caso de uso del Dispositivo*"
              placeholder="Ej: Las caracteristicas de dispositivo..."
              name="casoUsoDispositivo"
              leyendaError="Campo requerido"
            
            />

            
            {/*
            <div className"form-group">
              <label for="exampleFormControlTextarea1">Escribre tus comentarios:</label>
              <textarea
                className"form-control"
                id="exampleFormControlTextarea1"
                placeholder="Ej: Caracteristicas u observaciones del dispositivo IoT decir..."
                rows="3"
              ></textarea>
            </div>
            */}
            

          </>
        );
      case "modulo":
        return (
          <>
            <span />
            <ComponenteInput
              estado={marca}
              cambiarEstado={cambiarMarca}
              tipo="text"
              label="Marca del Módulo Interno*"
              placeholder="Ej: Apple"
              name="marcaModulo"
              leyendaError="Campo es requerido"
              
            />
            <ComponenteInput
              estado={nombreComercial}
              cambiarEstado={cambiarNombreComercial}
              tipo="text"
              label="Nombre Comercial*"
              placeholder="Ej: Serie 3"
              name="nombreComercial"
              leyendaError="Campo es requerido, solo se aceptan letras"
              
            />

            <ComponenteInput
              estado={modelo}
              cambiarEstado={cambiarModelo}
              tipo="text"
              label="Modelo del Módulo Interno*"
              placeholder="Ej: Once"
              name="modeloModuloInterno"
              leyendaError="Campo es requerido"
              
            />

            <ComponenteInput
              estado={fabricante}
              cambiarEstado={cambiarFabricante}
              tipo="text"
              label="Fabricante"
              placeholder="Ej: Huawei"
              name="fabricante"
            />

            <ComponenteInput
              estado={marcaEquipoAnfitrion}
              cambiarEstado={cambiarMarcaEquipoAnfitrion}
              tipo="text"
              label="Marca del Equipo Anfitrión*"
              placeholder="Ej: Las caracteristicas de dispositivo..."
              name="marcaEquipoFabricante"
            />

            <ComponenteInput
              estado={modeloEquipoAnfitrion}
              cambiarEstado={cambiarModeloEquipoAnfitrion}
              tipo="text"
              label="Modelo del Equipo Anfitrión*"
              placeholder="Ej: Las caracteristicas de dispositivo..."
              name="modeloEquipoAnfitrion"
            />
          </>
        );
      case "otro":
        return (
          <>
            <ComponenteInput
              estado={nombreOtroDispositivo}
              cambiarEstado={cambiarNombreOtroDispositivo}
              tipo="text"
              label="Nombre otro Dispositivo*"
              placeholder="Ej: Apple"
              name="nombreOtroDispositivo"
              leyendaError="Campo es requerido"
              
            />
            <ComponenteInput
              estado={marca}
              cambiarEstado={cambiarMarca}
              tipo="text"
              label="Marca *"
              placeholder="Ej: Apple"
              name="marca"
              leyendaError="Campo es requerido, solo se aceptan letras"
              
            />
            <ComponenteInput
              estado={nombreComercial}
              cambiarEstado={cambiarNombreComercial}
              tipo="text"
              label="Nombre Comercial *"
              placeholder="Ej: Serie 3"
              name="nombreComercial"
              leyendaError="Campo es requerido"
              expresionRegular={expresiones.nombre}
            />

            <ComponenteInput
              estado={modelo}
              cambiarEstado={cambiarModelo}
              tipo="text"
              label="Modelo *"
              placeholder="Ej: Once"
              name="modelo"
              leyendaError="Campo es requerido"
              
            />

            <ComponenteInput
              estado={fabricante}
              cambiarEstado={cambiarFabricante}
              tipo="text"
              label="Fabricante"
              placeholder="Ej: Huawei"
              name="fabricante"
              leyendaError="Campo requerido"
              
            />
          </>
        );
      default:
        return (
          <>
            <span />
            <ComponenteInput
              estado={marca}
              cambiarEstado={cambiarMarca}
              tipo="text"
              label="Marca *"
              placeholder="Ej: Marca del Fabricante Dispositivo"
              name="marca"
              leyendaError="Campo es requerido"
              
            />
            <ComponenteInput
              estado={nombreComercial}
              cambiarEstado={cambiarNombreComercial}
              tipo="text"
              label="Nombre Comercial *"
              placeholder="Ej: Nombre Comercial del Dispositivo"
              name="nombreComercial"
              leyendaError="Campo es requerido"
             
            />

            <ComponenteInput
              estado={modelo}
              cambiarEstado={cambiarModelo}
              tipo="text"
              label="Modelo *"
              placeholder="Ej: Módelo que estipula el fabricante"
              name="modelo"
              leyendaError="Campo es requerido"
              
            />

            <ComponenteInput
              estado={fabricante}
              cambiarEstado={cambiarFabricante}
              tipo="text"
              label="Fabricante"
              placeholder="Ej: Fabricante de la Marca"
              name="fabricante"
              leyendaError="Campo requerido"
            />
          </>
        );
    }
  }

  // Selección tipo dispositivo
  function getTipoPaisDiv() {
    switch (pais) {
      case "colombia":
        return (
          <>
            <MenuDesplegable />

            <ComponenteInput
              estado={direccion}
              cambiarEstado={cambiarDireccion}
              tipo="text"
              label="Dirección *"
              placeholder="Ej: CL 1 23 45"
              name="direccion"
              leyendaError="Campo es requerido"
              name="direccion"
            />

            <ComponenteInput
              estado={correo}
              cambiarEstado={cambiarCorreo}
              tipo="text"
              label="Correo Electrónico *"
              placeholder="Ej: falso@gmail.com"
              name="correo"
              leyendaError="Campo es requerido, cumplir con las caracteristicas de un email"
              expresionRegular={expresiones.correo}
            />

            <ComponenteInput
              estado={correo2}
              cambiarEstado={cambiarCorreo2}
              tipo="text"
              label="Confirmar Correo Electrónico *"
              placeholder="Ej: falso@gmail.com"
              name="correo"
              leyendaError="Campo es requerido, coincidir con email anteriormente digitado"
              expresionRegular={expresiones.correo}
              funcion={validarCorreo2}
            />

            <ComponenteInput
              estado={telefono}
              cambiarEstado={cambiarTelefono}
              tipo="text"
              label="Teléfono Remitente *"
              placeholder="Ej: 300 123 45 67"
              name="telefono"
              leyendaError="Campo es requerido, solo se aceptan números"
              expresionRegular={expresiones.telefono}
            />
          </>
        );
      case "otroPais":
        return (
          <>
            <ComponenteInputDisabled
              estado={departamento}
              cambiarEstado={cambiarDepartamento}
              tipo="text"
              label="Departamento *"
              placeholder="Ej: Cundinamarca"
              name="departamento"
              leyendaError="Campo es requerido, solo se aceptan letras"
              expresionRegular={expresiones.nombre}
            />
            <ComponenteInputDisabled
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
              estado={correo2}
              cambiarEstado={cambiarCorreo2}
              tipo="text"
              label="Confirmar Correo Electrónico *"
              placeholder="Ej: falso@gmail.com"
              name="correo"
              leyendaError="Campo es requerido"
              expresionRegular={expresiones.correo}
              funcion={validarCorreo2}
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
          </>
        );
      default:
        return (
          <>
            <ComponenteInputDisabled
              estado={departamento}
              cambiarEstado={cambiarDepartamento}
              tipo="text"
              label="Departamento *"
              placeholder="Ej: Cundinamarca"
              name="departamento"
              leyendaError="Campo es requerido, solo se aceptan letras"
              expresionRegular={expresiones.nombre}
            />
            <ComponenteInputDisabled
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
              estado={correo2}
              cambiarEstado={cambiarCorreo2}
              tipo="text"
              label="Confirmar Correo Electrónico *"
              placeholder="Ej: falso@gmail.com"
              name="correo"
              leyendaError="Campo es requerido"
              expresionRegular={expresiones.correo}
              funcion={validarCorreo2}
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
          </>
        );
    }
  }

  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-8">
            <Navegacion
              inicio="Inicio"
              pagina="Solicitud de Homologación..."
              paginaActual="Formulario de Solicitud de Homologación..."
            />
            <NavProceso />

            <br />
            <h3 className="title-form">
              Formulario de Solicitud de Homologación de Equipos Terminales
              Móviles
            </h3>
            <br />
            <br />
            
            <Formik 
              initialValues={{
                nombre: '',
                email: ''
              }}

              validate={(valores) => {
                let errores = {}

                //Validar nombre
                if(!valores.nombre){
                  errores.nombre = 'campo nombre es obligatorio'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                    errores.nombre = 'Solo se aceptan letras y espacios'
                }

                //Validar correo
                if(!valores.email){
                  errores.email = 'campo correo es obligatorio'
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                    errores.email = 'no cumple las caracteristicas de un email'
                }

                return errores
              }}

              onSubmit={(valores, {resetForm}) => {
                resetForm()
                cambiarFormularioEnviado(true)
                console.log(valores.nombre)
                console.log(valores.email)
                console.log('Formulario enviado')
                setTimeout(() => cambiarFormularioEnviado(false), 3000)
              }}
            >
              {({errors}) => ( //Destructuramos para no poner props
                <Form className="row"> {/* Al destructura ya no se utiliza props.handeSubmit*/}
                  {/*console.log(errors)*/} 
                
                  <div className="titulo-indicativo">
                    <h4 className="subtitle-form">Datos de identificación</h4>
                    <p className="txt-obliga">*Campos obligatorios</p>
                  </div>

                  <div className="col-md-6">
                    <Label htmlFor="tipoPersona">Tipo de Persona *</Label>
                    <Select
                      id="tipoPersona"
                      name="tipoPersona"
                      data-toggle="tooltip"
                      title="Seleccionar como persona Natural o Juridica"
                      onClick={(event) => {
                        // here set target value to state which is 0, 1, 2, 3
                        setTipoPersona(event.target.value);
                      }}
                    >
                      <option value="" selected hidden>
                        Ej. Natural
                      </option>
                      <option value="natural">Natural</option>
                      <option value="juridica">Juridica</option>
                    </Select>
                    <LeyendaError>Campo tipo persona es requerido</LeyendaError>
                </div>

                {getTipoPersonaDiv()}

                <div className="col-md-12 titulo-indicativo">
                  <h4 className="subtitle-form">Datos de contacto y ubicación</h4>
                  <p className="txt-obliga">*Campos obligatorios</p>
                </div>
                
                <span />

                <div className="col-md-6">
                  <Label htmlFor="tipoPais">País *</Label>
                  <Select
                    name="pais"
                    id="tipoPais"
                    data-toggle="tooltip"
                    title="Seleccionar país de residencia"
                    onClick={(event) => {
                      // here set target value to state which is 0, 1, 2, 3
                      cambiarPais(event.target.value);
                    }}
                  >
                    <option value="" selected hidden>
                      Ej. Colombia
                    </option>
                    <option value="colombia">Colombia</option>
                    <option value="otroPais">Alemania</option>
                    <option value="otroPais">Arabia Saudita</option>
                    <option value="otroPais">Argentina</option>
                    <option value="otroPais">Bolivia</option>
                    <option value="otroPais">Canada</option>
                    <option value="otroPais">Corea del Norte</option>
                    <option value="otroPais">China</option>
                    <option value="otroPais">Estados Unidos</option>
                    <option value="otroPais">Honkg Kong</option>
                  </Select>
                  <LeyendaError>Campo tipo persona es requerido</LeyendaError>
                </div>

                {getTipoPaisDiv()}


                <div className="col-md-6">
                  <label htmlFor="nombre">Nombre</label>
                  <Field 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    placeholder="John" 
                  />
                  <LeyendaError>Campo tipo persona es requerido</LeyendaError>
                  <ErrorMessage name="nombre" component={() => (
                    <div className="error">{errors.nombre}</div>
                  )} />
                </div>

                <ComponenteInput
              estado={correo}
              cambiarEstado={cambiarCorreo}
              tipo="text"
              label="Correo Electrónico *"
              placeholder="Ej: falso@gmail.com"
              name="correo"
              leyendaError="Campo es requerido, cumplir con las caracteristicas de un email"
              expresionRegular={expresiones.correo}
            />

                <div className="col-md-6">
                  <label htmlFor="email">Correo</label>
                  <Field 
                    type="text" 
                    id="email" 
                    name="email" 
                    placeholder="correo@gmail.com"
                  />
                  <ErrorMessage name="email" component={() => (
                    <div className="email">{errors.email}</div>
                  )} />
                </div>

                <div className="col-md-12">
                    <Field name="mensaje" as="textarea" placeholder="Mensaje" />
                </div>

                <button type="submit">Enviar</button>
                {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
                </Form>
                
                )}
              </Formik>

              <Formulario onSubmit={onSubmit}>
                <div className="titulo-indicativo">
                  <h4 className="subtitle-form">Datos de identificación</h4>
                  <p className="txt-obliga">*Campos obligatorios</p>
                </div>

                <span />

                <div>
                  <Label htmlFor="tipoPersona">Tipo de Persona *</Label>
                  <Select
                    id="tipoPersona"
                    name="tipoPersona"
                    data-toggle="tooltip"
                    title="Seleccionar como persona Natural o Juridica"
                    onClick={(event) => {
                      // here set target value to state which is 0, 1, 2, 3
                      setTipoPersona(event.target.value);
                    }}
                  >
                    <option value="" selected hidden>
                      Ej. Natural
                    </option>
                    <option value="natural">Natural</option>
                    <option value="juridica">Juridica</option>
                  </Select>
                  <LeyendaError>Campo tipo persona es requerido</LeyendaError>
                </div>

                {getTipoPersonaDiv()}

                <div className="col-md-12 titulo-indicativo">
                  <h4 className="subtitle-form">Datos de contacto y ubicación</h4>
                  <p className="txt-obliga">*Campos obligatorios</p>
                </div>
                <span />
                <div>
                  <Label htmlFor="tipoPais">País *</Label>
                  <Select
                    name="pais"
                    id="tipoPais"
                    data-toggle="tooltip"
                    title="Seleccionar país de residencia"
                    onClick={(event) => {
                      // here set target value to state which is 0, 1, 2, 3
                      cambiarPais(event.target.value);
                    }}
                  >
                    <option value="" selected hidden>
                      Ej. Colombia
                    </option>
                    <option value="colombia">Colombia</option>
                    <option value="otroPais">Alemania</option>
                    <option value="otroPais">Arabia Saudita</option>
                    <option value="otroPais">Argentina</option>
                    <option value="otroPais">Bolivia</option>
                    <option value="otroPais">Canada</option>
                    <option value="otroPais">Corea del Norte</option>
                    <option value="otroPais">China</option>
                    <option value="otroPais">Estados Unidos</option>
                    <option value="otroPais">Honkg Kong</option>
                  </Select>
                  <LeyendaError>Campo tipo persona es requerido</LeyendaError>
                </div>

                {getTipoPaisDiv()}
                <br />

                <br />

                <div className="col-md-12 titulo-indicativo">
                  <h4 className="subtitle-form">
                    Características del terminal móvil
                  </h4>
                  <p className="txt-obliga">*Campos obligatorios</p>
                </div>
                <br />

                <div>
                  <Label htmlFor="tipoDispositivo">Tipo de Dispositivo*</Label>
                  <Select
                  nombre="tipoDispositivo"
                    id="tipoDispositivo"
                    data-toggle="tooltip"
                    title="Seleccionar tipo dispositivo"
                    onClick={(event) => {
                      // here set target value to state which is 0, 1, 2, 3
                      setTipoDispositivo(event.target.value);
                    }}
                  >
                    <option value="" selected hidden>
                      Ej. Móvil
                    </option>
                    <option value="telefono">Télefono Inteligente</option>
                    <option value="computador">Computador de Bolsillo</option>
                    <option value="dispositivo">Dispositivo IoT</option>
                    <option value="modulo">Módulo</option>
                    <option value="reloj">Reloj Inteligente</option>
                    <option value="router">Router</option>
                    <option value="otro">Otro ¿Cúal?</option>
                  </Select>
                  <LeyendaError>Campo tipo persona es requerido</LeyendaError>
                </div>

                {getTipoDispositivoDiv()}

                <br />
                {/*
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
                */}
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
                <span className="button-carga-principal btn-file">
                  Agregar TAC
                  <input type="file" />
                </span>
              </div>
              <br />
              <br />
            </div>
            <div className="tabla">
              <p className="titulo-tabla">Listado de TAC</p>
              <table className="rwd-table">
                <tr>
                  <th>TAC</th>
                  <th>Acciones</th>
                </tr>
                <tr>
                  <td data-th="datos">Sin datos</td>
                  <td data-th="accion"> ... </td>
                </tr>
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
              <br />

              <div>
                <DragArea />
              </div>
              <br />
            </div>

            <br />

            <div className="col-md-12 titulo-indicativo">
              <h4 className="subtitle-form">
                Aviso de Términos y Autorización para el Tratamiento de Datos
                Personales*
              </h4>
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
                <a
                  className="aceptacionFormulario"
                  onClick={() =>
                    cambiarEstadoModalTerminos(!estadoModalTerminos)
                  }
                >
                  Acepto que he leido los Términos y condiciones *
                </a>
              </Label>
              <br />
              <Label>
                <input
                  type="checkbox"
                  name="autorizaDatos"
                  id="autorizaDatos"
                  checked={autorizaDatos}
                  onChange={onChangeDatos}
                />
                <a
                  className="aceptacionFormulario"
                  onClick={() => cambiarEstadoModalDatos(!estadoModalDatos)}
                >
                  Autorizo el tratamiento de datos personales
                </a>
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
            <br />
            <br />
            <h4 className="subtitle-form">Verificación de Seguridad *</h4>
            <br />
            <ReCAPTCHA
              ref={captcha}
              sitekey="6Lc9VDIeAAAAAHHQA1wEjx1FKlTy9uWIrZKGwwvN"
              onChange={onChange}
            />

            <br />
            <br />
            <Boton
              id="envio"
              type="submit"
              onClick={() => cambiarEstadoModal(!estadoModal)}
            >
              REGISTRAR SOLICITUD
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
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-3 p-0">
            <aside className="aside">
              <br />
              <br />
              <CardTutoriales />
              <CardDudas />
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
      <CalificaExperienciaFooter />
      <Footer />
      <FooterGov />

      {/* MODAL DE ACEPTAR FORMULARIO */}
      <ModalStyled
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
              <h1>Confirmación</h1>
              <h6>¿Estas seguro de registrar la información?</h6>
              <br />

              <ContenedorBotones>
                <Botoncito1 type="submit">
                  <Link to="/ProcesoSolicitud" className="irTramite">
                    ACEPTAR
                  </Link>
                </Botoncito1>
                <br />
                <Botoncito2 onClick={() => cambiarEstadoModal(!estadoModal)}>
                  CANCELAR
                </Botoncito2>
              </ContenedorBotones>
            </form>
          </Contenido>
        )}
        {usuarioValido && (
          <div>
            <h1>Bienvenido</h1>
          </div>
        )}
      </ModalStyled>

      {/* MODAL TERMINOS Y CONDICIONES */}
      <ModalStyled
        estado={estadoModalTerminos}
        cambiarEstado={cambiarEstadoModalTerminos}
        titulo="Términos y condiciones"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"start"}
        padding={"20px"}
        width={"900px"}
        min-height={"400px"}
      >
        {!usuarioValido && (
          <Contenido>
            <h1>Homologación de equipos terminales</h1>
            <h2>1. Del Servicio</h2>
            <p>
              Trámite por medio del cual la CRC busca que un equipo terminal
              móvil tenga un adecuado funcionamiento e interacción con las redes
              de comunicaciones del país en términos de sus frecuencias de
              operación y que cumpla con los estándares internacionales sobre
              los límites de exposición humana a los campos electromagnéticos
              para un uso seguro por parte del usuario interesado
            </p>
            <p>
              Por lo anterior, para homologar un equipo terminal móvil en
              Colombia, se debe realizar OBLIGATORIAMENTE la solicitud en línea
              a través del formulario establecido para el efecto en el portal
              web (www.tramitescrcom.gov.co), en el cual se deberá suministrar
              la información requerida en (http://bit.ly/homologarcelular). Allí
              podrá encontrar una guía del paso a paso en videos para realizar
              este trámite.
            </p>
            <h2>2. De Las Responsabilidades de la CRC</h2>
            <p>
              La CRC es el órgano encargado de promover la competencia en los
              mercados, promover el pluralismo informativo, evitar el abuso de
              posición dominante, regular los mercados de las redes y los
              servicios de comunicaciones y garantizar la protección de los
              derechos de los usuarios; con el fin que la prestación de los
              servicios sea económicamente eficiente, y refleje altos niveles de
              calidad, de las redes y los servicios de comunicaciones, incluidos
              los servicios de televisión abierta radiodifundida y de
              radiodifusión sonora.
            </p>
            <p>
              La CRC estudiará cada solicitud de homologación y dará la
              RespuestaSolicitud pertinente.
            </p>
            <h2>3. Uso de los Datos Personales</h2>
            <p>
              La CRC garantiza que los datos suministrados por el usuario sólo
              serán utilizados para la administración y gestión del trámite de
              homologación, conforme a la Ley 1581 de 2012 y de acuerdo con la{" "}
              <a
                Target="_blanck"
                href="https://www.crcom.gov.co/uploads/images/files/Politica%20de%20Tratamiento%20Info%20Personal.pdf"
              >
                {" "}
                Política de Tratamiento de Información Personal
              </a>
            </p>
            <h2>4. De los Costos</h2>
            <p>El trámite no tiene costo alguno.</p>
          </Contenido>
        )}
        {usuarioValido && (
          <div>
            <h1>Bienvenido</h1>
          </div>
        )}
      </ModalStyled>

      {/* MODAL TRATAMIENTO DE DATOS */}
      <ModalStyled
        estado={estadoModalDatos}
        cambiarEstado={cambiarEstadoModalDatos}
        titulo="Politica de tratamiento de datos personales"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"start"}
        padding={"20px"}
        width={"700px"}
        min-height={"300px"}
      >
        {!usuarioValido && (
          <Contenido>
            <p>
              La Comisión de Regulación de Comunicaciones, como responsable del
              tratamiento de la información, manifiesta que no compartirá ni
              entregará a terceros no autorizados expresamente por el titular,
              la información de carácter personal, dada por los ciudadanos a la
              entidad, en cumplimiento de lo establecido en la Ley 1581 de 2012,
              para la protección de Datos Personales, la Ley Estatutaria 1266 de
              2008,con las disposiciones generales del Habeas Data y la
              regulación del manejo de la información contenida en las bases de
              datos personales, así como la Ley 1712 de 2014, Ley de
              Transparencia y Derecho de Acceso a la Información Pública
              Nacional.
            </p>
            <p>
              Para más información puedes consultar aquí la{" "}
              <a
                Target="_blanck"
                href="https://crcom.gov.co/sites/default/files/transparencia/contenido_multimedia/Politica_de_tratamiento_info_personal.pdf"
              >
                Política de Tratamiento de Información Personal
              </a>
            </p>
          </Contenido>
        )}
        {usuarioValido && (
          <div>
            <h1>Bienvenido</h1>
          </div>
        )}
      </ModalStyled>
    </>
  );
};

export default FormularioSolicitud;

const Boton = styled.button`
  border-radius: 20px;
  border: 2px solid #1766dc;
  background: #1766dc;
  color: #FFFF;
  cursor: pointer;
  display: block;
  font: normal bold 15px "Works Sans", sans-serif;
  padding: 15px 10px;
  transition: 0.3s ease all;
  width: 35%;

  &:hover {
    background: #004884;
    border-color: #004884;
  }
`;


/*
<ContenedorBotonCentrado className="recaptcha">
                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6Lc9VDIeAAAAAHHQA1wEjx1FKlTy9uWIrZKGwwvN"
                  onChange={onChange}
                />
              </ContenedorBotonCentrado>

              {captchaValido === false && (
                <div className="error-captcha">Por favor acepta el captcha</div>
              )}
*/

const Botoncito1 = styled.button`
  background: #3366cc;
  border-radius: 15px;
  border: 2px solid #3366cc;
  color: #ffff;
  cursor: pointer;
  display: block;
  font: normal 500 15px "Work Sans", sans-serif;
  transition: 0.3s ease all;
  padding: 15px 10px 15px 10px;
  width: 40%;

  &:hover {
    background: #004884;
    border-color: #004884; 
  }

  a {
    color: #FFFF;
  }
`;

const Botoncito2 = styled.button`
  background: #ffff;
  border-radius: 15px;
  border: 2px solid #3366cc;
  color: #3366cc;
  cursor: pointer;
  display: block;
  font: normal 500 15px "Work Sans", sans-serif;
  transition: 0.3s ease all;
  padding: 15px 10px 15px 10px;
  width: 42%;

  &:hover {
    background: #3366cc;
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
  padding: 0px;
  display: flex;
  float: left;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
