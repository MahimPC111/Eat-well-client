import React from "react";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import banner1 from '../../../../assets/banner/banner-1.jpg'
import banner2 from '../../../../assets/banner/banner-2.jpg'
import banner3 from '../../../../assets/banner/banner-3.jpg'
import banner4 from '../../../../assets/banner/banner-4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './Slider.css'

export default function Slider() {
    const bannerData = [
        {
            image: banner1,
            headline: 'We give the best service in the town'
        },
        {
            image: banner2,
            headline: 'Try our food to get the best taste'
        },
        {
            image: banner3,
            headline: 'We maintain proper hygienic to cook our foods'
        },
        {
            image: banner4,
            headline: 'Let us start a new journey with Eat well'
        }
    ]
    return (
        <div className="w-3/4 lg:w-1/2 mx-auto mt-20">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    bannerData.map((data, i) => <SwiperSlide key={i}>
                        <div className="relative banner-img">
                            <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-white font-semibold text-2xl lg:text-3xl text-center">{data.headline}</h1>
                                    <span className="text-warning text-xl lg:text-2xl font-semibold mt-2 lg:mt-5">Eat well, stay healthy</span>
                                </div>
                            </div>
                            <img src={data.image} alt="" />
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
}
