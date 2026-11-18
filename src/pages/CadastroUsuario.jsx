
import { useState } from "react"
import { Link } from "react-router-dom"

function CadastroUsuario() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (!nome || !email || !senha) {
      alert("Preencha todos os campos!")
      return
    }

    alert("Cadastro recebido! Em breve sua conta estará conectada ao sistema.")

    setNome("")
    setEmail("")
    setSenha("")
  }

  return (
    <main className="container">
      <h2>Crie sua conta no Hormy 🌱</h2>

      <p>
        Cadastre-se para organizar sua horta
        e acompanhar o crescimento das suas plantas!
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Crie uma senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">
          Criar minha conta
        </button>

        <p>
          Já possui uma conta?{" "}
          <Link to="/login">Entre aqui</Link>
        </p>
      </form>
    </main>
  )
}

export default CadastroUsuario
