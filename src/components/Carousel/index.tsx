import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import Man from '../../assets/Home-assets/man.jpg';
import Predios from '../../assets/Home-assets/predios.png';

import "./styles"
import { Container } from "./styles"
import { Navigation } from "swiper/modules"
import { useTranslation } from "react-i18next";

function Carousel() {
    const { t } = useTranslation();

    return (
        <Container>
            <Swiper navigation={true} modules={[Navigation]} className="my-swiper">
                <SwiperSlide><div className="container-carousel"><img id="pic-predios" src={Predios} alt="predios" /></div><h2>{t("home.waitOne")}</h2></SwiperSlide>
                <SwiperSlide><div className="container-carousel"><img id="pic-man" src={Man} alt="man" /></div><h2>{t("home.waitTwo")}</h2></SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Carousel