import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.styles.css";
import pedroCavataio from "../assets/LogoPFC.png";
import piramidesLogin from "../assets/piramidesLogin.png";

const Login = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(false);
      navigate("/landing");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className={`login-container ${showLogin ? "fade-in fading" : "fade-out"}`}
    >
      <form>
        <div className="nombre-image">Delfina Cavataio Deluca </div>
        {/* <div className="image-logo">
             <img src={pedroCavataio} alt="pedroIndex" className="nombre-image" /> 
        </div> */}
       {/*  <div className="contenedor">
          <img src={piramidesLogin} alt="piramide" className="piramide-image" />
          <div className="hola">Delfina Cavataio Deluca </div>
        </div> */}
      </form>
    </div>
  );
};

export default Login;
