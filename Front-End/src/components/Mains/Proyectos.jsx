import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Pagination, Card } from "react-bootstrap";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import NavOpciones from "../Layouts/NavOpciones";
import Footer from "../Layouts/Footer";
import "../../CSS/Proyectos.css";
import { URL_PROYECTOS, URL_PROYECTOS_ELIMINAR } from "../../constants/constants";
import { CREAR_PROYECTO } from "../../Routes/routes";
import useAuthStore from "../Layouts/stores/useAuthStore"; // Hook para los estados globales

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Muestra una imagen por página

 // esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);

 // _______________________________________________________________________


  const getProyectos = async () => {
    try {
      const response = await axios.get(URL_PROYECTOS);
      setProyectos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async (id) => {
    try {
      await axios.delete(`${URL_PROYECTOS_ELIMINAR}${id}`, {
        headers: {
          Authorization: `Bearer ${token}` // Asegúrate de tener el token adecuado
        },
      });
      alert("Proyecto eliminado");
      getProyectos();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProyectos();
  }, []);

  const totalPages = Math.ceil(proyectos.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = proyectos.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <NavOpciones />
      <br /><br />
      <h3 className="text-white">
        PROYECTOS: {token && userRole === "admin" && (
          <Link to={CREAR_PROYECTO}>
            <IoMdAddCircleOutline className="iconcrearproyecto" />
          </Link>
        )}
      </h3>
      <hr />
      <div className="contenedorProyecto">
        {currentItems.map((proyecto) => (
          <Card className="cardproyecto" key={proyecto.id_Proyecto}>
            <Card.Img variant="top" src={proyecto.ImagenProyecto} />
            <Card.Body>
              <Card.Title className="text-white"><b>Proyecto:</b> {proyecto.NombreProyecto}</Card.Title>
              <Card.Text className="text-white"><b>Descripción:</b> {proyecto.Descripcion}</Card.Text>
              <Card.Text className="text-white"><b>Repositorio:</b> <a href={proyecto.Repositorio} target="_blank" rel="noopener noreferrer">{proyecto.Repositorio}</a></Card.Text>
              {token && userRole === "admin" && (
                <div className="botonesProyecto">
                  <Link to={`/proyectos/edit/${proyecto.id_Proyecto}`} className="btn btn-warning"><FaEdit /></Link>
                  <Button onClick={() => handleClick(proyecto.id_Proyecto)} className="btn btn-danger"><MdDelete /></Button>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      <Footer />
    </div>
  );
};

export default Proyectos;
