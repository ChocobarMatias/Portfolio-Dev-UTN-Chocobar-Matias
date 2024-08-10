import { Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import '../../CSS/Contactame.css';
import { URL_CONTACTAME_CREAR } from "../../constants/constants";

const Contactame = () => {

  const initialState = {
    Nombre: '',
    Empresa: "",
    Email: '',
    Motivo: '',
    Comentario: ''
  };

  const [datos, setDatos] = useState(initialState);
  const [showAlert, setShowAlert] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [campos, setCampos] = useState("");
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((datos.Nombre !== '') && (datos.Email !== '') && (datos.Motivo !== '') && (datos.Comentario !== '') && validateEmail(datos.Email)) {
      try {
        let response = await axios.post(URL_CONTACTAME_CREAR, {
          Nombre: datos.Nombre,
          Empresa: datos.Empresa,
          Email: datos.Email,
          Motivo: datos.Motivo,
          Comentario: datos.Comentario
        });
        if (response.status === 200) {
          setDatos(initialState);
          setShowAlert(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      if (!validateEmail(datos.Email)) {

        setEmailError('Por favor, ingresa una dirección de correo electrónico válida. Ejemplo: usuario@dominio.com ');
      } else{
        setCampos(' Por favor, completa todos los campos.');
        setEmailError("");
      }
      
      setShowErrorAlert(true);
    }
  };

  const hideAlert = () => { setShowAlert(false); };
  const hideErrorAlert = () => { setShowErrorAlert(false); setEmailError(''); };

  return (
    <div className="contacto"style={{ width: "40%" }}>
      <br />
      <h3 className="text-white">CONTACTAME</h3>
      <hr />
      <br />
      <br />
   
        <fieldset >
          <h3 className="text-white">
            Si te gusto mis proyecto y queres ofrecerme un trabajo, o necesitas alguna
            coloboracion <br /> o ayuda te inivito que llenes el siguiente fomulario en la brevedad me estare comunicando
          </h3>
          <br />
          <div className="form-group">
            <label htmlFor="nombre" className="text-white"><h3>Nombre :</h3></label>
            <input style={{height:"80%", width: "60%" }} type="text" className="inputContactame" onChange={handleChange} name="Nombre" value={datos.Nombre} required />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="email" className="text-white"><h3>E-Mail : </h3></label>
            <input style={{ height:"80%", width: "60%" }}  type="email" className="inputContactame" onChange={handleChange} name="Email" value={datos.Email} required />
            {emailError && <p className="text-danger">{emailError}</p>}
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="motivo" className="text-white"><h3>Motivo : </h3></label>
            <select style={{height:"80%",width: "60%" }} className="select" onChange={handleChange} name="Motivo" value={datos.Motivo} required>
              <option value="">Seleccione un motivo</option>
              <option value="Trabajo">Trabajo</option>
              <option value="Consulta">Consulta de Proyecto</option>
              <option value="Colaboracion">Colaboracion</option>
            </select>
          </div>
          <br />
          <legend><h3 className="text-white">Agrega un comentario.</h3></legend>
          <textarea style={{ width: "95%" }} className="textarea" rows="5" cols="60" name="Comentario" onChange={handleChange} value={datos.Comentario} required></textarea>
        </fieldset>
      
        <Button onClick={ handleSubmit } className="btnEnviar">ENVIAR</Button>
        <br /><br />
    
      {showAlert && (<SweetAlert success title={<span style={{ color: 'black' }}>Gracias</span>} onConfirm={hideAlert}> 
                   <span style={{ color: 'black' }}>Envio Exitoso!</span> 
                   </SweetAlert>)}
      {showErrorAlert && (<SweetAlert danger title={<span style={{ color: 'black' }}>Error</span>}  onConfirm={hideErrorAlert}>
                   <span style={{ color: 'black' }}>{ emailError+","+campos}</span>
                   </SweetAlert>)}
    </div>
  );
};

export default Contactame;
