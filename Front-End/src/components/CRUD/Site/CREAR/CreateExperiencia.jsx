import {useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom"
import "../../../../CSS/Experiencia.css"
import { URL_EXPERIENCIAS_CREAR } from "../../../../constants/constants";
import { EXPERIENCIA } from "../../../../Routes/routes";
import useAuthStore from "../../../Layouts/stores/useAuthStore";
import { Row, Col } from "react-bootstrap";


const CreateExperiencia = () => {

const navigate = useNavigate();

 const initialState ={
      Cargo: "",
      Empresa: "",
      AñoInicio: "",
      AñoFinal: "",
      EstadoActual: "",
      Desempeño: ""
 }
const [datos,setDatos] = useState(initialState)

  // esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);
  // const clearAuth = useAuthStore((state) => state.clearAuth);
 // _______________________________________________________________________

const handleChange = (e) => {
setDatos({...datos,[e.target.name]:e.target.value})
}
const handleSave = async(e)=>{
e.preventDefault()
try{
  let response = await axios.post(URL_EXPERIENCIAS_CREAR,{
    Cargo: datos.Cargo,
    Empresa: datos.Empresa,
    AñoInicio: datos.AñoInicio,
    AñoFinal: datos.AñoFinal,
    EstadoActual: datos.EstadoActual,
    Desempeño: datos.Desempeño
}, {
  headers: {
    Authorization:  `Bearer ${token}` // Asegúrate de tener el token adecuado
  }
})
if(response){
alert("Experiencia Creada Correctamente");
navigate(EXPERIENCIA);
}
}catch (error){
  console.log(error)
}}
  return (
    <div>
      <br/>
      <br/>
      <h3 className="text-white">Agregar Experiencia Laboral</h3>
      <br/>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
        {token && userRole === "admin" ? (
      <div className="crearexperiencia text-white">
       {/* <form action="" onSubmit={handleSubmit}> */}
       <label htmlFor=""><h3>Cargo : </h3></label>
        <input type="text" onChange={handleChange} name="Cargo"/>
        <br/><br/>
        <label htmlFor=""><h3>Empresa : </h3></label>
        <input type="text" onChange={handleChange} name="Empresa"/>
        <br/><br/>
        <label htmlFor=""><h3>Año Inicio : </h3></label>
        <input type="text" onChange={handleChange} name="AñoInicio"/>
        <br/><br/>
        <label htmlFor=""><h3>Año Finalizacion : </h3></label>
        <input type="text" onChange={handleChange} name="AñoFinal"/>
        <br/><br/>
        <label htmlFor=""><h3>Estado Actual : </h3></label>
        <input type="text" onChange={handleChange} name="EstadoActual"/>
        <br/><br/>
        <label htmlFor=""><h3>Tarea : </h3></label>
        <input type="text" onChange={handleChange} name="Desempeño"/>
        <br/><br/>
        <div className="botones">
         <button onClick={handleSave} className="btnexpcrea btn btn-success">Guardar</button>
         <Link to={EXPERIENCIA} className="btnexpcrea btn btn-warning">Volver</Link>
         </div>
       {/* </form>   */}
    </div>) : (<p>No tienes permiso para acceder a esta página.</p>
        )}
        </Col>
      </Row>
    </div>
  )
}

export default CreateExperiencia
