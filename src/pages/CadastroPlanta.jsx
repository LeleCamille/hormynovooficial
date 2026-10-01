import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { usePlantas } from "../context/PlantasContext"

function CadastroPlanta() {
  const [nome, setNome] = useState("")
  const [especie, setEspecie] = useState("")
  const [proximaRega, setProximaRega] = useState("")

  const { adicionarPlanta } = usePlantas()
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    if (!nome || !especie) {
      alert("Preencha o nome e a espécie da planta.")
      return
    }

    adicionarPlanta(nome, especie, proximaRega)

    alert("Planta cadastrada com sucesso! 🌱")

    setNome("")
    setEspecie("")
    setProximaRega("")

    navigate("/plantas")
  }

  return (
    <div>
      <h2>Cadastrar Planta</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da planta"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="Espécie"
          value={especie}
          onChange={(event) => setEspecie(event.target.value)}
        />

        <br />

        <label>
          Próxima rega:
        </label>

        <br />

        <input
          type="date"
          value={proximaRega}
          onChange={(event) => setProximaRega(event.target.value)}
        />

        <br />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default CadastroPlanta