import { Container } from "./styles";
import LogoWithName from "../../assets/Header-images/logo-genesis.png";
import LogoNotName from '../../assets/Header-images/somente-bloco.png';
import BnbLogo from '../../assets/Header-images/bnb-logo-button.png';
import ArrowIcon from '../../assets/Header-images/arrow.png';
import { useEffect, useState } from "react";
import { Link ,useLocation } from "react-router-dom"
import Modal from "../Modal";
import { toast } from 'react-toastify'
import PolygonLogo from '../../assets/Header-images/plygon.png';
import { desconnect, switchNetworkBsc, switchNetworkPolygon } from "../../service/Web3Service";



export default function Header() {
    const [modal, setModal] = useState<boolean>(false);
    const [wallet, setWallet] = useState<String>("");
    const [navbar, setNavBar] = useState<boolean>(false);
    const [switchNetwork, setSwitchNetwork] = useState<number>(1);
    const [menu, setMenu] = useState<number>(1);
    const { pathname } = useLocation()



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
        <Container>
            <div id="div-one">
                <a href="/#div-1"><img src={LogoWithName} alt="Logo" /></a>
                <div id="nav-bar">
                    <Link to="/buy">Buy It Now!</Link>
                    <a href="/#div-2">About Gênesis</a>
                    <a href="/#div-3">Community</a>
                    <Link to="/farm">Farm</Link>
                    <Link to="/whitepaper">Whitepaper</Link>
                </div>
                <div id="box-lg">
                    <img src={LogoNotName} alt="Logo" />
                    <select >
                        <option></option>
                        <option>EN-US</option>
                        <option>ES-ES</option>
                        <option>PT-BR</option>
                        <option>عربي-سا</option>
                        <option>日本語-日本</option>
                        <option>國語-中國</option>
                    </select>
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
                            <button onClick={handleClickOpenModal} id="button-wallet">CONNECT WALLET</button>

                        )
                    }

                    {
                        navbar &&
                        <div id="menu-nav">
                            <button onClick={handleClickDesconnect} id="btn-desconnect">Desconect</button>
                            <a id="block-explorer" href={`https://testnet.bscscan.com/address/${wallet}`}>View Explorer</a>
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

