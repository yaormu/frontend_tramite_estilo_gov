import React from "react";
import { NavLink } from "react-router-dom";
import "./Navegacion.scss";

const Navegacion = ({inicio, pagina, paginaActual}) => {
    return (
        <>
            <nav className="navigation" aria-label="breadcrumb">
                    <ol className="breadcrumb navega-lista">
                        <li className="breadcrumb-item" aria-current="page">
                            <NavLink to="/" className="inicion">
                                {inicio}
                            </NavLink>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                            <NavLink to="/" className="pagina">
                                {pagina}
                            </NavLink>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
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