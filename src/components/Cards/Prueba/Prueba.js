import React, { useState } from "react";
//import { render } from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import * as Yup from "yup";
//import { MoreResources, DisplayFormikState } from "./helper";

//import styled, { css } from "styled-components";

//import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import FooterGov from "../../FooterGov/FooterGov";
import Header from "../../Header/Header";
import Navegacion from "../../Navigation/Navegacion";
import NavProceso from "../../NavProceso/NavProceso";

import BotonInicio from "../../Botones/BotonInicio/BotonInicio";
import BotonTutoriales from "../../Botones/BotonTutoriales/BotonTutoriales";
import BotonDeDudas from "../../Botones/BotonDeDudas/BotonDeDudas";

import CalificacionExperiencia from "../CalificacionExperiencia/CalificacionExperiencia";

import "./Prueba.css";

const Prueba = () => {
  
  const [formularioEnviado, setFormularioEnviado] = useState(false)

  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-8 p-0">
            <Navegacion />
            <NavProceso />
            <h1>Basic</h1>

            {/*Contenedor Formik del formulario*/}
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
              {/*
              Estructura render props (destructuramos): se renderiza este formulario. Al tenerlo en una funcion se puede agregar valores de formik
              Funcion que va dentro del componente Formik y nos permite inyectar informacion como los errores
              */}
              {({errors}) => ( 
                <Form className="formulario">
                  {/*console.log(errors)*/}
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
              {/*
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
              */}
            </Formik>
          </div>

          <div className="col-md-1 p-0"></div>
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
      </div>
      <Footer />
      <FooterGov />
    </>
  );
};

export default Prueba;

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