import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./CreatePost.module.scss";
import { useFormik } from "formik";

const cx = classNames.bind(styles);

const CreatePost = () => {
  const fileInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      content: "",
      images: [],
    },

    onSubmit: (values) => {},
  });

  const { handleSubmit, handleChange, setFieldValue, values } = formik;

  const handleImageUpload = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const imageArray = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (event) => {
          imageArray.push(event.target.result);

          setFieldValue("images", imageArray);
        };

        reader.readAsDataURL(file);
      }
    }
  };

  const handleIconImgClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <form className={cx("wrapper")} onSubmit={handleSubmit}>
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
          id="content"
          cols="30"
          rows="10"
          className={cx("input-txt")}
          placeholder="What's on your mind?"
          value={values.content}
          onChange={handleChange}
        ></textarea>
        {values.content && (
          <button type="submit" className="btn-sub">
            <i class="fa-solid fa-play"></i>
          </button>
        )}
      </div>

      {values.images.length > 0 && (
        <div className={cx("selected-images")}>
          {values.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Selected ${index + 1}`}
              className={cx("show-img")}
            />
          ))}
        </div>
      )}

      <ul className={cx("actions")}>
        <li className={cx("icon")}>
          <i className="fa-solid fa-video"></i>
          <p>Live Video</p>
        </li>
        <li className={cx("icon")} onClick={handleIconImgClick}>
          <i class="fa-regular fa-image"></i>
          <p>Photo/Video</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className={cx("inp-file")}
            onChange={handleImageUpload}
          />
        </li>
        <li className={cx("icon")} onClick={handleIconImgClick}>
          <i class="fa-solid fa-camera"></i>
          <p>Feeling/Activity</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className={cx("inp-file")}
            onChange={handleImageUpload}
          />
        </li>
        <li className={cx("more")}>
          <i className="fa-solid fa-ellipsis"></i>
        </li>
      </ul>
    </form>
  );
};

export default CreatePost;
