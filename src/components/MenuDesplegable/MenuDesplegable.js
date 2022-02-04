import React, { useState } from "react";

import {
  Formulario,
  Label,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  MensajeExito,
  MensajeError,
  Select,
  LeyendaError,
} from "../../Pages/FormularioSolicitud/elementos/Formularios";

const categorias = [
  {
    departamento: "Cundinamarca",
    ciudad: ["Bogota", 
      "Chocontá", "Machetá", "Manta", "Sesquilé", "Suesca", "Tibirita", "Villapinzón", "Agua de Dios",
      "Girardot", "Guataquí", "Jerusalén", "Nariño", "Nilo", "Ricaurte", "Tocaima",
    ],
  },
  {
    departamento: "Meta",
    ciudad: ["Villavicencio", "Acacías", "Barranca de Upía", "Cabuyaro", "Castilla la Nueva", 
    "Cubarral", "Cumaral", "El Calvario", "El Castillo", "El Dorado", "Fuente de Oro", "Granada", 
    "Guamal", "La Macarena", "Lejanías", "Mapiripán", "Mesetas", "Puerto Concordia", "Puerto Gaitán",
    "Puerto Lleras", "Puerto López", "Puerto Rico", "Restrepo", "San Carlos de Guaroa", 
    "San Juan de Arama", "San Juanito", "San Martín", "Uribe", "Vistahermosa",
    ],
  },
];

console.log("categorias", categorias);

const MenuDesplegable = () => {
  // Campo selección, lista desplegable, tipo persona y tipo dispositivo
  const [pais, setPais] = useState();

  const [idArticulos, setIdArticulos] = useState(-1);

  // Funcion evento cambiar articulos
  const handlerCargarArticulo = function (e) {
    const opcion = e.target.value;
    // Validar carga de -1 y desde 0 seleccion articulo
    // console.log(opcion);
    // Cambio del idArticulo de acuerdo a la opción seleccionada
    setIdArticulos(opcion);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <Label htmlFor="pais">Departamento *</Label>
          <Select id="pais" data-toggle="tooltip" title="Pais de residencia del usuario que realiza el trámite"
            value={pais} onClick={handlerCargarArticulo}
          >
            <option value={-1} disabled selected hidden>
              Ej. Colombia
            </option>
            {categorias.map((item, index) => (
              <option key={"categoria" + index} value={index}>
                {item.departamento}
              </option>
            ))}
          </Select>
          <LeyendaError>Campo tipo persona es requerido</LeyendaError>
        </div>

        <div className="col-md-6">
          <Label htmlFor="departamento">Municipio *</Label>
          <Select id="departamento" data-toggle="tooltip" title="Estado de Residencia en un país">
            <option disabled selected hidden> Ej. Bogotá </option>
            {idArticulos > -1 &&
              categorias[idArticulos].ciudad.map((item, i) => (
                <option key={"articulo" + i} value="">
                  {item}
                </option>
              ))}
          </Select>
        </div>

        
        
        {/*
        <div className="col-md-6">
          <h3>Categorías</h3>
          <select
            name="categorias"
            id="selCategorias"
            onClick={handlerCargarArticulo}
          >
            <option value={-1}> Ej. Colombia </option>
            {categorias.map((item, index) => (
              <option key={"categoria" + index} value={index}>
                {item.pais}
              </option>
            ))}
          </select>
        </div>
        
        <div className="col-md-6">
          <h3>Articulos</h3>
          <select name="articulos" id="searticulo">
            <option> Ej. Cundinamarca </option>
            {idArticulos > -1 &&
              categorias[idArticulos].estados.map((item, i) => (
                <option key={"articulo" + i} value="">
                  {item}
                </option>
              ))}
          </select>
        </div>
        */}
        
      </div>
    </>
  );
};

export default MenuDesplegable;
