import React, { useContext, useState } from "react";
import ReactLoading from "react-loading";
import PostDefault from "../../PostDefault/PostDefault";
import Comment from "../../Comment/Comment";
import SocialActions from "../../SocialActions/SocialActions";
import PostImage from "../../PostImage/PostImage";
import { useFormik } from "formik";
import postAPI from "../../../apis/postAPI";
import AuthContext from "../../../context/authContext/authContext";

const PostPopUp = ({ handleCloseClick, post }) => {
  const { auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      postId: "",
      user: "",
      comment: "",
    },

    onSubmit: async (values) => {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("postId", post._id);
        formData.append("user", auth.user._id);
        formData.append("comment", values.comment);
        await postAPI.comment(formData, {
          body: {
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.log(error);
      } finally {
        setFieldValue("postId", "");
        setFieldValue("user", "");
        setFieldValue("comment", "");
        setLoading(false);
      }
    },
  });
  const { handleSubmit, handleChange, setFieldValue, values } = formik;
  console.log(values);
  return (
    <div className=" fixed w-full h-screen top-0 left-0 z-10 bg-white">
      <div className="relative h-full w-full flex flex-col">
        <div className="relative grid place-items-center py-3 border-b-2 bg-white text-2xl font-bold">
          <span>{post.user.username}'s Post</span>
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
              imgClassName="h-auto"
              postImage={post.images}
            />
          </div>
          <div className="relative w-[30%]  p-2 overflow-hidden bg-white overflow-y-auto">
            <PostDefault
              content={post.content}
              name={post.user.username}
              image={post.user.profilePicture}
              time={post.createAt}
            />
            <div className="my-2">
              <SocialActions
                likeNumber={post?.likes?.length}
                commentNumber={post?.comments?.length}
              />
            </div>
            {post.comments &&
              post.comments.map((comment, idx) => (
                <Comment
                  key={idx}
                  name={comment.user.name}
                  avatar={comment.user.avatar}
                  comment={comment.comment}
                  time={comment.createAt}
                />
              ))}

            <div className="flex justify-start fixed w-[30%] bottom-0 gap-2 border-t-2 py-4 bg-white">
              <img
                className="w-10 h-10 rounded-full"
                src="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
                alt=""
              />
              <form onSubmit={handleSubmit} className="relative w-full">
                <textarea
                  name="comment"
                  onChange={handleChange}
                  className="min-h-[80px] w-full bg-gray-200 rounded-xl p-2"
                  placeholder="Write comment"
                  value={values.comment}
                />
                {loading ? (
                  <ReactLoading
                    type="bars"
                    color="purple"
                    height={40}
                    width={40}
                  />
                ) : (
                  <button className="absolute right-4 bottom-4">
                    <i className="fa-solid fa-paper-plane text-blue-400"></i>
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPopUp;
