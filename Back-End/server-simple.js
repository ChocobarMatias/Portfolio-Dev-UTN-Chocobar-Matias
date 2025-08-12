const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Datos de ejemplo para el frontend
const mockData = {
  contactame: [
    {
      id: 1,
      nombre: "Ejemplo",
      email: "ejemplo@email.com",
      mensaje: "Mensaje de ejemplo"
    }
  ],
  certificados: [],
  experiencias: [],
  formaciones: [],
  idiomas: [],
  proyectos: [],
  skills: [],
  usuarios: []
};

// Rutas básicas
app.get("/", (req, res) => {
  console.log("API funcionando");
  res.send({ message: "API - Portfolio - Servidor Simple" });
});

app.get("/contactame", (req, res) => {
  console.log("GET /contactame");
  res.json(mockData.contactame);
});

app.get("/certificados", (req, res) => {
  console.log("GET /certificados");
  res.json(mockData.certificados);
});

app.get("/experiencias", (req, res) => {
  console.log("GET /experiencias");
  res.json(mockData.experiencias);
});

app.get("/formaciones", (req, res) => {
  console.log("GET /formaciones");
  res.json(mockData.formaciones);
});

app.get("/idiomas", (req, res) => {
  console.log("GET /idiomas");
  res.json(mockData.idiomas);
});

app.get("/proyectos", (req, res) => {
  console.log("GET /proyectos");
  res.json(mockData.proyectos);
});

app.get("/skills", (req, res) => {
  console.log("GET /skills");
  res.json(mockData.skills);
});

app.get("/usuarios", (req, res) => {
  console.log("GET /usuarios");
  res.json(mockData.usuarios);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`✅ Servidor simple iniciado en puerto ${port}`);
  console.log(`🌐 Acceso: http://localhost:${port}/`);
  console.log(`📊 API funcionando sin base de datos`);
});
