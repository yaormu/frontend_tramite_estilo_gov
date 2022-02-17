import React from "react";
import "./NavProceso.scss";

const NavProceso = () => {
    return (
        <>
            <div className="row barra">
	            <div className="col-3 estado-1">
                	<span className="txt-estado-1">
                        <i className="uno">
                            1
                        </i> 
                        Inicio
                    </span>
                </div>
                <div className="col-3 estado-2">
                	<span className="txt-estado-2"> 
                        <i className="dos">
                            2 
                        </i> 
                         Hago mi solicitud
                    </span>
                </div>
                <div className="col-3 estado-3">
                	<span className="txt-estado-3"> 
                        <i className="tres">
                            3
                        </i> 
                        Procesan mi solicitud
                    </span>
                </div>
                <div className="col-3 estado-4">
                	<span className="txt-estado-4"> 
                        <i className="cuatro">
                            4
                        </i> 
                        Respuesta Solicitud
                    </span>
                </div>
            </div>
        </>
    );
}
 
export default NavProceso;