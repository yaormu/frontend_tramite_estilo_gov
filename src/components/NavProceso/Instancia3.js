import React from "react";
import "./Instancia3.scss";

const Instancia3 = () => {
    return (
        <>
            <div className="row barra">
	            <div className="col-3 instancia3-1">
                	<span className="txt-instancia3-1">
                        <i className="instancia3-uno">
                            1
                        </i> 
                        Inicio
                    </span>
                </div>
                <div className="col-3 instancia3-2">
                	<span className="txt-instancia3-2"> 
                        <i className="instancia3-dos">
                            2 
                        </i> 
                         Hago mi solicitud
                    </span>
                </div>
                <div className="col-3 instancia3-3">
                	<span className="txt-instancia3-3"> 
                        <i className="instancia3-tres">
                            3
                        </i> 
                        Procesan mi solicitud
                    </span>
                </div>
                <div className="col-3 instancia3-4">
                	<span className="txt-instancia3-4"> 
                        <i className="instancia3-cuatro">
                            4
                        </i> 
                        Respuesta Solicitud
                    </span>
                </div>
            </div>
        </>
    );
}
 
export default Instancia3;