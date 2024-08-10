import formacion from "../../Img/formacion.jpg";
import experiencia from "../../Img/experiencia.jpeg";
import idioma from "../../Img/idioma.jpeg";
import skill from "../../Img/skill.jpg";
import certificado from "../../Img/certificado.jpeg";
import proyecto from "../../Img/proyecto.jpeg";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "../../CSS/MainPrincipal.css";
import { CERTIFICADO, EXPERIENCIA, FORMACION, IDIOMA, PROYECTO, SKILL } from "../../Routes/routes";

const MainPrincipal = () => {
  return (
    <div className="mainPrincipal">
      <br /><br />
      <div className="contenedormain">
        <Container>
          <Row md={1}>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <div className="formaciionMain">
                <h2 className="form text-white">Formacion</h2>
                <Link to={FORMACION} className="linkformacion">
                  <img className="imagenFormacion" src={formacion} alt="" />
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <div className="idiomamain text-white">
                <h2>Idioma</h2>
                <Link to={IDIOMA}>
                  <img className="imagenIdioma" src={idioma} alt="" />
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <div className="certificadomain text-white">
                <h2>Certificados</h2>
                <Link to={CERTIFICADO}>
                  <img className="imagenCertificado" src={certificado} alt="" />
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <div className="experienciamain text-white">
                <h2>Experiencia</h2>
                <Link to={EXPERIENCIA}>
                  <img className="imagenExperiencia" src={experiencia} alt="" />
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <div className="skillmain text-white">
                <h2>Soft Skill</h2>
                <Link to={SKILL}>
                  <img className="imagenSkill" src={skill} alt="" />
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <div className="proyectomain text-white">
                <h2>Proyectos</h2>
                <Link to={PROYECTO}>
                  <img className="imagenFormacion" src={proyecto} alt="" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MainPrincipal;
