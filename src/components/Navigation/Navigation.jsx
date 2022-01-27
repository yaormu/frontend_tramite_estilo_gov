import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
    return (
        <>
            <nav className="navigation" aria-label="breadcrumb">
                    <ol class="breadcrumb navega-lista">
                        <li class="breadcrumb-item active">
                            <NavLink to="/" className="inicio">
                                Inicio
                            </NavLink>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                            <NavLink to="/" className="solicitud">
                                Solicitud de Homologación...
                            </NavLink>
                        </li>
                    </ol>
                </nav>
        </>
    );
}
 
export default Navigation;