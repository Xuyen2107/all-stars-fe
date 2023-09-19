import { useContext, useEffect, useState } from "react";
import PostDefault from "../../components/PostDefault/PostDefault";
import SocialActions from "../../components/SocialActions/SocialActions";
import PostPopUp from "../../components/layouts/PostPopUp/PostPopUp";
import PostImage from "../../components/PostImage/PostImage";
import AuthContext from "../../context/authContext/authContext";
import postAPI from "../../apis/postAPI";

const Home = () => {
  const { setHiddenBody } = useContext(AuthContext);
  const [allPost, setAllPost] = useState([]);
  const [postOne, setPostOne] = useState();
  const [likeNumber, setLikeNumber] = useState(0);
  const [commentNumber, setCommentNumber] = useState(0);

  useEffect(() => {
    postNewFeed();
  }, []);

  const postNewFeed = async () => {
    try {
      const response = await postAPI.getAllPost();
      const data = response?.data?.data;
      setAllPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(allPost);

  return (
    <div className="w-full flex flex-col gap-8 items-center justify-start ">
      {allPost &&
        allPost.map((post, idx) => (
          <div className="w-[800px] bg-white p-4 rounded-2xl shadow-md shadow-gray-500">
            <div>
              <PostDefault name={post.user.username} content={post.content} />
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
              />
            </div>
          </div>
        ))}

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
    </div>
  );
};

export default Home;
