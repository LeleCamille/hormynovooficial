
import { useState } from "react"
import { usePlantas } from "../context/PlantasContext"

function Perfil() {
  const { plantas } = usePlantas()

  const [nome, setNome] = useState(
    localStorage.getItem("hormy-nome") || "Sofia"
  )

  const [email, setEmail] = useState(
    localStorage.getItem("hormy-email") || "sofia@email.com"
  )

  const [editando, setEditando] = useState(false)

  function salvarPerfil(event) {
    event.preventDefault()

    localStorage.setItem("hormy-nome", nome)
    localStorage.setItem("hormy-email", email)

    setEditando(false)
    alert("Perfil atualizado com sucesso! 🌱")
  }

  return (
    <div className="perfil-container">

      <div className="perfil-titulo">
        <h2>Meu Perfil 🌱</h2>
        <p>Gerencie suas informações no Hormy.</p>
      </div>

      <div className="perfil-card">

        <div className="perfil-avatar">
          🌿
        </div>

        <h3>{nome}</h3>
        <p className="perfil-email">{email}</p>

        <div className="perfil-estatisticas">
          <div>
            <strong>{plantas.length}</strong>
            <span>Plantas cadastradas</span>
          </div>

          <div>
            <strong>Hormy</strong>
            <span>Minha horta urbana</span>
          </div>
        </div>

        {!editando ? (
          <button
            onClick={() => setEditando(true)}
          >
            Editar perfil
          </button>
        ) : (
          <form onSubmit={salvarPerfil}>

            <label>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              required
            />

            <label>E-mail:</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button type="submit">
              Salvar alterações
            </button>

            <button
              type="button"
              className="botao-cancelar"
              onClick={() => {
                setNome(localStorage.getItem("hormy-nome") || "Sofia")
                setEmail(localStorage.getItem("hormy-email") || "sofia@email.com")
                setEditando(false)
              }}
            >
              Cancelar
            </button>

          </form>
        )}

      </div>

    </div>
  )
}

export default Perfil
