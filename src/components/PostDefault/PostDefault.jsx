import React, { useState } from "react";
import PropTypes from "prop-types";

const PostDefault = ({ name, content }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
            alt="avatar"
          />
          <div className="flex flex-col text-base leading-5">
            <span className="font-medium">{name}</span>
            <span className="text-xs">2 hour ago</span>
          </div>
        </div>
        <button>
          <i className="fa-solid fa-ellipsis"></i>
        </button>
      </div>
      <div className="flex">
        <p>{content}</p>
      </div>
    </div>
  );
};

PostDefault.prototype = {
  image: PropTypes.string.isRequired,
};

export default PostDefault;
