
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header-hormy">
      <div className="header-conteudo">
        <div className="logo-hormy">
          <h1>Hormy 🌱</h1>
          <p>Seu assistente de hortaliças urbanas</p>
        </div>

        <div className="header-acoes">
          <Link to="/login" className="botao-entrar">
            Entrar
          </Link>

          <Link to="/cadastro-usuario" className="botao-criar-conta">
            Criar conta
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
