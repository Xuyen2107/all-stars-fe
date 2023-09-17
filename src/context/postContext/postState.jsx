import React, { useEffect, useState } from "react";
import PostContext from "./postContext";
import authAPI from "../../apis/authAPI";

const data = [
  {
    id: 1,
    name: "Tony",
    avatar: "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
    image: [
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
    ],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulladolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
  },
  {
    id: 2,
    name: "Tony Tony",
    avatar: "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",

    image: [
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
    ],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulladolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
  },
  {
    id: 3,
    name: "Tony Tony Tony",
    avatar: "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",

    image: [
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
      "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
    ],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulladolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
  },
];

const PostState = ({ children }) => {
  const [allPost, setAllPost] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [getPostId, setGetPostID] = useState("");

  //   const getAllPost = async () => {
  //     try {
  //       const response = await authAPI.getAllPost();
  //       const data = response.data;
  //       setAllPost(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   getAllPost();
  useEffect(() => {
    setAllPost(data);
  }, []);

  console.log(1);

  useEffect(() => {
    if (allPost) {
      const post = allPost.find((x) => x.id === getPostId);
      if (post) {
        setSelectedPost(post);
      }
    }
  }, [getPostId]);

  const handleGetPostIdClick = (postId) => {
    setGetPostID(postId);
  };

  return (
    <PostContext.Provider
      value={{ allPost, handleGetPostIdClick, selectedPost }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostState;
