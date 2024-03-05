import { Container, Background } from "./styles";
import Logo from "../../assets/Header-images/logo-genesis.png"
import MetaMaskLogo from '../../assets/Logo-wallet/metamask-logo.png';
import TrustWalletLogo from '../../assets/Logo-wallet/trsut-wallet.png';
import InjectWalletLogo from '../../assets/Logo-wallet/wallet-inject.png'
import WalletModal from '../../assets/Logo-wallet/wallet.png'
import Close from '../../assets/Logo-wallet/close.png';
import { useState } from "react";
import { toast } from 'react-toastify';
import { connectInjected, connectMetaMask, connectTrust} from "../../service/Web3Service";

export default function Modal() {
    const [modalTwo, setModal] = useState<Boolean>(true)
    function isActive() {
        setModal(!modalTwo);
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
            setModal(!modalTwo);
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
            setModal(!modalTwo);
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
            setModal(!modalTwo);
            await window.location.reload();

        } catch (err: any) {
            throw new Error(err)
        }


    }



    return (
        <>
            {modalTwo && (
                <Background>
                    <Container >
                        <div id="box-primary">
                            <div id="box-one">
                                <button
                                    onClick={isActive}
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "none",
                                        position: "absolute",
                                        left: "30px",
                                        top: "10px",
                                        cursor: "pointer"
                                    }}
                                ><img id="close-button" src={Close} alt="close" /></button>
                                <div id="word">
                                    <h2>Choose your wallet</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elementum mi. Nullam aliquam enim consectetur metus sollicitudin varius. Vivamus gravida </p>
                                </div>
                                <div id="container-button-modal">
                                    <button onClick={handleClickMetaMask} className="btn"><img src={MetaMaskLogo} alt="metamask" /></button>
                                    <button onClick={handleClickInjected} className="btn"><img src={InjectWalletLogo} alt="injectwallet" /></button>
                                    <button onClick={handleClickTrustWallet} className="btn"><img src={TrustWalletLogo} alt="trustwallet" /></button>
                                </div>
                                <div id="container-letters">
                                    <p className="right-one">Metamask</p>
                                    <p className="right-three">Injected</p>
                                    <div id="trust">
                                        <p>Trust Wallet</p>
                                    </div>
                                </div>
                                <div id="logo-container"> <img src={Logo} alt="logo" /></div>
                            </div>
                            <div id="box-two">
                                <h2 id="text-create-wallet">HAVEN´T GOT A WALLET YET?</h2>
                                <img src={WalletModal} alt="modal" />
                                <a href="https://metamask.io" id="btn-create">Create Now</a>
                            </div>
                        </div>
                    </Container>
                </Background>
            )}
        </>
    )
}