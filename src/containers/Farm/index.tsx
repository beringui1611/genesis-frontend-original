import { Container } from "./styles";
import { addYieldFarming } from "../../service/Web3Service";
import { useEffect, useState } from "react";
import ArrowIcon from '../../assets/Farm-assets/Arrow.png';
import ArrowIconPink from '../../assets/Farm-assets/arrow-pink.png';
import Header from "../../components/Header";
import Block from '../../assets/Farm-assets/block.png';
import Wallet from '../../assets/Farm-assets/wallet.png';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { getBalance } from "../../service/Web3Service";
import UsdtIcon from '../../assets/Farm-assets/usdt.png'
export default function Farm() {
  const [farming, setFarming] = useState<any>();
  const [message, setMessage] = useState<string>("");
  const [isActive, setIsActive] = useState<number>(1);
  const [valueMonth, setValueMonth] = useState<number>(0);
  const [walletUser, setWalletUser] = useState<string>("");
  const [balance, setBalance] = useState<any>(0)


  async function handleClickYieldFarming() {
    try {
      if (farming === undefined || isNaN(farming)) {
        setMessage("Please enter a valid farming value.");
        return;
      }

      const newValue = farming * 10 ** 6;
      console.log(newValue)
      await addYieldFarming(newValue);
      setMessage("Yield farming added successfully!");
    } catch (err) {
      setMessage("Error adding yield farming: " + err);
    }
  }


  function handleClickValueFarming(event: any): any {
    setFarming(event.target.value)
  }

  function handleClickActive(event: number): void {
    setIsActive(event)
  }

  function handleChangeValueFarming(event: any) {
    const valueMonthUpdate = event.target.value
    const newValue = valueMonthUpdate * 0.10
    setValueMonth(newValue)
  }

  useEffect(() => {
    async function defaultView() {
      try {
        const walletUser = localStorage.getItem('wallet');
        if (walletUser !== null) {
          const parsedWalletUser = JSON.parse(walletUser);
          setWalletUser(parsedWalletUser);
          const balance: any = await getBalance(parsedWalletUser);
          const newBalance: any = parseInt(balance);
          const math = newBalance / Math.pow(10, 6);
          setBalance(math)
        }

      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }

    defaultView();
  }, []);



  return (
    <Container>
      <Header />

      <h1 style={{
        color: "#FF54A6",
        fontSize: "40px",
        marginLeft: "100px",
        marginTop: "40px",
      }}>GÊNESIS Farm</h1>

      <p style={{
        color: "#ffff",
        fontSize: "20px",
        marginLeft: "100px",
        width: "800px",
        marginBottom: "20px"
      }}>are neque, in sollicitudin tellus ultricies sed. Nulla ultrices neque vel metus dapibus, non ultricies urna condimentum. Sed blandit eu elit a lacinia. </p>


      <Link style={{
        color: "#FF54A6",
        marginLeft: "100px",
        fontSize: "20px"
      }} to="/buy">Get PLG <img src={ArrowIcon} alt="arrow-icon" /></Link>

      <div id="container-grid">
        <div id="grid-one" className="grids">
          <div id="div-one-farm">
            <p id="text-one">Don't know how to use the platform? learn now.</p>
            <h2 id="title-one">Plural Genêsis</h2>
            <button id="btn-learn">Click here</button>
          </div>
        </div>
        <div id="grid-two" className="grids">
          <h3 id="manage-title">Manage</h3>
          <span id="manage-paragraph">Manage your position at the PLG.</span>
          <div id="container-button">
            <button style={{
              backgroundColor: isActive === 1 ? "#FF3395" : "transparent",
              border: isActive === 1 ? "none" : "none",
              color: isActive === 1 ? "#ffff" : "#FF3395",
              cursor: "pointer"
            }} className="btn-choose"
              onClick={() => handleClickActive(1)}
            >Farm</button>

            <button style={{
              backgroundColor: isActive === 2 ? "#FF3395" : "transparent",
              border: isActive === 2 ? "none" : "none",
              color: isActive === 2 ? "#ffff" : "#FF3395",
              cursor: "pointer"
            }} className="btn-choose"
              onClick={() => handleClickActive(2)}>
              Get Reward</button>

            <button style={{
              backgroundColor: isActive === 3 ? "#FF3395" : "transparent",
              border: isActive === 3 ? "none" : "none",
              color: isActive === 3 ? "#ffff" : "#FF3395",
              cursor: "pointer"
            }} className="btn-choose"
              onClick={() => handleClickActive(3)}>
              Withdraw Tokens</button>
          </div>

          <hr id="line"></hr>

          <div>
            {
              isActive === 1 ?
                (
                  <div id="active-1">
                    <p id="farm-paragraph">Farm</p>
                    <p id="farm-value">1 PLG ($0.10) = $0.001 USDT a month.</p>
                    <div id="box-farm-one">
                      <div id="box-value">
                        <input onChange={handleChangeValueFarming} id="input-value" placeholder="0.0" type="number" min="0" />
                        <p id="convert-time">${valueMonth.toFixed(2)}</p>
                      </div>
                      <div id="box-balance">
                        <p style={{ display: "flex", alignItems: "center", gap: "5px", color: "#ffff", fontWeight: "700", marginTop: "20px" }}><img src={Block} alt="blocks" />PLG</p>
                        <p style={{ display: "flex", alignItems: "center", gap: "5px", color: "#ffff", fontWeight: "700", marginTop: "20px", marginLeft: "-40px" }}>
                          <img style={{ width: "30px" }} src={Wallet} alt="wallet" />
                          {valueMonth ?
                            (balance - (valueMonth * 10)) :
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
                        <p style={{ display: "flex", alignItems: "center", gap: "5px", color: "#ffff", fontWeight: "700", marginTop: "20px" }}><img src={UsdtIcon} alt="blocks" />USDT</p>
                        <p style={{ display: "flex", alignItems: "center", gap: "5px", color: "#ffff", fontWeight: "700", marginTop: "20px", marginLeft: "-40px" }}>
                          <img style={{ width: "30px" }} src={Wallet} alt="wallet" />
                          $0.00
                        </p>
                      </div>
                    </div>
                    {
                      localStorage.getItem('wallet') ? (
                        <button className="wallet">Farming</button>
                      )
                        :
                        <button className="wallet">Connect Wallet</button>

                    }

                  </div>
                )
                :
                ""
            }


          </div>


        </div>
        <div id="grid-three" className="grids">

        </div>
        <div id="grid-fuor" className="grids">

        </div>
      </div>
      <Footer />
    </Container>
  )
}