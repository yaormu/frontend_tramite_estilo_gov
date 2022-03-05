import React from "react";
import "./Navbar.scss"


const Navbar = () => {
    return (
        <nav className="navbar container-fluid">
            <div className="container">
                <a className="navbar-brand" href="https://www.gov.co/" Target="_blank">
                    <img 
                        className="logogov" 
                        src="https://cdn.www.gov.co/assets/images/logo.png" 
                        alt="Logo Gov.co" 
                        data-toggle="tooltip" 
                        title="Logo .gov, aquí se puede dirigir a dicho sitio"   
                    />
                </a>
            </div>
        </nav>
    );
}
 
export default Navbar;