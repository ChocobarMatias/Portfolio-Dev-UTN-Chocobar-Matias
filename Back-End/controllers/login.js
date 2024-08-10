const { connection } = require("../config/DataBase");
const jwt = require("jsonwebtoken");



// const jwt = require("jsonwebtoken");
require("dotenv").config(); // Asegúrate de tener esto para cargar las variables de entorno

const secretKey = process.env.SECRETKEY; 


//login usuario y contraseña
const login = (req, res) => {
    const { userName, Contraseña } = req.body;
    const query = 'SELECT * FROM Usuarios WHERE userName = ?';
    connection.query(query, [userName], (err, results) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            return res.status(500).json({ message: 'Error del servidor' });
        }

        if (results.length > 0) {
            const user = results[0];
            if (userName === user.userName && Contraseña === user.Contraseña) {
                const token = jwt.sign({ id: user.id_Usuario, role: user.Rol }, process.env.SECRETKEY, { expiresIn: '1h' }, {notBefore: '2s'});
                return res.json({ token });
            } else {
                return res.status(401).json({ message: 'Usuario o contraseña incorrectos 1°' });
            }
        } else {
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }
    });
};

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    
    if (!authHeader) {
      
        return res.status(403).json({ message: "No token provided primero" });
    }
    
    const token = authHeader.split(' ')[1]; // Extract the token from the 'Bearer <token>' format
    
    if (!token) {
        return res.status(403).json({ message: "No token provided" });
    }

  
    jwt.verify(token, secretKey, (err, decoded) => {
      
        if (err) {
            return res.status(500).json({ message: "esto Failed to authenticate token" });
        }
        req.userId = decoded.id;
        req.userRole = decoded.role;
        next();
    });
};



module.exports = { login,verifyToken };
