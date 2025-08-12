import { memo, useState, useEffect } from "react";
import FOTO from "../../Img/FOTO.jpg";
import { Button } from 'react-bootstrap';
import "../../CSS/Header.css";
import { HOME, LOGIN } from "../../Routes/routes";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { FaHome, FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { MdWork, MdSchool, MdCode } from "react-icons/md";
import useAuthStore from "../Layouts/stores/useAuthStore";

const Header = memo(function Header() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Estados para autenticación
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLogout = () => {
    clearAuth();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header-modern ${isVisible ? 'animate-fade-in-up' : ''}`}>
      {/* Barra de autenticación */}
      <div className="auth-bar">
        {token !== null && userRole === "admin" ? (
          <div className="admin-welcome">
            <span className="welcome-text">
              <MdCode className="admin-icon" />
              Bienvenido Matías
            </span>
            <Button onClick={handleLogout} className="btn-modern btn-secondary">
              Cerrar Sesión
            </Button>
          </div>
        ) : (
          <Link to={LOGIN} className="login-btn">
            <RxAvatar className="login-icon" />
            <span>Admin</span>
          </Link>
        )}
      </div>

      {/* Contenido principal del header */}
      <div className="header-content glass-effect">
        <div className="profile-section animate-fade-in-up">
          <div className="profile-image-container">
            <img 
              src={FOTO} 
              alt="Matías Sebastian Chocobar - Desarrollador Full Stack"
              className="profile-image animate-float"
            />
            <div className="image-glow"></div>
          </div>
          
          <div className="profile-info">
            <h1 className="name text-gradient">
              Matías Sebastian Chocobar
            </h1>
            <h2 className="title">
              <MdSchool className="title-icon" />
              Técnico Programador Universitario - UTN-FRT
            </h2>
            <div className="speciality">
              <span className="badge-modern">
                <MdCode className="badge-icon" />
                Full Stack Developer
              </span>
              <span className="badge-modern">
                <MdWork className="badge-icon" />
                Disponible para proyectos
              </span>
            </div>
          </div>
        </div>

        <div className="divider-modern"></div>

        <div className="about-section animate-fade-in-up">
          <h3 className="section-title">
            <span className="title-text">Acerca de mí</span>
            <div className="title-underline"></div>
          </h3>
          
          <div className="about-content">
            <p className="about-paragraph highlight">
              👋 <strong>¡Hola! Soy Matías</strong>, un desarrollador apasionado por crear 
              soluciones tecnológicas innovadoras. Graduado de la UTN-FRT como Técnico 
              Programador Universitario.
            </p>
            
            <p className="about-paragraph">
              💻 Me especializo en <strong>desarrollo Full Stack</strong> con tecnologías 
              modernas como React, Node.js y MySQL. Mi enfoque está en crear experiencias 
              digitales excepcionales que combinen funcionalidad y diseño.
            </p>
            
            <p className="about-paragraph">
              🚀 Siempre estoy buscando nuevos desafíos y oportunidades para crecer 
              profesionalmente. Me integro fácilmente en equipos de trabajo y contribuyo 
              con <strong>entusiasmo, dedicación y pensamiento innovador</strong>.
            </p>
            
            <p className="about-paragraph">
              🎯 <strong>Objetivo:</strong> Formar parte de proyectos que marquen la diferencia 
              y continuar expandiendo mis conocimientos en el ecosistema tecnológico.
            </p>
          </div>
        </div>

        {/* Acciones rápidas */}
        <div className="quick-actions animate-fade-in-up">
          <button 
            onClick={() => scrollToSection('contacto')}
            className="btn-modern btn-primary"
          >
            <FaEnvelope />
            Contáctame
          </button>
          
          <button 
            onClick={() => scrollToSection('proyectos')}
            className="btn-modern btn-secondary"
          >
            <MdWork />
            Ver Proyectos
          </button>
          
          <a 
            href="/cv-matias-chocobar.pdf" 
            download
            className="btn-modern btn-accent"
          >
            <FaDownload />
            Descargar CV
          </a>
        </div>

        {/* Enlaces sociales */}
        <div className="social-links animate-fade-in-up">
          <a 
            href="https://github.com/ChocobarMatias" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub de Matías Chocobar"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/matias-sebastian-chocobar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn de Matías Chocobar"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:matias.chocobar@example.com"
            className="social-link"
            aria-label="Email de Matías Chocobar"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Navegación de home */}
        <Link to={HOME} className="home-nav" aria-label="Ir al inicio">
          <FaHome className="home-icon" />
        </Link>
      </div>

      {/* Efecto de partículas de fondo */}
      <div className="particles-bg"></div>
    </header>
  );
});

export default Header;
