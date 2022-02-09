import React from "react";

import "./assets/styles/App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import FooterGov from "./components/FooterGov/FooterGov";

import Section from "./Pages/Section/Section";
import FormularioSolicitud from "./Pages/FormularioSolicitud/FormularioSolicitud"
import ConsultaEstadoTramite from "./Pages/ConsultaEstadoTramite/ConsultaEstadoTramite";
import RtaTramite from "./Pages/RtaTramite/RtaTramite";
import ProcesoSolicitud from "./Pages/ProcesoSolicitud/ProcesoSolicitud";
import RtaSolicitud from "./Pages/RtaSolicitud/RtaSolicitud";
import Prueba from "./components/Cards/Prueba/Prueba";
import ProcesoMiSolicitud from "./Pages/ProcesoMiSolicitud/ProcesoMiSolicitud";

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
        <Route path="/ConsultaEstadoTramite" element={<ConsultaEstadoTramite />} />
        <Route path="/RespuestaTramite" element={<RtaTramite />} />
        <Route path="/ProcesoSolicitud" element={<ProcesoSolicitud />} />
        <Route path="/RespuestaSolicitud" element={<RtaSolicitud />} />
        <Route path="/Prueba" element={<Prueba />} />
        <Route path="/EstadoSolicitud" element={<ProcesoMiSolicitud />} />
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
          <Section />
        </div>
      </div>
      <Footer />
      <FooterGov />
    </>
  );
}


export default App;
