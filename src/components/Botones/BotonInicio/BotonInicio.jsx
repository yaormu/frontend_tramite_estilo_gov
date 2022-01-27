import React from 'react';
import { Link } from 'react-router-dom';

import './BotonInicio.css'

export default function BotonInicio() {
    return ( 
        <>
            <button className="btn-inicio">
                <Link to="/" className="inicio">
                    volver a inicio del tramite
                </Link>
            </button>
        </> 
        );
}
