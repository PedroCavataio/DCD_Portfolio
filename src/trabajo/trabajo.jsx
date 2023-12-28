/* trabajo.jsx */
import React, { useRef, useEffect } from "react";
import "./trabajo.styles.css";
import RickGris from "../assets/rickDeployGris.png";
import Rick from "../assets/rickDeploy.png";
import CastingGris from "../assets/castingAppDeployGris.png";
import Casting from "../assets/castingAppDeploy.png";
import ControlGris from "../assets/controlDeployGris.png";
import Control from "../assets/controlDeploy.png";
import Proximamente from "../assets/proximamente.png";
import ControlAep from "../assets/ControlAEP.xlsx";
import { useNavigate } from "react-router-dom";

export const CastingRef = React.createRef();
export const RickMortyRef = React.createRef();
export const ControlRef = React.createRef();
export const PortfolioRef = React.createRef();

const Trabajo = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    navigate("/trabajo#castingRef");
  }, [navigate]);

  return (
    <>
      <div className="background">
        <div className="containerJob">
          <div className="trabajo-container" id="castingRef" ref={CastingRef}>
            <p className="tituloProyectos">Casting APP - Proyecto grupal</p>
            <a
              href="https://deploy-sprint-2-frontend.onrender.com/"
              target="_blank"
            >
              <div className="image-container left">
                <img
                  src={CastingGris}
                  alt="castingDeployGris"
                  className="image-gris"
                />
                <img
                  src={Casting}
                  alt="castingDeploy"
                  className="image-color"
                />
              </div>
            </a>
          </div>

          <div
            className="trabajo-container"
            id="rickMortyRef"
            ref={RickMortyRef}
          >
            <p className="tituloProyectos">SPA Rick & Morty - Api</p>
            <a
              href="https://pedrocavataio.github.io/rick_and_morty/"
              target="_blank"
            >
              <div className="image-container left">
                <img
                  src={RickGris}
                  alt="rickDeployGris"
                  className="image-gris"
                />
                <img src={Rick} alt="rickDeploy" className="image-color" />
              </div>
            </a>
          </div>

          <div className="trabajo-container" id="controlRef" ref={ControlRef}>
            <p className="tituloProyectos">Control PK-AEP AA2000</p>
            <a href={ControlAep} target="_blank">
              <div className="image-container left">
                <img
                  src={ControlGris}
                  alt="controlDeployGris"
                  className="image-gris"
                />
                <img
                  src={Control}
                  alt="controlDeploy"
                  className="image-color"
                />
              </div>
            </a>
          </div>

          <div
            className="trabajo-container"
            id="portfolioRef"
            ref={PortfolioRef}
          >
            <p className="tituloProyectos">
              Portfolio Delfina Deluca - en construcción
            </p>
            <a href={ControlAep} target="_blank">
              <div className="image-container left">
                <img
                  src={Proximamente}
                  alt="proximamenteGris"
                  className="image-gris image-gris-proximamente"
                />
                <img
                  src={Proximamente}
                  alt="proximamente"
                  className="image-color"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="footer">
        <div onClick={scrollToTop} className="scroll-button"></div>
      </div>
    </>
  );
};

export default Trabajo;
