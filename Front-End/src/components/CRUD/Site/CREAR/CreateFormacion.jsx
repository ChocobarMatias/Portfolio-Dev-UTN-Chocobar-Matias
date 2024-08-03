import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../../../../CSS/Formacion.css";
import { Row, Col } from "react-bootstrap";
import { URL_FORMACIONES_CREAR } from "../../../../constants/constants";
import { FORMACION } from "../../../../Routes/routes";
import useAuthStore from "../../../Layouts/stores/useAuthStore";

const CreateFormacion = () => {
  const navigate = useNavigate();
  const initialState = {
    Titulo: "",
    InstitucionEducativa: "",
    AñoInicio: "",
    AñoFinEstimado: "",
    Estado: "",
    Logo: ""
  };

  const [datos, setDatos] = useState(initialState);
  // esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);
  // const clearAuth = useAuthStore((state) => state.clearAuth);
 // _______________________________________________________________________

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(URL_FORMACIONES_CREAR, {
        Titulo: datos.Titulo,
        InstitucionEducativa: datos.InstitucionEducativa,
        AñoInicio: datos.AñoInicio,
        AñoFinEstimado: datos.AñoFinEstimado,
        Estado: datos.Estado,
        Logo: datos.Logo
      }
        , {
        headers: {
          Authorization:  `Bearer ${token}` // Asegúrate de tener el token adecuado
        }
      }
    );
      if (response) {
        alert("Formación Académica Agregada Correctamente");
        navigate(FORMACION);
      } 
    } catch (error) {
      console.error("Error al agregar formación:", error);
      alert("Ocurrió un error al agregar la formación. Por favor, intenta de nuevo.");
    }
  };

  // const handleLogout = () => { clearAuth(); };

  return (
    <div>
      
      <hr />
      <br />
      <br />
    
      <h3 className="text-white">Agregar Formación Académica</h3>
      <br />
      <hr />
      <br />
      <br />
      <Row>
      {/* <form action="" onSubmit={handleSubmit}> */}
        <Col md={{ span: 8, offset: 2 }}>
        {token && userRole === "admin" ? (
          <div className="crearFormacion text-white">
            <label className="label" htmlFor="Titulo">Título:</label>
            <input className="input" type="text" onChange={handleChange} name="Titulo"/>
            <br /><br />
            <label htmlFor="InstitucionEducativa">Entidad Académica:</label>
            <input className="input" type="text" onChange={handleChange} name="InstitucionEducativa" />
            <br /><br />
            <label htmlFor="AñoInicio">Año de Inicio:</label>
            <input className="input" type="text" onChange={handleChange} name="AñoInicio"/>
            <br /><br />
            <label htmlFor="AñoFinEstimado">Año de Fin Estimado:</label>
            <input className="input" type="text" onChange={handleChange} name="AñoFinEstimado"/>
            <br /><br />
            <label htmlFor="Estado">Estado:</label>
            <input className="input" type="text" onChange={handleChange} name="Estado"/>
            <br /><br />
            <label htmlFor="Logo">Logo:</label>
            <input className="input" type="text" onChange={handleChange} name="Logo"/>
            <br /><br />
            <div>
              <button onClick={handleSave} className="btncrearfor btn btn-success">Guardar</button>
              <Link to={FORMACION} className="btncrearfor btn btn-warning">Volver</Link>
            </div>
          </div> 
           ) : (<p>No tienes permiso para acceder a esta página.</p>
        )} 
        </Col>
        {/* </form> */}
      </Row>
      
    </div>
  );
};

export default CreateFormacion;
