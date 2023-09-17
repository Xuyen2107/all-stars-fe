import React from "react";
import PostDefault from "../../PostDefault/PostDefault";
import Comment from "../../Comment/Comment";
import SocialActions from "../../SocialActions/SocialActions";
import PostImage from "../../PostImage/PostImage";

const PostPopUp = ({ handleCloseClick }) => {
  return (
    <div className=" fixed w-full h-screen top-0 left-0 z-10">
      <div className="relative h-full w-full flex flex-col">
        <div className="relative grid place-items-center py-3 border-b-2 bg-white text-2xl font-bold">
          <span>Nhi's Post</span>
          <button
            className="absolute right-4 top-2 w-10 h-10 grid place-items-center text-xl bg-gray-200 rounded-full"
            onClick={handleCloseClick}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="flex flex-grow h-full">
          <div className="w-[70%]">
            <PostImage
              heightClassName="h-[95vh]"
              postImage="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
            />
          </div>
          <div className="relative w-[30%]  p-2 overflow-hidden bg-white overflow-y-auto">
            <PostDefault />
            <div className="my-2">
              <SocialActions />
            </div>
            <Comment />
            <Comment />

            <div className="flex justify-start fixed w-[30%] bottom-0 gap-2 border-t-2 py-4 bg-white">
              <img
                className="w-10 h-10 rounded-full"
                src="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
                alt=""
              />
              <form
                className="relative w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <textarea
                  className="min-h-[80px] w-full bg-gray-200 rounded-xl p-2"
                  placeholder="Write comment"
                />
                <button className="absolute right-4 bottom-4">
                  <i className="fa-solid fa-paper-plane text-blue-400"></i>
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
