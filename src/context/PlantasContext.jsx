import { createContext, useContext, useEffect, useState } from "react"

const PlantasContext = createContext()

export function PlantasProvider({ children }) {
  const [plantas, setPlantas] = useState(() => {
    const plantasSalvas = localStorage.getItem("hormy-plantas")

    if (plantasSalvas) {
      return JSON.parse(plantasSalvas)
    }

    return [
      {
        id: 1,
        nome: "Alface",
        especie: "Lactuca sativa",
        proximaRega: ""
      },
      {
        id: 2,
        nome: "Manjericão",
        especie: "Ocimum basilicum",
        proximaRega: ""
      },
      {
        id: 3,
        nome: "Cebolinha",
        especie: "Allium fistulosum",
        proximaRega: ""
      }
    ]
  })

  useEffect(() => {
    localStorage.setItem("hormy-plantas", JSON.stringify(plantas))
  }, [plantas])

  function adicionarPlanta(nome, especie, proximaRega) {
    const novaPlanta = {
      id: Date.now(),
      nome,
      especie,
      proximaRega
    }

    setPlantas((plantasAtuais) => [
      ...plantasAtuais,
      novaPlanta
    ])
  }

  function removerPlanta(id) {
    setPlantas((plantasAtuais) =>
      plantasAtuais.filter((planta) => planta.id !== id)
    )
  }

  function marcarComoRegada(id) {
    const hoje = new Date()

    hoje.setDate(hoje.getDate() + 2)

    const novaData = hoje.toISOString().split("T")[0]

    setPlantas((plantasAtuais) =>
      plantasAtuais.map((planta) =>
        planta.id === id
          ? { ...planta, proximaRega: novaData }
          : planta
      )
    )
  }

  return (
    <PlantasContext.Provider
      value={{
        plantas,
        adicionarPlanta,
        removerPlanta,
        marcarComoRegada
      }}
    >
      {children}
    </PlantasContext.Provider>
  )
}

export function usePlantas() {
  return useContext(PlantasContext)
}