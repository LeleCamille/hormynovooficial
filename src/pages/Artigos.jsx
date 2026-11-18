
import { useState } from "react"

const artigos = [
  {
    id: 1,
    titulo: "Como cultivar alface em casa",
    categoria: "Cultivo",
    emoji: "🥬",
    resumo: "Aprenda a cultivar alface mesmo em espaços pequenos.",
    conteudo: [
      "A alface é uma das hortaliças mais fáceis de cultivar em casa. Ela pode ser plantada em vasos, jardineiras e pequenos canteiros.",
      "Escolha um recipiente com furos no fundo para permitir a drenagem da água. Utilize terra rica em matéria orgânica.",
      "A alface precisa de iluminação natural e regas frequentes, mantendo o solo úmido, mas sem encharcar.",
      "Com os cuidados adequados, você poderá acompanhar o crescimento da sua própria hortaliça!"
    ]
  },
  {
    id: 2,
    titulo: "Como regar suas plantas corretamente",
    categoria: "Irrigação",
    emoji: "💧",
    resumo: "Descubra como manter suas hortaliças hidratadas.",
    conteudo: [
      "A água é essencial para o desenvolvimento das plantas, mas cada espécie possui necessidades diferentes.",
      "Antes de regar, verifique a umidade da terra com o dedo. Se a superfície estiver seca, pode ser necessário adicionar água.",
      "Evite encharcar o solo, pois o excesso de água pode prejudicar as raízes.",
      "Prefira regar diretamente a terra, evitando molhar excessivamente as folhas."
    ]
  },
  {
    id: 3,
    titulo: "Como montar uma horta em apartamento",
    categoria: "Horta urbana",
    emoji: "🪴",
    resumo: "Transforme pequenos espaços em uma horta produtiva.",
    conteudo: [
      "Não é necessário ter um quintal para cultivar hortaliças. Varandas, janelas e pequenos espaços podem receber uma horta.",
      "Escolha vasos adequados e espécies que se desenvolvam bem em recipientes, como cebolinha, manjericão e alface.",
      "Observe a quantidade de luz solar disponível no local antes de escolher as plantas.",
      "Organize os vasos de maneira que todos tenham espaço para crescer."
    ]
  },
  {
    id: 4,
    titulo: "A importância da adubação",
    categoria: "Adubação",
    emoji: "🌱",
    resumo: "Entenda como os nutrientes ajudam suas plantas.",
    conteudo: [
      "As plantas precisam de nutrientes para crescer e se desenvolver de maneira saudável.",
      "A adubação ajuda a repor os nutrientes presentes no solo. Compostos orgânicos podem ser utilizados como fonte de matéria orgânica.",
      "A frequência e a quantidade de adubo dependem da espécie cultivada e das condições do solo.",
      "Evite utilizar adubo em excesso, pois isso também pode prejudicar o desenvolvimento da planta."
    ]
  },
  {
    id: 5,
    titulo: "A importância da luz solar",
    categoria: "Iluminação",
    emoji: "☀️",
    resumo: "Saiba como a iluminação influencia o crescimento.",
    conteudo: [
      "A luz solar é fundamental para a fotossíntese, processo pelo qual as plantas produzem seu próprio alimento.",
      "Cada hortaliça possui uma necessidade diferente de iluminação.",
      "Algumas espécies precisam de várias horas de sol direto, enquanto outras conseguem crescer com luz indireta intensa.",
      "Observe o desenvolvimento das folhas para identificar se o local escolhido está adequado."
    ]
  },
  {
    id: 6,
    titulo: "Como cuidar do manjericão",
    categoria: "Cultivo",
    emoji: "🌿",
    resumo: "Conheça os principais cuidados com essa erva aromática.",
    conteudo: [
      "O manjericão é uma erva aromática muito utilizada na culinária e pode ser cultivada em vasos.",
      "Ele prefere locais bem iluminados e solo fértil com boa drenagem.",
      "Mantenha a terra levemente úmida e evite deixar água acumulada no recipiente.",
      "A retirada de folhas e pontas em excesso pode ajudar a estimular o crescimento de novos ramos."
    ]
  }
]

function Artigos() {
  const [pesquisa, setPesquisa] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas")
  const [artigoAberto, setArtigoAberto] = useState(null)

  const categorias = [
    "Todas",
    "Cultivo",
    "Irrigação",
    "Horta urbana",
    "Adubação",
    "Iluminação"
  ]

  const artigosFiltrados = artigos.filter((artigo) => {
    const correspondePesquisa = artigo.titulo
      .toLowerCase()
      .includes(pesquisa.toLowerCase())

    const correspondeCategoria =
      categoriaSelecionada === "Todas" ||
      artigo.categoria === categoriaSelecionada

    return correspondePesquisa && correspondeCategoria
  })

  return (
    <div className="artigos-container">

      <div className="artigos-banner">
        <span>🌿</span>
        <h2>Biblioteca Hormy</h2>
        <p>
          Aprenda mais sobre o cultivo de hortaliças
          e transforme pequenos espaços em grandes hortas!
        </p>
      </div>

      <div className="artigos-pesquisa">
        <input
          type="text"
          placeholder="🔎 Pesquisar artigos..."
          value={pesquisa}
          onChange={(event) => setPesquisa(event.target.value)}
        />
      </div>

      <div className="artigos-categorias">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={
              categoriaSelecionada === categoria
                ? "categoria-ativa"
                : ""
            }
            onClick={() => setCategoriaSelecionada(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      {artigoAberto ? (

        <div className="artigo-leitura">

          <button
            className="botao-voltar-artigos"
            onClick={() => setArtigoAberto(null)}
          >
            ← Voltar aos artigos
          </button>

          <div className="artigo-leitura-emoji">
            {artigoAberto.emoji}
          </div>

          <span className="artigo-categoria">
            {artigoAberto.categoria}
          </span>

          <h2>{artigoAberto.titulo}</h2>

          {artigoAberto.conteudo.map((paragrafo, indice) => (
            <p key={indice}>{paragrafo}</p>
          ))}

          <p className="artigo-final">
            🌱 Continue aprendendo e cultivando com o Hormy!
          </p>

        </div>

      ) : (

        <div className="artigos-grid">

          {artigosFiltrados.length === 0 ? (
            <p className="artigos-vazios">
              Nenhum artigo encontrado. Tente outra pesquisa!
            </p>
          ) : (

            artigosFiltrados.map((artigo) => (
              <div className="artigo-card" key={artigo.id}>

                <div className="artigo-imagem">
                  {artigo.emoji}
                </div>

                <div className="artigo-informacoes">

                  <span className="artigo-categoria">
                    {artigo.categoria}
                  </span>

                  <h3>{artigo.titulo}</h3>

                  <p>{artigo.resumo}</p>

                  <button
                    onClick={() => setArtigoAberto(artigo)}
                  >
                    Ler artigo →
                  </button>

                </div>

              </div>
            ))

          )}

        </div>

      )}

    </div>
  )
}

export default Artigos
