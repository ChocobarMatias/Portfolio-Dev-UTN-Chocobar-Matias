import { memo, useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import "../../CSS/Header.css";
import { HOME, LOGIN } from "../../Routes/routes";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { FaHome, FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaRocket } from "react-icons/fa";
import { MdWork, MdSchool, MdKeyboardArrowDown } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { BiTargetLock } from "react-icons/bi";
import FOTO from "../../Img/FOTO.jpg";

const Header = memo(function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  // Estados para autenticación
  const [token] = useState(localStorage.getItem("token"));
  const [userRole] = useState(localStorage.getItem("userRole"));

  // Textos rotativos para el efecto typewriter
  const rotatingTexts = [
    "Desarrollador Full Stack",
    "Especialista en React",
    "Backend con Node.js",
    "Graduado UTN-FRT",
    "Freelancer Disponible"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Efecto de texto rotativo
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    window.location.reload();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* Fondo animado con partículas */}
      <div className="hero-bg">
        <div className="particles"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Barra de autenticación flotante */}
      <div className="auth-floating">
        {token !== null && userRole === "admin" ? (
          <div className="admin-badge">
            <FaCode className="admin-icon" />
            <span>Admin Mode</span>
            <Button onClick={handleLogout} className="btn-logout">
              Salir
            </Button>
          </div>
        ) : (
          <Link to={LOGIN} className="login-floating">
            <RxAvatar />
            <span>Admin</span>
          </Link>
        )}
      </div>

      {/* Contenido principal del hero */}
      <div className="hero-content">
        <div className={`hero-main ${isVisible ? 'animate-in' : ''}`}>
          
          {/* Imagen de perfil con efectos */}
          <div className="profile-container">
            <div className="profile-ring"></div>
            <div className="profile-ring-2"></div>
            <img 
              src={FOTO} 
              alt="Matías Sebastian Chocobar - Desarrollador Full Stack"
              className="profile-image"
            />
            <div className="profile-status">
              <div className="status-dot"></div>
              <span>Disponible</span>
            </div>
          </div>

          {/* Información principal */}
          <div className="hero-text">
            <div className="greeting">
              <HiSparkles className="sparkle" />
              <span>¡Hola! Soy</span>
            </div>
            
            <h1 className="hero-name">
              <span className="name-part">Matías</span>
              <span className="name-part">Chocobar</span>
            </h1>
            
            <div className="hero-role">
              <span className="role-text">{rotatingTexts[textIndex]}</span>
              <div className="role-cursor"></div>
            </div>

            <div className="hero-badges">
              <div className="badge">
                <MdSchool />
                <span>UTN-FRT</span>
              </div>
              <div className="badge">
                <BiTargetLock />
                <span>Full Stack</span>
              </div>
              <div className="badge">
                <FaRocket />
                <span>Disponible</span>
              </div>
            </div>

            <p className="hero-description">
              🚀 Transformo ideas en experiencias digitales excepcionales. 
              Especializado en <strong>React</strong>, <strong>Node.js</strong> y <strong>MySQL</strong>. 
              Graduado de la UTN-FRT, listo para impulsar tu próximo proyecto.
            </p>

            {/* Botones de acción */}
            <div className="hero-actions">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="btn-primary-hero"
              >
                <FaEnvelope />
                <span>Hablemos</span>
                <div className="btn-glow"></div>
              </button>
              
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="btn-secondary-hero"
              >
                <MdWork />
                <span>Ver Proyectos</span>
              </button>
              
              <a 
                href="/cv-matias-chocobar.pdf" 
                download
                className="btn-outline-hero"
              >
                <FaDownload />
                <span>CV</span>
              </a>
            </div>

            {/* Enlaces sociales */}
            <div className="social-bar">
              <a 
                href="https://github.com/ChocobarMatias" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn"
                data-tooltip="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/matias-chocobar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn"
                data-tooltip="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:matias.chocobar@example.com"
                className="social-btn"
                data-tooltip="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="scroll-indicator">
          <span>Explora mi trabajo</span>
          <MdKeyboardArrowDown className="scroll-arrow" />
        </div>
      </div>

      {/* Navegación flotante */}
      <Link to={HOME} className="home-floating" aria-label="Ir al inicio">
        <FaHome />
      </Link>
    </section>
  );
});

export default Header;
