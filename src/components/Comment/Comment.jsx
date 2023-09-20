import React from "react";
import TimeAgo from "../TimeAgo/TimeAgo";

const Comment = ({ avatar, name, comment, time }) => {
  return (
    <div className="flex gap-2 mt-4 w-full">
      <img className="w-10 h-10 rounded-full" src={avatar} alt="avatar" />
      <div className="w-full">
        <div className="bg-gray-200 p-2 rounded-xl">
          <div className="flex justify-between mb-1 items-center ">
            <b className="text-sm">{name}</b>
            <button>
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <p>{comment}</p>
        </div>
        <div className="text-xs w-[150px] flex justify-between mt-1 ml-3 font-medium">
          <div className=" flex flex-nowrap">
            <TimeAgo startTime={time} />
          </div>
          <button>Rely</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
