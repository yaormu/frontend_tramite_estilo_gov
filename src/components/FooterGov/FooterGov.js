import React from "react";
import "./FooterGov.scss"

const FooterGov = () => {
    return (
        <footer className="FooterGov container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="logos">
                            <a href="https://www.colombia.co" Target="_blank">
                                <img 
                                    className="logoco" 
                                    alt="logo de Colombia" 
                                    data-toggle="tooltip" 
                                    title="Logo Colombia CO, aquí se puede dirigir a dicho sitio"    
                                    src="https://postdata.gov.co/sites/all/themes/nuboot_radix/assets/images/logo_co_footer.png" 
                                />
                            </a>
                            <div className="linea-blanca"></div>
                            <a href="https://www.gov.co" Target="_blank">
                                <img 
                                    className="logogovfooter" 
                                    alt="logo de GovCo" 
                                    data-toggle="tooltip" 
                                    title="Logo .Gov, aquí se puede dirigir a dicho sitio"   
                                    src="https://postdata.gov.co/sites/all/themes/nuboot_radix/assets/images/header_govco.png" 
                                /> 
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <a href="https://www.gov.co" Target="_blank" className="text-white">
                            <p 
                                className="conoceGov"
                                data-toggle="tooltip" 
                                title="Link ir al sitio .gov"   
                            >
                                Conoce GOV.CO aquí
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default FooterGov;