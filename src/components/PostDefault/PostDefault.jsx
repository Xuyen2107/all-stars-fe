import React, { useState } from "react";
import PropTypes from "prop-types";

const PostDefault = () => {
  const [more, setMore] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
            alt=""
          />
          <div className="flex flex-col text-base leading-5">
            <span className="font-medium">Anthony Daugloi</span>
            <span className="text-xs">2 hour ago</span>
          </div>
        </div>
        <button>
          <i className="fa-solid fa-ellipsis"></i>
        </button>
      </div>
      <div className="flex">
        <p
          className={
            more
              ? ""
              : "overflow-hidden whitespace-nowrap text-ellipsis max-w-full"
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
          mollis pharetra. Proin blandit ac massa sed rhoncus
        </p>
        {!more && (
          <button
            className="whitespace-nowrap"
            onClick={() => {
              setMore(true);
            }}
          >
            [See more]
          </button>
        )}
      </div>
    </div>
  );
};

PostDefault.prototype = {
  image: PropTypes.string.isRequired,
};

export default PostDefault;
