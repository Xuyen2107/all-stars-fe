import React from "react";
import classNames from "classnames/bind";
import styles from "./CreatePost.module.scss";

const cx = classNames.bind(styles);

const CreatePost = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("icon-circle")}>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <p className={cx("create-title")}>Create Post</p>
      </div>
      <div className={cx("content")}>
        <div className={cx("avatar")}>
          <img src="http://uitheme.net/sociala/images/t-11.jpg" alt="" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className={cx("input-txt")}
          placeholder="What's on your mind?"
        ></textarea>
      </div>

      <ul className={cx("actions")}>
        <li className={cx("icon")}>
          <i className="fa-solid fa-video"></i>
          <p>Live Video</p>
        </li>
        <li className={cx("icon")}>
          <i class="fa-regular fa-image"></i>
          <p>Photo/Video</p>
        </li>
        <li className={cx("icon")}>
          <i class="fa-solid fa-camera"></i>
          <p>Feeling/Activity</p>
        </li>
        <li className={cx("more")}>
          <i className="fa-solid fa-ellipsis"></i>
        </li>
      </ul>
    </div>
  );
};

export default CreatePost;
