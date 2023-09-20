import React, { useEffect, useRef, useState, } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './storiesClick.module.scss';
import './swiper.css'
import { Pagination, Navigation } from 'swiper/modules';

const StoriesClick = ({ open, listStr, id, closeStr, }) => {



    // const [newList, setList] = useState([])
    // const strUser = (id) => {
    //     const newListStrUser = listStr.filter((item) => item.user.id === id)
    //     setList(newListStrUser)
    // }
    // useEffect(() => {
    //     strUser()
    // })
    return (
        <div className={`fixed opacity-90 z-10 top-0 left-0 bottom-0  right-0  bg-black   ${open ? "block" : "hidden"} `}>
            <div onClick={closeStr} className='absolute right-10 h-8 w-8 text-[25px] text-yellow-50 cursor-pointer z-30'>X</div>
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
                                <SwiperSlide >
                                    <div className='w-full h-full object-cover'>
                                        {str.type === 'image' ?
                                            <img src={str.url} className="h-full w-full object-cover"></img> :
                                            <video autoPlay className="h-full w-full object-cover">
                                                <source src={str.url} type="video/mp4"></source>
                                            </video>
                                        }
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