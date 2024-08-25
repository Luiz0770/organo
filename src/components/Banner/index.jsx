import './Banner.css'
import imgBanner from '../../assets/banner.png'

export const Banner = () => {
    return (
        <header className="banner">
            <img src={imgBanner} alt="O banner principal da página do Organo"/>
        </header>
    )
}
