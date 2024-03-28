import { ContainerThree } from "./styles"
import Cell from "../../assets/Home-assets/cellphone.svg"
import Notification from "../../assets/Home-assets/notification.svg"
import QrCode from "../../assets/Home-assets/QR Code.svg"
import { useTranslation } from "react-i18next"
function PageThree(){
    const {t} = useTranslation();

    return (
        <ContainerThree id="div-3">
        <div id="box-midias">

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
    )
}

export default PageThree