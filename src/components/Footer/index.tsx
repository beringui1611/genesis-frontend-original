import { Container } from "./styles"
import DiscordLogo from "../../assets/Footer-assets/discord-logo.svg"
import TwitterLogo from "../../assets/Footer-assets/Twitter.svg"
import TelegramLogo from "../../assets/Footer-assets/Telegram.svg"



function Footer(){
    return(
        <Container>
            <div className="words-footer">
                <a href="">Buy It Now!</a>
                <a href="">About Genesis</a>
                <a href="">Community</a>
                <a href="">Farm</a>
                <a href="">Whitepaper</a>
                <a href="">Privacy Policy</a>
            </div>
            <div className="social-media">
                <a href=""><img src={TwitterLogo} alt="twitter-logo" /></a>
                <a href=""><img src={TelegramLogo} alt="telegram-logo" /></a>
                <a href=""><img src={DiscordLogo} alt="discord-logo" /></a>
            </div>
            <div className="contact"><h3>Media inquires for Plural Gênesis - contact<a href="">@pluralgenesis.org</a></h3></div>
            <p id="paragraph-developed">©Technology developed by Next Build</p>
        </Container>
    )
}

export default Footer