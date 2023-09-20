import React, { useContext, useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './swiper.css';

import { FreeMode, Pagination } from 'swiper/modules'
import storiesAPI from '../../apis/storiesAPI';
import AuthContext from '../../context/authContext/authContext';
import Card from '../Layouts/Card/Card';



const SlideStories = () => {

    const [stories, setStories] = useState([])
    const [selectedFile, setSelectedFile] = useState("")
    const [loading, setLoading] = useState(null)
    const {
        auth: { user },
        fetchCurrentUser,
    } = useContext(AuthContext)
    const handleAPIPostsImg = async () => {
        if (!selectedFile) return;
        try {

            const formData = new FormData()
            formData.append("story", selectedFile)
            await storiesAPI.upLoadStr(formData)
            await fetchCurrentUser()
            console.log("🚀 ~ file: SlideStories.jsx:23 ~ handleAPIPostsImg ~ formData:", formData)
        }
        catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    const UploadImage = (e) => {
        const file = e.target.files[0]
        console.log("🚀 ~ file: SlideStories.jsx:34 ~ UploadImage ~ file:", file)
        setSelectedFile(file)
    }
    const storiesGetAll = async () => {
        const result = await storiesAPI.getStories()
        setStories(result?.data?.data || [])
    }
    useEffect(() => {
        storiesGetAll()
    }, [])

    return (
        <div className='w-[800px] h-[250px] mb-20'>
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
                            <input onChange={UploadImage} type="file" name="userPicture" />
                            <button onClick={handleAPIPostsImg} type='submit'>
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <span className='text-slate-50'>
                            ADD Story
                        </span>
                    </div>
                </SwiperSlide>
                {stories.map((item) => {
                    return (
                        <SwiperSlide>
                            <div className='h-full w-full bg-slate-700 rounded-[10px]'>
                                <Card
                                    screen={false}
                                    type={item.type}
                                    url={item.url}
                                    picAva={item.user.profilePicture}
                                    name={item.user.username} />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

    );
}

export default SlideStories