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
                <SwiperSlide><div className="container-carousel"></div><h2>vitae gravida leo dignissim. Pellentesque egestas risus metus, quis com quam enim, blandit eget dapibus in, consectetur nec augue. Ut ornare varius odio nec iaculis.</h2></SwiperSlide>
                <SwiperSlide><div className="container-carousel"></div><h2>vitae gravida leo dignissim. Pellentesque egestas risus metus, quis com quam enim, blandit eget dapibus in, consectetur nec augue. Ut ornare varius odio nec iaculis.</h2></SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Carousel