import React, { useState } from "react";
// Libreria validación formulario
import { Formik, Form, ErrorMessage } from "formik";
// Libreria complemento para validación y estilos
import * as Yup from "yup";

import Select from "react-select";

//import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import FooterGov from "../../../components/FooterGov/FooterGov";

import Header from "../../../components/Header/Header";
import Navegacion from "../../../components/Navigation/Navegacion";
import NavProceso from "../../../components/NavProceso/NavProceso";

import BotonInicio from "../../../components/Botones/BotonInicio/BotonInicio";
import CardTutoriales from "../../../components/CardTutoriales/CardTutoriales";
import CardDudas from "../../../components/CardDudas/CardDudas";

import CalificacionExperiencia from "../../../components/CalificacionExperiencia/CalificacionExperiencia";

// Style
import styled from "styled-components";

// Libreria para subir archivos
import { useFileUpload } from "use-file-upload";

import "./Prueba.css";

// Importar estilos de campos
import {
  PageWrapper,
  Title,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
  CodeWrapper,
} from "./styles";

import Modals from "./Modals";
import Dragdrop from "../../../components/UploadDocuments/Dragdrop";

// Validación para campos
const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Your name is too short")
    .max(5, "Max 5 letras")
    .required("Please enter your full name")
    .matches(/^[aA-zZs]+$/, "solo se aceptan letras"),
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
});

// Se importo import Select from 'react-select'
// Se crea componente select con opciones

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const MyComponent = () => (
  <Select
    data-toggle="tooltip"
    title="Seleccionar país de residencia"
    placeholder="Colombia"
    options={options}
  />
);

const Prueba = () => {
  // Obtener valores de campo
  const [formValues, setFormValues] = useState();

  const [file, selectFile] = useFileUpload();
  const [file2, selectFile2] = useFileUpload();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [formularioEnviado, setFormularioEnviado] = useState(false);

  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-8 p-0">
            <Navegacion
              inicio="Inicio"
              pagina="Solicitud de Homologación"
              paginaActual="Solicitud de Homologación de Equipos"
            />

            <NavProceso />
            <br />
            <Modals />
            <br />
            {/* Select dinamico libreria */}
            <Select options={options} />
            <br />

            {/* CARGA BASICA DE ARCHIVOS */}
          <StyleDragArea>
              <button
                onChange={() => {
                  // Single File Upload accepts only images
                  selectFile(
                    {
                      accept:
                        "image/*, application/pdf,application/vnd.ms-excel",
                    },
                    ({ source, name, size, file }) => {
                      // file - is the raw File Object
                      console.log({ source, name, size, file });
                      // Todo: Upload to cloud.
                    }
                  );
                }}
              >
                + Etiqueta del equipo*
              </button>

              <br />
              <br />

              <button
                onClick={() => {
                  // Single File Upload accepts only images
                  selectFile2(
                    {
                      accept:
                        "image/*, application/pdf,application/vnd.ms-excel",
                    },
                    ({ source, name, size, file }) => {
                      // file - is the raw File Object
                      console.log({ source, name, size, file });
                      // Todo: Upload to cloud.
                    }
                  );
                }}
              >
                + Certificado de conformidad de normas técnias (opcional)
              </button>

              
                  {/* <img src={file.source} alt="preview" /> */}
                  <div className="tabla">
                    <p className="titulo-tabla">Archivos para Homologación</p>
                    <table className="rwd-table">
                      <tr>
                        <th>Nombre del Archivo</th>
                        <th>Archivo Cargado </th>
                        <th>Accion</th>
                      </tr>
                      <tr>
                        <td data-th="etiqueta">Etiqueta del equipo *</td>
                        <td data-th="archivo">
                           { file ? (<span>{file.name}</span>) : (<span>Sin Datos</span>)}
                        </td>
                        <td data-tj="accion">ELIMINAR</td>
                      </tr>
                      <tr>
                        <td data-th="etiqueta">
                          Certificado de conformidad de normas técnicas
                          (opcional)
                        </td>
                        <td data-th="archivo">
                          { file2 ? (<span>{file2.name}</span>) : (<span>Sin Datos</span>)}
                        </td>
                        <td data-tj="accion">ELIMINAR</td>
                      </tr>
                    </table>
                  </div>
                </StyleDragArea>

            <br/>
              
            <Dragdrop />

            <br/>

            <Formik
              initialValues={{
                fullname: "",
                email: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                console.log(values);
                setFormValues(values);

                const timeOut = setTimeout(() => {
                  actions.setSubmitting(false);

                  clearTimeout(timeOut);
                }, 1000);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleSubmit,
                isSubmitting,
                isValidating,
                isValid,
              }) => {
                return (
                  <>
                    <h3 className="title-form">
                      Solicitud de Homologación de Equipos Terminales Móviles
                    </h3>

                    <div className="titulo-indicativo">
                      <h4 className="subtitle-form">Datos de identificación</h4>
                      <p className="txt-obliga">*Campos obligatorios</p>
                    </div>

                    <div className="col-md-6 p-1">
                      <Label htmlFor="fullname">
                        Fullname
                        <Input
                          type="text"
                          name="fullname"
                          autoCorrect="off"
                          autoComplete="name"
                          placeholder="your fullname"
                          valid={touched.fullname && !errors.fullname}
                          error={touched.fullname && errors.fullname}
                        />
                      </Label>
                      {errors.fullname && touched.fullname && (
                        <StyledInlineErrorMessage>
                          {errors.fullname}
                        </StyledInlineErrorMessage>
                      )}
                    </div>

                    <div className="col-md-6 p-1">
                      <Label htmlFor="email">
                        Email
                        <Input
                          type="email"
                          name="email"
                          autoCapitalize="off"
                          autoCorrect="off"
                          autoComplete="email"
                          placeholder="your email"
                          valid={touched.email && !errors.email}
                          error={touched.email && errors.email}
                        />
                      </Label>
                      <ErrorMessage name="email">
                        {(msg) => (
                          <StyledInlineErrorMessage>
                            {msg}
                          </StyledInlineErrorMessage>
                        )}
                      </ErrorMessage>
                    </div>

                    <Submit type="submit" disabled={!isValid || isSubmitting}>
                      {isSubmitting ? `Submiting...` : `Registrar`}
                    </Submit>
                  </>
                );
              }}
            </Formik>
          </div>

          <div className="col-md-1 p-0"></div>
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
      </div>
      <Footer />
      <FooterGov />
    </>
  );
};

