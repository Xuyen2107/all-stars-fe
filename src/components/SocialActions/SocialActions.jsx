import React, { useState } from "react";

const SocialActions = ({
  handleLikeClick,
  handleCommentClick,
  handleShareClick,
  likeNumber,
  commentNumber,
}) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="flex justify-between border-y-2 border-gray-300 py-1 w-full">
      <div className="flex gap-10">
        <button
          className="flex gap-1 px-2 py-1 hover:bg-gray-200"
          onClick={() => {
            handleLikeClick;
          }}
        >
          {isLike ? (
            <i className="fa-solid fa-heart text-red-500"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
          <p>{likeNumber} Like</p>
        </button>
        <button
          className="flex gap-1 px-2 py-1 hover:bg-gray-200"
          onClick={handleCommentClick}
        >
          <i className="fa-regular fa-comment"></i>
          <p>{commentNumber} Comment</p>
        </button>
      </div>
      <button
        className="flex gap-1 px-2 py-1 hover:bg-gray-200"
        onClick={() => {
          handleShareClick;
        }}
      >
        <i className="fa-regular fa-share-from-square"></i>
        <p>Share</p>
      </button>
    </div>
  );
};

export default SocialActions;
