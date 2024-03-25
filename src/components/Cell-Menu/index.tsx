import { Link } from "react-router-dom"
import { Container } from "./styles"
import { desconnect } from "../../service/Web3Service"




function CellMenu() {
    function btnDesconnect(){
       desconnect(); 
    }
    return (
        <Container>
            <div id="background-menu">
                <div id="container-menu">
                    <Link to="/buy">Buy It Now!</Link>
                    <a href="/#div-2">About Gênesis</a>
                    <a href="/#div-3">Community</a>
                    <Link to="/farm">Farm</Link>
                    <Link to="/whitepaper">Whitepaper</Link>
                    <div id="end-box">
                     <div id="box-info">
                        <div id="profile-box"></div>
                        <p id="address">
                            {
                                localStorage.getItem("wallet") ?
                                <p>{JSON.parse(`${localStorage.getItem("wallet")}`)}</p>
                                :
                                <button id="cnt-wallet">connect wallet</button>
                            }
                        </p>
                     </div>
                     <div id="info">
                        <button onClick={desconnect} id="btn-close">SAIR</button>
                        <a href={`https://testnet.bscscan.com/address/${JSON.parse(`${localStorage.getItem("wallet")}`)}`} id="explorer">VER NO EXPLORADOR</a>
                     </div>
                </div>
                </div>
            </div>
        </Container>
    )
}

export default CellMenu