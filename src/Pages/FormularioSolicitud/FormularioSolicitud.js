import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import View from "./View";

// Estilos generales del formulario
import "./FormularioSolicitud.scss";

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

// Importar para modales para boton TAC
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

// Componentes obligatorios a mostrar en el sitio
import Header from "../../components/Header/Header";
import Navegacion from "../../components/Navigation/Navegacion";
import NavProceso from "../../components/NavProceso/NavProceso";

import CardTutoriales from "../../components/CardTutoriales/CardTutoriales";
import CardDudas from "../../components/CardDudas/CardDudas";

import CalificacionExperiencia from "../../components/CalificacionExperiencia/CalificacionExperiencia";
import CalificaExperienciaFooter from "../../components/CalificacionExperiencia/CalificaExperienciaFooter";
import BotonInicio from "../../components/Botones/BotonInicio/BotonInicio";

import Footer from "../../components/Footer/Footer";
import FooterGov from "../../components/FooterGov/FooterGov";
import UploadDocument from "../../components/UploadDocuments/UploadDocument";

// Modal a mostra antes de enviar información formulario
import ModalStyled from "../../components/Modal/ModalStyled";

//import { FormInput } from "../../components/FormInput";

// Importación elementos html de componente con estilos predefinidos styled
import {
  Formulario,
  Label,
  Select,
  ContenedorTerminos,
  LeyendaError,
  MensajeExito,
  MensajeError,
} from "./elementos/Formularios";
// Import componente styled con diseño predeterminado
import ComponenteInput from "./componentes/ComponenteInput";
import ComponenteInputDisabled from "./componentes/ComponenteInputDisabled";
//import DragArea from "../../components/UploadDocuments/DragArea";
import MenuDesplegable from "../../components/MenuDesplegable/MenuDesplegable";

