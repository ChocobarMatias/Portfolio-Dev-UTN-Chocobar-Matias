import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../../CSS/Login.css";
import SweetAlert from 'react-bootstrap-sweetalert';
import { LOGIN } from '../../Routes/routes';
import { URL_RECUPERAR } from '../../constants/constants';

const MainLogin = () => {
  const [userName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [campos, setCampos] = useState("");
  const [emailError, setEmailError] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((userName !== '') && (Email !== '') && validateEmail(Email)) {
    try {
      const response = await axios.post(URL_RECUPERAR, { userName, Email });
      
      if (response.status === 200) {
        setShowAlert(true);
        alert('Correo de recuperación enviado con éxito'+showAlert);
        navigate(LOGIN);
        
      }
    } catch (error) {
      console.error('Error en la recuperación de contraseña:', error);
      alert('Error al intentar recuperar la contraseña. Por favor, verifica tus datos.');
      setShowErrorAlert(true);
    }
  } else {
    if (!validateEmail(Email)) {

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
    <div>
      <br /><br /><br /><br />
      <div className="box">
        <div className="box2">
          <Form onSubmit={handleSubmit}>
            <div className="title">
              <h2>Recover Password</h2>
            </div>
        
            <div className="input-box">
              <label className="label-color">User name</label>
              <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
              <br />
              <label className="label-color">Email</label>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
              {emailError && <p className="text-danger">{emailError}</p>}
              <br /><br />
              <input type="submit" className="Login" value="Recover Password" />
              <br />
            </div> 
          </Form>
        </div>
      </div>
      <br />
      {showAlert===true && (<SweetAlert success title={<span style={{ color: 'black' }}>Gracias</span>} onConfirm={hideAlert}> 
                   <span style={{ color: 'black' }}>Envio Exitoso!</span> 
                   </SweetAlert>)}
      {showErrorAlert && (<SweetAlert danger title={<span style={{ color: 'black' }}>Error</span>}  onConfirm={hideErrorAlert}>
                   <span style={{ color: 'black' }}>{ emailError+","+campos}</span>
                   </SweetAlert>)}
    </div>
  );
};

export default MainLogin;
