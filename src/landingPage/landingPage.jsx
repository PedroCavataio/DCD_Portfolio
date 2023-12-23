import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./landinPage.styles.css";
import Nav from "../nav/nav";
import Foto from "../assets/fotoPedro.jpg";


const Landing = () => {
  const navigate = useNavigate();
  const { estacion } = useParams(); 
    
  const fondoPorEstacion = () => {
    if (!estacion) {
      return "landing-page";
    } 
  };

  return (    
    <>
    <Nav />
      <div className={fondoPorEstacion()}>
        <h1 className="fraseLanding">
        Si haces click en "Mi trabajo", verás una selección de proyectos en los que he estado involucrado.
        </h1>        
      </div>       
    </>
  );
};

export default Landing;
