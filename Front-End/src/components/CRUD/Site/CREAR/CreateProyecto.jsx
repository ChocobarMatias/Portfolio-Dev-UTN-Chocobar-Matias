import {useState} from "react"
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"
import { URL_PROYECTOS_CREAR } from "../../../../constants/constants";
import { PROYECTO } from "../../../../Routes/routes";
import useAuthStore from "../../../Layouts/stores/useAuthStore";
import { Row, Col } from "react-bootstrap";

const CreateProyecto = () => {
const navigate = useNavigate();
const initialState = {
      NombreProyecto: "",
      ImagenProyecto:"",
      Descripcion: "",
      Repositorio: ""
}
const [datos,setDatos] = useState(initialState);

// esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);
  // const clearAuth = useAuthStore((state) => state.clearAuth);
 // _______________________________________________________________________

const handleChange = (e)=>{
 setDatos({...datos,[e.target.name]:e.target.value})
}
const handleSave = async(e) =>{
  e.preventDefault()
  try{
   let response = await axios.post(URL_PROYECTOS_CREAR,{
    NombreProyecto: datos.NombreProyecto,
    ImagenProyecto: datos.ImagenProyecto,
    Descripcion: datos.Descripcion,
    Repositorio: datos.Repositorio
   }, {
    headers: {
      Authorization:  `Bearer ${token}` // Asegúrate de tener el token adecuado
    }
  })
   if(response){
    alert("Proyecto Nuevo Guardado correctamente")
    navigate(PROYECTO)
   }
  }catch (error){
    console.log(error)
  }
}
    return (
      <div>
        <br/>
      <br/>
      <h3 className="text-white">Agregar Proyecto</h3>
      <br/>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
        {token && userRole === "admin" ? (
      <div className="contenedorcrear">
     
      <label htmlFor=""><h4 className="form text-white">Nombre del Proyecto : </h4></label>
           <input type="text" onChange={handleChange} name ="NombreProyecto"/>
        <br /><br />
        <label htmlFor=""><h4 className="form text-white">Imagen de Proyecto : </h4></label>
           <input type="text" onChange={handleChange} name ="ImagenProyecto" />
           <br /><br />
           <label htmlFor=""><h4 className="form text-white">Desccripcion : </h4></label>
           <input type="text" onChange={handleChange} name ="Descripcion" />
           <br /><br />
           <label htmlFor=""><h4 className="form text-white">Repositorio : </h4></label>
           <input type="text" onChange={handleChange} name ="Repositorio"/>
           <br /><br />
        <button onClick={handleSave} className="btn btn-success">GUARDAR</button>
        <Link to={PROYECTO} className="btn btn-warning">VOLVER</Link>

        </div>) : (<p>No tienes permiso para acceder a esta página.</p>
        )}
        </Col>
      </Row>
      </div>
    )
  }
  
  export default CreateProyecto