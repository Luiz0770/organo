import { IoIosClose } from "react-icons/io";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import './Cards.css'

function Card({ nome, cargo, imagem, aoDeletar, corPrimario, favorito, aoFavoritar }) {

    function favoritar() {
        aoFavoritar(nome)
    }

    const propsFavorito = {
        size: 20,
        onClick: favoritar
    }

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
                    {favorito ? <MdFavorite {...propsFavorito} color="red"/> : <MdFavoriteBorder {...propsFavorito} />}
                </div>
            </div>
        </>);
}

export default Card;