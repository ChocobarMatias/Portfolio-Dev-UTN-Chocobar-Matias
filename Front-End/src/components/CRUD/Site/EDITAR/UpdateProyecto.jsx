import {useState,useEffect} from "react"
import {useNavigate,useParams,Link} from "react-router-dom"
import axios from "axios"
import { URL_PROYECTOS, URL_PROYECTOS_EDITAR } from "../../../../constants/constants";
import { PROYECTO } from "../../../../Routes/routes";
import useAuthStore from "../../../Layouts/stores/useAuthStore";
import { Row, Col } from "react-bootstrap";

const UpdateProyecto = () => {
  const navigate = useNavigate();
  const initialState = {
      NombreProyecto: "",
      ImagenProyecto:"",
      Descripcion: "",
      Repositorio: ""
  }
  const [datos,setDatos] = useState(initialState);

  const {id} = useParams();

  // esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);
  // const clearAuth = useAuthStore((state) => state.clearAuth);
 // _______________________________________________________________________


  const getProyecto = async() =>{
   let response = await axios.get(`${URL_PROYECTOS}/+${id}`);
   setDatos(response.data[0])
  }
  const handleSave = async(e) =>{
    e.preventDefault()
     try{
      let response = await axios.put(URL_PROYECTOS_EDITAR+id,{
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
        alert("Proyecto Actualizado")
        navigate(PROYECTO)
      }
     }catch (error){
       console.log(error)
     }
  }
  const handleChange =(e)=>{
    setDatos({...datos,[e.target.name]:e.target.value})
  }
  useEffect(()=>{getProyecto()},[]);
    return (
      <div>
        <br />
        <br />
        <h3 className="form text-white">Actualizar Proyectos</h3>
      <hr />
     <br />
     <Row>
        <Col md={{ span: 8, offset: 2 }}>
        {token && userRole === "admin" ? (
     <div className="actualizarproyecto">
       
           <label htmlFor=""><h4 className="form text-white">Nombre del Proyecto : </h4></label>
           <input type="text" onChange={handleChange} name ="NombreProyecto" value={datos.NombreProyecto} />
           <br /><br />
           <label htmlFor=""><h4 className="form text-white">Desccripcion : </h4></label>
           <input type="text" onChange={handleChange} name ="Descripcion" value={datos.Descripcion} />
           <br /><br />
           <label htmlFor=""><h4 className="form text-white">Repositorio : </h4></label>
           <input type="text" onChange={handleChange} name ="Repositorio" value={datos.Repositorio} />
           <br /><br />
        <button onClick={handleSave} className="btn btn-danger">Guardar</button>
        <Link to={PROYECTO} className="btn btn-warning">VOLVER</Link>
      
        </div>) : (<p>No tienes permiso para acceder a esta página.</p>
        )}
        </Col>
      </Row>
      </div>
    )
  }
  
  export default UpdateProyecto