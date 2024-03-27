import { Container } from "./styles";
import { addYieldFarming, getBalance, getFarming, getRewards, getUsdt, removeYield} from "../../service/Web3Service";
import { useEffect, useState } from "react";
import ArrowIcon from '../../assets/Farm-assets/Arrow.png';
import ArrowIconPink from '../../assets/Farm-assets/arrow-pink.png';
import Header from "../../components/Header";
import Block from '../../assets/Farm-assets/block.png';
import Wallet from '../../assets/Farm-assets/wallet.png';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import UsdtIcon from '../../assets/Farm-assets/usdt.png'
import Modal from "../../components/Modal";
import { toast } from "react-toastify";
import Charts from "../../components/Charts";
import CellMenu from "../../components/Cell-Menu";
import ThreeLines from "../../assets/Media-assets/three-lines.svg"
import CloseLines from "../../assets/Media-assets/close-lines.svg"
import { useTranslation } from "react-i18next";

export default function Farm() {
  const [isActive, setIsActive] = useState<number>(1);
  const [valueMonth, setValueMonth] = useState<number>(0);
  const [balance, setBalance] = useState<any>(0)
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [usdt, setUsdt] = useState<any>(0);
  const [farming, setFarming] = useState<any>(0);
  const [menuMobile, setCloseMenuMobile] = useState(false);
  const {t} = useTranslation();



  async function handleClickYieldFarming() {
    try {
      await toast.promise(
        addYieldFarming(valueMonth * 10 ** 7),
        {
          pending: "sending value...",
          success: "send value with sucessfull",
          error: "error, try again!"
        }
      )
    } catch (err) {

    }
  }

  async function handleClickRemoveYield(){
    try{
      await toast.promise(
       removeYield(valueMonth * 10 ** 7).then()
       .catch(e =>{
          throw new Error(e)
        }),
        {
          pending: "sending value...",
          success: "withdraw make a successfull",
          error: "you dont have balance or time block"
        }
      )
    }catch(err){
      return err
    }
  }


  async function handleClickGetRewards(){
    try {
       await toast.promise(
         getRewards()
        .then()
        .catch(e => {
          throw new Error(e)
        }),
        {
          pending: "checking...",
          success: "reward send your account!",
          error: "time blocked or you dont have founds"
        }
       )
    }catch(err){
      return err
    }
  }

  function handleClickOpenModal() {
    setModal(!modal);
    console.log("ola")

  }

  function handleClickActive(event: number): void {
    setIsActive(event)
  }


  function handleChangeValueFarming(event: any) {
    const valueMonthUpdate = event.target.value
    const newValue = valueMonthUpdate * 0.10
    setValueMonth(newValue)
    const { value } = event.target;
    if (value.length <= 9) {
      setInputValue(value);
    }
  }


  useEffect(() => {
    async function fetchData() {
      try {
        const walletUser = localStorage.getItem('wallet');
        if (walletUser !== null) {
          const parsedWalletUser = JSON.parse(walletUser);
          const balanceResponse: any = await getBalance(parsedWalletUser);
          const balance = parseInt(balanceResponse) / Math.pow(10, 6);
  
          const balanceUsdtResponse: any = await getUsdt(parsedWalletUser);
          const balanceUsdt = parseInt(balanceUsdtResponse) / Math.pow(10, 6);
  
          const availableResponse: any = await getFarming(parsedWalletUser);
          const available = parseInt(availableResponse) / Math.pow(10, 6);
  
          setBalance(balance);
          setUsdt(balanceUsdt);
          setFarming(available);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    fetchData();
  }, []);


  function closeMenuMobile(){
    setCloseMenuMobile(!menuMobile)
  }
  
  
  return (
    <Container>
      <button onClick={closeMenuMobile} id="button-menu"><img src={menuMobile ? CloseLines : ThreeLines} alt="open-menu" /></button>
      { menuMobile && <CellMenu/>}
      <div id="disable"> <Header /></div>
     

      <h1 id="h1-genesis">{t("farm.titleOne")}</h1>

      <p id="paragraph-mkt">{t("farm.paragraph")}</p>


      <Link id="link" style={{
      }} to="/buy">{t("farm.get")} <img src={ArrowIcon} alt="arrow-icon" /></Link>

      <div id="container-grid">
        <div id="grid-one" className="grids">
          <div id="div-one-farm">
            <p id="text-one">{t("farm.learnParagraph")}</p>
            <h2 id="title-one">{t("farm.titleLearn")}</h2>
            <button id="btn-learn">{t("farm.learnClick")}</button>
          </div>
        </div>
        <div id="grid-two" className="grids">
          <h3 id="manage-title">{t("farm.manage")}</h3>
          <span id="manage-paragraph">{t("farm.manageParagraph")}</span>
          <div id="container-button">
            <button style={{
              backgroundColor: isActive === 1 ? "#FF3395" : "transparent",
              border: isActive === 1 ? "none" : "none",
              color: isActive === 1 ? "#ffff" : "#FF3395",
              cursor: "pointer"
            }} className="btn-choose"
              onClick={() => handleClickActive(1)}
            >{t("farm.farmButton")}</button>

            <button style={{
              backgroundColor: isActive === 2 ? "#FF3395" : "transparent",
              border: isActive === 2 ? "none" : "none",
              color: isActive === 2 ? "#ffff" : "#FF3395",
              cursor: "pointer"
            }} className="btn-choose"
              onClick={() => handleClickActive(2)}>
              {t("reward.getReward")}</button>

            <button style={{
              backgroundColor: isActive === 3 ? "#FF3395" : "transparent",
              border: isActive === 3 ? "none" : "none",
              color: isActive === 3 ? "#ffff" : "#FF3395",
              cursor: "pointer"
            }} className="btn-choose"
              onClick={() => handleClickActive(3)}>
              {t("withdraw.withdraw")}</button>
          </div>

          <hr id="line"></hr>

          <div>
            {
              isActive === 1 ?
                (
                  <div id="active-1">
                    <p id="farm-paragraph">{t("farm.manage")}</p>
                    <p id="farm-value">{t("farm.convert")}</p>
                    <div id="box-farm-one">
                      <div id="box-value">
                        <input onChange={handleChangeValueFarming} id="input-value" value={inputValue} placeholder="0.0" type="number" min="0" maxLength={9} />
                        <p id="convert-time">${valueMonth.toFixed(2)}</p>
                      </div>
                      <div id="box-balance">
                        <p className="wallet-value"><img src={Block} alt="blocks" />GNS</p>
                        <p className="wallet-value-two">
                          <img style={{ width: "30px", marginTop: "9px", marginRight: "-6px" }} src={Wallet} alt="wallet" />
                          {valueMonth ?
                            (balance - (Math.round(valueMonth * 10))) :
                            (valueMonth > balance ? 0 : balance)
                          }
                        </p>
                      </div>
                    </div>
                    <img id="arrow" src={ArrowIconPink} alt="arrow" />
                    <div id="box-farm-two">
                      <div id="usdt-container">
                        <p id="usdt-value">
                          {
                            (valueMonth * 1 / 100).toFixed(valueMonth <= 0.1 ? 3 : 2)
                          }
                        </p>
                      </div>
                      <div id="usdt-container-two">
                        <p className="wallet-value-three"><img src={UsdtIcon} alt="blocks" />USDT</p>
                        <p className="wallet-value-four">
                          <img style={{ width: "30px", marginTop: "9px", marginRight: "-9px" }} src={Wallet} alt="wallet" />
                          {
                            usdt
                          }
                        </p>
                      </div>
                    </div>
                    {
                      localStorage.getItem('wallet') ? (
                        <div>
                          <button onClick={handleClickYieldFarming} className="wallet">{t("farm.farmButton")}</button>


                        </div>
                      )
                        :
                     
                        <button  onClick={handleClickOpenModal} id="btn-connect" className="wallet">{t("farm.buttonConnect")}</button> 

                    }

                    {
                      modal && <Modal /> 
                    }

                   
                  </div>
                )
                :
                ""
            }

            {
              isActive === 2 ?
                (
                  <div id="active-1">
                    <p id="farm-paragraph">{t("reward.reward")}</p>
                    <p id="farm-value">{t("farm.convert")}</p>
                    <div id="box-farm-one">
                      <div id="box-value">
                        <input  id="input-value" value={farming} placeholder="0.0" type="number" min="0" disabled />
                        <p id="convert-time">${(farming * 10 /100).toFixed(2) }</p>
                      </div>
                      <div id="box-balance">
                        <p className="wallet-value"><img src={Block} alt="blocks" />GNS</p>
                        <p className="wallet-value-two">
                          <img style={{ width: "30px", marginTop: "9px", marginRight: "-6px" }} src={Wallet} alt="wallet" />
                          {
                            farming 
                          }
                        </p>
                      </div>
                    </div>
                    <img id="arrow" src={ArrowIconPink} alt="arrow" />
                    <div id="box-farm-two">
                      <div id="usdt-container">
                        <p id="usdt-value">
                          {
                            (farming * 0.10 / 100).toFixed(2)

                          }
                        </p>
                      </div>
                      <div id="usdt-container-two">
                        <p className="wallet-value-three"><img src={UsdtIcon} alt="blocks" />USDT</p>
                        <p className="wallet-value-four">
                          <img style={{ width: "30px", marginTop: "9px", marginRight: "-9px" }} src={Wallet} alt="wallet" />
                          {
                            usdt
                          }
                        </p>
                      </div>
                    </div>
                    {
                      localStorage.getItem('wallet') ? (
                        <div>
                          <button onClick={handleClickGetRewards} className="wallet">{t("reward.getReward")}</button>


                        </div>
                      )
                        :
                        <button onClick={handleClickOpenModal} className="wallet">{t("farm.buttonConnect")}</button>

                    }

                    {
                      modal && <Modal />
                    }
                   
                  </div>
                )
                :
                ""
            }


            {
              isActive === 3 ?
                (
                  <div id="active-1">
                    <p id="farm-paragraph">{t("withdraw.withdraw")}</p>
                    <p id="farm-value">{t("farm.convert")}</p>
                    <div id="box-farm-one">
                      <div id="box-value">
                        <input onChange={handleChangeValueFarming} id="input-value" value={inputValue} placeholder="0.0" type="number" min="0" maxLength={9} />
                        <p id="convert-time">${valueMonth.toFixed(2)}</p>
                      </div>
                      <div id="box-balance">
                        <p className="wallet-value"><img src={Block} alt="blocks" />GNS</p>
                        <p className="wallet-value-two">
                          <img style={{ width: "30px", marginTop: "9px", marginRight: "-6px" }} src={Wallet} alt="wallet" />
                          {
                           farming
                          }
                        </p>
                      </div>
                    </div>
                    {
                      localStorage.getItem('wallet') ? (
                        <div>
                          <button onClick={handleClickRemoveYield} className="wallet">{t("withdraw.withdraw")}</button>


                        </div>
                      )
                        :
                        <button onClick={handleClickOpenModal} className="wallet">{t("farm.buttonConnect")}</button>

                    }

                  
                      <div id="container-mobile">
                        {
                           modal && <Modal />
                        }
                      </div>
    
                  </div>
                )
                :
                ""
            }
          </div>




        </div>
        <div id="grid-three" className="grids">
          <div id="container-primary">
            <p id="your-balance">{t("balance.your")}</p>
          </div>
          <div>
            <div className="container-primary-balance">
              <div className="container-balance-plg">
                <p id="paragraph-farm">{t("balance.balance")}</p>
                <p id="h1-plg"><img src={Block} alt="usdt" />GNS</p>
              </div>
              <div className="container-amount">
                <p className="amount" id="dolar-amount">{parseInt(balance).toFixed(2)}</p>
              </div>
            </div>
            <div className="container-primary-balance">
              <div className="container-balance-plg">
                <p id="paragraph-usdt">{t("balance.rated")}</p>
                <p id="usdt-amount"><img src={UsdtIcon} alt="usdt-icon" />USDT</p>
              </div>
              <div className="container-amount">
                <p className="amount" id="dolar-amount">${(balance * 1).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="grid-fuor" className="grids">
          <div id="box-graphic">
          <Charts />
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  )
}