import { Container } from "./styles"
import DiscordLogo from "../../assets/Footer-assets/discord-logo.svg"
import TwitterLogo from "../../assets/Footer-assets/Twitter.svg"
import TelegramLogo from "../../assets/Footer-assets/Telegram.svg"
import { Link } from "react-router-dom"
import {useTranslation} from "react-i18next"



function Footer(){
    const {t} = useTranslation();
    return(
        <Container>
            <div className="words-footer">
            <Link to="/buy">{t("footer.buyNow")}</Link>
                <a href="/#div-2">{t("footer.about")}</a>
                <a href="/#div-3">{t("footer.community")}</a>
                <Link to="/farm">{t("footer.farm")}</Link>
                <Link to="/whitepaper">{t("footer.whitepaper")}</Link>
                <a href="">{t("footer.privacy")}</a>
            </div>
            <div className="social-media">
                <a  href=""><img className="social-icon" src={TwitterLogo} alt="twitter-logo" /></a>
                <a  href=""><img className="social-icon" src={TelegramLogo} alt="telegram-logo" /></a>
                <a href=""><img  className="social-icon" src={DiscordLogo} alt="discord-logo" /></a>
            </div>
            <div className="contact"><h3>{t("footer.mediaInquiries")}</h3></div>
            <p id="paragraph-developed">{t("footer.copyright")}</p>
        </Container>
    )
}

export default Footer