import React from "react";
import "./Header.scss";
import logoCRC from "../../assets/images/logocrc.png";

const Header = () => {
    return (
        <header className="header">
            <div className="row">
                <div className="col-md-10">
                    <a href="https://www.crcom.gov.co/es/pagina/inicio" Target="_blank">
                        <img 
                            className="img-crc" 
                            alt="logo de CRC" 
                            src={logoCRC}
                            data-toggle="tooltip" 
                            title="Logo CRC, aquí se puede dirigir a la página principal"   
                        />  
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header