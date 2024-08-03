import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Pagination } from "react-bootstrap";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../../CSS/Certificado.css";
import { URL_CERTIFICACIONES, URL_CERTIFICACIONES_ELIMINAR } from "../../constants/constants";
import { CREAR_CERTIFICADO } from "../../Routes/routes";
import useAuthStore from "../Layouts/stores/useAuthStore";

const Certificacion = () => {
  const [certificados, setCertificados] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Muestra una imagen por página
// esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);
  const clearAuth = useAuthStore((state) => state.clearAuth);
 // _______________________________________________________________________
  const getCertificacion = async () => {
    try {
      const response = await axios.get(URL_CERTIFICACIONES);
      setCertificados(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async (id) => {
    try {
      //  con este token aqui hago que solo usuario admin pueda hacer eliminaciones
      await axios.delete(`${URL_CERTIFICACIONES_ELIMINAR}${id}`, {
        headers: {
          Authorization: `Bearer ${token}` // Asegúrate de tener el token adecuado
        },
      });
      alert("Certificación eliminada");
      getCertificacion();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { getCertificacion();}, []);

  const handleLogout = () => { clearAuth(); };

  const totalPages = Math.ceil(certificados.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = certificados.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h3 className="text-white">
        CERTIFICADOS: {token && userRole === "admin" && (
          <Link to={CREAR_CERTIFICADO}>
            <IoMdAddCircleOutline className="iconcertificado" />
          </Link>
        )}
      </h3>
      <Button onClick={handleLogout} className="btn btn-secondary">
        Cerrar Sesión
      </Button>
      <hr />

      <div className="contenedorPagination">
        {currentItems.map((certificado) => (
          <div key={certificado.id_Certificacion} className="d-flex align-items-center">
            <div className="carousel-image">
              <img
                className="d-block w-100"
                src={certificado.FotoCertificado}
                alt={`Certificado ${certificado.Titulo}`}
              />
            </div>
            <div className="carousel-description text-white ml-4">
              <h3>Título del Certificado: {certificado.Titulo}</h3>
              <h4>Academia: {certificado.InstitucionEducativa}</h4>
              <h4>Año: {certificado.AñoInicio}</h4>
              <h4>Horas Cátedra: {certificado.HorasAcademica}</h4>
              <h4>Código: {certificado.Codigo}</h4>
              <h4>Certificado en línea: <a href={certificado.Url} target="_blank" rel="noopener noreferrer">{certificado.Url}</a></h4>
           
            {token && userRole === "admin" && (
              <div className="admin-actions">
                <Link to={`/certificados/edit/${certificado.id_Certificacion}`} className="btn btn-warning">
                  <FaEdit className="iconcertificado" />
                </Link>
                <Button onClick={() => handleClick(certificado.id_Certificacion)} className="btn btn-danger">
                  <MdDelete className="iconcertificado" />
                </Button>
              </div>
            )} </div>
          </div>
        ))}
      </div>

      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}> {index + 1}</Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default Certificacion;
