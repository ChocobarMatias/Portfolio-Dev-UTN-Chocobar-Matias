import Header from '../components/Layouts/Header'
import MainPrincipal from '../components/Mains/MainPrincipal'
import Footer from '../components/Layouts/Footer'
import Contactame from '../components/Mains/Contactame'
import MostrarContactame from '../components/MostrarContactame'


const Home = () => {
  
  return (
    <>
     <Header />
     <MainPrincipal />
     <Contactame/>
     <MostrarContactame/>
     <Footer />
    </>
  )
}

export default Home