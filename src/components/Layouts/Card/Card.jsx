import { useEffect, useRef } from "react"

const Card = ({ video }) => {
    const ref = useRef(null)

    useEffect(() => {
        const videoEl = ref.current;
        const playVideo = () => {
            setTimeout(() => {
                videoEl.play();
            }, 2000)
        }
        const pauseVideo = () => {
            videoEl.currentTime = 0
            videoEl.pause();
        }
        videoEl.addEventListener('mouseenter', playVideo);
        videoEl.addEventListener("mouseleave", pauseVideo);
        return () => {
            clearTimeout(playVideo)
            videoEl.removeEventListener('mouseenter', playVideo);
            videoEl.removeEventListener("mouseleave", pauseVideo);

        }
    }, [ref])

    return (
        <div className=" h-80 w-full block overflow-hidden mb-4 rounded-md relative">
            <video ref={ref} loop className="h-full object-cover" >
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Card
