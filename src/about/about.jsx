import React from "react";
import { useNavigate } from "react-router-dom";
import "./about.styles.css";
import figuraPuntos from "../assets/figuraPuntos.png";
import DescargaCV from "../assets/descargaCV.png";
import Henry from "../assets/henry.png";
import AA2000 from "../assets/aa2000.png";
import Tecnocasa from "../assets/tecnocasa.png";
import Umet from "../assets/umet.png";
import Ubicacion from "../assets/ubicacionMapaBlanco.png";
import Curriculum from "../assets/CVpedroCavataio_fullStackDeveloper.pdf";

const About = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/landing");
  };

  return (
    <div className="about-container">
      <div className="sections-container">
        <div className="section">
          <div className="info">
            <div className="contAbout-texto">
              <div className="sectionCV">
                <img src={Ubicacion} alt="Ubicacion" className="ubicacion" />
                <p className="españa">
                  <span className="es">Madrid</span>
                  {/* <span className="pa">PA</span>
                  <span className="ña">ÑA</span> */}
                </p>
                <a href={Curriculum} target="_blank">
                  <img src={DescargaCV} alt="CV" className="CV" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="section-dividerCV" />

        <div className="section">
          <div className="data">
            <div className="contAbout-texto">
              <p>
                <span class="job-role">Full Stack Web Developer</span>
                <br />
                <span class="company-name">Henry</span>
                <br />
                <span class="year">2023</span>
              </p>
            </div>
          </div>
          <div className="info">
            <div className="contAbout-texto">
              <p>
                Mi participación en el bootcamp de Soy Henry ha sido una
                experiencia transformadora. A lo largo del programa, he
                adquirido conocimientos sólidos en programación y desarrollo web
                a través de un enfoque práctico y colaborativo. Los proyectos
                desafiantes en los que trabajé en equipo no solo mejoraron mis
                habilidades técnicas, sino también mis habilidades de
                comunicación y resolución de problemas. Uno de los aspectos más
                destacados fue el apoyo constante que recibí de los instructores
                y mentores altamente calificados. Esto hizo que mi proceso de
                aprendizaje fuera más efectivo y gratificante. Estoy emocionado
                por lo que el futuro tiene reservado para mí gracias a esta
                experiencia educativa.
              </p>
            </div>
          </div>
          <div className="images-container">
            <a href="https://www.soyhenry.com" target="_blank">
              <img src={Henry} alt="henry" className="henry" />
            </a>
          </div>
        </div>

        <hr className="section-divider" />

        <div className="section">
          <div className="data">
            <div className="contAbout-texto">
              <p>
                <span>Supervisor de Parking</span>
                <br />
                <span>AA 2000 S.A.</span>
                <br />
                <span>Buenos Aires, Argentina</span>
                <br />
                <span>2013 - Actualidad</span>
              </p>
            </div>
          </div>
          <div className="info">
            <div className="contAbout-texto">
              <p>
                Desde el año 2013, he ocupado el puesto de Supervisor en
                Aeropuertos Argentina 2000 S.A., una destacada empresa en el
                sector aeroportuario. Mi función principal ha sido la
                supervisión y liderazgo de un equipo de 30 personas en el
                Aeropuerto Jorge Newbery. Este entorno de trabajo es sumamente
                dinámico y se caracteriza por mantener elevados estándares de
                calidad tanto en las operaciones de caja como en el servicio al
                cliente, abarcando más de 747,000 transacciones anuales. Además
                de mis responsabilidades habituales como Jefe de
                Estacionamiento, he tenido la oportunidad de formarme y ejercer
                como Coach de Agilidad. Esto me ha permitido contribuir al
                desarrollo profesional y al éxito del equipo de manera
                significativa..
              </p>
            </div>
          </div>
          <div className="images-container">
            <a href="https://www.aa2000.com.ar" target="_blank">
              <img src={AA2000} alt="aa2000" className="aa2000" />
            </a>
          </div>
        </div>

        <hr className="section-divider" />

        <div className="section">
          <div className="data">
            <div className="contAbout-texto">
              <p>
                Administrador
                <br />
                Tecnocasa
                <br />
                Madrid, España.
                <br />
                2000 - 2012
                <br />
              </p>
            </div>
          </div>
          <div className="info">
            <div className="contAbout-texto">
              <p>
                En mi carrera en el sector inmobiliario, he desempeñado diversas
                funciones, desde la intermediación en transacciones hasta la
                gestión de valiosas propiedades. Mi enfoque siempre ha sido
                proporcionar un servicio excepcional al cliente, ofreciendo
                atención personalizada y resolviendo problemas de manera
                eficiente. Gracias a un análisis de mercado exhaustivo,
                pronostico movimientos y tomo decisiones estratégicas basadas en
                las tendencias y la demanda del sector. Como hábil negociador,
                he logrado acuerdos beneficiosos para todas las partes
                involucradas. La gestión minuciosa de la documentación ha sido
                fundamental en mi trabajo para garantizar su integridad. Además,
                he aplicado estrategias de marketing efectivas para promover
                propiedades. Mi compromiso con la excelencia y el éxito en cada
                proyecto se refleja en mi constante formación y actualización en
                regulaciones y tendencias del sector.
              </p>
            </div>
          </div>
          <div className="images-container">
            <a href="https://www.tecnocasa.es" target="_blank">
              <img src={Tecnocasa} alt="tecnocasa" className="tecnocasa" />
            </a>
          </div>
        </div>

        <hr className="section-divider" />

        <div className="section">
          <div className="data">
            <div className="contAbout-texto">
              <p>
                Lic. En Gestión de Organizaciones
                <br />
                U.M.E.T
                <br />
                Buenos Aires, Argentina
                <br />
                2013 - 2018
              </p>
            </div>
          </div>
          <div className="info">
            <div className="contAbout-texto">
              <p>
                Mi Licenciatura en Gestión de Organizaciones ha sido un viaje
                académico y profesional profundamente enriquecedor. Durante mi
                tiempo en la universidad, adquirí una base sólida en una amplia
                gama de disciplinas relacionadas con la gestión, que abarcan
                desde la planificación estratégica hasta la gestión de recursos
                humanos y el análisis financiero. Estos conocimientos me han
                proporcionado las herramientas esenciales para abordar con
                confianza los desafíos empresariales del mundo real. Lo que hace
                que esta experiencia sea aún más valiosa son las conexiones
                significativas que establecí con profesores y compañeros de
                clase. Estas conexiones no solo enriquecieron mi aprendizaje,
                sino que también crearon una red de contactos que sigue siendo
                fundamental en mi carrera profesional. En resumen, mi
                Licenciatura en Gestión de Organizaciones no solo me proporcionó
                una sólida base académica, sino que también me brindó la
                oportunidad de crecer tanto a nivel personal como profesional a
                través de conexiones significativas y experiencias
                enriquecedoras.
              </p>
            </div>
          </div>
          <div className="images-container">
            <a href="https://www.umet.edu.ar" target="_blank">
              <img src={Umet} alt="umet" className="umet" />
            </a>
          </div>
        </div>

        <hr className="section-dividerCV" />

        <div className="section">
          <div className="data">
            <div className="contAbout-texto">
              <p></p>
            </div>
          </div>

          <div className="contAbout-texto">
            <p>
              <img src={figuraPuntos} alt="puntos" className="puntos" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
