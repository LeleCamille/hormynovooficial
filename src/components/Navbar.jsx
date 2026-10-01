import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/plantas"> Plantas</Link> |
      <Link to="/cadastro"> Cadastro</Link> |
      <Link to="/calendario"> Calendário</Link> |
      <Link to="/artigos"> Artigos</Link> |
      <Link to="/perfil"> Perfil</Link>
    </nav>
  )
}

export default Navbar