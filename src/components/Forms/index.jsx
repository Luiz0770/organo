import Button from '../Button'
import InputText from '../InputText'
import DropDown from '../DropDown'
import './Forms.css'
import { useState } from 'react'

const Formulario = () => {

    const times = [
        'Corinthians',
        'Palmeiras',
        'Sao Paulo',
        'Santos',
        'Flamengo',
        'Fluminese',
        'Atletico MG'
    ]

    const enviarFormulario = (e) => {
        e.preventDefault()
        console.log('Form foi submetido', nome, cargo, imagem)
    }

   const [nome, SetNome] = useState('')
   const [cargo, SetCargo] = useState('')
   const [imagem, SetImagem] = useState('')

    console.log(nome)

    return (
        <section className="formulario">
            <form onSubmit={enviarFormulario}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <InputText
                    label="Nome"
                    placeholder="Digite seu nome"
                    obrigatorio={true}
                    valor={nome}
                    aoDigitar={valor => SetNome(valor)}
                />

                <InputText
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    obrigatorio={true}
                    aoDigitar={valor => SetCargo(valor)}
                    valor={cargo}
                />

                <InputText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    obrigatorio={false}
                    aoDigitar={valor => SetImagem(valor)}
                    valor={imagem}
                />

                <DropDown
                    label="Time"
                    itens={times}
                    obrigatorio={true}
                />

                <Button>
                    {/* Enviando como children */}
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Formulario