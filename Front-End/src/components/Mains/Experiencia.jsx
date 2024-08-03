import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Button,Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import NavOpciones from "../Layouts/NavOpciones";
import Footer from "../Layouts/Footer";
import "../../CSS/Experiencia.css";
import { URL_EXPERIENCIAS,URL_EXPERIENCIAS_ELIMINAR } from "../../constants/constants";
import { CREAR_EXPERIENCIA } from "../../Routes/routes";
import useAuthStore from "../Layouts/stores/useAuthStore";//hook que cree los estados globales

const Experiencia = () => {
  const [experiencias, setExperiencias] = useState([]);
  // esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  // _______________________________________________________________________

  const getExperiencia = async () => {
    let response = await axios.get(URL_EXPERIENCIAS);
    console.log(response.data);
    setExperiencias(response.data);
  };

  const handleClick = async (id) => {
    try {
         //  con este token aqui hago que solo usuario admin pueda hacer eliminaciones
      let response = await axios.delete(URL_EXPERIENCIAS_ELIMINAR + id, {
        headers: {
          Authorization: `Bearer ${token}` // Asegúrate de tener el token adecuado
        },
      });
      if (response) {
        alert("Eliminado Correctamente");
        getExperiencia();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExperiencia();
  }, []);
// funcion para que si no es admin y no se genero token no muestre 
  const handleLogout = () => {
    clearAuth();
  };

  return (
    <div>
      <br />
      <br />
      <NavOpciones />
      <br /> {/*Ternario para mostrar el boton de crear solo cuando sea usuario admin*/}
      <h3 className="text-white"> Experiencia Laboral :{token && userRole === "admin" && (<Link to={CREAR_EXPERIENCIA}>
            <IoMdAddCircleOutline className="iconcrearexperiencia" /></Link>)}</h3>
      <Button onClick={handleLogout} className="btn btn-secondary">
        Cerrar Sesión
      </Button>
      <hr />
      <div className="contenedorexperiencia">
        <div>
          <br />
          <br />
        </div>
        <Row>
        {experiencias.map((experiencia) => (
          <Card  className="CardE"   key={experiencia.id_Experiencia}  style={{ width: "80rem" }}>
            <Card.Body>
              <Card.Img  variant="top"  src=""  style={{ width: "50px", height: "50px" }}/>
              <Card.Title className="text-white">
                <h3> {experiencia.id_Experiencia} - {experiencia.Cargo} </h3>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-center text-white">
                <h3>{experiencia.Empresa}</h3>
              </Card.Subtitle>
              <Card.Text className="text-white">
                <h3>
                  Año Inicio: {experiencia.AñoInicio} – {experiencia.AñoFinal} -
                  ({experiencia.EstadoActual})
                </h3>
              </Card.Text>{/*Ternario para mostrar el boton de eliminar y editar solo cuando sea usuario admin*/}
              {token && userRole === "admin" && (<><Link to={`/experiencias/edit/${experiencia.id_Experiencia}`} className="btn btn-warning" >
                    <FaEdit className="iconcrearexperiencia" /> </Link>
                  <Button  onClick={() => handleClick(experiencia.id_Experiencia)} className="btn btn-danger" ><MdDelete className="iconcrearexperiencia" />
                  </Button>
                </>)}
            </Card.Body>
          </Card>
        ))}</Row>
      </div>
      
      <Footer />
    </div>
  );
};

export default Experiencia;
