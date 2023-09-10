import React from "react";
import styles from "./PostPopUp.module.css";
import PostDefault from "../../PostDefault/PostDefault";
import Comment from "../../Comment/Comment";
import SocialActions from "../../SocialActions/SocialActions";
import PostImage from "../../PostImage/PostImage";

const PostPopUp = ({ handleCloseClick }) => {
  return (
    <div
      className={`${styles.popUp} absolute grid place-items-center h-screen w-full top-0 left-0 z-10`}
    >
      <div className="relative h-[90vh] shadow-lg shadow-gray-500">
        <div className="grid place-items-center py-3 border-b-2 sticky top-0 bg-white text-2xl font-bold">
          <span>Nhi's Post</span>
          <button
            className="absolute right-4 top-2 w-10 h-10 grid place-items-center text-xl bg-gray-200 rounded-full"
            onClick={handleCloseClick}
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="flex gap-4 w-full">
          <div className="w-[70%]">
            <PostImage />
          </div>
          <div className="w-[30%] max-h-[600px] overflow-hidden bg-white overflow-y-auto">
            <PostDefault />
            <SocialActions />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <div className="flex justify-start gap-2 border-t-2 p-4 sticky bottom-0 bg-white">
              <img
                className="w-10 h-10 rounded-full"
                src="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
                alt=""
              />
              <form className=" relative w-full">
                <textarea
                  className="min-h-[80px] w-full bg-gray-200 rounded-xl p-2"
                  placeholder="Write comment"
                />
                <button className="absolute right-4 bottom-4">
                  <i class="fa-solid fa-paper-plane text-blue-400"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPopUp;
