import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import '../../App.css';

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Images } from "interfaces/types";

interface Props {
    images: Array<Images>
}

// export default function Slider(props : Props) {
export default function Slider(props: Props) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <>
            <Swiper
                // style={{
                //   "--swiper-navigation-color": "#fff",
                //   "--swiper-pagination-color": "#fff",
                // }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {props.images?.map(image => <SwiperSlide>
                    <img src={image.url} />
                </SwiperSlide>)}

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={props.images.length}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {props.images?.map(image => <SwiperSlide>
                    <img src={image.url} />
                </SwiperSlide>)}
            </Swiper>
        </>
    );
}
