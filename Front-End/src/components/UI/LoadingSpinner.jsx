import PropTypes from 'prop-types';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'md', color = 'primary', text = 'Cargando...' }) => {
  return (
    <div className={`loading-container loading-${size}`}>
      <div className={`spinner spinner-${color}`}>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['primary', 'secondary', 'accent']),
  text: PropTypes.string
};

export default LoadingSpinner;
