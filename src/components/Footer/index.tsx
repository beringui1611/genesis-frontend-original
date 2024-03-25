import { Container } from "./styles"
import DiscordLogo from "../../assets/Footer-assets/discord-logo.svg"
import TwitterLogo from "../../assets/Footer-assets/Twitter.svg"
import TelegramLogo from "../../assets/Footer-assets/Telegram.svg"
import { Link } from "react-router-dom"



function Footer(){
    return(
        <Container>
            <div className="words-footer">
            <Link to="/buy">Buy It Now!</Link>
                <a href="/#div-2">About Genesis</a>
                <a href="/#div-3">Community</a>
                <Link to="/farm">Farm</Link>
                <Link to="/whitepaper">Whitepaper</Link>
                <a href="">Privacy Policy</a>
            </div>
            <div className="social-media">
                <a  href=""><img className="social-icon" src={TwitterLogo} alt="twitter-logo" /></a>
                <a  href=""><img className="social-icon" src={TelegramLogo} alt="telegram-logo" /></a>
                <a href=""><img  className="social-icon" src={DiscordLogo} alt="discord-logo" /></a>
            </div>
            <div className="contact"><h3>Media inquires for Plural Gênesis - contact<a href="">@pluralgenesis.org</a></h3></div>
            <p id="paragraph-developed">©Technology developed by Next Chain</p>
        </Container>
    )
}

export default Footer