export default Prueba;

/*
<h1>Basic</h1>

            *Contenedor Formik del formulario
            <Formik
              //Valores Iniciales Formik
              initialValues={
                {
                  nombre: '',
                  correo: ''
                }
              }
              // Validaciones Formik
              validate={(valores) => {
                let errores = {}

                if(!valores.nombre) {
                  errores.nombre = 'Campo nombre es obligatorio'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                  errores.nombre = 'El nombre solo puede contener letras y espacios'
                }

                if(!valores.correo) {
                  errores.correo = 'Campo correo es obligatorio'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                  errores.correo = 'No cumple con los parametros para un email@email.co'
                }

                if(!valores.pais) {
                  errores.pais = 'Campo pais es obligatorio'
                } 

                return errores
              }}

              // Envío formulario Formik
              onSubmit = {(valores, {resetForm}) => {
                resetForm()
                console.log('Formulario enviado')
                setFormularioEnviado(true)
                setTimeout(() => setFormularioEnviado(false), 3000)
                //console.log(valores)
                console.log(valores.pais)
                
              }}
            >
              
              Estructura render props (destructuramos): se renderiza este formulario. Al tenerlo en una funcion se puede agregar valores de formik
              Funcion que va dentro del componente Formik y nos permite inyectar informacion como los errores
              
              {({errors}) => ( 
                <Form className="formulario">
                  console.log(errors)
                  <div>
                    <label htmlFor="nombre">Nombre</label>
                    <Field
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="John Doe"
                    />
                    <ErrorMessage name="nombre" component={() => (
                        <div className="error">{errors.nombre}</div>
                      )} 
                    />
                    
                  </div>
                  <div>
                    <label htmlFor="correo">Correo</label>
                    <Field
                      type="text"
                      id="correo"
                      name="correo"
                      placeholder="correo@correo.com"
                    />
                    <ErrorMessage name="correo" component={() => (
                        <div className="error">{errors.correo}</div>
                      )} 
                    />
                  </div>
                  
                  <div>
                    <Field name="pais" as="select">
                      <option value="arg">Argentina</option>
                      <option value="br">Brasil</option>
                      <option value="col">Colombia</option>
                      <option value="mx">Mexico</option>
                    </Field>
                  </div>
                  
                  <div>
                    <label>
                      <Field type="radio" name="sexo" value="hombre" /> Hombre
                    </label>
                    <label>
                      <Field type="radio" name="sexo" value="mujer" /> Mujer
                    </label>
                  </div>    
                 
                  <div>
                    <Field name="mensaje" as="textarea" placeholder="Mensaje" />
                  </div>
                
                  <button type="submit">Enviar</button>
                  {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
                </Form>
              )}
              
              {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => ( //Estructura render props (destructuramos): se renderiza este formulario. Al tenerlo en una funcion se puede agregar valores de formik
                <form className="formulario" onSubmit={handleSubmit}>
                  console.log(errors)
                  <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="John Doe"
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
                  </div>
                  <div>
                    <label htmlFor="correo">Correo</label>
                    <input
                      type="text"
                      id="correo"
                      name="correo"
                      placeholder="correo@correo.com"
                      value={values.correo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
                  </div>
                  <button type="submit">Enviar</button>
                  {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
                </form>
              )}
              }
            </Formik>
*/

