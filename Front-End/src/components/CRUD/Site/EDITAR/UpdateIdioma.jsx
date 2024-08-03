import axios from "axios"
import {useState,useEffect} from "react"
import { useParams,useNavigate,Link } from "react-router-dom"
import {Row, Col} from "react-bootstrap"
import "../../../../CSS/Idioma.css"
import { URL_IDIOMAS, URL_IDIOMAS_EDITAR } from "../../../../constants/constants"
import { IDIOMA } from "../../../../Routes/routes"

const UpdateIdioma = () => {
const navigate = useNavigate();

const initialState ={
  IdiomaNuevo :"",
  Nivel:""
}
const [datos,setDatos] = useState(initialState)
const {id} = useParams();

const getDatos = async() =>{
let response = await axios.get(`${URL_IDIOMAS}/+${id}`)
setDatos(response.data[0])
}
const handleSubmit = async(e) =>{
  
e.preventDefault()
try {
  let response = await axios.put(URL_IDIOMAS_EDITAR+id,{
    IdiomaNuevo: datos.IdiomaNuevo,
    Nivel: datos.Nivel
  })
  if (response) {
    alert("Idioma Actualizado")
    navigate(IDIOMA)
  }
} catch (error) {
  console.log(error)
}
}

const handleChange = (e) =>{
setDatos({...datos,[e.target.name]:e.target.value})
}


useEffect(()=>{getDatos()},[]);
    return (
      <div>
        <br /><br />
        <h3 className="text-white">Actualizar Idioma</h3>
        <br/>
        <hr />
        <br />
         <Row>
<form action="" onSubmit={handleSubmit}>
<Col md={1}></Col>
        <Col md={10}>
        <div className="actualizarIdioma text-white"> 

  <br /><br />
  <label htmlFor="">Idioma Nuevo : </label>
  <input type="text" onChange={handleChange} name="IdiomaNuevo" value={datos.IdiomaNuevo}/>
  <br /><br />
  <label htmlFor="">Nivel</label>
  <input type="text" onChange={handleChange} name="Nivel" value={datos.Nivel}/>
  <br /></div><br />
  </Col>
        <Col md={1}></Col>
        <Row>
          <Col md={3}></Col>
        <Col md={3}>
  <button type="submit" className="idiomabotonact btn btn-success">GUARDAR</button>
  <Link to={IDIOMA} className="idiomabotonact  iconcrearidioma btn btn-warning">VOLVER</Link>
  </Col></Row>
</form></Row>
      </div>
    )
  }
  
  export default UpdateIdioma