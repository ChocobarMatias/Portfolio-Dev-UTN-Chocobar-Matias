import { useState } from 'react';
import { Form} from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import useAuthStore from '../Layouts/stores/useAuthStore';
import "../../CSS/Login.css";
import { URL_LOGIN } from '../../constants/constants';
import { HOME, RECUPERAR } from '../../Routes/routes';

const MainLogin = () => {
  const [userName, setUserName] = useState('');
  const [Contraseña, setContraseña] = useState('');
  const setToken = useAuthStore((state) => state.setToken);
  const setUserRole = useAuthStore((state) => state.setUserRole);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URL_LOGIN, { userName, Contraseña });
      setToken(response.data.token);
      const decodedToken = JSON.parse(atob(response.data.token.split('.')[1]));
      setUserRole(decodedToken.role);
      navigate(HOME);
    } catch (error) {
      console.error('Login incorrecto:', error);
      alert('Usuario o contraseña incorrectos');
   
    }
  };

  return (
    <div>
      <br /><br /><br /><br />
      <div className="box">
        <div className="box2">
          <Form onSubmit={handleSubmit}>
            <div className="title">
              <h2>Login Form</h2>
            </div>

            <div className="input-box">
                   <label className="label-color">User name</label>
                   <input type="text" placeholder="username" onChange={(e) => setUserName(e.target.value)} required />
                   <br />
                   <label className="label-color">Password</label>
                   <input type="password" placeholder="Password" onChange={(e) => setContraseña(e.target.value)} required />
                   <br /><br />
                   <input type="submit" className="Login" value="Login" />
                   <br />
                   <p className="link-text">Forget password? <Link to={RECUPERAR}>Click Here</Link></p>              
            </div> 
          </Form>
        </div>
      </div>
      <br />
    </div>
  );
};

export default MainLogin;
