import { Container } from "./styles";
import Close from '../../assets/Logo-wallet/close.png';
import MetaMask from '../../assets/Logo-wallet/metamask-logo.png';
import Trust from '../../assets/Logo-wallet/trsut-wallet.png';
import Inject from '../../assets/Logo-wallet/wallet-inject.png';
import { useState } from "react";
function ModalCell(){
    const [menu, setMenu] = useState(true);
    function closeMenu(){
        setMenu(false);
    }
    return (
        <>{
            menu &&  <Container onClick={closeMenu}>
            <button onClick={closeMenu} id="close"><img src={Close} alt="close" /></button>
            <div id="box-primary-cell">
               <p id="p-connect">Choose your wallet</p>
               <div id="box-btn">
                   <button className="btn-connect"><img src={MetaMask}/></button>
                   <button className="btn-connect"><img src={Inject}/></button>
                   <button className="btn-connect"><img src={Trust}/></button>
               </div>
               <p id="not-wallet">Haven´t got a wallet yet?</p>
            </div>
          
       </Container>
        }</>
    )
}

export default ModalCell;