import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, Link,useParams } from "react-router-dom";
import "../../../../CSS/Formacion.css";
import { Row, Col } from "react-bootstrap";
import { URL_FORMACIONES, URL_FORMACIONES_EDITAR } from "../../../../constants/constants";
import { FORMACION } from "../../../../Routes/routes";
import useAuthStore from "../../../Layouts/stores/useAuthStore";

// import {useState, useEffect} from "react";

// import axios from "axios";
// import "../../../../CSS/Formacion.css"
// import {Row, Col} from "react-bootstrap"
// import { URL_FORMACIONES, URL_FORMACIONES_EDITAR } from "../../../../constants/constants";
// import { FORMACION } from "../../../../Routes/routes";

const UpdateFormacion = () => {

  const navigate = useNavigate();

  const initialState = {
    Titulo: "",
    InstitucionEducativa: "",
    AñoInicio: "",
    AñoFinEstimado: "",
    Estado: "",
    Logo: ""
  };

  const [datos, setDatos] = useState(initialState);
  const {id} = useParams();

    // _______________________________________________________________________
    const token = useAuthStore((state) => state.token);
    const userRole = useAuthStore((state) => state.userRole);
    // const clearAuth = useAuthStore((state) => state.clearAuth);
   // _______________________________________________________________________

  const getDatos = async ()=>{
  let response = await axios.get(`${URL_FORMACIONES}/${id}`)
  setDatos(response.data[0])
   }

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault()
    try {
      let response = await axios.put(URL_FORMACIONES_EDITAR+id, datos, {
        headers: {
          Authorization:  `Bearer ${token}` // Asegúrate de tener el token adecuado
        }
      });
      if (response) {
        alert("Formacion Academica Agregada Correctamente");
        navigate(FORMACION);
      }
    } catch (error) {
      console.log(error);
    }
  };


// const navigate = useNavigate()

//   const initialState = {
//     Titulo: "",
//     InstitucionEducativa: "",
//     AñoInicio: "",
//     AñoFinEstimado: "",
//     Estado: "",
//     Logo:""
//   }

// const [datos,setDatos]=useState(initialState)

// const {id} = useParams();

// const getDatos = async ()=>{
//   let response = await axios.get(`${URL_FORMACIONES}/${id}`)
//   setDatos(response.data[0])
// }

// const handleSubmit = async (e) =>{
// e.preventDefault()
// try{
// let response = await axios.put(URL_FORMACIONES_EDITAR+id,datos)
// if(response){
// alert("Actualizado correctamente")
// navigate(FORMACION)
// }
// }catch (error){
//   console.log(error)
// }}

// const handleChange =(e)=>{
//   setDatos({...datos,[e.target.name]:e.target.value})
// }

useEffect(()=>{getDatos()},[]);
  return (

<div>
      <hr />
      <br />
      <br />
      <h3 className="text-white">Editar Formacion Academica</h3>
      <br />
      <hr />
      <br />
      <br />
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
        {token && userRole === "admin" ? (
          <div className="crearFormacion text-white">
            <label className="label" htmlFor="Titulo">Título :</label>
            <input className="input" type="text" onChange={handleChange} name="Titulo" value={datos.Titulo} />
            <br /><br />
            <label htmlFor="InstitucionEducativa">Entidad Académica :</label>
            <input className="input" type="text" onChange={handleChange} name="InstitucionEducativa" value={datos.InstitucionEducativa} />
            <br /><br />
            <label htmlFor="AñoInicio">Año de Inicio :</label>
            <input className="input" type="text" onChange={handleChange} name="AñoInicio" value={datos.AñoInicio} />
            <br /><br />
            <label htmlFor="AñoFinEstimado">Año de Fin Estimado :</label>
            <input className="input" type="text" onChange={handleChange} name="AñoFinEstimado" value={datos.AñoFinEstimado} />
            <br /><br />
            <label htmlFor="Estado">Estado :</label>
            <input className="input" type="text" onChange={handleChange} name="Estado" value={datos.Estado} />
            <br /><br />
            <label htmlFor="Logo">Logo :</label>
            <input className="input" type="text" onChange={handleChange} name="Logo" value={datos.Logo} />
            <br /><br />
            <div>
              <button onClick={handleSave} className="btncrearfor btn btn-success">Guardar</button>
              <Link to={FORMACION} className="btncrearfor btn btn-warning">Volver</Link>
            </div>
          </div>) : (<p>No tienes permiso para acceder a esta página.</p>
        )}
        </Col>
      </Row>
    </div>


    // <div>
    //   <br/>
    //   <br/>
    //   <h3 className="text-white">Agregar Formacion Academica</h3>
    //   <br/>
    //   <Row>
    //   <form action="" className="text-white"onSubmit={handleSubmit}>
    //     <br />
    //   <Col md={1}></Col>
    //     <Col md={10}>
    //     <div className="actualizarFormacion"> 
    //     <label className="label" htmlFor=""><h3>Titulo : </h3></label>
    //     <input className="input" type="text" onChange={handleChange} name="Titulo" value={datos.Titulo}/>
    //     <br/><br/>
    //     <label className="label" htmlFor=""><h3>Entidad Academica : </h3></label>
    //     <input className="input" type="text" onChange={handleChange} name="InstitucionEducativa" value={datos.InstitucionEducativa}/>
    //     <br/><br/>
    //     <label className="label" htmlFor=""><h3>Año de Inicio : </h3></label>
    //     <input className="input" type="text" onChange={handleChange} name="AñoInicio" value={datos.AñoInicio}/>
    //     <br/><br/>
    //     <label className="label" htmlFor=""><h3>Año de Fin Estimado : </h3></label>
    //     <input className="input" type="text" onChange={handleChange} name="AñoFinEstimado" value={datos.AñoFinEstimado}/>
    //     <br/><br/>
    //     <label className="label" htmlFor=""><h3>Estado : </h3></label>
    //     <input className="input" type="text" onChange={handleChange} name="Estado" value={datos.Estado}/>
    //     <br/><br/>
    //     <label className="label" htmlFor=""><h3>Logo : </h3></label>
    //     <input className="input" type="text" onChange={handleChange} name="Logo" value={datos.Logo}/>
    //     <br/></div><br/>
    //     <br />
    //     </Col>
    //     <Col md={1}></Col>
    //     <Row>
    //       <Col md={3}></Col>
    //     <Col md={3}>
    //     <button type="submit" className="btnactfor btn btn-success">Guardar</button>
    //     </Col>
    //     <Col md={1}>
    //     <div>
        
    //     <Link to={FORMACION} className="btnactfor btn btn-warning">Volver</Link>
    //     </div></Col> </Row>
    //     </form></Row>
    // </div>
  )
}

export default UpdateFormacion
