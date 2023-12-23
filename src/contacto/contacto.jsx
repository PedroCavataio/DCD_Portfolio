import React from "react";
import { useNavigate } from "react-router-dom";
import "./contacto.styles.css";
import Linkedin from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import Whatsapp from "../assets/whatsapp.png";
import Gmail from "../assets/gmail.png";

const Contacto = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const response = await fetch(event.target.action, {
      method: event.target.method,
      body: form,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      event.target.reset();
      alert("Mensaje enviado!!");
    }
  };

  return (
    <div className="contacto-container">
      <div className="container p-4">
        <div className="texto-encabezado">
          <h1 className="titulo">¡Envíame un mensaje!</h1>
          <h2 className="sub-titulo">
            ¿Tienes alguna pregunta o propuesta, o simplemente quieres saludar?
            Adelante.
          </h2>
        </div>
        <div className="card-body">
          <form
            action="https://formspree.io/f/mbjnrqpw"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <input
                type="text"
                name="Name"
                placeholder="Introduzca su nombre"
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="email"
                placeholder="Introduzca su dirección de correo electrónico"
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="phone"
                placeholder="Tu teléfono"
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <textarea
                className="formControlMensaje"
                name="Mensage"
                placeholder="Mensaje"
              ></textarea>
            </div>

            <div className="text-center">
              <button className="btnEnviar">Enviar</button>
            </div>
          </form>
        </div>
      </div>

      <div className="redes-container">
        <a
          href="https://www.linkedin.com/in/delfina-cavataio-538a252a5/"
          target="_blank"
        >
          <img src={Linkedin} alt="Linkedin" className="linkedin" />
        </a>
        <a href="https://wa.me/611854443" target="_blank">
          <img src={Whatsapp} alt="whatsapp" className="whatsapp" />
          <p className="wsp-number">611 854 443</p>
        </a>
        <a
          href="mailto:delfinacavataio@gmail.com"
          target="_blank"
          className="gmail-link"
        >
          <div className="gmail-container">
            <img src={Gmail} alt="gmail" className="gmail" />
          <p className="gmail-text">delfinacavatio@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contacto;
