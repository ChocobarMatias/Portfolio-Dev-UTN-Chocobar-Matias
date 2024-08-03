import {useState} from "react"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"
import "../../../../CSS/Idioma.css"
import {Row, Col} from "react-bootstrap"
import { URL_IDIOMAS_CREAR } from "../../../../constants/constants"
import { IDIOMA } from "../../../../Routes/routes"

const CreateIdioma = () => {
const navigate = useNavigate();

const initialState = {
      IdiomaNuevo: "",
      Nivel: ""
}
const [datos,setDatos] = useState(initialState)

const handleChange = (e)=>{setDatos({...datos,[e.target.name]:e.target.value})}

const handleSubmit = async(e)=>{
  e.preventDefault()
  try {
    let response = await axios.post(URL_IDIOMAS_CREAR,{
      IdiomaNuevo: datos.IdiomaNuevo,
      Nivel: datos.Nivel
    })
    if (response) {
      alert("Idioma creado de forma existente")
      navigate(IDIOMA)
    } 
    
  } catch (error) {
    console.log(error)
  }}
  return (
    <div>
      <br/>
      <br/>
      <h3 className="text-white">Agregar Idioma que maneja</h3>
      <br/>
      <hr />
      <br />
      <Row>
      <form action="" onSubmit={handleSubmit}>
      <Col md={1}></Col>
        <Col md={10}>
      <div className="crearIdioma text-white"> 
      <label htmlFor="">Idioma Nuevo : </label>
        <input type="text" onChange={handleChange} name="IdiomaNuevo"/>
        <br /><br />
        <label htmlFor="">Nivel : </label>
        <input type="text" onChange={handleChange} name="Nivel"/>
        <br /><br /></div>
        </Col>
        <Col md={1}></Col>
        <Row>
          <Col md={3}></Col>
        <Col md={3}>
          <br />
          <div>
        <button type="submit" className="iconcrearidioma btn btn-success">GUARDAR</button>
        <br /></div></Col>
        <Col md={1}>
        <div><br />
          <div>
        <Link to={IDIOMA} className="iconcrearidioma btn btn-warning">VOLVER</Link></div>
        </div></Col></Row>
      </form></Row>
    </div>
  )
}

export default CreateIdioma
