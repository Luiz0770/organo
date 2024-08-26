import './Cards.css'

function Card({nome, cargo, imagem}) {
    return (
        <>
            <div className='card'>
                <img src={imagem} alt={nome}/>
                <h4>{nome}</h4>
                <p>{cargo}</p>
            </div>
        </>);
}

export default Card;