
import Hero from './pages/hero'
import About from './pages/about'
import Features from './pages/features'
import Checkout from './pages/checkout'
import Learn from './pages/learn'
import Customers from './pages/customers'
import Footer from './components/footer.jsx'


export default function Home() {
  return (
  
    <div id='home'>
      {/* <h1>Bienvenue sur notre ton site</h1> */}
      {/* Ajoutez ici le contenu de votre page d'accueil */}
      <Hero/>
      <About/>
      <Features/>
      <Checkout/>
      <Learn/>
      <Customers/>
      <Footer/>

      

    </div>

  )
}