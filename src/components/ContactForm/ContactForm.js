import React from "react";
import { useForm } from "../../hooks/useForm";
import Message from '../../components/Message/Message'
import "./ContactForm.scss"

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: ""
};

const validationsForm = (form) => {
    let errors = {};

    //Expresiones regulares
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/; //recibe hasta 255 caracteres
    let regexTac =  /^\d{9,10}$/;

    //Validación de inputs es mejor hacerlas individual
    //Al realizarla con if anidados apenas detecte que pase una se sale
    if(!form.name.trim()) {
        errors.name = "El campo Nombre es requerido"
    } else if(!regexName.test(form.name.trim())) {
        errors.name = "El campo Nombre sólo acepta letras y espacios en blanco"
    }

    if(!form.email.trim()) {
        errors.email = "El campo Email es requerido"
    } else if(!regexEmail.test(form.email.trim())) {
        errors.email = "El campo no cumple con las caracteristicas de un email"
    }

    if(!form.subject.trim()) {
        errors.subject = "El campo Asunto es requerido"
    }

    if(!form.comments.trim()) {
        errors.regexComments = "El campo Comentario es requerido"
    } else if(!regexComments.test(form.comments.trim())) {
        errors.comments = "El campo comentarios solo acepta 250 caracteres"
    }

    return errors;
};

// Styles of errors
let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="container">
    <div className="col-md-8">
      <h3 className="title-form">
        Formulario de Solicitud de Homologación de Equipos Terminales Móviles
      </h3>
      <br />
      <br />
      <form onSubmit={handleSubmit} className="row">
        
        <div className="row">
          <div className="col-6">
            <label>Tipo de Persona *</label>
            <input
              type="text"
              name="name"
              placeholder="Ej: Pedro"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.name}
              required
            />
            {
                errors.name && <p style={styles}>{errors.name}</p>
            }
          </div>
          <div className="col-6">
            <label>Primer Apellido *</label>
            <input
              type="text"
              name="lastname"
              placeholder="Ej: Rodriguez"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.lastname}
              required
            />
            {
                errors.lastname && <p style={styles}>{errors.lastname}</p>
            }
          </div>
        </div><br/>
        <div className="row">
          <div className="col-md-6">
            <label>Correo Electrónico *</label>
            <input
              type="email"
              name="email"
              placeholder="Ej: pedro.rodriguez@gmail.com"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
              required
            />
            {
                errors.email && <p style={styles}>{errors.email}</p>
            }
          </div>
          <div className="col-md-6">
            <label>Tipo de Persona *</label>
            <input
              type="text"
              name="subject"
              placeholder="Ej: Calle 1 # 23- 45"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.subject}
              required
            />
            {
                errors.subject && <p style={styles}>{errors.subject}</p>
            }
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col">
            <textarea
              type="text-area"
              name="comments"
              cols="50"
              rows="5"
              placeholder="Ej: Escribe tus comentarios..."
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.comments}
              required
            >
            {
                errors.comments && <p style={styles}>{errors.comments}</p>
            }
            </textarea>
          </div>
        </div>
        <div className="box">
            <input type="submit" value="Enviar" />
        </div>
        
      </form>
      {response && (
          <Message msg="Los datos han sido enviados" bgColor="#198754" />
      )}
      <br/><br/><br/><br/><br/><br/>
    </div>
    </div>
  );
};

export default ContactForm;
