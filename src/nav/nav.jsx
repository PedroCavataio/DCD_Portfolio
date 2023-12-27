import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./nav.styles.css";
import pedroCavataio from "../assets/LogoPFC.png";
import { NavLink } from "react-router-dom";
import {
  CastingRef,
  RickMortyRef,
  ControlRef,
  PortfolioRef,
} from "../trabajo/trabajo";

/* let vacio = ""; */

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const nombreImagenLogo = () => {
    navigate("/landing");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuHover = () => {
    if (activeItem === "/trabajo") {
      setIsMenuOpen(true);
    }
  };

  const handleMenuLeave = () => {
    setIsMenuOpen(false);
  };

  const handleSectionClick = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header>
        <img
          src={pedroCavataio}
          alt="pedroIndex"
          className="nombreImagenLogo"
        />

       {/*  <div className="barras">
          <button onClick={abrir_cerrar_menu} className="button_menu" id = "x"></button>
        </div> */}

        <nav id="menu" className="desplegable">
          <ul>
            <li className={activeItem === "/landing" ? "active" : ""}>
              <NavLink to="/landing" onClick={() => setActiveItem("/landing")}>
                Inicio
              </NavLink>
            </li>

            <nav
              id="menuMiTrabajo"
              className={`desplegableMiTrabajo ${isMenuOpen ? "open" : ""}`}
              onMouseEnter={handleMenuHover}
              onMouseLeave={handleMenuLeave}
            >
              <li className={activeItem === "/trabajo" ? "active" : ""}>
                <NavLink
                  to="/trabajo"
                  onClick={() => {
                    setActiveItem("/trabajo");
                    handleSectionClick(CastingRef);
                  }}
                >
                  Mi trabajo
                </NavLink>
                {isMenuOpen && (
                  <ul className="submenu">
                    <li>
                      <a onClick={() => handleSectionClick(CastingRef)}>
                        Casting APP - Proyecto grupal
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleSectionClick(RickMortyRef)}>
                        SPA Rick & Morty - Api
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleSectionClick(ControlRef)}>
                        Control PK-AEP AA2000
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleSectionClick(PortfolioRef)}>
                        Portfolio Delfina Deluca
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </nav>

            <li className={activeItem === "/about" ? "active" : ""}>
              <NavLink to="/about" onClick={() => setActiveItem("/about")}>
                Mi resumen
              </NavLink>
            </li>

            <li className={activeItem === "/contacto" ? "active" : ""}>
              <NavLink
                to="/contacto"
                onClick={() => setActiveItem("/contacto")}
              >
                Contacto
              </NavLink>
            </li>

            <li>
              <a href="/DCD_Portfolio">Salir</a>
            </li>
          </ul>
        </nav>

      </header>
    </>
  );
}

export default Nav;
