import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./landinPage.styles.css";
import Nav from "../nav/nav";
import imgLanding1 from "../assets/imgLanding1.jpeg";
import imgLanding2 from "../assets/imgLanding2.jpeg";
import imgLanding3 from "../assets/imgLanding3.jpeg";
import imgLanding4 from "../assets/imgLanding4.jpeg";

const Landing = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".imagenes img");
    images.forEach((image, index) => {
      setTimeout(() => {
        image.classList.add("show");
      }, index * 1500); // Ajusta el tiempo según tus necesidades
    });
  }, []);



  return (
    <>
      <Nav /> {/* Agregamos la clase de animación a la barra de navegación */}
      <div className="landing-page">
        <h1 className="fraseLanding">
          Si haces click en "Mi trabajo", verás una selección de proyectos en
          los que he estado involucrado.
        </h1>
        <div className="imagenes">
          <img src={imgLanding1} alt="Imagen 1" className="imagen-1" />
          <img src={imgLanding2} alt="Imagen 2" className="imagen-2" />
          <img src={imgLanding3} alt="Imagen 3" className="imagen-3" />
          <img src={imgLanding4} alt="Imagen 4" className="imagen-4" />
        </div>
      </div>
    </>
  );
};

export default Landing;
