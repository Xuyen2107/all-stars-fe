import React, { useState } from "react";
import styles from "./SocialActions.module.css";

const SocialActions = () => {
  const [like, setLike] = useState(false);
  return (
    <div className="m-4">
      <div className="flex justify-around border-b-2 border-t-2 pt-2 pb-2 mb-1">
        <button
          className="flex gap-1"
          onClick={() => {
            setLike(!like);
          }}
        >
          <i
            className={`fa-regular fa-thumbs-up ${like ? "text-blue-400" : ""}`}
          ></i>
          <p className={like ? "text-blue-400" : ""}>Like</p>
        </button>
        <button className="flex gap-1">
          <i className="fa-regular fa-comment"></i>
          <p>Comment</p>
        </button>
        <button className="flex gap-1">
          <i className="fa-regular fa-share-from-square"></i>
          <p>Share</p>
        </button>
      </div>
      <div className="flex justify-items-start gap-2 w-full">
        <img
          className="w-8 h-8 rounded-full"
          src="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
          alt=""
        />
        <form className="w-full relative">
          <textarea
            className="border border-black border-solid rounded-xl w-full p-2"
            placeholder="Write comment..."
          />
          <button className="absolute bottom-2 right-2">
            <i class="fa-solid fa-angles-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SocialActions;
