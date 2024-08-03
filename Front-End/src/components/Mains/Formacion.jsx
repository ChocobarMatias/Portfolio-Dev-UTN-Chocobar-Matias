import {Card,Button} from "react-bootstrap"
import {useState, useEffect} from "react"
import axios from "axios"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import {Link} from "react-router-dom";
import "../../CSS/Formacion.css"
import NavOpciones from "../Layouts/NavOpciones";
import {Row,Col} from "react-bootstrap"
import {URL_FORMACIONES, URL_FORMACIONES_ELIMINAR} from "../../constants/constants"
import { CREAR_FORMACION } from "../../Routes/routes";
import useAuthStore from "../Layouts/stores/useAuthStore";//hook que cree los estados globales


function Formacion() {

const [formaciones, setFormaciones] = useState([]);
// esto es necesario para generar el token y ver usuarios admin tengan previlegios
// _______________________________________________________________________
const token = useAuthStore((state) => state.token);
const userRole = useAuthStore((state) => state.userRole);
const clearAuth = useAuthStore((state) => state.clearAuth);
// _______________________________________________________________________
 
  const getFormaciones = async () =>{
  let response = await axios.get(URL_FORMACIONES)
  console.log(response.data);
  setFormaciones(response.data)
}

const handleClick= async (id)=>{

try {
            //  con este token aqui hago que solo usuario admin pueda hacer eliminaciones
      let response = await axios.delete(URL_FORMACIONES_ELIMINAR+id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },})
  if(response){
    alert("Eliminado Correctamente")
    getFormaciones()
    } 
  }catch(error){
console.log(error);}}

useEffect(()=>{getFormaciones()},[]);
// funcion para que si no es admin y no se genero token no muestre 
const handleLogout = () => {
  clearAuth();
};

  return (
    <div>
      <br />
      <br />
      <div>
      <NavOpciones/></div>
      <br />
      <br />
  
      <hr className="hr" />
      <div>
      <h3 className="formacion text-white">FORMACION :{token && userRole === "admin" && (<Link to={CREAR_FORMACION}>
      <IoMdAddCircleOutline className="botoncrearfor"/></Link>)}</h3>
      <Button onClick={handleLogout} className="btn btn-secondary">
        Cerrar Sesión
      </Button>
      </div>
      <br />
      <br />
     
      <div className="contenedorFormacion">
        <div className="CardFormaciones">
         
      {formaciones.map(formacion => <Card className="CardF text-white" key={formacion.id_Formacion} style={{ width: '80rem'  }} >
          <Card.Body >
            <Row>
              <Col md={2}>
                <br /><br />
            <Card.Img variant="top" src={formacion.Logo} style={{ width: "150px", height: "150px" }} />
            </Col>
            <Col md={9}>
            <Card.Title><h2>{formacion.id_Formacion} - {formacion.Titulo}</h2></Card.Title>
            <Card.Subtitle className="mb-2 text-center"><h3>{formacion.InstitucionEducativa}</h3></Card.Subtitle>
            <Card.Text>
            <h3>Año Inicio : {formacion.AñoInicio} – Año Finalizacion : {formacion.AñoFinEstimado} </h3></Card.Text>
            <Card.Text><h3>(Estado : {formacion.Estado})</h3></Card.Text>
            </Col>
            <Col md={1}>
            {token && userRole === "admin" && (<><Link to={`/formaciones/edit/${formacion.id_Formacion}`} className="btn btn-warning" ><FaEdit className="boto2for"/></Link> 
            <br /><br /><br /><br />
            <Button onClick={(()=>handleClick(formacion.id_Formacion))} className="btn btn-danger"><MdDelete className="boto2for"/></Button> </>)}
            </Col>
            </Row>
          </Card.Body><br /></Card> )} <br />
          <br/></div>
          </div>  
    </div>
  );
}

export default Formacion