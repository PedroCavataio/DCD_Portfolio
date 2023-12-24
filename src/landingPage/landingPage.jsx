import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./landinPage.styles.css";
import Nav from "../nav/nav";

const Landing = () => { 
 

  return (    
    <>
      <Nav/> {/* Agregamos la clase de animación a la barra de navegación */}
      <div className="landing-page">
        <h1 className="fraseLanding">
          Si haces click en "Mi trabajo", verás una selección de proyectos en los que he estado involucrado.
        </h1>        
      </div>       
    </>
  );
};

export default Landing;
