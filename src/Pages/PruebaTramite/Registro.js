import React from "react";
import { render } from "sass";

const textoRegex = RegExp(/^[a-zA-Z, ,Ññ{ÁáÉéÍíÓóÚúÜü}]+$/);
const telefonoRegex = RegExp(/^[0-9]{3}[-. ][0-9]{4}$/);
const correoRegex = RegExp(
  /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9_.-])+\.)+([a-zA-Z0-9]{2,4})$/
);
const passwordRegex = RegExp(/^(?-.*\d)(?-.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/);
const generoRegex = RegExp(/^[A-ZÁÉÍÓÚÜÑ]{1}[a-záéíóúüñ]+$/);
const placaRegex = RegExp(/^[A-Z]{3}[- ][0-9]{3}$/);

const formValid = ({ errores, ...rest }) => {
  let valid = true;

  Object.values(errores).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class Registro extends React.Component {
  state = {
    nombre: null,
    apep: null,
    apem: null,
    telefono: null,
    correo: null,
    contra: null,
    recontra: null,
    modelo: null,
    año: null,
    sexo: null,
    comentario: null,
    genero: "OTRO",
    placa: null,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    let errores = { ...this.state.errores };

    switch (name) {
      case "nombre":
        errores.nombre = textoRegex.test(value) ? "" : "Ingresar solo letras";
        break;

      case "apep":
        errores.apep = textoRegex.test(value) ? "" : "Ingresar solo letras";
        break;

      case "apem":
        errores.apem = textoRegex.test(value) ? "" : "Ingresar solo letras";
        break;

      case "telefono":
        errores.telefono = telefonoRegex.test(value)
          ? ""
          : "Ingresar solo números";
        break;

      case "correo":
        errores.correo = correoRegex.test(value) ? "" : "Ingresar solo letras";
        break;

      case "contra":
        errores.contra = passwordRegex.test(value)
          ? ""
          : "Ingresar algo como DIana23";
        break;

      case "recontra":
        errores.recontra = passwordRegex.test(value)
          ? ""
          : "Ingresar nuevamente contraseña";
        break;

      case "modelo":
        errores.modelo = value === "" ? "Selecciona al menos un valor" : "";
        break;

      case "año":
        errores.año = value === "" ? "Selecciona al menos un valor" : "";
        break;

      case "placa":
        errores.placa = placaRegex.test(value)
          ? ""
          : "Ingresar algo como DFS-165";
        break;

      case "genero":
        errores.genero = generoRegex.test(value)
          ? ""
          : "Ingresar solo una letra en mayúscula";
        break;

      case "sexo":
        errores.sexo =
          value === "otro" ? (
            <div className="uk-form-controls uk-inline">
              <span className="uk-form-icon">
                <i className="fa fa-venus-mars" aria-hidden="true"></i>
              </span>
              <input
                className="uk-input uk-form-width-large"
                name="genero"
                type="text"
                placeholder="Define tu seño"
                onKeyUp={this.handleChange}
              />
            </div>
          ) : (
            ""
          );
        break;

      case "comentario":
        errores.cometario = value.length > 123 ? "Máximo 123 caracteres" : "";
        break;

      default:
        break;
    }

    this.setState({ errores, [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
      LISTO PARA PRODUCCION
      Nombre: ${this.state.nombre}
      Correo: ${this.state.correo}
      Telefono: ${this.state.telefono}

    `);

      this.setState({ status: "Formulario Valido" });
    } else {
      this.setState({ status: "Corregir Información Suministrada" });
    }
  };

  render() {
    const { errores } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="uk-flex uk-flex-center">
            <div>
              <div className="uk-card uk-card-default uk-width-lareg">
                <div className="uk-grid-small uk-flex-middle">
                  <div className="uk-width-auto">
                    <img
                      className="uk-border-circle"
                      width="150"
                      height="150"
                      src="img/user.png"
                      alt="user"
                    />
                  </div>
                  <div className="uk-width-expand">
                    <h4 className="uk-card-title uk-margin-remove-bottom">
                      <strong>Registro</strong>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Registro;
