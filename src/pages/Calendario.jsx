
import { useState } from "react"
import { usePlantas } from "../context/PlantasContext"

function Calendario() {
  const { plantas } = usePlantas()

  const hoje = new Date()

  const [mesAtual, setMesAtual] = useState(
    new Date(hoje.getFullYear(), hoje.getMonth(), 1)
  )

  const [dataSelecionada, setDataSelecionada] = useState(
    formatarData(hoje)
  )

  function formatarData(data) {
    const ano = data.getFullYear()
    const mes = String(data.getMonth() + 1).padStart(2, "0")
    const dia = String(data.getDate()).padStart(2, "0")

    return `${ano}-${mes}-${dia}`
  }

  function mudarMes(direcao) {
    const novoMes = new Date(
      mesAtual.getFullYear(),
      mesAtual.getMonth() + direcao,
      1
    )

    setMesAtual(novoMes)
    setDataSelecionada(formatarData(novoMes))
  }

  const ano = mesAtual.getFullYear()
  const mes = mesAtual.getMonth()

  const primeiroDia = new Date(ano, mes, 1)
  const diasNoMes = new Date(ano, mes + 1, 0).getDate()

  // Ajusta a semana para começar na segunda-feira
  const espacosVazios = (primeiroDia.getDay() + 6) % 7

  const dias = [
    ...Array(espacosVazios).fill(null),
    ...Array.from({ length: diasNoMes }, (_, i) => i + 1)
  ]

  const plantasComData = plantas
    .filter((planta) => planta.proximaRega)
    .sort((a, b) =>
      a.proximaRega.localeCompare(b.proximaRega)
    )

  const plantasDoDia = plantas.filter(
    (planta) => planta.proximaRega === dataSelecionada
  )

  const dataHoje = formatarData(hoje)

  function formatarDataExibicao(data) {
    const [ano, mes, dia] = data.split("-")
    return `${dia}/${mes}/${ano}`
  }

  return (
    <div className="calendario-container">

      <div className="calendario-titulo">
        <h2>Calendário de Rega 🌱</h2>
        <p>Organize e acompanhe os cuidados com suas plantas.</p>
      </div>

      <div className="calendario-card">

        <div className="calendario-cabecalho">
          <button onClick={() => mudarMes(-1)}>
            ❮
          </button>

          <h3>
            {mesAtual.toLocaleDateString("pt-BR", {
              month: "long",
              year: "numeric"
            })}
          </h3>

          <button onClick={() => mudarMes(1)}>
            ❯
          </button>
        </div>

        <div className="calendario-semana">
          {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map(
            (dia) => (
              <div key={dia}>{dia}</div>
            )
          )}
        </div>

        <div className="calendario-dias">
          {dias.map((dia, indice) => {
            if (dia === null) {
              return (
                <div key={`vazio-${indice}`} />
              )
            }

            const dataCompleta = formatarData(
              new Date(ano, mes, dia)
            )

            const temRega = plantas.some(
              (planta) => planta.proximaRega === dataCompleta
            )

            const selecionado = dataSelecionada === dataCompleta
            const hojeMarcado = dataHoje === dataCompleta

            return (
              <button
                key={dataCompleta}
                className={`
                  dia-calendario
                  ${temRega ? "dia-com-rega" : ""}
                  ${selecionado ? "dia-selecionado" : ""}
                  ${hojeMarcado ? "dia-hoje" : ""}
                `}
                onClick={() => setDataSelecionada(dataCompleta)}
              >
                {dia}
                {temRega && <span className="ponto-rega" />}
              </button>
            )
          })}
        </div>

        <div className="calendario-legenda">
          <span><i className="legenda-hoje" /> Hoje</span>
          <span><i className="legenda-rega" /> Dia de rega</span>
        </div>

      </div>

      <div className="regas-do-dia">
        <h3>
          Cuidados em {formatarDataExibicao(dataSelecionada)}
        </h3>

        {plantasDoDia.length === 0 ? (
          <p className="sem-regas">
            Nenhuma rega programada para este dia.
          </p>
        ) : (
          plantasDoDia.map((planta) => (
            <div className="rega-item" key={planta.id}>
              <span>🌿</span>
              <div>
                <strong>{planta.nome}</strong>
                <p>{planta.especie}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="proximas-regas">
        <h3>Próximas regas 💧</h3>

        {plantasComData.length === 0 ? (
          <p className="sem-regas">
            Você ainda não possui regas programadas.
          </p>
        ) : (
          plantasComData.map((planta) => (
            <div className="rega-item" key={planta.id}>
              <span>🪴</span>
              <div>
                <strong>{planta.nome}</strong>
                <p>
                  Próxima rega:{" "}
                  {formatarDataExibicao(planta.proximaRega)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  )
}

export default Calendario