const FormularioSolicitud = () => {
  //Validar TAC
  const [tac, setTac] = useState({ campo: "", valido: null });

  // Validar Datos de identificación
  const [persona, cambiarPersona] = useState({ campo: "", valido: null });
  const [tipoId, cambiarTipoId] = useState({ campo: "", valido: null });
  const [identificacion, cambiarIdentificacion] = useState({
    campo: "",
    valido: null,
  });
  const [identificacion2, cambiarIdentificacion2] = useState({
    campo: "",
    valido: null,
  });
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [nombre2, cambiarNombre2] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [apellido2, cambiarApellido2] = useState({ campo: "", valido: null });

  // Validar Datos de contacto y ubicación
  const [nit, cambiarNit] = useState({ campo: "", valido: null });
  const [nit2, cambiarNit2] = useState({ campo: "", valido: null });
  const [nombreEmpresa, cambiarNombreEmpresa] = useState({
    campo: "",
    valido: null,
  });
  const [nombreRLoApoderado, cambiarNombreRLoApoderado] = useState({
    campo: "",
    valido: null,
  });
  const [digitoVerificacion, cambiarDigitoVerificacion] = useState({
    campo: "",
    valido: null,
  });
  const [digitoVerificacion2, cambiarDigitoVerificacion2] = useState({
    campo: "",
    valido: null,
  });

  // Validar Datos de contacto y ubicación
  const [pais, cambiarPais] = useState({ campo: "", valido: null });
  const [departamento, cambiarDepartamento] = useState({
    campo: "",
    valido: null,
  });
  const [municipio, cambiarMunicipio] = useState({ campo: "", valido: null });
  const [direccion, cambiarDireccion] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [correo2, cambiarCorreo2] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });

  // Validar Características del terminal móvil
  const [nombreOtroDispositivo, cambiarNombreOtroDispositivo] = useState({
    campo: "",
    valido: null,
  });
  const [marca, cambiarMarca] = useState({ campo: "", valido: null });
  const [nombreComercial, cambiarNombreComercial] = useState({
    campo: "",
    valido: null,
  });
  const [modelo, cambiarModelo] = useState({ campo: "", valido: null });
  const [fabricante, cambiarFabricante] = useState({ campo: "", valido: null });
  const [casoUsoDispositivo, cambiarCasoUsoDispositivo] = useState({
    campo: "",
    valido: null,
  });
  const [marcaEquipoAnfitrion, cambiarMarcaEquipoAnfitrion] = useState({
    campo: "",
    valido: null,
  });
  const [modeloEquipoAnfitrion, cambiarModeloEquipoAnfitrion] = useState({
    campo: "",
    valido: null,
  });
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
  const [estadoModalTac, cambiarEstadoModalTac] = useState(false);

  const [estadoModal2, cambiarEstadoModal2] = useState(false);

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
    digitoV: /^\d{1,1}$/, // 1 a 1 numero.
    minimoCaracteres: /^.{2,50}$/, //Minimo 2 caracteres y máximo 50
    validaTac: /^\d{8,8}$/, // minimo y maximo 8 numeros
  };

  // Datos quemados cargue TAC
  const dataPaises = [
    { id: 1, minutos: 241 },
    { id: 2, minutos: 225 },
  ];

  // Estados para trabajar con el TAC
  const [data, setData] = useState(dataPaises);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  // Estado seleccionado del TAC
  const [paisSeleccionado, setPaisSeleccionado] = useState({
    id: "",
    minutos: "",
  });

  // Selección del TAC
  const seleccionarPais = (elemento, caso) => {
    setPaisSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  // Cambio selección del TAC
  const handleChangeTac = (e) => {
    const { name, value } = e.target;
    setPaisSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Editar el TAC de la tabla
  const editar = () => {
    var dataNueva = data;
    dataNueva.map((pais) => {
      if (pais.id === paisSeleccionado.id) {
        pais.minutos = paisSeleccionado.minutos;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  };

  // Eliminar TAC tabla la tabla
  const eliminar = () => {
    setData(data.filter((pais) => pais.id !== paisSeleccionado.id));
    setModalEliminar(false);
  };

  // Mostrar modal para insertar un nuevo # TAC
  const abrirModalInsertar = () => {
    setPaisSeleccionado(null);
    setModalInsertar(true);
  };

  // Insertar nuevo # TAC
  const insertar = () => {
    var valorInsertar = paisSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
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
    tipoPersona: "",
    tipoIdentificacion: "",
    identificacion: "",
    nombre: "",
    nombre2: "",
    apellido: "",
    apellido2: "",
    nit: "",
    digitoVerificacion: "",
    nombreEmpresa: "",
    nombreRL: "",
    pais: "",
    departamento: "",
    municipio: "",
    direccion: "",
    correo: "",
    telefono: "",
    tipoDispositivo: "",
    marca: "",
    nombreComercial: "",
    modelo: "",
    fabricante: "",
    casoUsoDispositivo: "",
    modeloModuloInterno: "",
    marcaEquipoFabricante: "",
    modeloEquipoAnfitrion: "",
    nombreOtroDispositivo: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(true);

  const inputFileRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    console.log(inputFileRef?.current?.files);
    setIsFormVisible(false);
  };

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

  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-8">
            <>
              <Navegacion
                inicio="Inicio"
                pagina="Solicitud de Homologación"
                paginaActual="Solicitud de Homologación de Equipos"
              />
              <NavProceso />

              <br />
              <h3 className="title-form">
                Solicitud de Homologación de Equipos Terminales Móviles
              </h3>
              <br />
              <br />

              <Formulario className="row" onSubmit={handleSubmit}>
                <div className="titulo-indicativo">
                  <h4 className="subtitle-form">Datos de identificación</h4>
                  <p className="txt-obliga">*Campos obligatorios</p>
                </div>

                <span />

                <div className="col-md-6 p-1">
                  <Label htmlFor="tipoPersona">Tipo de Persona*</Label>
                  <Select
                    id="tipoPersona"
                    name="tipoPersona"
                    data-toggle="tooltip"
                    title="Seleccionar como persona Natural o Juridica"
                    onClick={(event) => {
                      // here set target value to state which is 0, 1, 2, 3
                      setTipoPersona(event.target.value);
                    }}
                    value={formValues?.tipoPersona}
                    onChange={handleChange}
                  >
                    <option value="" selected hidden>
                      Ej. Natural
                    </option>
                    <option value="natural">Natural</option>
                    <option value="juridica">Juridica</option>
                  </Select>
                  <LeyendaError>Campo tipo persona es requerido</LeyendaError>
                </div>

                {tipoPersona === "natural" ? (
                  <>
                    <div className="col-md-6 p-1">
                      <Label htmlFor="tipoId">Tipo de Identificación*</Label>
                      <Select
                        id="tipoIdentificacion"
                        data-toggle="tooltip"
                        title="Seleccionar tipo documento de Identificación"
                        name="tipoIdentificacion"
                        value={formValues?.tipoIdentificacion}
                        onChange={handleChange}
                      >
                        <option value="1" selected>
                          Cédula de Ciudadania
                        </option>
                        <option value="2">Cédula extranjeria</option>
                        <option value="3">ID pasaporte</option>
                      </Select>
                      <LeyendaError>Campo es requerido</LeyendaError>
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={identificacion}
                        cambiarEstado={cambiarIdentificacion}
                        tipo="text"
                        label="Número de Identificación*"
                        placeholder="Ej: 1001245785"
                        name="identificacion"
                        leyendaError="Campo requerido, solo se aceptan números y minimo 6 digitos"
                        expresionRegular={expresiones.identificacion}
                        value={formValues?.identificacion}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={identificacion2}
                        cambiarEstado={cambiarIdentificacion2}
                        tipo="text"
                        label="Confirmar Número de Identificación*"
                        placeholder="Ej: 1001245785"
                        name="identificacion2"
                        leyendaError="Campo requerido, debe ser igual al campo identificación"
                        funcion={validarIdentificacion2}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={nombre}
                        cambiarEstado={cambiarNombre}
                        tipo="text"
                        label="Primer Nombre*"
                        placeholder="Ej: Pepito"
                        name="nombre"
                        leyendaError="Campo requerido, solo se aceptan letras"
                        expresionRegular={expresiones.nombre}
                        value={formValues?.nombre}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={nombre2}
                        cambiarEstado={cambiarNombre2}
                        tipo="text"
                        label="Segundo Nombre"
                        placeholder="Ej: Andres"
                        name="nombre2"
                        value={formValues?.nombre2}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={apellido}
                        cambiarEstado={cambiarApellido}
                        tipo="text"
                        label="Primer Apellido*"
                        placeholder="Ej: Perez"
                        name="apellido"
                        leyendaError="Campo requerido, solo se aceptan letras"
                        expresionRegular={expresiones.nombre}
                        value={formValues?.apellido}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={apellido2}
                        cambiarEstado={cambiarApellido2}
                        tipo="text"
                        label="Segundo Apellido"
                        placeholder="Ej: Rodriguez"
                        name="apellido2"
                        leyendaError="Campo requerido"
                        expresionRegular={expresiones.apellido2}
                        value={formValues?.apellido2}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                ) : tipoPersona === "juridica" ? (
                  <>
                    <div className="col-md-6 p-1">
                      <Label htmlFor="tipoId">Tipo de Identificación*</Label>
                      <Select
                        id="tipoIdentificacion"
                        data-toggle="tooltip"
                        title="Seleccionar tipo documento de Identificación"
                        name="tipoIdentificacion"
                        value={formValues?.tipoIdentificacion}
                        onChange={handleChange}
                      >
                        <option value="1" selected>
                          Número Identificación Tributaria (NIT)
                        </option>
                      </Select>
                      <LeyendaError>Campo tipo iden es requerido</LeyendaError>
                    </div>

                    <div className="col-md-4 p-1">
                      <ComponenteInput
                        estado={nit}
                        cambiarEstado={cambiarNit}
                        tipo="text"
                        label="Número de Identificación*"
                        placeholder="Ej: 8603842563"
                        name="nit"
                        leyendaError="Campo requerido, solo se aceptan números"
                        expresionRegular={expresiones.identificacion}
                        value={formValues?.nit}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-2 p-1">
                      <ComponenteInput
                        estado={digitoVerificacion}
                        cambiarEstado={cambiarDigitoVerificacion}
                        tipo="text"
                        label="DV*"
                        placeholder="Ej: 8"
                        name="digitoVerificacion"
                        leyendaError="Campo requerido, solo se un número"
                        expresionRegular={expresiones.digitoV}
                        value={formValues?.digitoVerificacion}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4 p-1">
                      <ComponenteInput
                        estado={nit2}
                        cambiarEstado={cambiarNit2}
                        tipo="text"
                        label="Confirma Identificación*"
                        placeholder="Ej: 8603842563"
                        name="nit2"
                        leyendaError="Campo requerido, coincidir con número nit ingresado"
                        funcion={validarNit2}
                      />
                    </div>

                    <div className="col-md-2 p-1">
                      <ComponenteInput
                        estado={digitoVerificacion2}
                        cambiarEstado={cambiarDigitoVerificacion2}
                        tipo="text"
                        label="Confirma DV*"
                        placeholder="Ej: 8"
                        name="digitoVerificacion2"
                        leyendaError="Campo es requerido, coincidir con número DV ingresado"
                        expresionRegular={expresiones.digitoV}
                        funcion={validarDigitoVerificacion2}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={nombreEmpresa}
                        cambiarEstado={cambiarNombreEmpresa}
                        tipo="text"
                        label="Nombre de la empresa*"
                        placeholder="Ej: Microchips y Telecomunicaciones SAS"
                        name="nombreEmpresa"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.nombre}
                        value={formValues?.nombreEmpresa}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={nombreRLoApoderado}
                        cambiarEstado={cambiarNombreRLoApoderado}
                        tipo="text"
                        label="Nombre Representante Legal o APoderado*"
                        placeholder="Ej: Pablo Jesus Lozada Cortez"
                        name="nombreRL"
                        leyendaError="Campo primer apellido es requerido, solo se aceptan letras"
                        expresionRegular={expresiones.nombre}
                        value={formValues?.nombreRL}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-6 p-1">
                      <ComponenteInputDisabled
                        estado={tipoId}
                        cambiarEstado={cambiarTipoId}
                        tipo="text"
                        label="Tipo de Identificación*"
                        placeholder="Ej: Cédula de Ciudadania"
                        name="tipoId"
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInputDisabled
                        estado="identificacionSeleccion"
                        tipo="text"
                        label="Número de Identificación*"
                        placeholder="Ej: 1234567890"
                        name="identificacionSeleccion"
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInputDisabled
                        estado={nit2}
                        cambiarEstado={cambiarNit2}
                        tipo="text"
                        label="Confirmar Número de Identificación*"
                        placeholder="Ej: 1234567890"
                        name="identificacion"
                      />
                    </div>
                  </>
                )}

                <div className="col-md-12 titulo-indicativo">
                  <h4 className="subtitle-form">
                    Datos de contacto y ubicación
                  </h4>
                  <p className="txt-obliga">*Campos obligatorios</p>
                </div>
                <span />

                <div className="col-md-6 p-1">
                  <Label htmlFor="tipoPais">País*</Label>
                  <Select
                    name="pais"
                    id="tipoPais"
                    data-toggle="tooltip"
                    title="Seleccionar país de residencia"
                    onClick={(event) => {
                      // here set target value to state which is 0, 1, 2, 3
                      cambiarPais(event.target.value);
                    }}
                    value={formValues?.pais}
                    onChange={handleChange}
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

                {pais === "colombia" ? (
                  <>
                    <MenuDesplegable />

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={direccion}
                        cambiarEstado={cambiarDireccion}
                        tipo="text"
                        label="Dirección*"
                        placeholder="Ej: CL 1 23 45"
                        name="direccion"
                        leyendaError="Campo es requerido"
                        name="direccion"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.direccion}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={correo}
                        cambiarEstado={cambiarCorreo}
                        tipo="text"
                        label="Correo Electrónico*"
                        placeholder="Ej: falso@gmail.com"
                        name="correo"
                        leyendaError="Campo es requerido, cumplir con las caracteristicas de un email"
                        expresionRegular={expresiones.correo}
                        value={formValues?.correo}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={correo2}
                        cambiarEstado={cambiarCorreo2}
                        tipo="text"
                        label="Confirmar Correo Electrónico*"
                        placeholder="Ej: falso@gmail.com"
                        name="correo"
                        leyendaError="Campo es requerido, coincidir con email anteriormente digitado"
                        expresionRegular={expresiones.correo}
                        funcion={validarCorreo2}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={telefono}
                        cambiarEstado={cambiarTelefono}
                        tipo="text"
                        label="Teléfono Remitente*"
                        placeholder="Ej: 300 123 45 67"
                        name="telefono"
                        leyendaError="Campo es requerido, solo se aceptan números"
                        expresionRegular={expresiones.telefono}
                        value={formValues?.telefono}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                ) : pais === "otroPais" ? (
                  <>
                    <div className="col-md-6 p-1">
                      <ComponenteInputDisabled
                        estado={departamento}
                        cambiarEstado={cambiarDepartamento}
                        tipo="text"
                        label="Departamento*"
                        placeholder="Ej: Cundinamarca"
                        name="departamento"
                        leyendaError="Campo es requerido, solo se aceptan letras"
                        expresionRegular={expresiones.nombre}
                        value={formValues?.departamento}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 p-1">
                      <ComponenteInputDisabled
                        estado={municipio}
                        cambiarEstado={cambiarMunicipio}
                        tipo="text"
                        label="Municipio*"
                        placeholder="Ej: Madrid"
                        name="municipio"
                        leyendaError="Campo es requerido, solo se aceptan letras"
                        expresionRegular={expresiones.nombre}
                        value={formValues?.municipio}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={direccion}
                        cambiarEstado={cambiarDireccion}
                        tipo="text"
                        label="Dirección*"
                        placeholder="Ej: CL 1 23 45"
                        name="direccion"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.direccion}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={correo}
                        cambiarEstado={cambiarCorreo}
                        tipo="text"
                        label="Correo Electrónico*"
                        placeholder="Ej: falso@gmail.com"
                        name="correo"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.correo}
                        value={formValues?.correo}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={correo2}
                        cambiarEstado={cambiarCorreo2}
                        tipo="text"
                        label="Confirmar Correo Electrónico*"
                        placeholder="Ej: falso@gmail.com"
                        name="correo"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.correo}
                        funcion={validarCorreo2}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={telefono}
                        cambiarEstado={cambiarTelefono}
                        tipo="text"
                        label="Teléfono Remitente*"
                        placeholder="Ej: 300 123 45 67"
                        name="telefono"
                        leyendaError="Campo es requerido, solo números"
                        expresionRegular={expresiones.telefono}
                        value={formValues?.telefono}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-6 p-1">
                      <ComponenteInputDisabled
                        estado={departamento}
                        cambiarEstado={cambiarDepartamento}
                        tipo="text"
                        label="Departamento*"
                        placeholder="Ej: Cundinamarca"
                        name="departamento"
                        leyendaError="Campo es requerido, solo se aceptan letras"
                        expresionRegular={expresiones.nombre}
                        value={formValues?.departamento}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 p-1">
                      <ComponenteInputDisabled
                        estado={municipio}
                        cambiarEstado={cambiarMunicipio}
                        tipo="text"
                        label="Municipio*"
                        placeholder="Ej: Madrid"
                        name="municipio"
                        leyendaError="Campo es requerido, solo se aceptan letras"
                        expresionRegular={expresiones.nombre}
                        value={formValues?.municipio}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={direccion}
                        cambiarEstado={cambiarDireccion}
                        tipo="text"
                        label="Dirección*"
                        placeholder="Ej: CL 1 23 45"
                        name="direccion"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.direccion}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={correo}
                        cambiarEstado={cambiarCorreo}
                        tipo="text"
                        label="Correo Electrónico*"
                        placeholder="Ej: falso@gmail.com"
                        name="correo"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.correo}
                        value={formValues?.correo}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={correo2}
                        cambiarEstado={cambiarCorreo2}
                        tipo="text"
                        label="Confirmar Correo Electrónico*"
                        placeholder="Ej: falso@gmail.com"
                        name="correo"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.correo}
                        funcion={validarCorreo2}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={telefono}
                        cambiarEstado={cambiarTelefono}
                        tipo="text"
                        label="Teléfono Remitente*"
                        placeholder="Ej: 300 123 45 67"
                        name="telefono"
                        leyendaError="Campo es requerido, solo números"
                        expresionRegular={expresiones.telefono}
                        value={formValues?.telefono}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}

                <br />

                <br />

                <div className="col-md-12 titulo-indicativo">
                  <h4 className="subtitle-form">
                    Características del terminal móvil
                  </h4>
                  <p className="txt-obliga">*Campos obligatorios</p>
                </div>
                <br />

                <div className="col-md-6 p-1">
                  <Label htmlFor="tipoDispositivo">Tipo de Dispositivo*</Label>
                  <Select
                    name="tipoDispositivo"
                    id="tipoDispositivo"
                    data-toggle="tooltip"
                    title="Seleccionar tipo dispositivo"
                    onClick={(event) => {
                      // here set target value to state which is 0, 1, 2, 3
                      setTipoDispositivo(event.target.value);
                    }}
                    value={formValues?.tipoDispositivo}
                    onChange={handleChange}
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

                {tipoDispositivo === "dispositivo" ? (
                  <>
                    <span />
                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={marca}
                        cambiarEstado={cambiarMarca}
                        tipo="text"
                        label="Marca*"
                        placeholder="Ej: Apple"
                        name="marca"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.marca}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={nombreComercial}
                        cambiarEstado={cambiarNombreComercial}
                        tipo="text"
                        label="Nombre Comercial*"
                        placeholder="Ej: Serie 3"
                        name="nombreComercial"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.nombreComercial}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={modelo}
                        cambiarEstado={cambiarModelo}
                        tipo="text"
                        label="Modelo*"
                        placeholder="Ej: Once"
                        name="modelo"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.modelo}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={fabricante}
                        cambiarEstado={cambiarFabricante}
                        tipo="text"
                        label="Fabricante"
                        placeholder="Ej: Huawei"
                        name="fabricante"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.fabricante}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-12 p-1">
                      <ComponenteInput
                        estado={casoUsoDispositivo}
                        cambiarEstado={cambiarCasoUsoDispositivo}
                        tipo="text"
                        label="Caso de uso del Dispositivo*"
                        placeholder="Ej: Las caracteristicas de dispositivo..."
                        name="casoUsoDispositivo"
                        leyendaError="Campo requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.casoUsoDispositivo}
                        onChange={handleChange}
                      />
                    </div>

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
                ) : tipoDispositivo === "modulo" ? (
                  <>
                    <span />
                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={marca}
                        cambiarEstado={cambiarMarca}
                        tipo="text"
                        label="Marca del Módulo Interno*"
                        placeholder="Ej: Apple"
                        name="marca"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.marca}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={nombreComercial}
                        cambiarEstado={cambiarNombreComercial}
                        tipo="text"
                        label="Nombre Comercial*"
                        placeholder="Ej: Serie 3"
                        name="nombreComercial"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.nombreComercial}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={modelo}
                        cambiarEstado={cambiarModelo}
                        tipo="text"
                        label="Modelo del Módulo Interno*"
                        placeholder="Ej: Once"
                        name="modeloModuloInterno"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.modeloModuloInterno}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={fabricante}
                        cambiarEstado={cambiarFabricante}
                        tipo="text"
                        label="Fabricante"
                        placeholder="Ej: Huawei"
                        name="fabricante"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.fabricante}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={marcaEquipoAnfitrion}
                        cambiarEstado={cambiarMarcaEquipoAnfitrion}
                        tipo="text"
                        label="Marca del Equipo Anfitrión*"
                        placeholder="Ej: Las caracteristicas de dispositivo..."
                        name="marcaEquipoFabricante"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.marcaEquipoFabricante}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={modeloEquipoAnfitrion}
                        cambiarEstado={cambiarModeloEquipoAnfitrion}
                        tipo="text"
                        label="Modelo del Equipo Anfitrión*"
                        placeholder="Ej: Las caracteristicas de dispositivo..."
                        name="modeloEquipoAnfitrion"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.modeloEquipoAnfitrion}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                ) : tipoDispositivo === "otro" ? (
                  <>
                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={nombreOtroDispositivo}
                        cambiarEstado={cambiarNombreOtroDispositivo}
                        tipo="text"
                        label="Nombre otro Dispositivo*"
                        placeholder="Ej: Apple"
                        name="nombreOtroDispositivo"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.nombreOtroDispositivo}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={marca}
                        cambiarEstado={cambiarMarca}
                        tipo="text"
                        label="Marca *"
                        placeholder="Ej: Apple"
                        name="marca"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.marca}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={nombreComercial}
                        cambiarEstado={cambiarNombreComercial}
                        tipo="text"
                        label="Nombre Comercial*"
                        placeholder="Ej: Serie 3"
                        name="nombreComercial"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.nombreComercial}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={modelo}
                        cambiarEstado={cambiarModelo}
                        tipo="text"
                        label="Modelo*"
                        placeholder="Ej: Once"
                        name="modelo"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.modelo}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={fabricante}
                        cambiarEstado={cambiarFabricante}
                        tipo="text"
                        label="Fabricante"
                        placeholder="Ej: Huawei"
                        name="fabricante"
                        leyendaError="Campo requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.fabricante}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <span />
                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={marca}
                        cambiarEstado={cambiarMarca}
                        tipo="text"
                        label="Marca*"
                        placeholder="Ej: Marca del Fabricante Dispositivo"
                        name="marca"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.marca}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={nombreComercial}
                        cambiarEstado={cambiarNombreComercial}
                        tipo="text"
                        label="Nombre Comercial*"
                        placeholder="Ej: Nombre Comercial del Dispositivo"
                        name="nombreComercial"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.nombreComercial}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={modelo}
                        cambiarEstado={cambiarModelo}
                        tipo="text"
                        label="Modelo*"
                        placeholder="Ej: Módelo que estipula el fabricante"
                        name="modelo"
                        leyendaError="Campo es requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.modelo}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 p-1">
                      <ComponenteInput
                        estado={fabricante}
                        cambiarEstado={cambiarFabricante}
                        tipo="text"
                        label="Fabricante"
                        placeholder="Ej: Fabricante de la Marca"
                        name="fabricante"
                        leyendaError="Campo requerido"
                        expresionRegular={expresiones.minimoCaracteres}
                        value={formValues?.fabricante}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}

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

                <br />
                <br />
                <div className="col-md-12 titulo-indicativo">
                  <h4 className="subtitle-form">TAC *</h4>
                  <p className="txt-obliga">
                    En esta sección podrá agregar múltiples TAC para el modelo
                    de terminal que está homologando. Tenga en cuenta que la CRC
                    validará los TAC registrados en la solicitud ante la base de
                    datos de la GSMA.
                  </p>
                  <br />
                  <PrimaryButton>
                    <a
                      className="aceptacionTAC"
                      onClick={() => cambiarEstadoModalTac(!estadoModalTac)}
                      style={{
                        color: "#FFFF",
                        font: "normal 600 15px 'Work Sans'",
                      }}
                    >
                      Agregar TAC
                    </a>
                  </PrimaryButton>
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
                      <td data-th="datos">{tac.campo}</td>
                      <td data-th="accion">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                      </td>
                    </tr>
                  </table>
                </div>
                
                <PrimaryButton
                  className="modalTac"
                  id="modaTac"
                  type="submit"
                  style={{
                    color: "#FFFF",
                    font: "normal 600 15px 'Work Sans'",
                  }}
                  onClick={() => cambiarEstadoModal2(!estadoModal2)}
                >
                  Agregar TAC*
                </PrimaryButton>
                      
                
                <br />
                <br />
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>TAC</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((elemento) => (
                      <tr>
                        <td>{elemento.id}</td>
                        <td>{elemento.minutos}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => seleccionarPais(elemento, "Editar")}
                          >
                            Editar
                          </button>{" "}
                          {"   "}
                          <button
                            className="btn btn-danger"
                            onClick={() =>
                              seleccionarPais(elemento, "Eliminar")
                            }
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Modal isOpen={modalEditar}>
                  <ModalHeader>
                    <div>
                      <h3>Editar País</h3>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        className="form-control"
                        readOnly
                        type="text"
                        name="id"
                        value={paisSeleccionado && paisSeleccionado.id}
                      />
                      <br />

                      <label>País</label>
                      <input
                        className="form-control"
                        type="text"
                        name="nombre"
                        value={paisSeleccionado && paisSeleccionado.nombre}
                        onChange={handleChangeTac}
                      />
                      <br />

                      <label>Minutos</label>
                      <input
                        className="form-control"
                        type="text"
                        name="minutos"
                        value={paisSeleccionado && paisSeleccionado.minutos}
                        onChange={handleChangeTac}
                      />
                      <br />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <button
                      className="btn btn-primary"
                      onClick={() => editar()}
                    >
                      Actualizar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => setModalEditar(false)}
                    >
                      Cancelar
                    </button>
                  </ModalFooter>
                </Modal>

                <Modal isOpen={modalEliminar}>
                  <ModalBody>
                    Estás Seguro que deseas eliminar el país{" "}
                    {paisSeleccionado && paisSeleccionado.nombre}
                  </ModalBody>
                  <ModalFooter>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminar()}
                    >
                      Sí
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setModalEliminar(false)}
                    >
                      No
                    </button>
                  </ModalFooter>
                </Modal>

                <Modal isOpen={modalInsertar}>
                  
                  <ModalBody>
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        className="form-control"
                        readOnly
                        type="text"
                        name="id"
                        value={data[data.length - 1].id + 1}
                      />
                      <br />

                      <label>País</label>
                      <input
                        className="form-control"
                        type="text"
                        name="nombre"
                        value={paisSeleccionado ? paisSeleccionado.nombre : ""}
                        onChange={handleChangeTac}
                      />
                      <br />

                      <label>Minutos</label>
                      <input
                        className="form-control"
                        type="text"
                        name="minutos"
                        value={paisSeleccionado ? paisSeleccionado.minutos : ""}
                        onChange={handleChangeTac}
                      />
                      <br />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <button
                      className="btn btn-primary"
                      onClick={() => insertar()}
                    >
                      Insertar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => setModalInsertar(false)}
                    >
                      Cancelar
                    </button>
                  </ModalFooter>
                </Modal>

                <div className="col-md-12 titulo-indicativo">
                  <h4 className="subtitle-form"> Archivos Adjuntos</h4>
                  <p className="txt-obliga">Por favor tenga en cuenta:</p>
                  <p className="txt-obliga">
                    ** El tamaño total de todos los archivos adjuntos no podrá
                    ser mayor a 30 MB.
                  </p>
                  <p className="txt-obliga">
                    ** Formatos admitidos para archivos adjuntos: Pdf, Doc,
                    Docx, Xls, Xlsx, Gif, Png, Jpeg, Tif, Tiff, Zip y Rar
                  </p>
                  <br />

                  <div>
                    {/*<DragArea />*/}
                    <UploadDocument />
                  </div>
                  <br />
                </div>

                <br />

                <div className="contenido-verificacion">
                  <div className="col-md-12 titulo-indicativo">
                    <h4 className="subtitle-form titulo-verificacion">
                      Aviso de Términos y Autorización para el Tratamiento de
                      Datos Personales*
                    </h4>
                  </div>

                  <br />

                  <ContenedorTerminos>
                    <label className="txt-terminos">
                      <input
                        className="check-terminos"
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
                    </label>

                    <label className="txt-terminos">
                      <input
                        className="check-terminos"
                        type="checkbox"
                        name="autorizaDatos"
                        id="autorizaDatos"
                        checked={autorizaDatos}
                        onChange={onChangeDatos}
                      />
                      <a
                        className="aceptacionFormulario"
                        onClick={() =>
                          cambiarEstadoModalDatos(!estadoModalDatos)
                        }
                      >
                        Autorizo el tratamiento de datos personales
                      </a>
                    </label>
                  </ContenedorTerminos>
                  {formularioValido === false && (
                    <MensajeError>
                      <p>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <b>Error: </b> Por favor rellena el formulario
                        correctamente.
                      </p>
                    </MensajeError>
                  )}
                  <br />
                  <br />
                  <h4 className="subtitle-form titulo-verificacion">
                    Verificación de Seguridad *
                  </h4>
                  <br />
                  <ReCAPTCHA
                    ref={captcha}
                    sitekey="6Lc9VDIeAAAAAHHQA1wEjx1FKlTy9uWIrZKGwwvN"
                    onChange={onChange}
                    className="recaptcha recaptcha-formulario"
                  />

                  <br />
                  <br />
                  <div className="boton-registro">
                    <RegisterButton
                      id="envio"
                      type="submit"
                      onClick={() => cambiarEstadoModal(!estadoModal)}
                    >
                      REGISTRAR SOLICITUD
                    </RegisterButton>
                  </div>
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
              </Formulario>

              {/*
              isFormVisible ? (<></>) : ( <View data="" /> )
            */}
            </>
          </div>

          {/* 
          <div>
            <h4>{persona.campo}</h4>
            <h4>{tipoId.campo}</h4>
            <h4>Numero de Identificación: {identificacion.campo}</h4>
            <h4>Primer Nombre: {nombre.campo}</h4>
            <h4>Segundo Nombre: {nombre2.campo}</h4>
            <h4>Primer Apellido:{apellido.campo}</h4>
            <h4>Segundo Apellido: {apellido2.campo}</h4>
            <h4>{nit.campo}</h4>
            <h4>{nombreEmpresa.campo}</h4>
            <h4>{nombreRLoApoderado.campo}</h4>
            <h4>{digitoVerificacion.campo}</h4>
            <h4>{pais.campo}</h4>
            <h4>{departamento.campo}</h4>
            <h4>{municipio.campo}</h4>
            <h4>Dirección: {direccion.campo}</h4>
            <h4>Correo Electronico: {correo.campo}</h4>
            <h4>Número de Contacto: {telefono.campo}</h4>
            <h4>{nombreOtroDispositivo.campo}</h4>
            <h4>Marca del Dispositivo: {marca.campo}</h4>
            <h4>Nombre Comercial del Dispositivo: {nombreComercial.campo}</h4>
            <h4>Modelo del Dispositivo: {modelo.campo}</h4>
            <h4>Nombre Fabricante del Dispositivo:{fabricante.campo}</h4>
            <h4>{casoUsoDispositivo.campo}</h4>
            <h4>{marcaEquipoAnfitrion.campo}</h4>
            <h4>{modeloEquipoAnfitrion.campo}</h4>
          </div>
            */}
          <div className="col-md-1"></div>

          <div className="col-md-3">
            <aside className="aside">
              <CardTutoriales />
              <CardDudas />

              <CalificacionExperiencia />

              <BotonInicio name="volver a inicio del tramite" />
            </aside>
          </div>
        </div>
        {/* END CONTAINER */}
      </div>
      <CalificaExperienciaFooter />
      <Footer />
      <FooterGov />

      {/* MODAL AGREGAR TAC */}
      <ModalStyled
        estado={estadoModalTac}
        cambiarEstado={cambiarEstadoModalTac}
        titulo="Agregar TAC"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"start"}
        padding={"10px"}
        width={"400px"}
        min-height={"400px"}
      >
        <Contenido>
          <div>
            <h1 style={{ textAlign: "left" }}>TAC</h1>
          </div>
          <div>
            <ComponenteInput
              estado={tac}
              cambiarEstado={setTac}
              tipo="text"
              label="Número de TAC"
              placeholder="Ej: 0124575875"
              name="tac"
              leyendaError="Solo números, minimo 8 y máximo 10"
              expresionRegular={expresiones.validaTac}
            />
          </div>
          <br />
          <ContenedorBotones>
            <AceptButton onClick={() => cambiarEstadoModalTac(!estadoModalTac)}>
              ACEPTAR
            </AceptButton>
            <br />
            <CancelButton
              onClick={() => cambiarEstadoModalTac(!estadoModalTac)}
            >
              CANCELAR
            </CancelButton>
          </ContenedorBotones>
        </Contenido>
      </ModalStyled>

      {/* MODAL DE ACEPTAR FORMULARIO */}
      <ModalStyled
        estado={estadoModal}
        cambiarEstado={cambiarEstadoModal}
        titulo=""
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"start"}
        padding={"10px"}
        width={"700px"}
        min-height={"700px"}
      >
        {!usuarioValido && (
          <Contenido>
            <div>
              <h1>Confirmación</h1>
            </div>
            <div>
              <h6>¿Estas seguro de registrar la información?</h6>
            </div>
            <br />
            <ContenedorBotones>
              <PrimaryButton type="submit">
                <Link to="/ProcesoSolicitud" className="irTramite">
                  ACEPTAR
                </Link>
              </PrimaryButton>
              <br />
              <SecondaryButton onClick={() => cambiarEstadoModal(!estadoModal)}>
                CANCELAR
              </SecondaryButton>
            </ContenedorBotones>
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
        width={"650px"}
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
                className="link-modal"
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


      <ModalStyled
        estado={estadoModal2}
        cambiarEstado={cambiarEstadoModal2}
        titulo="Agregar TAC"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"start"}
        padding={"10px"}
        width={"400px"}
        min-height={"400px"}
      >
        <Contenido>
          <br/>
          <div>
            <h6>Corresponde a los 8 primeros dígitos del IMEI</h6>
          </div>
          <br />
          <div className="col-md-12 p-1">
            <ComponenteInput
              estado={nombre}
              cambiarEstado={cambiarNombre}
              tipo="text"
              label="Número de TAC*"
              placeholder="Ej: 03017419"
              name="minutos"
              leyendaError="Campo requerido, minimo y maximo 8 números"
              expresionRegular={expresiones.validaTac}
              //value={formValues?.validaTac}*
              //onChange={handleChange}
              value={paisSeleccionado ? paisSeleccionado.minutos : ""}
              onChange={handleChangeTac}
            />
          </div>
          <ContenedorBotones>
            <PrimaryButton 
              type="submit"
              onClick={() => insertar()}
            >
              ACEPTAR
            </PrimaryButton>
            <br />
            <SecondaryButton 
              onClick={() => cambiarEstadoModal2(!estadoModal2)}
            >
              CANCELAR
            </SecondaryButton>
          </ContenedorBotones>
            
            <div className="form-group">

             <label>Minutos</label>
              <input
                className="form-control-tac"
                type="text"
                name="minutos"
                value={paisSeleccionado ? paisSeleccionado.minutos : ""}
                onChange={handleChangeTac}
              />
              <br />
            </div>
            
          </Contenido>
        </ModalStyled>
    </>
  );
};

