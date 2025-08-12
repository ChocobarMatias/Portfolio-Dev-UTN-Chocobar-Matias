import { memo, useState, useEffect } from "react";
import FOTO from "../../Img/FOTO.jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuthStore } from "../stores/auth";
import { 
  MdCode, MdEmail, MdWork, MdSchool, MdLocationOn, MdDownload 
} from "react-icons/md";
import { 
  FaGithub, FaLinkedin, FaWhatsapp, FaHome, FaCode
} from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { LOGIN, HOME } from "../../constants/constants";

const Header = memo(() => {
  // Estados para animaciones
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Textos rotativos
  const rotatingTexts = [
    "Full Stack Developer",
    "React Expert", 
    "Node.js Developer",
    "UTN Graduate",
    "Frontend Specialist",
    "Backend Developer"
  ];
  
  const currentText = rotatingTexts[textIndex];

  // Auth state
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  // Efectos
  useEffect(() => {
    setIsVisible(true);
    
    // Rotación de texto
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

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
            <span className="hidden-mobile">Bienvenido Matías</span>
            <span className="visible-mobile">Admin</span>
            <Button onClick={handleLogout} className="btn-logout">
              Salir
            </Button>
          </div>
        ) : (
          <Link to={LOGIN} className="login-floating">
            <RxAvatar />
            <span className="hidden-mobile">Acceso Admin</span>
            <span className="visible-mobile">Admin</span>
          </Link>
        )}
      </div>

      {/* Contenido principal responsive */}
      <div className="hero-content container-responsive">
        <div className={`hero-main ${isVisible ? 'animate-in' : ''}`}>
          {/* Imagen de perfil con anillos */}
          <div className="profile-container">
            <div className="profile-ring hidden-mobile"></div>
            <div className="profile-ring-2 hidden-mobile"></div>
            <img 
              src={FOTO} 
              alt="Matías Sebastian Chocobar - Desarrollador Full Stack UTN" 
              className="profile-image"
              loading="eager"
            />
            <div className="profile-status">
              <div className="status-dot"></div>
              <span className="hidden-mobile">Disponible para trabajar</span>
              <span className="visible-mobile">Disponible</span>
            </div>
          </div>

          {/* Texto principal - Responsive */}
          <div className="hero-text">
            <div className="greeting">
              <span>¡Hola! </span>
              <span className="sparkle">✨</span>
              <span className="hidden-mobile"> Soy</span>
            </div>
            
            <h1 className="hero-name">
              <span className="name-part">Matías</span>{' '}
              <span className="name-part">Chocobar</span>
            </h1>
            
            <div className="hero-role">
              <span className="role-text">{currentText}</span>
              <div className="role-cursor"></div>
            </div>

            {/* Badges responsive */}
            <div className="hero-badges">
              <div className="badge">
                <MdSchool />
                <span className="hidden-mobile">Técnico UTN-FRT</span>
                <span className="visible-mobile">UTN-FRT</span>
              </div>
              <div className="badge">
                <MdCode />
                <span className="hidden-mobile">Full Stack Developer</span>
                <span className="visible-mobile">Full Stack</span>
              </div>
              <div className="badge">
                <MdLocationOn />
                <span>Argentina</span>
              </div>
            </div>

            {/* Descripción responsive */}
            <p className="hero-description">
              <span className="hidden-mobile">
                Desarrollador Full Stack especializado en <strong>React</strong>, <strong>Node.js</strong> y <strong>MySQL</strong>. 
                Graduado de la <strong>Universidad Tecnológica Nacional</strong> con pasión por crear 
                soluciones web innovadoras y experiencias de usuario excepcionales.
              </span>
              <span className="visible-mobile">
                Desarrollador <strong>Full Stack</strong> especializado en <strong>React</strong> y <strong>Node.js</strong>. 
                Graduado de la <strong>UTN</strong> con pasión por crear soluciones web innovadoras.
              </span>
            </p>

            {/* Acciones responsive */}
            <div className="hero-actions">
              <button 
                onClick={() => document.getElementById('proyectos')?.scrollIntoView({behavior: 'smooth'})}
                className="btn-primary-hero"
              >
                <div className="btn-glow"></div>
                <MdWork />
                <span className="hidden-mobile">Ver Mis Proyectos</span>
                <span className="visible-mobile">Proyectos</span>
              </button>
              
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}
                className="btn-secondary-hero"
              >
                <MdEmail />
                <span className="hidden-mobile">Contáctame</span>
                <span className="visible-mobile">Contacto</span>
              </button>
              
              <a 
                href="/cv-matias-chocobar.pdf" 
                download
                className="btn-outline-hero"
              >
                <MdDownload />
                <span className="hidden-mobile">Descargar CV</span>
                <span className="visible-mobile">CV</span>
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
                aria-label="GitHub de Matías Chocobar"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/matias-sebastian-chocobar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn"
                data-tooltip="LinkedIn"
                aria-label="LinkedIn de Matías Chocobar"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:matias.chocobar@example.com"
                className="social-btn"
                data-tooltip="Email"
                aria-label="Email de Matías Chocobar"
              >
                <MdEmail />
              </a>
              <a 
                href="https://wa.me/5493816123456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn"
                data-tooltip="WhatsApp"
                aria-label="WhatsApp de Matías Chocobar"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="scroll-indicator">
        <span className="hidden-mobile">Desliza para explorar</span>
        <span className="visible-mobile">Explorar</span>
        <div className="scroll-arrow">↓</div>
      </div>

      {/* Navegación flotante */}
      <Link to={HOME} className="home-floating" aria-label="Ir al inicio">
        <FaHome />
      </Link>
    </section>
  );
});

export default Header;
