import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "./styles"
import { Container } from "./styles"
import { Navigation } from "swiper/modules"


function Carousel() {

    return (
        <Container>
            <Swiper navigation={true} modules={[Navigation]} className="my-swiper">
                <SwiperSlide><div className="container-carousel"></div><h2>Enquanto o mercado de criptomoedas continua a crescer e evoluir rapidamente, muitos investidores enfrentam desafios e limitações ao buscar oportunidades de investimento significativas. É aqui que entra o GCoin - uma nova abordagem para investir e participar do emocionante mundo das criptomoedas.</h2></SwiperSlide>
                <SwiperSlide><div className="container-carousel"></div><h2>Enquanto algumas criptomoedas lutam para oferecer uma proposta de valor clara e sustentável, o GCoin se destaca como uma solução abrangente e inovadora. Aqui está como podemos comparar o mercado atual com o que podemos realizar com o GCoin:</h2></SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Carousel