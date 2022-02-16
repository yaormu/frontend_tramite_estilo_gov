import React from "react";

const View = ({ data }) => {
  return (
    <div>
      <p>Tipo de Persona: {data?.tipoPersona}</p>
      <p>Tipo Identificación: {data?.tipoIdentificacion}</p>
      <p>Número de Identificacion: {data?.identificacion}</p>
      <p>Primer Nombre: {data?.nombre}</p>
      <p>Segundo Nombre: {data?.nombre2}</p>
      <p>Primer Apellido: {data?.apellido}</p>
      <p>Segundo Apellido: {data?.apellido2}</p>
      <p>Número de Nit: {data?.nit}</p>
      <p>Digito de Verificación: {data?.digitoVerificacion}</p>
      <p>Nombre de la Empresa: {data?.nombreEmpresa}</p>
      <p>Representante Legal o APoderado: {data?.nombreRL}</p>
      <p>País: {data?.pais}</p>
      <p>Departamento: {data?.departamento}</p>
      <p>Municipio: {data?.municipio}</p>
      <p>Dirección: {data?.direccion}</p>
      <p>Correo Electrónico: {data?.correo}</p>
      <p>Número de Teléfono: {data?.telefono}</p>
      <p>Tipo de Dispositivo: {data?.tipoDispositivo}</p>
      <p>Marca de Dispositivo: {data?.marca}</p>
      <p>Nombre Comercial del Dispositivo: {data?.nombreComercial}</p>
      <p>Modelo del Dispositivo: {data?.modelo}</p>
      <p>Nombre del Fabricante del Dispositivo: {data?.fabricante}</p>
      <p>Caso del Uso Dispositivo: {data?.casoUsoDispositivo}</p>
      <p>Modelo de Modulo Interno Dispositivo: {data?.modeloModuloInterno}</p>
      <p>Marca del Equipo Fabricante: {data?.marcaEquipoFabricante}</p>
      <p>Módelo del Eqquipo Anfitrión: {data?.modeloEquipoAnfitrion}</p>
      <p>Nombre de Otro Dispositivo: {data?.nombreOtroDispositivo}</p>
    </div>
  );
};

export default View;
