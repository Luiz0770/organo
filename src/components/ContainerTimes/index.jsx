import Card from '../Cards';
import './ContainerTimes.css'

function ContainerTimes({ label, corFundo, corPrimario, participantes, aoDeletar, aoMudarCor, aoFavoritar }) {
    
    if (participantes.length > 0) {
        return (
            <>
                <section className='containerTimes' style={{ backgroundColor: corFundo }}>
                    <input type="color" className="input-color" id="input-color" onChange={e => aoMudarCor(e.target.value, label)} value={corPrimario} />
                    <h3 style={{ borderColor: corPrimario, color: corPrimario }}>{label}</h3>
                    <div className='contianer-cards'>
                        {participantes.map(participante => {
                            return <Card key={participante.nome}
                                nome={participante.nome}
                                cargo={participante.cargo}
                                imagem={participante.imagem}
                                favorito={participantes.favorito}
                                aoDeletar={aoDeletar}
                                aoFavoritar={aoFavoritar}
                                corPrimario={corPrimario}
                            />
                        })}
                    </div>
                </section>
            </>
        );
    }
}

export default ContainerTimes;