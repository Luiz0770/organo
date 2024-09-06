import { IoIosClose } from "react-icons/io";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import './Cards.css'

function Card({ nome, cargo, imagem, aoDeletar, corPrimario, favorito, aoFavoritar }) {

    console.log(favorito)

    return (
        <>
            <div className='card'>
                <div className="card-header" style={{ backgroundColor: corPrimario }}>
                    <img src={imagem} alt={nome} />
                </div>
                <div className="card-container">
                    <h4>{nome}</h4>
                    <p>{cargo}</p>
                    <div>
                        <IoIosClose size={25} onClick={() => aoDeletar(nome)} />
                    </div>
                    {favorito ? <MdFavorite size={20} onClick={() => aoFavoritar(nome)} /> : <MdFavoriteBorder size={20} onClick={() => aoFavoritar(nome)} />}
                </div>
            </div>
        </>);
}

export default Card;