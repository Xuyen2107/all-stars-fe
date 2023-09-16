import { useEffect, useRef } from "react"



const Card = ({ video, picAva, name }) => {

    // const ref = useRef(null)
    // useEffect(() => {
    //     const videoEl = ref.current;
    //     const playVideo = () => {
    //         setTimeout(() => {
    //             videoEl.play();
    //         }, 2000)
    //     }
    //     const pauseVideo = () => {
    //         videoEl.currentTime = 0
    //         videoEl.pause();
    //     }
    //     videoEl.addEventListener('mouseenter', playVideo);
    //     videoEl.addEventListener("mouseleave", pauseVideo);
    //     return () => {
    //         clearTimeout(playVideo)
    //         videoEl.removeEventListener('mouseenter', playVideo);
    //         videoEl.removeEventListener("mouseleave", pauseVideo);

    //     }
    // }, [ref])

    return (
        <div className=" h-80 w-full block overflow-hidden mb-4 rounded-md relative border-2 border-solid border-slate-400">
            <img src={video} className="h-full object-cover">
            </img>
            {/* <video ref={ref} loop className="h-full object-cover">
                <source src={video} type="video/mp4"></source>
            </video> */}
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
