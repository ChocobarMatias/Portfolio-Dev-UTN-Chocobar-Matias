import Header from '../components/Layouts/Header'
import MainPrincipal from '../components/Mains/MainPrincipal'
import Footer from '../components/Layouts/Footer'
import Contactame from '../components/Mains/Contactame'
import "../CSS/Home.css"

const Home = () => {
  
  return (
    <>
     <Header />
     <MainPrincipal />
     <Contactame/>
     <Footer />
    </>
  )
}

export default Home