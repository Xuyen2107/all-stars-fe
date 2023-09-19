import { useEffect, useRef, useState } from "react"
import StoriesClick from "../../StoriesClick/StoriesClick"



const Card = ({ url, picAva, name, type, onStoriesFullView }) => {


    const ref = useRef(null)
    useEffect(() => {
        const videoEl = ref.current;
        if (type === 'video') {
            const playVideo = () => {
                videoEl.play();
            }
            const pauseVideo = () => {
                videoEl.currentTime = 0
                videoEl.pause();
            }
            videoEl.addEventListener('mouseenter', playVideo);
            videoEl.addEventListener("mouseleave", pauseVideo);
        }
        return () => {
            if (type === 'video') {
                videoEl.removeEventListener('mouseenter', playVideo);
                videoEl.removeEventListener("mouseleave", pauseVideo);
            }

        }
    }, [ref])

    return (
        <div onClick={onStoriesFullView} className=" h-80 w-full block overflow-hidden mb-4 rounded-md relative border-2 border-solid border-slate-400">
            {type === 'image' ?
                <img src={url} className="h-full w-full object-cover"></img> :
                <video ref={ref} loop className="h-full w-full object-cover">
                    <source src={url} type="video/mp4"></source>
                </video>
            }

            <div className="absolute text-center h-40 w-full bottom-0 flex flex-col gap-4 justify-center items-center">
                <div>
                    <img src={picAva} className="h-14 w-14 object-cover rounded-full text-center  ">
                    </img>
                </div>
                <div className="text-gray-700">
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
