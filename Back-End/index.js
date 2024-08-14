const express = require("express");
const { connection } = require("./config/DataBase");
const certificaciones = require("./routes/certificaciones");
const contactame = require("./routes/contactame");
const experiencias = require("./routes/experiencias");
const formaciones = require("./routes/formaciones");
const idiomas = require("./routes/idiomas");
const proyectos = require("./routes/proyectos");
const skills = require("./routes/skills");
const usuarios = require("./routes/usuarios");
const login = require("./routes/login");
const cors = require("cors");
const bodyParser = require('body-parser'); 
const dotenv = require("dotenv")

dotenv.config()// elemento para que me lleguen los correos

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json()); // elemento para que me lleguen los correos

// Configurar middleware
app.use(cors());
app.use(express.json());

// Middleware para verificar el token


// Montando las rutas en sus respectivos endpoints
app.use("/", certificaciones, contactame, experiencias, formaciones, idiomas, proyectos, skills, usuarios,login);

// Conectar a MySQL
connection.connect((error) => {
    if (error) {
        console.error("Error conectando a MySQL:", error);
        return;
    }
    console.log("Conectado a MySQL");
});

// Ruta base
app.get("/", (req, res) => {
    console.log("API funcionando");
    
    res.send({ message: "API - Porfolio" });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}\nIngresar: http://localhost:${port}/`);
});


