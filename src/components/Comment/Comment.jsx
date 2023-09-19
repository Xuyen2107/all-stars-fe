import React from "react";

const Comment = ({ avatar, name, comment, time }) => {
  return (
    <div className="flex gap-2 mt-4">
      <img
        className="w-10 h-10 rounded-full"
        src="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
        alt=""
      />
      <div>
        <div className="bg-gray-200 p-2 rounded-xl">
          <div className="flex justify-between mb-1 items-center ">
            <b className="text-xs">Name</b>
            <button>
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
            dolor.
          </p>
        </div>
        <div className="text-xs w-20 flex justify-between mt-1 ml-3 font-medium">
          <span>1 Week</span>
          <button>Rely</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
