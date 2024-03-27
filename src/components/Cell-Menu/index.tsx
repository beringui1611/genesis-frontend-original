import { Link } from "react-router-dom"
import { Container } from "./styles"
import { desconnect } from "../../service/Web3Service"
import { useEffect, useState } from "react";
import ModalCell from "../../components/Modal-cell";
import {toast} from 'react-toastify'
import { useTranslation} from "react-i18next";




function CellMenu() {
    const [close, setClose] = useState(false);
    const [wallet, setWallet] = useState("");
    const {t} = useTranslation();

    useEffect(() =>{
        const newWallet: any = localStorage.getItem("wallet");
        setWallet(newWallet);
        
    },[])
    async function handleClickDesconnect(): Promise<any> {
        await toast.promise(
            new Promise((resolve: any, reject) => {
                try {
                    desconnect()
                    window.location.reload();
                    resolve();
                } catch (error) {
                    reject(error);
                }
            }),
            {
                pending: "disconnecting your wallet...",
                success: "wallet disconnected",
                error: "wallet not found"
            }
        );
    }


    function openModal(){
        setClose(!close);
    }
    return (
        <Container>
            <div id="background-menu">
                <div id="container-menu">
                    <Link to="/buy">{t("header.buyNow")}</Link>
                    <a href="/#div-2">{t("header.about")}</a>
                    <a href="/#div-3">{t("header.community")}</a>
                    <Link to="/farm">{t("header.farm")}</Link>
                    <Link to="/whitepaper">{t("header.whitepaper")}</Link>
                    <div id="end-box">
                     <div id="box-info">
                        <div id="profile-box"></div>
                        <p id="address">
                            {
                                wallet ?
                                (<p>{JSON.parse(wallet)}</p>)
                                :
                                (<button onClick={openModal} id="cnt-wallet">connect wallet</button>)
                            }
                        </p>
                        {
                            close && <ModalCell/>
                        }
                     </div>
                     <div id="info">
                        <button onClick={handleClickDesconnect} id="btn-close">{t("header.desconnect")}</button>
                        <a href={`https://testnet.bscscan.com/address/${JSON.parse(`${localStorage.getItem("wallet")}`)}`} id="explorer">{t("header.viewExplorer")}</a>
                     </div>
                </div>
                </div>
            </div>
        </Container>
    )
}

export default CellMenu