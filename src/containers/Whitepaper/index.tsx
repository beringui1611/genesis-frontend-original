import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Container } from "./styles"
import DownloadSimbol from "../../assets/Whitepaper-assets/download-simbol.svg"
import { useState } from "react"
import ThreeLines from "../../assets/Media-assets/three-lines.svg"
import CloseLines from "../../assets/Media-assets/close-lines.svg"
import CellMenu from "../../components/Cell-Menu"





function Whitepaper(){
  const [ menu, setMenu ] = useState(false)

  function clickButton(){
    setMenu(!menu)
  }

  return(
    <Container>
      <Header/>
      <button onClick={clickButton} id="button-whitepaper"><img src={menu ? CloseLines : ThreeLines} alt="button-menu" /></button>
      { menu && <CellMenu/>}
      <div className="whitepaper-title">
        <h1>Whitepaper</h1>
      </div>
      <div className="containers-pdf">
        <div><a href="" download=""><img src={DownloadSimbol} alt="donwload-simbol" />English</a></div>
        <div><a href="" download=""><img src={DownloadSimbol} alt="donwload-simbol" />Spanish</a></div>
        <div><a href="" download=""><img src={DownloadSimbol} alt="donwload-simbol" />Português-Brasil</a></div>
        <div><a href="" download=""><img src={DownloadSimbol} alt="donwload-simbol" />عربي</a></div>
        <div><a href="" download=""><img src={DownloadSimbol} alt="donwload-simbol" />日本語</a></div>
        <div><a href="" download=""><img src={DownloadSimbol} alt="donwload-simbol" />中國人</a></div>
      </div>
      <Footer/>
    </Container>
  )
}

export default Whitepaper