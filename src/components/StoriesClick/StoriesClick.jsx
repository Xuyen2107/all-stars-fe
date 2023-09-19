import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './storiesClick.module.scss';
import './swiper.css'
import { Pagination, Navigation } from 'swiper/modules';

const StoriesClick = ({ open, listStr }) => {
    return (
        <div className={`fixed opacity-80 z-10 top-0 left-0 bottom-0  right-0  bg-black ${open ? "block" : "hidden"} `}>
            <div>X</div>
            <div className={`absolute z-30 top-40 left-40 bottom-40 right-40 flex justify-center rounded-sm `}>
                <div className='w-3/12 h-full  bg-white'>
                    <Swiper
                        pagination={{
                            type: 'progressbar',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {listStr.map((str) => {
                            return (
                                <SwiperSlide>
                                    <div className='w-full h-full object-cover'>
                                        <img src={str.url} alt="Pictures" />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default StoriesClick