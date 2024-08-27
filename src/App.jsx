import { useState } from 'react'
import './App.css'
import { Banner } from './components/Banner'
import Forms from './components/Forms'
import ContainerTimes from './components/ContainerTimes'

function App() {

  const times = [
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
  ]

  let [participantes, setParticipantes] = useState([])

  function aoSalvar(novoParticipante) {
    setParticipantes([...participantes, novoParticipante])
  }

  // console.log(participantes)

  return (
    <>
      <Banner />
      <Forms
        aoEnviar={novoParticipante => aoSalvar(novoParticipante)}
        times={times.map(time => time.nome) }
      />

      {times.map(time => {
        return <ContainerTimes
          key={time.nome}
          label={time.nome}
          corFundo={time.corFundo}
          corPrimario={time.corPrimario}
          participantes={participantes.filter(participante => participante.time === time.nome)}
        />
      })}
    </>
  )
}

export default App
