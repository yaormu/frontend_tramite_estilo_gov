import React, { useState, useRef } from "react";
import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  Formulario,
  Label,
  Input,
  GrupoInput,
  LeyendaError,
} from "../../FormularioSolicitud/elementos/Formularios";

import "./PruebaTramite.scss"

const PruebaTramite = () => {
  return (
    <div 
      className="container">
      <div className="row">
        
        <div className="col-12">
          <FormularioNormal />
        </div>
        

        <br/><br/>
        <hr/>
        <br/><br/>
        
        <div className="col-12">
          <FormularioSimplificado />
        </div>
        
        <br/><br/>
        <hr/>
        <br/><br/>

        <div className="col-12">
          <Notas />
        </div>
        
        <br/><br/>
        <hr/>
        <br/><br/>

        <div className="col-12">
          <FormularioPrueba />
        </div>
        
        <br/><br/>
        <hr/>
        <br/><br/>
        
        <div className="col-12">
          <Basic />
        </div>
        
        <br/><br/>
        <hr/>
        <br/><br/>
        
        <div className="col-12">
          <BasicFormik />
        </div>
        <div><h2>Simple formulario con formik</h2><SignupForm /></div>
        
        <br/><br/>
        <hr/>
        <br/><br/>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PruebaTramite;

//FORMA NORMAL OBTENER DATOS FORMULARIOS

const FormularioNormal = () => {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <main className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>FORMULARIO NORMAL CON STYLE</h1>
          <Formulario onSubmit={handleSubmit}>
            <GrupoInput>
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ej. paco"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} //Elemento input y textarea
              />
            </GrupoInput>
            <LeyendaError>
              Este campo es requerido, y solo acepta números
            </LeyendaError>

            <br />

            <p>Elige tu sabor JS favorito</p>
            <br />
            <input
              type="radio"
              id="vanilla"
              name="sabor"
              value="vanilla"
              onChange={(e) => setSabor(e.target.value)}
              defaultChecked
            />
            <Label htmlFor="vanilla">Vanilla</Label>
            <input
              type="radio"
              id="react"
              name="sabor"
              value="react"
              onChange={(e) => setSabor(e.target.value)}
            />
            <Label htmlFor="react">React</Label>
            <input
              type="radio"
              id="angular"
              name="sabor"
              value="angular"
              onChange={(e) => setSabor(e.target.value)}
            />
            <Label htmlFor="angular">Angular</Label>
            <input
              type="radio"
              id="vue"
              name="sabor"
              value="vue"
              onChange={(e) => setSabor(e.target.value)}
            />
            <Label htmlFor="vue">Vue</Label>

            <br />

            <GrupoInput>
              <p>Elige tu lenguaje de programación favorito</p>

              <select
                name="lenguaje"
                onChange={(e) => setLenguaje(e.target.value)}
                defaultValue=""
              >
                <option value="">---</option>
                <option value="js">JavaScript</option>
                <option value="py">Python</option>
                <option value="java">Java</option>
                <option value="c">C++</option>
                <option value="php">PHP</option>
                <option value="rust">Rust</option>
                <option value="go">Go</option>
                <option value="sw">Swift</option>
              </select>
            </GrupoInput>

            <br />

            <Label htmlFor="terminos">Acepto términos y condiciones</Label>
            <Input
              type="checkbox"
              id="terminos"
              name="terminos"
              onChange={(e) => setTerminos(e.target.checked)}
            />

            <br />

            <input type="submit" />
          </Formulario>
        </div>
      </div>
    </main>
  );
};

//FORMA SIMPLIFICADA OBTENER DATOS FORMULARIOS

const FormularioSimplificado = () => {
  //Solo tendremos una variable de estado de objeto vacia
  const [form, setForm] = useState({});

  //Asignar a los elementos seleccionados el evento, para campos values
  const handleChange = (e) => {
    //Invocamos funcion de actualizacion
    setForm({
      ...form, //El objeto que trae el formulario, se mezcla con lo que ingresa
      [e.target.name]: e.target.value, //Actualizar los campos con nuevo valor
    });
  };

  //Asignar a los elementos seleccionados el evento, para campos checkend
  const handleChecked = (e) => {
    //Invocamos funcion de actualizacion
    setForm({
      ...form,
      [e.target.name]: e.target.checked, //Actualizar los campos con nuevo valor boolean
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <main className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Formulario Simplificado</h1>
          <Formulario onSubmit={handleSubmit}>
            <GrupoInput>
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ej. paco"
                value={form.nombre} //Coloar form.nombre ya que se vincula la variable, y los valores ahora estan en un objeto, aplicar a cada caja de texto si se tiene
                onChange={handleChange} //Elemento input y textarea
              />
            </GrupoInput>
            <LeyendaError>
              Este campo es requerido, y solo acepta números
            </LeyendaError>

            <br />

            <p>Elige tu sabor JS favorito</p>
            <br />
            <input
              type="radio"
              id="vanilla"
              name="sabor"
              value="vanilla"
              onChange={handleChange}
              defaultChecked
            />
            <Label htmlFor="vanilla">Vanilla</Label>
            <input
              type="radio"
              id="react"
              name="sabor"
              value="react"
              onChange={handleChange}
            />
            <Label htmlFor="react">React</Label>
            <input
              type="radio"
              id="angular"
              name="sabor"
              value="angular"
              onChange={handleChange}
            />
            <Label htmlFor="angular">Angular</Label>
            <input
              type="radio"
              id="vue"
              name="sabor"
              value="vue"
              onChange={handleChange}
            />
            <Label htmlFor="vue">Vue</Label>

            <br />

            <GrupoInput>
              <p>Elige tu lenguaje de programación favorito</p>

              <select name="lenguaje" onChange={handleChange} defaultValue="">
                <option value="">---</option>
                <option value="js">JavaScript</option>
                <option value="py">Python</option>
                <option value="java">Java</option>
                <option value="c">C++</option>
                <option value="php">PHP</option>
                <option value="rust">Rust</option>
                <option value="go">Go</option>
                <option value="sw">Swift</option>
              </select>
            </GrupoInput>

            <br />

            <Label htmlFor="terminos">Acepto términos y condiciones</Label>
            <Input
              type="checkbox"
              id="terminos"
              name="terminos"
              onChange={handleChecked}
            />

            <br />

            <input type="submit" />
          </Formulario>
        </div>
      </div>
    </main>
  );
};

// PRUEBA PARA AGREGAR TAC

const Notas = () => {
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleClick = (event) => {
    console.log("crear nota");
    console.log(newNote);
  };

  return (
    <>
      <div className="col-md-6">
        <h1>NOTES PRUEBA MIDUDEV PARA TAC</h1>
      </div>
      <div>
        <input type="text" onChange={handleChange} value={newNote} />
        <button onClick={handleClick}>Agregar TAC</button>
      </div>
      <ul>
        <li>{newNote}</li>
        <li></li>
      </ul>
    </>
  );
};

// PRUEBA FORMULARIO ENVIO DATOS
//import { useRef } from "react";

const FormularioPrueba = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    priceUnitary: "",
    size: "",
    description: "",
  });

  const inputFileRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    console.log(inputFileRef.current.files);
  };

  return (
    <>
      <form id="formu" onSubmit={handleSubmit} className="row">
        <h1>FORMULARIO PRUEBA ENVIO DE DATOS</h1>
        <div className="col-md-6">
          <label>Name</label>
          <input
            placeholder="Text input"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label>Size</label>
          <input
            type="number"
            placeholder="Text input"
            name="size"
            value={formValues.size}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label>Price Unitary</label>
          <input
            type="number"
            placeholder="Text input"
            name="priceUnitary"
            value={formValues.priceUnitary}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label>Description</label>
          <input
            placeholder="Text input"
            name="description"
            value={formValues.description}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label>File / Image</label>
          <input type="file" ref={inputFileRef} />
        </div>
        <button type="submit" className="color-primary">
          Save
        </button>
      </form>
    </>
  );
};

