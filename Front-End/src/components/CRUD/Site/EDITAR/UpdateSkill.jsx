import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import "../../../../CSS/Skill.css"
import { URL_SKILLS, URL_SKILLS_EDITAR } from "../../../../constants/constants";
import { SKILL } from "../../../../Routes/routes";
import useAuthStore from "../../../Layouts/stores/useAuthStore";
import { Row, Col } from "react-bootstrap";

const UpdateSkill = () => {
  const navigate = useNavigate();
  const initialState = {
    NombreSkill: "",
    LogoSkill: ""
  };
  const [datos, setDatos] = useState(initialState);
  const { id } = useParams();

  // esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);
  // const clearAuth = useAuthStore((state) => state.clearAuth);
 // _______________________________________________________________________

  const getSkill = async () => {
    let response = await axios.get(`${URL_SKILLS}/${id}`);
    setDatos(response.data[0]);
  };
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.put(URL_SKILLS_EDITAR+id,{
        NombreSkill: datos.NombreSkill,
        LogoSkill: datos.LogoSkill
      }, {
        headers: {
          Authorization:  `Bearer ${token}` // Asegúrate de tener el token adecuado
        }
      });
      if (response) {
        alert("Skill actualizado correctamente");
        navigate(SKILL);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setDatos({...datos, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getSkill();
  }, []);
  return (
    <div>
      <br />
        <br />
        <h2 className="text-white">Actualizar Skill</h2>
        <br />
        <br />
        <Row>
        <Col md={{ span: 8, offset: 2 }}>
        {token && userRole === "admin" ? (
      <div className="actualizarskill">
      {/* <form className="text-white h3" action="" onSubmit={handleSubmit}> */}
      <br />
        <br />
        <label htmlFor="">Nombre del Skill : </label>
        <input type="text" onChange={handleChange} name="NombreSkill" value={datos.NombreSkill}/>
        <br />
        <br />
        <label htmlFor="">Logo : </label>
        <input type="text" onChange={handleChange} name="LogoSkill" value={datos.LogoSkill}/>
        <br />
        <br />
        <div className="botones">
        <button onClick={handleSave} className="btnskillact btn btn-success"> GUARDAR</button>
        <Link to={SKILL} className="btnskillact btn btn-warning">VOLVER</Link>
        </div>
      {/* </form> */}
      </div>) : (<p>No tienes permiso para acceder a esta página.</p>
        )}
        </Col>
      </Row>
    </div>
  );
};

export default UpdateSkill;