export default FormularioSolicitud;

const Boton = styled.button`
  border-radius: 20px;
  border: 2px solid #1766dc;
  background: #1766dc;
  color: #ffff;
  cursor: pointer;
  display: block;
  font: normal bold 15px "Works Sans", sans-serif;
  padding: 15px 10px;
  transition: 0.3s ease all;
  width: 30%;

  &:hover {
    background: #004884;
    border-color: #004884;
  }
`;

const PrimaryButton = styled(Boton)`
  background-color: #1766dc;
  color: #ffff;
  width: 20%;
  height: auto;
  padding: 10px 10px 10px 10px;
`;

const RegisterButton = styled(Boton)`
  background-color: #1766dc;
  color: #ffff;
  width: 27%;
  height: auto;
  padding: 10px 10px 10px 10px;
`;

const SecondaryButton = styled(Boton)`
  background-color: #ffff;
  color: #1766dc;
  width: 30%;
  height: auto;
  padding: 10px 10px 10px 10px;

  &:hover {
    background: #004884;
    color: #ffff;
  }
`;

const AceptButton = styled(Boton)`
  background-color: #1766dc;
  color: #ffff;
  width: 40%;
  height: auto;
  padding: 10px 10px 10px 10px;
`;

const CancelButton = styled(Boton)`
  background-color: #ffff;
  color: #1766dc;
  width: 40%;
  height: auto;
  padding: 10px 10px 10px 10px;

  &:hover {
    background: #004884;
    color: #ffff;
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

const Contenido = styled.div`
  display: block;
  padding: 20px;
  flex-direction: row;
  max-height: calc(100vh - 210px);
  justify-content: center;
  overflow-y: auto;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  h1 {
    color: #13386d;
    font: normal 600 18px/10px "Montserrat", sans-serif;
    line-height: 1.5;
    margin-bottom: 10px;
    text-align: center;
  }

  h6 {
    color: #4b4b4b;
    font: normal normal 1rem/10px "Works Sans", sans-serif;
    margin: 0;
    text-align: center;
    line-height: 1.5;
  }

  a {
    color: #3366cc;
    font: normal 420 15px/10px "Works Sans", sans-serif;
  }
`;

const ContenedorBotones = styled.div`
  padding: 0px;
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 2px;
`;
