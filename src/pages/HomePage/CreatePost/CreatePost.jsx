import React, { useRef, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./CreatePost.module.scss";
import { useFormik } from "formik";
import postAPI from "../../../apis/postAPI.js";

const cx = classNames.bind(styles);

const CreatePost = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      content: "",
      images: [],
    },

    onSubmit: async (values) => {
      try {
        setLoading(true);
        const formData = new FormData();
        for (let i = 0; i < values.images.length; i++) {
          formData.append("images", values.images[i]);
        }
        formData.append("content", values.content);
        await postAPI.createPost(formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setFieldValue("images", []);
        setFieldValue("content", "");
        setLoading(false);
      }
    },
  });
  const { handleSubmit, handleChange, setFieldValue, values } = formik;

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFieldValue("images", files);
  };

  const handleIconImgClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCloseFieldClick = () => {
    setFieldValue("images", []);
  };
  console.log(values.images);
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
          name="content"
          id="content"
          cols="30"
          rows="10"
          className={cx("input-txt")}
          placeholder="What's on your mind?"
          value={values.content}
          onChange={handleChange}
        ></textarea>
        {loading ? (
          <ReactLoading type="bars" color="purple" height={50} width={50} />
        ) : (
          values.content && (
            <button type="submit" className={cx("btn-sub")}>
              <i class="fa-solid fa-play"></i>
            </button>
          )
        )}
      </div>

      {values.images.length > 0 && (
        <div className={cx("selected-images")}>
          {values.images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Selected ${index + 1}`}
              className={cx("show-img")}
            />
          ))}
          <button onClick={handleCloseFieldClick}>
            <i className="fa-solid fa-xmark"></i>
          </button>
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
