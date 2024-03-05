import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArrowBuy from "../../assets/Buy-assets/arrow-buy.svg";
import ArrowRight from "../../assets/Buy-assets/Arrow 2.svg";
import ArrowBuyTwo from "../../assets/Buy-assets/arrow-buy.svg"
import Usdt from "../../assets/Buy-assets/usdt-image.svg";
import Blocks from "../../assets/Buy-assets/blocks.svg";
import { Container } from "./styles";

function Buy() {
  const [usdt, setUsdt] = useState<number>(0);
  const [blocks, setBlocks] = useState<number>(0);
  const [arrow, setArrowChange] = useState(false);
  const [rotation, setRotation] = useState<number>(0);

  function handleChangeValueUsdt(event: any) {
    const valueMonthUpdate = event.target.value;
    const newValue = valueMonthUpdate * 10;
    setUsdt(newValue);
  }

  function handleChangeValueBlocks(event: any) {
    const valueMonthUpdateTwo = event.target.value;
    const newValueTwo = valueMonthUpdateTwo * 0.10;
    setBlocks(newValueTwo);
  }

  function invertValue(event:any) {
    const temp = usdt;
    setUsdt(blocks);
    setBlocks(temp);
    setArrowChange(!arrow);
    setRotation(rotation + 180)
  }

  return (
    <Container>
      <Header />
      <div className="buy-title">
        <h1>Buy GÊNESIS</h1>
        <p>
          are neque, in sollicitudin tellus ultricies sed. Nulla ultrices neque
          vel metus dapibus, non ultricies urna condimentum. Sed blandit eu
          elit a lacinia.
        </p>
        <a href="">Get Farming <img src={ArrowRight} alt="arror-right" /></a>
      </div>
      <div className="buy-containers">
        <div className="itens-buy-container">
          <h2>To Convert</h2>
          <input onChange={arrow ? handleChangeValueBlocks : handleChangeValueUsdt} className="input-buy" placeholder="0.0" min="0" type="number"/>
        </div>
        <button onClick={invertValue} id="change-value">
          <img src={arrow ? ArrowBuy : ArrowBuyTwo} alt="" /> 
        </button>
        <div className="itens-buy-container">
          <h2>For</h2>
          <p id="value-usdt-amount">{blocks}</p>
        </div>
        <button id="btn-wallet">CONNECT WALLET</button>
      </div>
      <div className="div-coins">
        <div>
          <img src={arrow ? Blocks : Usdt} alt={arrow ? "PLG-logo" : "USDT-logo"} /> 
          <h3>{arrow ? "PLG" : "USDT"}</h3> 
        </div>
        <div>
          <img src={arrow ? Usdt : Blocks} alt={arrow ? "USDT-logo" : "PLG-logo"} /> 
          <h3>{arrow ? "USDT" : "PLG"}</h3>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Buy;
