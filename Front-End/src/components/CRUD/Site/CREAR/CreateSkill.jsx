import axios from "axios"
import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"
import { URL_SKILLS_CREAR } from "../../../../constants/constants";
import { SKILL } from "../../../../Routes/routes";
import useAuthStore from "../../../Layouts/stores/useAuthStore";
import { Row, Col } from "react-bootstrap";

const CreateSkill = () => {
const navigate = useNavigate();

const initialState = {
      NombreSkill: "",
      LogoSkill :""
}

const [datos, setDatos] = useState(initialState)

// esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);
  // const clearAuth = useAuthStore((state) => state.clearAuth);
 // _______________________________________________________________________

const handleChange = (e)=>{
setDatos({...datos,[e.target.name]:e.target.value})
}
const handleSave = async(e)=>{
  e.preventDefault()
  try{
    let response = await axios.post(URL_SKILLS_CREAR,{
      NombreSkill: datos.NombreSkill,
      LogoSkill: datos.LogoSkill
    }, {
      headers: {
        Authorization:  `Bearer ${token}` // Asegúrate de tener el token adecuado
      }
    })
    if(response){
        alert("Skill Creado correctamente")
        navigate(SKILL)
    }

  }catch (error){
    console.log(error)
  }
}
  return (
    <div>
      <br/>
      <br/>
      <h3 className="text-white">Agregar Nuevo Skill</h3>
      <br/>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
        {token && userRole === "admin" ? (
      <div className="crearskill text-white h3">
      <br/>
      {/* <form action="" onSubmit={handleSubmit}> */}
        <label htmlFor="">Nombre del Skill : </label>
        <input type="text" onChange={handleChange} name="NombreSkill"/>
        <br /><br />
        <label htmlFor="">Logo : </label>
        <input type="text" onChange={handleChange} name="LogoSkill"/>
        <br /><br />
        <div className="botones">
        <button onClick={handleSave} className="btnskillcrea btn btn-success">GUARDAR</button>
        <Link to={SKILL} className="btnskillcrea btn btn-warning">VOLVER</Link>
        </div>
      {/* </form> */}
      </div>) : (<p>No tienes permiso para acceder a esta página.</p>
        )}
        </Col>
      </Row>
    </div>
  )
}

export default CreateSkill
