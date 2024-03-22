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
import { Link } from "react-router-dom"
import { useState } from "react"

function Home() {
  const [menu, setMenu] = useState(false)

  function handleButton() {
    setMenu(!menu)
  }

  return (
    <Container>
      <Header />
      <Blocks src={BackgroundImg} />

      <button onClick={handleButton} id="button-menu"><img src={menu ? CloseLines : ThreeLines} alt="open-menu" /></button>
      { menu && <CellMenu/>}


      <div className="big-container-one">
        <div className="container-one">
          <h1><Link to="/buy">Buy It Now!<img src={ArrowRight} alt="arrow" /></Link></h1>
          <h2>Vivamus non viverra tellus. Sed enim turpis, convallis eget arcu a,</h2>
        </div>
      </div>
      <div className="big-container-two">
        <div className="container-two"></div>
        <h1 id="text-big-two"><span>Lorem Ipsum</span> dolor sit amet, consectetur adipiscing elit. Pellentesque sed enim ut massa pretium fringilla. Vivamus non viverra tellus. Sed enim turpis, convallis eget arcu a, </h1>
      </div>
      <ContainerTwo id="div-2">
        <BlocksTwo src={BackgroundImg} />
        <div className="title"><h1 id="title-text">Maecenas iaculis vehicula mi ut ornare. Mauris at odio augue. Sed tincidunt odio non metus pretium, vitae gravida leo dignissim. Pellentesque egestas risus metus, quis consequat turpis venenatis vel. Nullam quam enim, blandit eget dapibus in, consectetur nec augue. Ut ornare varius odio nec iaculis.</h1></div>
        <div className="two-containers">
          <div></div>
          <hr className="vertical-line" />
          <div></div>
        </div>
        <div id="carousel"><Carousel/></div>
        <div className="three-containers">
          <h2 className="txt-column">vitae gravida leo dignissim. Pellentesque egestas risus metus, quis com quam enim, blandit eget dapibus in, consectetur nec augue. Ut ornare varius odio nec iaculis.</h2>
          <h2 className="txt-column">vitae gravida leo dignissim. Pellentesque egestas risus metus, quis com quam enim, blandit eget dapibus in, consectetur nec augue. Ut ornare varius odio nec iaculis.</h2>
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
          <button id="btn-join">JOIN NOW!</button>
        </div>
      </ContainerThree>
      <Footer />
    </Container>
  );
}

export default Home;
