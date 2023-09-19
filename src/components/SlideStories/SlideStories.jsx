import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './swiper.css';

import { FreeMode, Pagination } from 'swiper/modules'

const SlideStories = () => {
    return (

        <div className='w-[800px] h-[250px]'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='h-full w-full bg-slate-700  rounded-[10px] flex flex-col justify-evenly '>
                        <div className='h-16 w-16 rounded-[50px] bg-white flex justify-center self-center flex-col ' >
                            <i className="fa-solid fa-plus" ></i>
                        </div>
                        <span>
                            ADD Story
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>

    );
}

export default SlideStories