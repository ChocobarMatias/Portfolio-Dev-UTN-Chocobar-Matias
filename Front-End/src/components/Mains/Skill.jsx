import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import NavOpciones from "../Layouts/NavOpciones";
import {Row, Col,Card} from "react-bootstrap"
import "../../CSS/Skill.css"
import {URL_SKILLS, URL_SKILLS_ELIMINAR} from "../../constants/constants"
import { CREAR_SKILL } from "../../Routes/routes";
import useAuthStore from "../Layouts/stores/useAuthStore";//hook que cree los estados globales

const Skill = () => {

const [skills, setSkills] = useState([]);
// esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);

  // _______________________________________________________________________

const getSkill = async()=>{
let response = await axios.get(URL_SKILLS);
console.log(response.data);
setSkills(response.data);
}
const handleClick = async(id)=>{
try {
   //  con este token aqui hago que solo usuario admin pueda hacer eliminaciones
  let response = await axios.delete(URL_SKILLS_ELIMINAR+id, {
    headers: {
      Authorization: `Bearer ${token}` // Asegúrate de tener el token adecuado
    },})
if (response) {
  alert("Skill eliminado")
  getSkill()
}
} catch (error) {
  console.log(error)
}}
useEffect(()=>{getSkill()},[])


  return (
    <div>
      <br /><br />
      <NavOpciones/><br />
  <h3 className="text-white">SKILL :{token && userRole === "admin" && (<Link to = {CREAR_SKILL}>
  <IoMdAddCircleOutline className="btnCrear text-white"/></Link>)}</h3>
  <hr />
  
    <div className="containerSkill">
    <Row md={3}>
   {skills.map(skill =><Card className="CardSkill text-white" key={skill.id_Skill} style={{ width: '20rem'  }} >
  <Card.Body >

<br /><br />
  <Col md={18}>
  
  <Card.Img variant="top" src={skill.LogoSkill} style={{ width: "150px", height: "150px" }} />
  <br />
  <Card.Title><h2>{skill.id_Skill} - {skill.NombreSkill}</h2></Card.Title>
  </Col>

<br />
{token && userRole === "admin" && (<><Link to={`/skills/edit/${skill.id_Skill}`} className="btn btn-warning"><FaEdit className="btnskill"/></Link> 
<Button onClick={(()=>handleClick(skill.id_Skill))} className="btn btn-danger"><MdDelete className="btnskill"/></Button> </>)}
</Card.Body><br /></Card> )}

</Row>
</div>
<br />
      
</div>
  )
}

export default Skill