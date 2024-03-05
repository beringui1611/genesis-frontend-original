import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Container } from "./styles"
import DownloadSimbol from "../../assets/Whitepaper-assets/download-simbol.svg"





function Whitepaper(){
  return(
    <Container>
      <Header/>
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