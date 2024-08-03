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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const mostrar = () => {
    if ((datos.Nombre !== "") && (datos.Email !== "") && (datos.Motivo !== "") && (datos.Comentario !== "") && validateEmail(datos.Email)) {
      setShowAlert(true);
    }
    if (!validateEmail(datos.Email)) {
      setEmailError('Por favor, ingresa una dirección de correo electrónico válida. Ejemplo: usuario@dominio.com');
      setShowErrorAlert(true);
      return;
    }
    setEmailError('');
  }

  const hideAlert = () => { setShowAlert(false); };
  const hideErrorAlert = () => { setShowErrorAlert(false); };

  return (
    <div className="contacto">
      <h3 className="text-white">CONTACTAME</h3>
      <hr />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h3 className="text-white">
            Si te gusto mis proyecto y queres ofrecerme un trabajo, o necesitas alguna
            coloboracion <br /> o ayuda te inivito que llenes el siguiente fomulario en la brevedad me estare comunicando
          </h3>
          <br />
          <div className="form-group">
            <label htmlFor="nombre" className="text-white"><h3>Nombre :</h3></label>
            <input type="text" className="inputContactame" onChange={handleChange} name="Nombre" value={datos.Nombre} required />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="email" className="text-white"><h3>E-Mail : </h3></label>
            <input type="email" className="inputContactame" onChange={handleChange} name="Email" value={datos.Email} required />
            {emailError && <p className="text-danger">{emailError}</p>}
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="motivo" className="text-white"><h3>Motivo : </h3></label>
            <select className="select" onChange={handleChange} name="Motivo" value={datos.Motivo} required>
              <option value="">Seleccione un motivo</option>
              <option value="trabajo">Trabajo</option>
              <option value="consulta">Consulta de Proyecto</option>
              <option value="colaboracion">Colaboracion</option>
            </select>
          </div>
          <br />
          <legend><h3 className="text-white">Agrega un comentario.</h3></legend>
          <textarea className="textarea" rows="5" cols="60" name="Comentario" onChange={handleChange} value={datos.Comentario} required></textarea>
        </fieldset>
        <br />
        <br />
        <Button type="submit" onClick={mostrar} className="btnEnviar">ENVIAR</Button>
      </form>
      {showAlert && (<SweetAlert success title="Gracias" onConfirm={hideAlert}> Envio Exitoso! </SweetAlert>)}
      {showErrorAlert && (
        <SweetAlert danger title="Error" onConfirm={hideErrorAlert}>
          Por favor, ingresa una dirección de correo electrónico válida. Ejemplo: usuario@dominio.com
        </SweetAlert>
      )}
    </div>
  );
};

export default Contactame;
