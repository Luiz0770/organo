import Button from '../Button'
import InputText from '../InputText'
import DropDown from '../DropDown'
import './Forms.css'
import { useState } from 'react'

const Formulario = ({aoEnviar, times}) => {

    const [nome, SetNome] = useState('')
    const [cargo, SetCargo] = useState('')
    const [imagem, SetImagem] = useState('')
    const [timeSelecionado, SetTimeSelecionado] = useState('')

    function enviarFormulario(e) {
        e.preventDefault()
        aoEnviar({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: timeSelecionado
        })
    }


    // console.log(times)

    return (
        <section className="formulario">
            <form onSubmit={enviarFormulario}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <InputText
                    label="Nome"
                    placeholder="Digite seu nome"
                    obrigatorio={true}
                    valor={nome}
                    aoAlterar={e => SetNome(e.target.value)}
                />

                <InputText
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    obrigatorio={true}
                    aoAlterar={e => SetCargo(e.target.value)}
                    valor={cargo}
                />

                <InputText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    obrigatorio={false}
                    aoAlterar={e => SetImagem(e.target.value)}
                    valor={imagem}
                />

                <DropDown
                    label="Time"
                    itens={times}
                    obrigatorio={true}
                    aoAlterar={e => SetTimeSelecionado(e.target.value)}
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