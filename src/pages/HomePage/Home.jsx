import { useState } from "react";
import PostDefault from "../../components/PostDefault/PostDefault";
import SocialActions from "../../components/SocialActions/SocialActions";
import PostPopUp from "../../components/layouts/PostPopUp/PostPopUp";
import PostImage from "../../components/PostImage/PostImage";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[500px]">
        <PostDefault />
        <PostImage />
        <SocialActions
          handleCommentClick={() => {
            setShow(true);
          }}
        />
      </div>
      {show && (
        <div className="absolute w-full h-screen top-0 left-0 z-10">
          <PostPopUp
            handleCloseClick={() => {
              setShow(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
