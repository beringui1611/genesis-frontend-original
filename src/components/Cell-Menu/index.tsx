import { Link } from "react-router-dom"
import { Container } from "./styles"




function CellMenu() {
    return (
        <Container>
            <div id="background-menu">
                <div id="container-menu">
                    <Link to="/buy">Buy It Now!</Link>
                    <a href="/#div-2">About Gênesis</a>
                    <a href="/#div-3">Community</a>
                    <Link to="/farm">Farm</Link>
                    <Link to="/whitepaper">Whitepaper</Link>
                </div>
            </div>
        </Container>
    )
}

export default CellMenu