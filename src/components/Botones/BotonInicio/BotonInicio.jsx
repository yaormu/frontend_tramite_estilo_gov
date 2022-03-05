import React from "react";
import { Link } from "react-router-dom";

import "./BotonInicio.css";

export default function BotonInicio(props) {
  return (
    <div className="boton-inicio">
      <Link to="/" className="btn-inicio">
        {props.name}
      </Link>
    </div>
  );
}
