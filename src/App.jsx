import { useState } from 'react'
import { Banner } from './components/Banner'
import Forms from './components/Forms'
import ContainerTimes from './components/ContainerTimes'

function App() {

  const [times, setTimes] = useState([
    {
      nome: "Corinthians",
      corFundo: "#878787",
      corPrimario: "white"
    },
    {
      nome: "Palmeiras",
      corFundo: "#9dc9a2",
      corPrimario: "#009e12"
    },
    {
      nome: "Sao Paulo",
      corFundo: "#c4c4c4",
      corPrimario: "black"
    },
    {
      nome: "Santos",
      corFundo: "#5c5c5c",
      corPrimario: "#deb900"
    },
    {
      nome: "Flamengo",
      corFundo: "#c74e4e",
      corPrimario: "black"
    },
    {
      nome: "Fluminense",
      corFundo: "#57a183",
      corPrimario: "#5e0707"
    },
  ])

  let [participantes, setParticipantes] = useState([])

  function aoSalvar(novoParticipante) {
    setParticipantes([...participantes, novoParticipante])
  }

  function aoDeletar(nome) {
    setParticipantes(participantes.filter(participante => participante.nome != nome))
  }

  console.log(participantes)

  function aoFavoritar(nome) {
    setParticipantes(participantes.map(participante => {
      if (participante.nome === nome) participante.favorito = !participante.favorito
      return participante
    }))
  }

  function aoMudarCor(cor, timeEscolhido) {
    console.log(cor, timeEscolhido)
    setTimes(times.map((time) => {
      if (time.nome == timeEscolhido) {
        time.corPrimario = cor;
      }
      return time
    }))
  }

  function criarTime(novoTime) {
    setTimes([...times, novoTime])
    console.log(times)
  }

  return (
    <>
      <Banner />
      <Forms
        criarTime={criarTime}
        aoEnviar={novoParticipante => aoSalvar(novoParticipante)}
        times={times.map(time => time.nome)}
      />

      {times.map(time => {
        return <ContainerTimes
          key={time.nome}
          label={time.nome}
          corFundo={time.corFundo}
          corPrimario={time.corPrimario}
          participantes={participantes.filter(participante => participante.time === time.nome)}
          aoDeletar={aoDeletar}
          aoMudarCor={aoMudarCor}
          aoFavoritar={aoFavoritar}
        />
      })}
    </>
  )
}

export default App
