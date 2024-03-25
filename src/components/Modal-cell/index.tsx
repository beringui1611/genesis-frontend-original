import { Container } from "./styles";
import Close from '../../assets/Logo-wallet/close.png';
import MetaMask from '../../assets/Logo-wallet/metamask-logo.png';
import Trust from '../../assets/Logo-wallet/trsut-wallet.png';
import Inject from '../../assets/Logo-wallet/wallet-inject.png';
import { useState } from "react";
import { toast } from 'react-toastify';
import { connectInjected, connectMetaMask, connectTrust} from "../../service/Web3Service";

function ModalCell(){
    const [menu, setMenu] = useState(true);
    function closeMenu(){
        setMenu(false);
    }

    async function handleClickMetaMask(): Promise<any> {
        try {
            await toast.promise(
                connectMetaMask().then(r => "connecting").catch(err => err),
                {
                    pending: " 🦄 connecting...",
                    success: " 🦄 Connect wallet with successfull!",
                    error: " 🦄 Wallet Not found! try again",
                }
            );

            localStorage.setItem('type', 'metamask')
            setMenu(!menu);
            await window.location.reload();

        } catch (err: any) {
            throw new Error("Wallet not found")
        }


    }

    async function handleClickTrustWallet(): Promise<any> {
        try {
    
            await toast.promise(
                connectTrust().then(r => "connecting").catch(err => err),
                {
                    pending: " 🦄 connecting...",
                    success: " 🦄 Connect wallet with successfull!",
                    error: " 🦄 Wallet Not found! try again",
                }
            );
            localStorage.setItem('type', 'trustwallet')
            setMenu(!menu);
            await window.location.reload();

        } catch (err: any) {
            throw new Error(err)
        }


    }

    
    async function handleClickInjected(): Promise<any> {
        try {
    
            await toast.promise(
                connectInjected().then(r => "connecting").catch(err => err),
                {
                    pending: " 🦄 connecting...",
                    success: " 🦄 Connect wallet with successfull!",
                    error: " 🦄 Wallet Not found! try again",
                }
            );
            localStorage.setItem('type', 'trustwallet')
            setMenu(!menu);
            await window.location.reload();

        } catch (err: any) {
            throw new Error(err)
        }


    }
    return (
        <>{
            menu &&  <Container onClick={closeMenu}>
            <button onClick={closeMenu} id="close"><img src={Close} alt="close" /></button>
            <div id="box-primary-cell">
               <p id="p-connect">Choose your wallet</p>
               <div id="box-btn">
                   <button onClick={connectMetaMask} className="btn-connect"><img src={MetaMask} alt="metamask"/></button>
                   <button onClick={handleClickInjected} className="btn-connect"><img src={Inject} alt="inject"/></button>
                   <button onClick={handleClickTrustWallet} className="btn-connect"><img src={Trust} alt="trustwallet"/></button>
               </div>
               <p id="not-wallet">Haven´t got a wallet yet?</p>
            </div>
          
       </Container>
        }</>
    )
}

export default ModalCell;