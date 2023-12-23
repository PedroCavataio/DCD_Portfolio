/* trabajo.jsx */
import React, { useRef } from "react";
import "./trabajo.styles.css";
import RickGris from "../assets/rickDeployGris.png";
import Rick from "../assets/rickDeploy.png";
import CastingGris from "../assets/castingAppDeployGris.png";
import Casting from "../assets/castingAppDeploy.png";
import ControlGris from "../assets/controlDeployGris.png";
import Control from "../assets/controlDeploy.png";
import Proximamente from "../assets/proximamente.png";
import ControlAep from "../assets/ControlAEP.xlsx";

const trabajo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="background">
        <div className="containerJob">
          
          <div className="trabajo-container">
            <p className="tituloProyectos">Casting APP - Proyecto grupal</p>
            <div className="deploy">
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
          </div>

          <div className="trabajo-container">
            <p className="tituloProyectos">SPA Rick & Morty - Api</p>
            <div className="deploy">
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
          </div>

          <div className="trabajo-container">
            <p className="tituloProyectos">Control PK-AEP AA2000</p>
            <div className="deploy">
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
          </div>

          <div className="trabajo-container">
            <p className="tituloProyectos">Portfolio Delfina Deluca - en construcción</p>
            <div className="deploy">
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
              <div className="image-row"></div>
            </div>
          </div>
        </div>

        <div className="footer">
          <button onClick={scrollToTop} className="scroll-button">
            Volver arriba
          </button>
        </div>
      </div>
    </>
  );
};

export default trabajo;
