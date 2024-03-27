import { useState } from "react";
import { Link } from "react-router-dom"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArrowBuy from "../../assets/Buy-assets/arrow-buy.svg";
import ArrowRight from "../../assets/Buy-assets/Arrow 2.svg";
import Usdt from "../../assets/Buy-assets/usdt-image.svg";
import Blocks from "../../assets/Buy-assets/blocks.svg";
import { Container } from "./styles";
import { buy } from "../../service/Web3Service";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import CellMenu from "../../components/Cell-Menu";
import ThreeLines from "../../assets/Media-assets/three-lines.svg"
import CloseLines from "../../assets/Media-assets/close-lines.svg"
import { useTranslation } from "react-i18next";

function Buy() {

  const [value, setValue] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [menu, setMenu] = useState(false);
  const {t} = useTranslation();

  function handleButton(){
    setMenu(!menu)
  }

  function swap (event: React.ChangeEvent<HTMLInputElement>){
    setValue(parseFloat(event.target.value));
  }

  function openAndCloseModal(){
     setModal(!modal)
  }

  async function order() {
    try {
       
        await toast.promise(
            buy(value * 10 ** 6),
            {
                pending: "Verificando...",
                success: "Pagamento realizado com sucesso. Verifique sua carteira!",
                error: "Você não tem saldo suficiente. Tente novamente ou volte mais tarde."
            }
        );
    } catch (error) {
        return error;
    }
}



  






  return (
    <Container>
      <Header />

      <button onClick={handleButton} id="button-menu-buy"><img src={menu ? CloseLines : ThreeLines} alt="open-menu" /></button>
      { menu && <CellMenu/>}

      <div className="buy-title">
        <h1>{t("buy.title")}</h1>
        <p>
         {t("buy.paragraph")}
        </p>
        <Link to="/farm">{t("buy.getFarming")}<img src={ArrowRight} alt="arror-right" /></Link>
      </div>
      <div className="buy-containers">
        <div className="itens-buy-container">
          <h2>{t("buy.convert")}</h2>
          <input onChange={swap} className="input-buy" placeholder="$0.00" min="0" type="number" />
        </div>
        <button id="change-value">
          <img src={ArrowBuy} alt="teste" />
        </button>
        <div className="itens-buy-container">
          <h2>{t("buy.for")}</h2>
          <p id="value-usdt-amount">{value ? (value * 1).toFixed(2) : "0"}</p>
        </div>
        {
          !localStorage.getItem('wallet') ?
          ( 
          <button onClick={openAndCloseModal} id="btn-wallet">{t("buy.connect")}</button>
          )
          :
          <button onClick={order} id="btn-wallet">{t("buy.pay")}</button>

        }
               
      </div>

      {
          modal && <Modal/>
        }
      <div className="div-coins">
        <div>
          <img src={ Usdt} alt="arrow" />
          <h3 className="usdt-name">USDT</h3>
        </div>
        <div>
          <img className="img-plg" src={Blocks} alt={"test"} />
          <h3>GNS</h3>
        </div>
       
      </div>
    
      <Footer />
    </Container>
  );
}

export default Buy;
