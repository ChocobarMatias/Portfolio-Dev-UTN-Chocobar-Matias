// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar,Button} from 'react-bootstrap';
import FOTO from '../../Img/FOTO.jpg';
import "../../CSS/NavOpciones.css"
import { LOGIN } from "../../Routes/routes";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import {CERTIFICADO, EXPERIENCIA, FORMACION, HOME, IDIOMA, PROYECTO, SKILL} from "../../Routes/routes"
import useAuthStore from "../Layouts/stores/useAuthStore";

function NavOpciones() {
  // esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  // _______________________________________________________________________

// funcion para que si no es admin y no se genero token no muestre 
const handleLogout = () => {
  clearAuth();
};

  return (
    <>
    <div className="boton">
    {token !== null && userRole==="admin" ? <Button onClick={handleLogout} className="btn btn-secondary">
        Cerrar Sesión</Button> : <Link to={LOGIN} className="login text-white btn-warning"><RxAvatar className="btnlogin"/></Link>}
        </div>
      <br /><br /><br />
      <Navbar bg="primary" data-bs-theme="dark" className='navOpciones'>
      <img src={FOTO}  alt=""  className="fotoNavbar"  />
          <Navbar.Brand href={HOME}><h2>Home</h2></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={FORMACION}><h3>Formacion</h3></Nav.Link>
            <Nav.Link href={IDIOMA}><h3>Idioma</h3></Nav.Link>
            <Nav.Link href={CERTIFICADO}><h3>Certificados</h3></Nav.Link>
            <Nav.Link href={EXPERIENCIA}><h3>Experiencia</h3></Nav.Link>
            <Nav.Link href={SKILL}><h3>Soft Skill</h3></Nav.Link>
            <Nav.Link href={PROYECTO}><h3>Proyectos</h3></Nav.Link>
          </Nav>
      </Navbar>
     
    </>
  );
}

export default NavOpciones;