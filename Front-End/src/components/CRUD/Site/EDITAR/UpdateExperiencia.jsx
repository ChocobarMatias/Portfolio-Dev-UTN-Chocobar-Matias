import {useState,useEffect} from "react";
import {useParams, useNavigate,Link} from "react-router-dom";
import axios from "axios";
import "../../../../CSS/Experiencia.css"
import { URL_EXPERIENCIAS, URL_EXPERIENCIAS_EDITAR } from "../../../../constants/constants";
import { EXPERIENCIA } from "../../../../Routes/routes";
import useAuthStore from "../../../Layouts/stores/useAuthStore";
import { Row, Col } from "react-bootstrap";

const UpdateExperiencia = () => {

const navigate = useNavigate();

const initialState = {
    Cargo: "",
    Empresa: "",
    AñoInicio: "",
    AñoFinal: "",
    EstadoActual: "",
    Desempeño: ""
}
const [datos, setDatos]=useState(initialState)
 const {id} = useParams();

   // esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);
  // const clearAuth = useAuthStore((state) => state.clearAuth);
 // _______________________________________________________________________


 const getDatos = async()=>{
let response = await axios.get(`${URL_EXPERIENCIAS}/${id}`)
setDatos(response.data[0])}

const handleSave = async(e) =>{

e.preventDefault()

try{
 
  let response = await axios.put(URL_EXPERIENCIAS_EDITAR+id,datos, {
    headers: {
      Authorization:  `Bearer ${token}` // Asegúrate de tener el token adecuado
    }
  })

  if(response.status === 200){
     alert("Actualizacion correcta")
     navigate(EXPERIENCIA)
  }}catch (error){
    console.error("Error al actualizar los datos:", error);
  }}

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

useEffect(()=>{getDatos()},[])
return (
    <div>
       <br/>
      <br/>
      <h3 className="text-white">Agregar Experiencia Laboral</h3>
      <br/><hr/><br/>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
        {token && userRole === "admin" ? (
      <div className="actualizarexperiencia">
      {/* <form className="text-white h3" action="" onSubmit={handleSubmit}> */}
      <label htmlFor="">Cargo : </label>
        <input type="text" onChange={handleChange} name="Cargo" value={datos.Cargo}/>
        <br/><br/>
        <label htmlFor="">Empresa : </label>
        <input type="text" onChange={handleChange} name="Empresa" value={datos.Empresa}/>
        <br/><br/>
        <label htmlFor="">Año de Inicio : </label>
        <input type="text" onChange={handleChange} name="AñoInicio" value={datos.AñoInicio}/>
        <br/><br/>
        <label htmlFor="">Año de Finalizacion : </label>
        <input type="text" onChange={handleChange} name="AñoFinal" value={datos.AñoFinal}/>
        <br/><br/>
        <label htmlFor="">Estado Actual : </label>
        <input type="text" onChange={handleChange} name="EstadoActual" value={datos.EstadoActual}/>
        <br/><br/>
        <label htmlFor="">Tarea : </label>
        <input type="text" onChange={handleChange} name="Desempeño" value={datos.Desempeño}/>
        
        <br/><br/>
        <button onClick={handleSave} className="btnexpact btn btn-success">Guardar</button>
        <Link to={EXPERIENCIA} className="btnexpact btn btn-warning">VOLVER</Link>
        {/* </form> */}
        <br/>
         </div>) : (<p>No tienes permiso para acceder a esta página.</p>
        )}
        </Col>
      </Row>
   
    </div>
  )
}

export default UpdateExperiencia
