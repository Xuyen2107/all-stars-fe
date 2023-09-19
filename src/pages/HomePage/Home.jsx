import { useContext, useEffect, useState } from "react";
import PostDefault from "../../components/PostDefault/PostDefault";
import SocialActions from "../../components/SocialActions/SocialActions";
import PostPopUp from "../../components/layouts/PostPopUp/PostPopUp";
import PostImage from "../../components/PostImage/PostImage";
import AuthContext from "../../context/authContext/authContext";
import postAPI from "../../apis/postAPI";
import SlideStories from "../../components/SlideStories/SlideStories";

const Home = () => {
  const { show, setShow } = useContext(AuthContext);
  const [allPost, setAllPost] = useState([]);
  const [open, setOpen] = useState(false)


  const post = async () => {
    try {
      const response = await postAPI.getAllPost();
      const data = response?.data?.data;
      console.log(data);
      setAllPost(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    post();
  }, []);

  console.log(allPost);


  return (
    <>
      <SlideStories />
      <div className="w-full flex flex-col gap-8 items-center justify-center ">
        {allPost && allPost.map((post, idx) => (
          <div className="w-[800px] bg-white p-4 rounded-2xl shadow-md shadow-gray-500">
            <div>
              <PostDefault />
            </div>
            {/* <div className="my-2">
          <PostImage heightClassName="h-[600px]" imgClassName="w-full h-full" />
        </div> */}
            <div>
              <SocialActions
                handleCommentClick={() => {
                  setShow(true);
                }}
              />
            </div>
          </div>
        ))}

        {show && (
          <div className="h-screen w-full">
            <PostPopUp
              handleCloseClick={() => {
                setShow(false);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
