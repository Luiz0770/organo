import Button from '../Button'
import Input from '../Input'
import DropDown from '../DropDown'
import './Forms.css'
import { useState } from 'react'

const Formulario = ({ criarTime, aoEnviar, times }) => {

    const [nome, SetNome] = useState('')
    const [cargo, SetCargo] = useState('')
    const [imagem, SetImagem] = useState('')
    const [timeSelecionado, SetTimeSelecionado] = useState('')
    const [nomeTime, SetNomeTime] = useState('')
    const [corTime, SetCorTime] = useState('')

    function enviarFormulario(e) {
        e.preventDefault()
        aoEnviar({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: timeSelecionado,
            favorito: "1"
        })
        // Apagando dados apos enviar o formulario
        SetNome('')
        SetCargo('')
        SetImagem('')
        SetTimeSelecionado('')
    }

    // console.log(times)

    return (
        <>
            <div className='forms'>
                <section className="formulario">
                    <form onSubmit={enviarFormulario}>
                        <h2>Preencha os dados para criar o card do colaborador</h2>

                        <Input
                            label="Nome"
                            placeholder="Digite seu nome"
                            obrigatorio={true}
                            valor={nome}
                            aoAlterar={e => SetNome(e.target.value)}
                        />

                        <Input
                            label="Cargo"
                            placeholder="Digite seu cargo"
                            obrigatorio={true}
                            aoAlterar={e => SetCargo(e.target.value)}
                            valor={cargo}
                        />

                        <Input
                            label="Imagem"
                            placeholder="Digite o endereço da imagem"
                            obrigatorio={true}
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

                <section className="formulario">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        criarTime({ nome: nomeTime, corFundo: corTime, key: nomeTime })
                    }}>
                        <h2>Preencha os dados para criar um novo time!</h2>

                        <Input
                            label="Nome"
                            placeholder="Digite o nome do time"
                            obrigatorio={true}
                            valor={nomeTime}
                            aoAlterar={e => SetNomeTime(e.target.value)}
                        />

                        <Input
                            type='color'
                            label="Cor"
                            placeholder="Digite a cor do time"
                            obrigatorio
                            aoAlterar={e => SetCorTime(e.target.value)}
                            valor={corTime}
                        />

                        <Button>
                            {/* Enviando como children */}
                            Criar novo Time
                        </Button>
                    </form>
                </section>
            </div>
        </>
    )
}

export default Formulario