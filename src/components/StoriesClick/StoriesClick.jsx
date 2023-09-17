const StoriesClick = ({ open }) => {
    return (
        <div className="absolute">
            <div className={` relative w-screen h-screen bg-black ${open ? "block" : "hidden"} `}>
                <div className="absolute top-0 left-0 h-full w-96 rounded-sm">
                    <span>Hello mấy anh em </span>
                </div>
            </div>
        </div>
    )
}

export default StoriesClick