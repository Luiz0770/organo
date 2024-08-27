import Card from '../Cards';
import './ContainerTimes.css'

function ContainerTimes({ label, corFundo, corPrimario, participantes }) {

    console.log(participantes.length)

    if (participantes.length > 0) {
        return (
            <>
                <section className='containerTimes' style={{ backgroundColor: corFundo }}>
                    <h3 style={{ borderColor: corPrimario, color: corPrimario }}>{label}</h3>
                    <div className='contianer-cards'>
                        {participantes.map(participante =>
                            <Card key={participante.nome}
                                nome={participante.nome}
                                cargo={participante.cargo}
                                imagem={participante.imagem}
                            />)}
                    </div>
                </section>
            </>
        );
    }
}

export default ContainerTimes;