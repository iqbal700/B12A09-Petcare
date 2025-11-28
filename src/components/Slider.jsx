import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../assets/gm-01.jpg'
import img2 from '../assets/gm-02.jpg'
import img3 from '../assets/gm-03.jpg'

const Slider = () => {
    return (
        <div className="mt-16">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="w-full h-[600px] object-cover " src={img1} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-[600px] object-cover" src={img2} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-[600px] object-cover" src={img3} alt="img" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
