import {useState, useEffect} from "react"
import axios from "axios";
import {Card, Button,Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import NavOpciones from "../Layouts/NavOpciones";
import Footer from "../Layouts/Footer"
import {CREAR_IDIOMA} from "../../Routes/routes"
import { URL_IDIOMAS, URL_IDIOMAS_ELIMINAR} from "../../constants/constants"
import "../../CSS/Idioma.css"
import useAuthStore from "../Layouts/stores/useAuthStore";//hook que cree los estados globales


const Idioma = () => {

const [idiomas, setIdiomas] = useState([]);
 // esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);

  // _______________________________________________________________________


const getIdioma = async() =>{
let response = await axios.get(URL_IDIOMAS);
console.log(response.data);
setIdiomas(response.data);
}
const handleClick = async(id) =>{
try {
   //  con este token aqui hago que solo usuario admin pueda hacer eliminaciones
  let response = await axios.delete(URL_IDIOMAS_ELIMINAR+id,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response) {
    alert("Eliminado Correctamente")
    getIdioma()
  }
} catch (error) {
  console.log(error)
}}
useEffect(()=>{getIdioma()},[])

  return (
    <div>
      <br /><br />
      <NavOpciones/>
      <br />
      <div className="idiomaprincipal">
      <div className="idioma">               {/*Ternario para mostrar el boton de crear solo cuando sea usuario admin*/}
      <h3 className=" text-white text-center">IDIOMAS :{token && userRole === "admin" && (<Link to={CREAR_IDIOMA}>
      <IoMdAddCircleOutline className="iconidioma"/></Link>)}</h3>
      </div>
      <hr />
      <div className="contenedorIdioma text-white">
          <Row>
      {idiomas.map(idioma =><Card className="CardIdioma text-white" key={idioma.id_Idioma} style={{ width: '80rem' }} >
          <Card.Body >
            <Row>
              <Col>
            <Card.Title><h2>{idioma.id_Idioma} - Idioma : {idioma.IdiomaNuevo}</h2></Card.Title>
            <Card.Subtitle className="mb-2 text-center"><h2>Nivel : {idioma.Nivel}</h2></Card.Subtitle>
            {token && userRole === "admin" && (<><Link to={`/idiomas/edit/${idioma.id_Idioma}`} className="btn btn-warning"><FaEdit className="iconidioma"/></Link> 
            <Button onClick={(()=>handleClick(idioma.id_Idioma))} className="btn btn-danger"><MdDelete className="iconidioma"/></Button></>)}
            </Col></Row>
          </Card.Body>
        </Card>)}</Row>
        </div></div>
      <Footer/>
      
    </div>
  )
}

export default Idioma