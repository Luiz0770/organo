import { useState } from 'react'
import './App.css'
import { Banner } from './components/Banner'
import Forms from './components/Forms'

function App() {

  const times = [
    'Corinthians',
    'Palmeiras',
    'Sao Paulo',
    'Santos',
    'Flamengo',
    'Fluminese',
    'Atletico MG'
  ]

  let [participantes, setParticipantes] = useState([])

  function aoSalvar(novoParticipante) {
    setParticipantes([...participantes, novoParticipante])
  }

  return (
    <>
      <Banner />
      <Forms
        times={times}
        aoEnviar={novoParticipante => aoSalvar(novoParticipante)}
      />
    </>
  )
}

export default App
