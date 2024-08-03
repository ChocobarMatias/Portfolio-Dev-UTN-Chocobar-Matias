
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HOME, LOGIN, ERROR,CERTIFICADO, EXPERIENCIA, FORMACION, IDIOMA, PROYECTO, SKILL,CREAR_FORMACION, EDITAR_FORMACION, CREAR_EXPERIENCIA, EDITAR_EXPERIENCIA, CREAR_IDIOMA, EDITAR_IDIOMA, CREAR_SKILL, EDITAR_SKILL,
  CREAR_CERTIFICADO, EDITAR_CERTIFICADO, CREAR_PROYECTO, EDITAR_PROYECTO} from "./Routes/routes";
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Error from "./components/Mains/Error";
import CrearFormacion from "./pages/Formaciones/CrearFormacion";
import EditarFormacion from "./pages/Formaciones/EditarFormacion";
import CrearExperiencia from "./pages/Experiencias/CrearExperiencia";
import EditarExperiencia from "./pages/Experiencias/EditarExperiencia";
import CrearIdioma from "./pages/Idiomas/CrearIdioma";
import EditarIdioma from "./pages/Idiomas/EditarIdioma";
import CrearCertificado from "./pages/Certificados/CrearCertificado";
import CrearSkill from "./pages/Skills/CrearSkill";
import EditarSkill from "./pages/Skills/EditarSkill";
import EditarCertificado from "./pages/Certificados/EditarCertificado";
import CrearProyecto from "./pages/Proyectos/CrearProyecto";
import EditarProyecto from "./pages/Proyectos/EditarProyecto";
import HomeExperiencia from "./pages/Experiencias/HomeExperiencia";
import HomeIdioma from "./pages/Idiomas/HomeIdioma";
import HomeSkill from "./pages/Skills/HomeSkill";
import HomeCertificado from "./pages/Certificados/HomeCertificado";
import HomeProyecto from "./pages/Proyectos/HomeProyecto";
import HomeFormacion from "./pages/Formaciones/HomeFormacion";
import ProtectedRoute from "./components/Layouts/stores/ProtectedRoute"; // Importa el componente ProtectedRoute

function App() {
 
const roleRequired = "admin"

  return (
    <div className="fondo">
      <BrowserRouter>
        <Routes>
          {/* Rutas públicas en estas rutas pueden ingresar usuario comun sin problema es lo que pueden ver y hacer*/}
          <Route path={LOGIN} element={<Login />} />
          <Route path="/" index element={<Home/>} />
          <Route path={HOME} element={<Home />} />
          <Route path={FORMACION} element={<HomeFormacion />} />
          <Route path={EXPERIENCIA} element={<HomeExperiencia />} />
          <Route path={IDIOMA} element={<HomeIdioma />} />
          <Route path={SKILL} element={<HomeSkill />} />
          <Route path={CERTIFICADO} element={<HomeCertificado />} />
          <Route path={PROYECTO} element={<HomeProyecto />} />
          <Route path={ERROR} element={<Error />} />

          {/* Rutas protegidas */}
          {/* <Route element={<ProtectedRoute roleRequired ={roleRequired} />}> */}
            <Route path={CREAR_FORMACION} element={<ProtectedRoute roleRequired ={roleRequired} ><CrearFormacion /></ProtectedRoute>} />
            <Route path={EDITAR_FORMACION} element={<ProtectedRoute roleRequired ={roleRequired} ><EditarFormacion /></ProtectedRoute>} />
            <Route path={CREAR_EXPERIENCIA} element={<ProtectedRoute roleRequired ={roleRequired} ><CrearExperiencia /></ProtectedRoute>} />
            <Route path={EDITAR_EXPERIENCIA} element={<ProtectedRoute roleRequired ={roleRequired} ><EditarExperiencia /></ProtectedRoute>} />
            <Route path={CREAR_IDIOMA} element={<ProtectedRoute roleRequired ={roleRequired} ><CrearIdioma /></ProtectedRoute>} />
            <Route path={EDITAR_IDIOMA} element={<ProtectedRoute roleRequired ={roleRequired} ><EditarIdioma /></ProtectedRoute>} />
            <Route path={CREAR_SKILL} element={<ProtectedRoute roleRequired ={roleRequired} ><CrearSkill /></ProtectedRoute>} />
            <Route path={EDITAR_SKILL} element={<ProtectedRoute roleRequired ={roleRequired} ><EditarSkill /></ProtectedRoute>} />
            <Route path={CREAR_CERTIFICADO} element={<ProtectedRoute roleRequired ={roleRequired} ><CrearCertificado /></ProtectedRoute>} />
            <Route path={EDITAR_CERTIFICADO} element={<ProtectedRoute roleRequired ={roleRequired} ><EditarCertificado /></ProtectedRoute>} />
            <Route path={CREAR_PROYECTO} element={<ProtectedRoute roleRequired ={roleRequired} ><CrearProyecto /></ProtectedRoute>} />
            <Route path={EDITAR_PROYECTO} element={<ProtectedRoute roleRequired ={roleRequired} ><EditarProyecto /></ProtectedRoute>} />
          

          {/* Ruta no autorizada */}
          <Route path="/unauthorized" element={<div><h3>No autorizado</h3></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