//Estilos campos formularios y validaciones estilos
/*
const colores = {
  borde: "#3366CC",
  error: "#A80521",
  exito: "#3366CC",
};

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  font: normal 500 16px Work Sans;
  line-height: 1.5;
  margin: 0;
  color: #4B4B4B;
  padding: padding: 22px 0px 0px 0px;
  cursor: pointer;

  ${(props) =>
    props.valido === "false" &&
    css`
      color: ${colores.error};
    `}
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
  gap: 20px;
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 35px;
  line-height: 35px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 1px solid #bababa;

  &:focus {
    border: 1px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 1px solid #bababa;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      border: 1px solid ${colores.error} !important;
    `}
`;

const InputDisabled = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 35px;
  line-height: 35px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 1px solid #bababa;

  &:focus {
    border: 1px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 1px solid #bababa;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      border: 1px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.p`
  display: none;
  font-size: 12px;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;

  ${(props) =>
    props.valido === "true" &&
    css`
      display: none;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
    `}
`;

const ContenedorTerminos = styled.div`
  grid-column: span 2;

  input {
    margin-right: 10px;
  }

  @media (max-width: 800px) {
    grid-column: span1;
  }
`;

const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;

  @media (max-width: 800px) {
    grid-column: span1;
  }
`;

const Boton = styled.button`
  display: flex;
  background-color: #3366cc;
  border: 1.5px solid #3366cc;
  border-radius: 30px;
  color: #ffff;
  font: normal bold 15px "Works Sans", sans-serif;
  margin: 0px 0px 100px 0px;
  padding: 15px 5px 15px 5px;
  text-transform: uppercase;
  white-space: pre-line;
  width: 30%;
  /*
  display: flex;
  height: 40px;
  line-height: 30px;
  width: 30%;
  background: #004884;
  color: #fff;
  font: normal 600 16px/1.55px "Work Sans", sans-serift;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: .1s ease all;
  */
/*
  a {
    color: #ffff;
    font: normal bold 15px/14px "Works Sans", sans-serif;
  }

  &:hover {
    background-color: #004884;
    border-color: #004884;
  }
`;

const MensajeExito = styled.p`
  width: 100%;
  height: 45%;
  text-align: center;
  line-height: 45px;
  background: #069169;
  padding: 10px 0px 0px 0px;
  margin: 12px 0px 0px 0px;
  border-radius: 3px;
  grid-column: span 2;

  p {
    padding: 10px;
    text-align: center;
    color: #ffff;
  }
  b {
    margin-left: 10px;
  }
`;

const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  background: ${colores.error};
  padding: 0px 5px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    padding: 2px 0px 2px 0px;
    text-align: center;
    color: #ffff;
  }
  b {
    margin-left: 10px;
  }
`;

const Select = styled.select`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 35px;
  line-height: 35px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 1px solid #bababa;

  &:focus {
    border: 1px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 1px solid #bababa;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      border: 1px solid ${colores.error} !important;
    `}
`;
*/

const StyleDragArea = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .file-upload-content {
    display: none;
    text-align: center;
  }
  .file-upload-input {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }
  .image-upload-wrap {
    position: relative;
    height: 100px;
    border: 2px dashed #3366cc;
    margin: 0px;

    h3 {
      font: normal bold 1rem/30px "Work Sans", san serif;
      color: #3366cc;
    }

    svg {
      fill: #3366cc;
      float: left;
    }
  }
  .image-upload-wrap:hover {
    background-color: #3366cc;
    border: 2px solid #3366cc;

    h3 {
      color: #ffff;
    }

    svg {
      fill: #ffff;
    }
  }
  .text-information {
    margin-top: 30px;
    text-align: left;
  }

  .image-upload-wrap2 {
    background-color: #3366cc;
    position: relative;
    height: 100px;
    border: 2px solid #3366cc;
    margin: 0px;

    h3 {
      font: normal bold 1rem/30px "Work Sans", san serif;
      color: #ffff;
    }

    svg {
      fill: #ffff;
      float: left;
    }
  }
  .image-upload-wrap2:hover {
    background-color: #ffff;

    border: 2px dashed #3366cc;

    h3 {
      color: #3366cc;
    }

    svg {
      fill: #3366cc;
    }
  }
`;
