import PlantCard from "../components/PlantCard"
import { usePlantas } from "../context/PlantasContext"

function Plantas() {
  const { plantas } = usePlantas()

  return (
    <div>
      <h2>Minhas Plantas 🌱</h2>

      <div className="plantas-grid">
        {plantas.length === 0 ? (
          <p>
            Você ainda não cadastrou nenhuma planta.
          </p>
        ) : (
          plantas.map((planta) => (
            <PlantCard
              key={planta.id}
              planta={planta}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Plantas