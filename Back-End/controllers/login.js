const { connection } = require("../config/DataBase");
const jwt = require("jsonwebtoken");
const {mailRecuperar} = require("../config/Recuperar")
const dotenv = require("dotenv")

dotenv.config()
// require("dotenv").config(); // Asegúrate de tener esto para cargar las variables de entorno

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

const recuperar = (req, res) => {
    const { userName, Email } = req.body;
    const query = 'SELECT * FROM Usuarios WHERE userName = ?';

    connection.query(query, [userName], (err, results) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            return res.status(500).json({ message: 'Error del servidor' });
        }

        if (results.length > 0) {
            const user = results[0];
            if (userName === user.userName && Email === user.Email) {

                const mailOptions = {
                    from: process.env.FROM,
                    to: Email,
                    subject: `Mi Portfolio - Recuperar Contraseña de ${user.userName}`,
                    text: `
                        Mail para recuperar la contraseña de mi portfolio

                        Usuario: ${user.userName}

                        Email: ${user.Email}

                        Contraseña: ${user.Contraseña}.
                    `
                };

                mailRecuperar.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error('Error al enviar el correo:', error);
                        return res.status(500).send('Error al enviar el correo');
                    }
                    res.status(200).json({message:'Mensaje enviado correctamente'});
                }); 
            } else {
                return res.status(401).json({ message: 'Usuario o email incorrectos' });
            }
        } else {
            return res.status(401).json({ message: 'Usuario o email incorrectos' });
        }
    });
};


module.exports = { login,verifyToken,recuperar };
