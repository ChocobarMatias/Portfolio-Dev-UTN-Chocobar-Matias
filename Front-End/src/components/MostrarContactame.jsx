import {useState, useEffect} from "react"
import axios from "axios";
import {Table,Row} from "react-bootstrap";
import { URL_CONTACTAME} from "../constants/constants";
import useAuthStore from "../components/Layouts/stores/useAuthStore";//hook que cree los estados globales



const MostrarContactame = () => {

const [mostrar, setMostrar] = useState([]);
 // esto es necesario para generar el token y ver usuarios admin tengan previlegios
  // _______________________________________________________________________
  const token = useAuthStore((state) => state.token);
  const userRole = useAuthStore((state) => state.userRole);

  // _______________________________________________________________________


const getMostrar = async() =>{
let response = await axios.get(URL_CONTACTAME);
console.log(response.data);
setMostrar(response.data);
}

useEffect(()=>{getMostrar()},[])

  return (
    <div>
      <br />
      <br />
      <hr />
      <div className="contenedorIdioma text-white">
      {token && userRole === "admin" && (
          <Row> <h3>Tabla de Contactame</h3>
      {mostrar.map(mostra =>
      
      <Table key={mostra.id_Contactame} >
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>E-Mail</th>
          <th>Motivo</th>
          <th>Comentario</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{mostra.id_Contactame}</td>
          <td>{mostra.Nombre}</td>
          <td>{mostra.Email}</td>
          <td>{mostra.Motivo}</td>
          <td>{mostra.Comentario}</td>
        </tr>
      </tbody>
    </Table>
    )}</Row>  )}
     <hr />
        </div>
        
    </div>
  )
}

export default MostrarContactame