import axios from "axios"
import { useState} from "react"
import { useNavigate, Link } from "react-router-dom"
import { URL_CERTIFICACIONES_CREAR } from "../../../../constants/constants";
import useAuthStore from "../../../Layouts/stores/useAuthStore";
import { Row, Col } from "react-bootstrap";

const CreateCertificacion = () => {

  const navigate = useNavigate();

  const initialState = {
      Titulo: "",
      InstitucionEducativa: "",
      AñoInicio: "",
      HorasAcademica: "",
      Codigo: "",
      Url: "",
      FotoCertificado: ""
  }
const [datos,setDatos] = useState(initialState)

  // esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);
  // const clearAuth = useAuthStore((state) => state.clearAuth);
 // _______________________________________________________________________

const handleChange =(e)=>{
  setDatos({...datos,[e.target.name]:e.target.value})
  }
const handleSave = async(e) =>{
  e.preventDefault()
  try {
    let response = await axios.post(URL_CERTIFICACIONES_CREAR,{
      Titulo: datos.Titulo,
      InstitucionEducativa: datos.InstitucionEducativa,
      AñoInicio: datos.AñoInicio,
      HorasAcademica: datos.HorasAcademica,
      Codigo: datos.Codigo,
      Url: datos.Url,
      FotoCertificado: datos.FotoCertificado
    } , {
      headers: {
        Authorization:  `Bearer ${token}` // Asegúrate de tener el token adecuado
      }
    }
    )
    if(response){
    alert("Nuevo Certificado Agregado")
     navigate("/certificados");
    }
    
  } catch (error) {
    console.log(error)
  }
}

    return (
      <div>
        <br/>
        <br/>
        <h3 className="text-white">Agregar Nuevo Certificado</h3>
        <br/>
        <hr />
        <br />
        <Row>
        <Col md={{ span: 8, offset: 2 }}>
        {token && userRole === "admin" ? (
        <div className="crearcertificado text-white">
        {/* <form action="" onSubmit={handleSubmit}> */}
        <label htmlFor="">Titulo : </label>
        <input type="text" onChange={handleChange} name="Titulo"/>
        <br/><br/>
        <label htmlFor="">Institucion Educativa : </label>
        <input type="text" onChange={handleChange} name="InstitucionEducativa"/>
        <br/><br/>
        <label htmlFor="">Año de Inicio : </label>
        <input type="text" onChange={handleChange} name="AñoInicio"/>
        <br/><br/>
        <label htmlFor="">Horas Academia : </label>
        <input type="text" onChange={handleChange} name="HorasAcademica"/>
        <br/><br/>
        <label htmlFor="">Codigo : </label>
        <input type="text" onChange={handleChange} name="Codigo"/>
        <br/><br/>
        <label htmlFor="">url : </label>
        <input type="text" onChange={handleChange} name="Url"/>
        <br/><br/>
        <label htmlFor="">Certificado : </label>
        <input type="text" onChange={handleChange} name="FotoCertificado"/>
        <br/><br/>
        <div className="botonescertificado">
        <button onClick={handleSave} className="iconcertificadocrear btn btn-success">GUARDAR</button>
        <Link to={"/certificados"} className="iconcertificadocrear btn btn-warning">VOLVER</Link>
        </div>
        {/* </form> */}
        </div>) : (<p>No tienes permiso para acceder a esta página.</p>
        )}
        </Col>
      </Row>
        </div>
    )
  }
  
  export default CreateCertificacion