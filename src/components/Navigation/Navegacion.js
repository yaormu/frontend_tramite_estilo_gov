import React from "react";
import { NavLink } from "react-router-dom";
import "./Navegacion.scss";

const Navegacion = ({inicio, pagina, paginaActual}) => {
    return (
        <>
            <nav className="navigation" aria-label="breadcrumb">
                    <ol class="breadcrumb navega-lista">
                        <li class="breadcrumb-item" aria-current="page">
                            <NavLink to="/" className="inicion">
                                {inicio}
                            </NavLink>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                            <NavLink to="/" className="pagina">
                                {pagina}
                            </NavLink>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                            <NavLink to="" className="paginaActual">
                                {paginaActual}
                            </NavLink>
                        </li>
                    </ol>
                </nav>
        </>
    );
}
 
export default Navegacion;