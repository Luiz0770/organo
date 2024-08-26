import Card from '../Cards';
import './ContainerTimes.css'

function ContainerTimes({label, corFundo, corPrimario}) {
    return (
        <>
            <section className='containerTimes' style={{backgroundColor: corFundo}}>
                <h3 style={{borderColor: corPrimario, color: corPrimario}}>{label}</h3>
                <div className='contianer-cards'>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>
        </>
    );
}

export default ContainerTimes;