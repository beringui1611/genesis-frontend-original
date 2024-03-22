import { Container, Image } from "./styles";
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
    const [styleLg, setStyleLg] = useState<number>(1);
    const {t, i18n} = useTranslation();


    function handleChangeLanguage(language: string, position: number){
        i18n.changeLanguage(language);
        setStyleLg(position);
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
                <a href="/#div-1"><Image src={LogoWithName} alt="Logo" className="logo-with-name" /></a>
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
                            <button style={{
                                backgroundColor: styleLg === 1 ? "#FF3395" : "transparent",
                                color: styleLg === 1 ? "#ffff" : "#000"
                            }} 
                            onClick={() => handleChangeLanguage("en", 1)} className="btn-change">EN-US</button>

                            <button style={{
                                backgroundColor: styleLg === 2 ? "#FF3395" : "transparent",
                                color: styleLg === 2 ? "#ffff" : "#000"
                            }}  onClick={() => handleChangeLanguage("es", 2)} className="btn-change">ES-ES</button>

                            <button style={{
                                backgroundColor: styleLg === 3 ? "#FF3395" : "transparent",
                                color: styleLg === 3 ? "#ffff" : "#000"
                            }}  onClick={() => handleChangeLanguage("pt", 3)} className="btn-change">PT-BR</button>

                            <button style={{
                                backgroundColor: styleLg === 4 ? "#FF3395" : "transparent",
                                color: styleLg === 4 ? "#ffff" : "#000"
                            }}  onClick={() => handleChangeLanguage("ar", 4)} className="btn-change">عربي-سا</button>

                            <button style={{
                                backgroundColor: styleLg === 5 ? "#FF3395" : "transparent",
                                color: styleLg === 5 ? "#ffff" : "#000"
                            }}  onClick={() => handleChangeLanguage("jp", 5)} className="btn-change">日本語-日本</button>

                            <button style={{
                                backgroundColor: styleLg === 6 ? "#FF3395" : "transparent",
                                color: styleLg === 6 ? "#ffff" : "#000"
                            }}  onClick={() => handleChangeLanguage("ch", 6)} className="btn-change">國語-中國</button>
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
                                        <button onClick={switchNet} id="rpc-polygon"><img id="polygon-rede" src={PolygonLogo} alt="binance" /><p>Polygon</p></button>

                                    )
                                    :
                                    ""
                            }

                            {
                                menu === 1 ?
                                    (
                                        <button onClick={switchNet} id="rpc"><img id="bnb-rede" src={BnbLogo} alt="binance" /><p>BNB CHAIN</p></button>
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

