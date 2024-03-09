import { Container } from "./styles";
import LogoWithName from "../../assets/Header-images/logo-genesis.png";
import LogoNotName from '../../assets/Header-images/somente-bloco.png';
import BnbLogo from '../../assets/Header-images/bnb-logo-button.png';
import ArrowIcon from '../../assets/Header-images/arrow.png';
import { useEffect, useState} from "react";
import { Link } from "react-router-dom"
import Modal from "../Modal";
import { toast } from 'react-toastify'
import PolygonLogo from '../../assets/Header-images/plygon.png';
import { desconnect, switchNetworkBsc, switchNetworkPolygon } from "../../service/Web3Service";
import { useTranslation} from "react-i18next";






export default function Header() {
    const [modal, setModal] = useState<boolean>(false);
    const [wallet, setWallet] = useState<String>("");
    const [navbar, setNavBar] = useState<boolean>(false);
    const [menu, setMenu] = useState<number>(1);
    const [select, setSelect] = useState<boolean>(false);
    const {t, i18n} = useTranslation();


    function handleChangeLanguage(language: string){
        i18n.changeLanguage(language);
    }
 


    useEffect(() => {
        const walletFromLocalStorage = localStorage.getItem('wallet');
        if (walletFromLocalStorage) {
            setWallet(JSON.parse(walletFromLocalStorage));
        }
    }, []);

    function handleClickOpenModal() {
        setModal(!modal);
    }

    function handleMovieNavOpen() {
        setNavBar(!navbar)
    }

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

    function handleOpenMenu() {
        if (menu === 1) {
            setMenu(2);
        }

        if (menu === 2) {
            setMenu(1)
        }
    }

    function openSelect() {
        setSelect(!select);
    }

    async function switchNet() {
        try {
            if (menu === 1) {
                await switchNetworkBsc().then(() => localStorage.setItem('network', 'bsc')).then(err => err);
            }

            if (menu === 2) {
                await switchNetworkPolygon().then(() => localStorage.setItem('network', 'polygon')).then(err => err);
            }
        }
        catch (err) {
            return err
        }

    }



    return (
        <Container id="container-primary">
            <div id="div-one">
                <a href="/#div-1"><img src={LogoWithName} alt="Logo" /></a>
                <div id="nav-bar">
                    <Link to="/buy">{t("header.buyNow")}</Link>
                    <a href="/#div-2">{t("header.about")}</a>
                    <a href="/#div-3">{t("header.community")}</a>
                    <Link to="/farm">{t("header.farm")}</Link>
                    <Link to="/whitepaper">{t("header.whitepaper")}</Link>
                </div>
                <div id="box-lg">
                    <img src={LogoNotName} alt="Logo" />
                    <button onClick={openSelect} id="button-lg"></button>
                    {
                        select && 
                        <div id="select-lg">
                            <button onClick={() => handleChangeLanguage("en")} className="btn-change">EN-US</button>
                            <button onClick={() => handleChangeLanguage("es")} className="btn-change">ES-ES</button>
                            <button onClick={() => handleChangeLanguage("pt")} className="btn-change">PT-BR</button>
                            <button onClick={() => handleChangeLanguage("ar")} className="btn-change">عربي-سا</button>
                            <button onClick={() => handleChangeLanguage("jp")} className="btn-change">日本語-日本</button>
                            <button onClick={() => handleChangeLanguage("ch")} className="btn-change">國語-中國</button>
                        </div>
                    }
                </div>
                <div id="box-button">
                    <div id="box-network">
                        <button onClick={handleOpenMenu} style={{
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer"

                        }}><img src={ArrowIcon} className="arrow-icon" alt="icon-arrow
                        "/></button>
                        <div style={{ marginLeft: "10px" }}>
                            {
                                menu === 2 ?
                                    (
                                        <button onClick={switchNet} id="rpc-polygon"><img id="polygon-rede" src={PolygonLogo} alt="binance" />Polygon</button>

                                    )
                                    :
                                    ""
                            }

                            {
                                menu === 1 ?
                                    (
                                        <button onClick={switchNet} id="rpc"><img id="bnb-rede" src={BnbLogo} alt="binance" />BNB CHAIN</button>
                                    )
                                    :
                                    ""
                            }

                        </div>
                    </div>
                </div>

                <div style={{
                    marginLeft: "50px"
                }}>
                    {
                        wallet ? (
                            <button onClick={handleMovieNavOpen} id="button-conected">{wallet}</button>


                        ) : (
                            <button onClick={handleClickOpenModal} id="button-wallet">{t("header.connect")}</button>

                        )
                    }

                    {
                        navbar &&
                        <div id="menu-nav">
                            <button onClick={handleClickDesconnect} id="btn-desconnect">{t("header.desconnect")}</button>
                            <a id="block-explorer" href={`https://testnet.bscscan.com/address/${wallet}`}>{t("header.viewExplorer")}</a>
                        </div>
                    }

                    {
                        modal && <Modal />
                    }
                </div>
            </div>

        </Container>
    )
}

