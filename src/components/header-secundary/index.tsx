import { Container } from "./styles";
import ArrowIcon from '../../assets/Header-images/arrow.png';
import BnbLogo from '../../assets/Header-images/bnb-logo-button.png';
import PolygonLogo from '../../assets/Header-images/plygon.png';
import Language from '../../assets/Header-images/language.png';


import { useState } from "react";
import { switchNetworkBsc } from "../../service/Web3Service";
import { switchNetworkPolygon } from "../../service/Web3Service";
import { useTranslation } from "react-i18next";

function HeaderSecundary() {

    const [network, setNetwork] = useState<number>(1);
    const [styleLg, setStyleLg] = useState<number>(1);
    const [box, setBox] = useState<boolean>(false);
    const { i18n } = useTranslation();


    function handleChangeLanguage(language: string, position: number) {
        i18n.changeLanguage(language);
        setStyleLg(position);
    }

    async function switchNet() {
        try {
            if (network === 1) {
                await switchNetworkBsc().then(() => localStorage.setItem('network', 'bsc')).then(err => err);
            }

            if (network === 2) {
                await switchNetworkPolygon().then(() => localStorage.setItem('network', 'polygon')).then(err => err);
            }
        }
        catch (err) {
            return err
        }
    }

    function handleChangeNetwork(): void {
        if (network === 1) {
            setNetwork(2);
        }
        if (network === 2) {
            setNetwork(1);
        }
    }

    function handleOpenBox(){
        setBox(!box);
    }

    return (
        <Container>

            <button onClick={handleOpenBox} id="btn-language"><img id="global" src={Language} alt="lg" /></button>
            {
                box &&
                <div id="box-lg">
                    <button style={{
                        backgroundColor: styleLg === 1 ? "#FF3395" : "transparent",
                        color: styleLg === 1 ? "#ffff" : "#000"
                    }}
                        onClick={() => handleChangeLanguage("en", 1)} className="btn-lg">EN-US</button>

                    <button style={{
                        backgroundColor: styleLg === 2 ? "#FF3395" : "transparent",
                        color: styleLg === 2 ? "#ffff" : "#000"
                    }} onClick={() => handleChangeLanguage("es", 2)} className="btn-lg">ES-ES</button>

                    <button style={{
                        backgroundColor: styleLg === 3 ? "#FF3395" : "transparent",
                        color: styleLg === 3 ? "#ffff" : "#000"
                    }} onClick={() => handleChangeLanguage("pt", 3)} className="btn-lg">PT-BR</button>

                    <button style={{
                        backgroundColor: styleLg === 4 ? "#FF3395" : "transparent",
                        color: styleLg === 4 ? "#ffff" : "#000"
                    }} onClick={() => handleChangeLanguage("ar", 4)} className="btn-lg">عربي-سا</button>

                    <button style={{
                        backgroundColor: styleLg === 5 ? "#FF3395" : "transparent",
                        color: styleLg === 5 ? "#ffff" : "#000"
                    }} onClick={() => handleChangeLanguage("jp", 5)} className="btn-lg">日本語-日本</button>

                    <button style={{
                        backgroundColor: styleLg === 6 ? "#FF3395" : "transparent",
                        color: styleLg === 6 ? "#ffff" : "#000"
                    }} onClick={() => handleChangeLanguage("ch", 6)} className="btn-lg">國語-中國</button>
                </div>
            }


            <div id="container-network">
                <button onClick={handleChangeNetwork} id="btn-change"><img src={ArrowIcon} alt="arrow" /></button>
                {
                    network === 1 ?
                        (
                            <button onClick={switchNet} className="btn-network"><img src={BnbLogo} alt="bsc" />BNB CHAIN</button>
                        )
                        :
                        ""
                }

                {
                    network === 2 ?
                        (
                            <button onClick={switchNet} className="btn-network"><img src={PolygonLogo} alt="polygon" />Polygon</button>
                        )

                        :
                        ""
                }
            </div>
        </Container>
    )
}

export default HeaderSecundary;