import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.styles.css";
import pedroCavataio from "../assets/LogoPFC.png";

const Login = ({ onLogin, access }) => {
   const navigate = useNavigate();

    const redirigirAInicio = () => {
    navigate('/landing'); 
  }

 return (
     <form className="login-container">
      <div className="image-logo">
        <img src={pedroCavataio} alt="pedroIndex" className="nombre-image" />
      </div>
      <div className="contenedor">
        <div className="hola">Delfina Cavataio Deluca </div>
      </div>            
    </form>    
  );
};

export default Login;
