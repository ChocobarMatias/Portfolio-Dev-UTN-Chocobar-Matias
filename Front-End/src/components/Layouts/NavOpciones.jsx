// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FOTO from '../../Img/FOTO.jpg';
import "../../CSS/NavOpciones.css"
import {CERTIFICADO, EXPERIENCIA, FORMACION, HOME, IDIOMA, PROYECTO, SKILL} from "../../Routes/routes"

function NavOpciones() {
  return (
    <>
      <br /><br /><br />
      <Navbar bg="primary" data-bs-theme="dark" className='navOpciones'>
      <img src={FOTO} alt=""  className="fotoNavbar"  />
          <Navbar.Brand href={HOME}><h2>Home</h2></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to={FORMACION}><h3>Formacion</h3></Nav.Link>
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