
import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (!email || !senha) {
      alert("Preencha seu e-mail e sua senha!")
      return
    }

    alert("A tela de login está funcionando! A autenticação será conectada ao Flask depois.")
  }

  return (
    <main className="container">
      <h2>Bem-vindo de volta ao Hormy! 🌱</h2>

      <p>Entre na sua conta para cuidar da sua horta.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">
          Entrar
        </button>

        <p>
          Ainda não possui uma conta?{" "}
          <Link to="/cadastro-usuario">Cadastre-se</Link>
        </p>
      </form>
    </main>
  )
}

export default Login
