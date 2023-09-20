import { useContext, useEffect, useState } from "react";
import PostDefault from "../../components/PostDefault/PostDefault";
import SocialActions from "../../components/SocialActions/SocialActions";
import PostPopUp from "../../components/layouts/PostPopUp/PostPopUp";
import PostImage from "../../components/PostImage/PostImage";
import AuthContext from "../../context/authContext/authContext";
import postAPI from "../../apis/postAPI";
import SlideStories from "../../components/SlideStories/SlideStories";
import CreatePost from "./CreatePost/CreatePost";

const Home = () => {
  const { auth } = useContext(AuthContext);
  const { setHiddenBody } = useContext(AuthContext);
  const [allPost, setAllPost] = useState([]);
  const [postOne, setPostOne] = useState();
  const [id, setId] = useState("");
  const { show, setShow } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    postNewFeed();
  }, []);

  const postNewFeed = async () => {
    try {
      const response = await postAPI.getAllPost();
      const data = response?.data?.data;
      setAllPost(data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const likeAction = async (postId) => {
    try {
      const res = await postAPI.like(postId, {
        userId: auth.user._id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      likeAction(id);
    }
  }, [id]);

  const post = async () => {
    try {
      const response = await postAPI.getAllPost();
      const data = response?.data?.data;
      console.log(data);
      setAllPost(data.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    post();
  }, []);

  return (
    <>
      <div className="w-full flex justify-center ">
        <div className="w-[800px] flex flex-col gap-8">
          <div>
            <SlideStories />
          </div>
          <CreatePost />
          {allPost &&
            allPost.map((post, idx) => (
              <div
                key={idx}
                className=" bg-white p-4 rounded-2xl shadow-md shadow-gray-400"
              >
                <div>
                  <PostDefault
                    name={post.user.username}
                    content={post.content}
                    avatar={post.user.profilePicture}
                    time={post.createAt}
                  />
                </div>
                <div className="my-2">
                  <PostImage
                    heightClassName="h-[600px]"
                    imgClassName="w-full h-full"
                    postImage={post?.images}
                  />
                </div>
                <div>
                  <SocialActions
                    handleCommentClick={() => {
                      setPostOne(post);
                      setHiddenBody(true);
                    }}
                    likeNumber={post?.likes?.length}
                    commentNumber={post?.comments?.length}
                    isLike={post.likes.includes(post._id)}
                    handleLikeClick={() => {
                      setId(post._id);
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      {postOne && (
        <div className="h-screen w-full">
          <PostPopUp
            post={postOne}
            handleCloseClick={() => {
              setPostOne(null);
              setHiddenBody(false);
            }}
          />
        </div>
      )}
    </>
  );
};

export default Home;
