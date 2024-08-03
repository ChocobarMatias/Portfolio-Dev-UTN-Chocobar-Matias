import {memo} from "react";
import {Link} from "react-router-dom"
import {Row,Col} from "react-bootstrap"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = memo(function Footer() {
  return (
    <div className="footer">
      <br /><br />
<hr />
<div className="contenedorfooter">
<Row md={1}>
<Col md={3}></Col>
  <Col md={6}>
<h4 className="text-white">© Mi Porfolio Chocobar Matias Sebastian - Derechos reservados 2024</h4></Col>
<Col md={1}>
<h2 className="socialContainer text-white"><Link to={"https://www.linkedin.com/in/matias-sebastian-chocobar/"}><FaLinkedin className="redes text-white"/></Link></h2>
</Col>
<Col md={1}>
<h2 className="socialContainer text-white"><Link to={"https://github.com/ChocobarMatias"}><FaGithub className="redes text-white"/></Link></h2></Col>

<Col></Col>
</Row>
</div>

    </div>
  )
})

export default Footer