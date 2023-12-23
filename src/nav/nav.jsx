import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./nav.styles.css";
import pedroCavataio from "../assets/LogoPFC.png";
import { NavLink } from "react-router-dom";

let vacio = "";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const abrir_cerrar_menu = () => {
    let menu_desplegable = document.getElementById("menu");
    let boton_cerrar = document.getElementById("x");
    menu_desplegable.classList.toggle("abrir_menu");
    boton_cerrar.classList.toggle("colocar_x");
  };

  const nombreImagenLogo = () => {
    navigate("/landing");
  };
 

  return (
    <>
    <div className="barras">
          <button
            onClick={abrir_cerrar_menu}
            className="boton_menu"
            id="x"
          ></button>
        </div>
      <header>        
        
        <img src={pedroCavataio} alt="pedroIndex" className="nombreImagenLogo" />
               
        <nav id="menu" className="desplegable">
        <ul>
            <li className={activeItem === "/landing" ? "active" : ""}>
              <NavLink to="/landing" onClick={() => setActiveItem("/landing")}>
                Inicio
              </NavLink>
            </li>
            <li className={activeItem === "/trabajo" ? "active" : ""}>
              <NavLink to="/trabajo" onClick={() => setActiveItem("/trabajo")}>
                Mi trabajo
              </NavLink>
            </li>
            <li className={activeItem === "/about" ? "active" : ""}>
              <NavLink to="/about" onClick={() => setActiveItem("/about")}>
                Mi resumen
              </NavLink>
            </li>
            <li className={activeItem === "/contacto" ? "active" : ""}>
              <NavLink to="/contacto" onClick={() => setActiveItem("/contacto")}>
                Contacto
              </NavLink>
            </li>
            <li>
              <a href="/DCD_Portfolio">
                Salir
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
