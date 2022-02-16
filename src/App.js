import React from "react";

import "./assets/styles/App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

// Componentes estandar de app
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import FooterGov from "./components/FooterGov/FooterGov";

// Paginas de app
import Inicio from "./Pages/Inicio/Inicio";
import FormularioSolicitud from "./Pages/FormularioSolicitud/FormularioSolicitud"
import ConsultaEstadoTramite from "./Pages/ConsultaEstadoTramite/ConsultaEstadoTramite";
import ProcesoSolicitud from "./Pages/ProcesoSolicitud/ProcesoSolicitud";
import RespuestaSolicitud from "./Pages/RespuestaSolicitud/RespuestaSolicitud";

//Componentes de pruebas, para eliminar posteriormente
import PruebaTramite from "./Pages/PruebaTramite/PruebaTramite";
import PruebaRespuesta from "./Pages/PruebaRespuesta/PruebaRespuesta";
import Prueba from "./components/Cards/Prueba/Prueba";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />  
        
        <div className="container">
          
        </div>
          
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SolicitudHomologacion" element={<FormularioSolicitud />} />
        <Route path="/ProcesoSolicitud" element={<ProcesoSolicitud />} />
        <Route path="/ConsultaEstadoTramite" element={<ConsultaEstadoTramite />} />
        <Route path="/RespuestaSolicitud" element={<RespuestaSolicitud />} />
        {/* RUTAS DE ṔRUEBAS PARA BORRAR */}
        <Route path="/PruebaTramite" element={<PruebaTramite />} />
        <Route path="/PruebaRespuesta" element={<PruebaRespuesta />} />
        <Route path="/Prueba" element={<Prueba />} />
      </Routes>
    </Router>
  );
}


//componente funcional el cual contendra los démas componentes de la aplicación 👇
const Home = () => {
  
  return (
    <>
      <div className="App">
        <div className="container">
          <Header />
          <Inicio />
        </div>
      </div>
      <Footer />
      <FooterGov />
    </>
  );
}


export default App;
