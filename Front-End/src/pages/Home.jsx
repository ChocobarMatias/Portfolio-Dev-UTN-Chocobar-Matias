import Header from '../components/Layouts/Header'
import MainPrincipal from '../components/Mains/MainPrincipal'
import Footer from '../components/Layouts/Footer'
import Contactame from '../components/Mains/Contactame'
import MostrarContactame from '../components/MostrarContactame'
import SEOHead from '../components/SEO/SEOHead'

const Home = () => {
  return (
    <>
      <SEOHead 
        title="Matías Chocobar | Portfolio Desarrollador Full Stack | UTN-FRT"
        description="Portfolio profesional de Matías Sebastian Chocobar, graduado UTN-FRT. Desarrollador Full Stack especializado en React, Node.js, MySQL. Disponible para proyectos y oportunidades laborales."
        keywords="Matías Chocobar, desarrollador full stack, programador, React, Node.js, MySQL, UTN, FRT, portfolio, Tucumán, Argentina, JavaScript, CSS, HTML, Bootstrap"
        canonical="/"
      />
      <Header />
      <MainPrincipal />
      <Contactame/>
      <MostrarContactame/>
      <Footer />
    </>
  )
}

export default Home