import { useState } from "react";
import PostDefault from "../../components/PostDefault/PostDefault";
import SocialActions from "../../components/SocialActions/SocialActions";
import PostPopUp from "../../components/layouts/PostPopUp/PostPopUp";
import PostImage from "../../components/PostImage/PostImage";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full">
      <div className="">
        <PostDefault />
        <PostImage />
        <SocialActions
          handleCommentClick={() => {
            setShow(true);
          }}
        />
      </div>
      {show && (
        <div>
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
