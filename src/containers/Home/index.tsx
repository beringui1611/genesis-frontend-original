import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CellMenu from "../../components/Cell-Menu";
import Carousel from "../../components/Carousel";
import { Container, Blocks, BlocksTwo, ContainerTwo } from "./styles";
import BackgroundImg from "../../assets/Home-assets/blocks.svg"
import ThreeLines from "../../assets/Media-assets/three-lines.svg"
import CloseLines from "../../assets/Media-assets/close-lines.svg"
import ArrowRight from "../../assets/Home-assets/Arrow 1.svg";
import Girl from '../../assets/Home-assets/future.png';
import Man from '../../assets/Home-assets/man.jpg';
import Predio from '../../assets/Home-assets/predios.png';
import { Link } from "react-router-dom"
import { useState } from "react"
import { useTranslation } from "react-i18next";
import HeaderSecundary from "../../components/header-secundary";
import PageThree from "../../components/pageThree";

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

      <HeaderSecundary/>

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
          <div id="container-esquerdo-home"><img id="predios" src={Predio} alt="predios" /></div>
          <hr className="vertical-line" />
          <div id="container-direito-home"><img id="man-image" src={Man} alt="man" /></div>
        </div>
        <div id="carousel"><Carousel /></div>
        <div className="three-containers">
          <h2 className="txt-column">{t("home.waitTwo")}</h2>
          <h2 className="txt-column">{t("home.waitOne")}</h2>
        </div>
      </ContainerTwo>
      <PageThree/>
      <Footer />
    </Container>
  );
}

export default Home;
