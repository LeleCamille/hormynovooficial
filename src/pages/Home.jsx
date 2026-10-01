import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Header />
      <Navbar />

  <div className="container">
    <h2>Bem-vindo ao Hormy 🌱</h2>

    <p>
      Seu assistente para cultivo de hortaliças urbanas.
      Organize suas plantas, acompanhe as regas e
      receba lembretes de cuidados.
    </p>
  </div>

  <Footer />
</>
  )
}

export default Home