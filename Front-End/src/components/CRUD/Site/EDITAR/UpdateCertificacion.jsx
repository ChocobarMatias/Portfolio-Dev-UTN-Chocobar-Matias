import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../../../../CSS/Certificado.css";
import { URL_CERTIFICACIONES, URL_CERTIFICACIONES_EDITAR } from "../../../../constants/constants";
import { CERTIFICADO } from "../../../../Routes/routes";
import { Row, Col } from "react-bootstrap";
import useAuthStore from "../../../Layouts/stores/useAuthStore";

const UpdateCertificacion = () => {
  const navigate = useNavigate();
 
  const initialState = {
    Titulo: "",
    InstitucionEducativa: "",
    AñoInicio: "",
    HorasAcademica: "",
    Codigo: "",
    Url: "",
    FotoCertificado: ""
  };

  const [datos, setDatos] = useState(initialState);
  const { id } = useParams();

 // _______________________________________________________________________
 const token = useAuthStore((state) => state.token);
 const userRole = useAuthStore((state) => state.userRole);
 // const clearAuth = useAuthStore((state) => state.clearAuth);
// _______________________________________________________________________

  const getDatos = async () => {
      let response = await axios.get(URL_CERTIFICACIONES+id);
      setDatos(response.data[0]);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.put(URL_CERTIFICACIONES_EDITAR+id, datos, {
        headers: {
          Authorization:  `Bearer ${token}` // Asegúrate de tener el token adecuado
        }
      });
      if (response.status === 200) {
        alert("Certificado Actualizado");
        navigate(CERTIFICADO);
      }
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
    }
  };

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  useEffect(() =>{getDatos();}, []);

  return (
    <div>
      <br />
      <br />
      <h3 className="text-white">Actualizar Certificacion</h3>
      <br />
      <hr />
      <br />
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
        {token && userRole === "admin" ? (
      <div className="actualizarcertificado text-white">
        {/* <form onSubmit={handleSubmit}> */}
          <label htmlFor="Titulo">Titulo : </label>
          <input type="text" onChange={handleChange} name="Titulo" value={datos.Titulo}/>
          <br /><br />
          <label htmlFor="InstitucionEducativa">Institucion Educativa : </label>
          <input type="text" onChange={handleChange} name="InstitucionEducativa" value={datos.InstitucionEducativa} />
          <br /><br />
          <label htmlFor="AñoInicio">Año de Inicio : </label>
          <input type="text" onChange={handleChange} name="AñoInicio" value={datos.AñoInicio} />
          <br /><br />
          <label htmlFor="HorasAcademica">Horas Academia : </label>
          <input type="text" onChange={handleChange} name="HorasAcademica" value={datos.HorasAcademica} />
          <br /><br />
          <label htmlFor="Codigo">Codigo : </label>
          <input type="text" onChange={handleChange} name="Codigo" value={datos.Codigo} />
          <br /><br />
          <label htmlFor="Url">url : </label>
          <input type="text" onChange={handleChange} name="Url" value={datos.Url}/>
          <br /><br />
          <label htmlFor="FotoCertificado">Certificado : </label>
          <input type="text" onChange={handleChange} name="FotoCertificado" value={datos.FotoCertificado}/>
          <br /><br />
          <div className="botones">
            <button onClick={handleSave} className="iconcertificadoact btn btn-success">GUARDAR</button>
            <Link to={CERTIFICADO} className="iconcertificadoact btn btn-warning">VOLVER</Link>
          </div>
        {/* </form> */}
      </div>) : (<p>No tienes permiso para acceder a esta página.</p>
        )}
        </Col>
      </Row>
    </div>
  );
};

export default UpdateCertificacion;
