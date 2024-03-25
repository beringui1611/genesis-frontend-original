import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CellMenu from "../../components/Cell-Menu";
import Carousel from "../../components/Carousel";
import { Container, Blocks, BlocksTwo, ContainerTwo, ContainerThree } from "./styles";
import BackgroundImg from "../../assets/Home-assets/blocks.svg"
import ThreeLines from "../../assets/Media-assets/three-lines.svg"
import CloseLines from "../../assets/Media-assets/close-lines.svg"
import ArrowRight from "../../assets/Home-assets/Arrow 1.svg";
import Cell from "../../assets/Home-assets/cellphone.svg"
import Notification from "../../assets/Home-assets/notification.svg"
import QrCode from "../../assets/Home-assets/QR Code.svg"
import Girl from '../../assets/Home-assets/future.png';
import Man from '../../assets/Home-assets/man.jpg';
import Predio from '../../assets/Home-assets/predios.png';
import { Link } from "react-router-dom"
import { useState } from "react"
import { useTranslation } from "react-i18next";

function Home() {
  const [menu, setMenu] = useState(false)
  const { t } = useTranslation();

  function handleButton() {
    setMenu(!menu)
  }

  return (
    <Container>
      <Header />
      <Blocks src={BackgroundImg} />

      <button onClick={handleButton} id="button-menu"><img src={menu ? CloseLines : ThreeLines} alt="open-menu" /></button>
      {menu && <CellMenu />}

      <div className="big-container-one">
        <div className="container-one">
          <h1 id="buy-h1"><Link to="/buy">{t("home.buyNowTwo")}<img src={ArrowRight} alt="arrow" /></Link></h1>
          <h2 id="buy-h2">{t("home.welcome")}</h2>
        </div>
      </div>
      <div className="big-container-two">
        <div className="container-two"><img id="girl-picture" src={Girl} alt="girl"/></div>
        <h1 id="text-big-two"><span>{t("home.why")}</span>
          {t("home.evolution")} <a style={{ color: "#fff", fontWeight: "bold", textDecoration: "underline", marginLeft: "10px" }} href="/whitepaper">{t("header.whitepaper")}</a></h1>
      </div>
      <ContainerTwo id="div-2">
        <BlocksTwo src={BackgroundImg} />
        <div className="title"><h1 id="title-text">{t("home.unlock")}</h1></div>
        <div className="two-containers">
          <div><img id="predios" src={Predio} alt="predios" /></div>
          <hr className="vertical-line" />
          <div><img id="man-image" src={Man} alt="man" /></div>
        </div>
        <div id="carousel"><Carousel /></div>
        <div className="three-containers">
          <h2 className="txt-column">{t("home.waitTwo")}</h2>
          <h2 className="txt-column">{t("home.waitOne")}</h2>
        </div>
      </ContainerTwo>
      <ContainerThree id="div-3">
        <div className="four-containers">

        </div>
        <div className="buttons-containers">
          <button><h1>Twitter</h1></button>
          <button><h1>Discord</h1></button>
        </div>
        <div className="container-phone">
          <img src={Cell} id="cellphone" alt="cellphone" />
          <img className="notification" src={Notification} alt="notification" />
          <img className="qr-code" src={QrCode} alt="qr-code" />
          <button id="btn-join">{t("home.joinNow")}</button>
        </div>
      </ContainerThree>
      <Footer />
    </Container>
  );
}

export default Home;
