import './Cards.css'
import perfil from '../../assets/Ellipse.png'

function Card() {
    return (
        <>
            <div className='card'>
                <img src={perfil}/>
                <h4>Luiz Felipe</h4>
                <p>Desenvolvedor</p>
            </div>
        </>);
}

export default Card;