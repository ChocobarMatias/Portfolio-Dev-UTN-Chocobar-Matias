import { Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
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
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
    // Limpiar errores al escribir
    if (e.target.name === 'Email') {
      setEmailError('');
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailPattern.test(email);
  };

  const showSuccessAlert = () => {
    Swal.fire({
      title: '¡Mensaje Enviado!',
      text: 'Tu mensaje ha sido enviado correctamente. Te contactaré pronto.',
      icon: 'success',
      confirmButtonText: 'Perfecto',
      background: '#1e293b',
      color: '#f8fafc',
      confirmButtonColor: '#6366f1',
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      }
    });
  };

  const showErrorAlert = (message) => {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      confirmButtonText: 'Entendido',
      background: '#1e293b',
      color: '#f8fafc',
      confirmButtonColor: '#ef4444'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validaciones
    if (!datos.Nombre.trim()) {
      showErrorAlert('Por favor, ingresa tu nombre');
      setIsSubmitting(false);
      return;
    }

    if (!datos.Email.trim()) {
      showErrorAlert('Por favor, ingresa tu email');
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(datos.Email)) {
      setEmailError('Por favor, ingresa un email válido');
      setIsSubmitting(false);
      return;
    }

    if (!datos.Motivo.trim()) {
      showErrorAlert('Por favor, selecciona un motivo');
      setIsSubmitting(false);
      return;
    }

    if (!datos.Comentario.trim()) {
      showErrorAlert('Por favor, escribe un comentario');
      setIsSubmitting(false);
      return;
    }

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
        showSuccessAlert();
      }
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      showErrorAlert('Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contacto" className="contacto-modern">
      <div className="contacto-container">
        <div className="contacto-header">
          <h2 className="contacto-title text-gradient">¡Trabajemos Juntos!</h2>
          <p className="contacto-subtitle">
            ¿Tienes un proyecto en mente? ¿Necesitas un desarrollador Full Stack?
            <br />
            ¡Me encantaría conocer más sobre tu idea y cómo puedo ayudarte!
          </p>
        </div>

        <form className="contacto-form glass-effect" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="Nombre" className="form-label">
                Nombre Completo *
              </label>
              <input 
                type="text" 
                id="Nombre"
                name="Nombre" 
                className="form-input" 
                placeholder="Tu nombre completo"
                value={datos.Nombre} 
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="Empresa" className="form-label">
                Empresa / Organización
              </label>
              <input 
                type="text" 
                id="Empresa"
                name="Empresa" 
                className="form-input" 
                placeholder="Nombre de tu empresa (opcional)"
                value={datos.Empresa} 
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="Email" className="form-label">
              Email de Contacto *
            </label>
            <input 
              type="email" 
              id="Email"
              name="Email" 
              className={`form-input ${emailError ? 'form-input-error' : ''}`}
              placeholder="tu-email@ejemplo.com"
              value={datos.Email} 
              onChange={handleChange}
              required 
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="Motivo" className="form-label">
              Motivo del Contacto *
            </label>
            <select 
              id="Motivo"
              name="Motivo" 
              className="form-select" 
              value={datos.Motivo} 
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Oportunidad Laboral">💼 Oportunidad Laboral</option>
              <option value="Proyecto Freelance">🚀 Proyecto Freelance</option>
              <option value="Consulta Técnica">💡 Consulta Técnica</option>
              <option value="Colaboración">🤝 Colaboración</option>
              <option value="Otro">📋 Otro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="Comentario" className="form-label">
              Cuéntame más sobre tu proyecto *
            </label>
            <textarea 
              id="Comentario"
              name="Comentario" 
              className="form-textarea" 
              rows="5" 
              placeholder="Describe tu proyecto, requisitos, timeline, presupuesto, o cualquier detalle relevante..."
              value={datos.Comentario} 
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <Button 
              type="submit" 
              className={`btn-modern btn-primary ${isSubmitting ? 'btn-loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Enviando...
                </>
              ) : (
                <>
                  📧 Enviar Mensaje
                </>
              )}
            </Button>
          </div>
        </form>

        <div className="contacto-info">
          <p className="info-text">
            <strong>⚡ Respuesta rápida:</strong> Normalmente respondo en menos de 24 horas
          </p>
          <p className="info-text">
            <strong>🎯 Especialidades:</strong> React, Node.js, MySQL, JavaScript, CSS, Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactame;