//EJEMPLO USO VALIDACION CON LIBRERIA FORMIK PARA FORMULARIO
/*
La esencia
Formik realiza un seguimiento del estado de su formulario y luego lo expone junto con algunos métodos 
reutilizables y controladores de eventos ( handleChange, handleBlury handleSubmit) a su formulario a través
de props. handleChangey handleBlurfuncionan exactamente como se esperaba: usan un atributo nameo idpara 
determinar qué campo actualizar.
*/


const Basic = () => (
  <div>
    <h1>EJEMPLO UNO VALIDACION FORMULARIO CON FORMIK LO ESENCIAL</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

/*
Reducción de repetitivo
El código anterior es muy explícito acerca de exactamente lo que está haciendo Formik. 
onChange-> handleChange, onBlur-> handleBlur, y así sucesivamente. Sin embargo, para ahorrarle tiempo, 
Formik viene con algunos componentes adicionales para hacer la vida más fácil y menos detallada: 
<Form />, <Field />y <ErrorMessage />. 
Usan el contexto de React para conectarse con el <Formik />estado o los métodos principales
*/

const BasicFormik = () => (
  <div>
    <h1>VALIDACION FORMULARIO FORMIK REDUCIENDO CODIGO REPETITIVO</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

// PRUEBA VALIDACION FORMIK CON YUP
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};



const Buscador = () => {

  const [search, setSearch] = useState(String)

  let redir = () => {
      window.location.href = `/search?s=${search}`;
  }

  return(

          <form onSubmit={e => e.preventDefault() || redir()}>
              <input 
                  className="form-control mr-sm-2" 
                  type="search" 
                  placeholder="Buscar" 
                  aria-label="Search" 
                  width='100%'
                  onChange={e => setSearch(e.target.value)}        
              />
          </form>

  )

}