import React from "react";
import "./Navbar.scss"


const Navbar = () => {
    return (
        <nav className="navbar container-fluid">
            <div className="container">
                <a className="navbar-brand" href="https://www.gov.co/">
                    <img className="logogov" src="https://cdn.www.gov.co/assets/images/logo.png" alt="Logo Gov.co" />
                </a>
            </div>
        </nav>
    );
}
 
export default Navbar;