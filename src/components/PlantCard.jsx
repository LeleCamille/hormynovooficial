import { usePlantas } from "../context/PlantasContext"

function PlantCard({ planta }) {
  const {
    removerPlanta,
    marcarComoRegada
  } = usePlantas()

  function formatarData(data) {
    if (!data) {
      return "Não definida"
    }

    const [ano, mes, dia] = data.split("-")

    return `${dia}/${mes}/${ano}`
  }

  return (
    <div className="card">
      <h3>{planta.nome}</h3>

      <p>{planta.especie}</p>

      <p>
        💧 Próxima rega:{" "}
        {formatarData(planta.proximaRega)}
      </p>

      <button
        onClick={() => marcarComoRegada(planta.id)}
      >
        💧 Reguei hoje
      </button>

      <button
        onClick={() => removerPlanta(planta.id)}
      >
        🗑️ Remover
      </button>
    </div>
  )
}

export default PlantCard