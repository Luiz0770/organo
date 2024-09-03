import { IoIosClose } from "react-icons/io";
import './Cards.css'

function Card({ nome, cargo, imagem, aoDeletar, corPrimario }) {
    return (
        <>
            <div className='card'>
                <div className="card-header" style={{ backgroundColor: corPrimario }}>
                    <img src={imagem} alt={nome} />
                </div>
                <div className="card-container">
                    <h4>{nome}</h4>
                    <p>{cargo}</p>
                    <IoIosClose size={25} onClick={aoDeletar} />
                </div>
            </div>
        </>);
}

export default Card;