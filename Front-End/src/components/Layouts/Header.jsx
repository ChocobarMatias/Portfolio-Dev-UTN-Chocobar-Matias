import { memo } from "react";
import FOTO from "../../Img/FOTO.jpg";
import {Button} from 'react-bootstrap';
import "../../CSS/Header.css";
import { HOME, LOGIN } from "../../Routes/routes";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import useAuthStore from "../Layouts/stores/useAuthStore";
import { FaHome } from "react-icons/fa";
const Header = memo(function Header() {
  // utilizo menos para que el componente se muestre una sola vez y no se este rereenderizando

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
    <div >
      <div className="boton">
      {token !== null && userRole==="admin" ?  <div><h3>Bienvenido Matias</h3><Button onClick={handleLogout} className="btn btn-secondary">
      Cerrar Sesión</Button></div> : <Link to={LOGIN} className="login text-white btn-warning"><RxAvatar className="btnlogin"/></Link>}
      </div>

          <div className="header">
       
            <img src={FOTO}  className="fotoperfil" width={"100%"}/>
            <h1 className="text-white">Chocobar Matias Sebastian</h1>
            <br />
            <h3 className="text-white">Programador Universitario - UTN</h3>
            <br />
            <br />
            <h3 className="text-white">Acerca de mi</h3>
            <hr />
            <br />
            <h2 className="text-white">
              Bienvenido a mi portafolio. Soy Matías, estudiante de la carrera
              Técnico Programador Universitario en la Universidad Tecnológica
              Nacional de Tucumán. Desde pequeño, siempre me ha fascinado el
              mundo de la tecnología y la programación. Hoy en día, he decidido
              retomar mi pasión por este fascinante ámbito del desarrollo, la
              tecnología y los ecosistemas emprendedores.
            </h2>
            <h2 className="text-white">
              Estoy siempre dispuesto a enfrentar nuevos desafíos y a continuar
              capacitándome. Me integro con facilidad a los equipos de trabajo,
              contribuyendo con entusiasmo y dedicación.
            </h2>
            <h2 className="text-white">
              Sin más que agregar, te invito a explorar el resumen de mi trabajo
              y el tiempo dedicado a mi capacitación que he recopilado en este
              portafolio. Si estás interesado, continúa viendo mi recorrido y
              logros.
            </h2>
            <br />
            <br />
            <Link to={HOME}><FaHome className="FaHome" /></Link>
          </div>
        
        <div className="glass"></div>
     
    </div>
  );
});

export default Header;
