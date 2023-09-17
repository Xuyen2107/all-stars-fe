import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const PostImage = ({ heightClassName, imgClassName }) => {
  const postImage = [
    "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
    // "https://msmobile.com.vn/upload_images/images/tai-hinh-nen-phong-canh-thien-nhien-dep-nhat-the-gioi-10.jpg",
    // "https://toigingiuvedep.vn/wp-content/uploads/2022/03/tai-hinh-nen-phong-canh-thien-nhien-3d-cho-dien-thoai-dep-nhat.jpg",
    // "https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg",
    // "https://msmobile.com.vn/upload_images/images/tai-hinh-nen-phong-canh-thien-nhien-dep-nhat-the-gioi-10.jpg",
    // "https://toigingiuvedep.vn/wp-content/uploads/2022/03/tai-hinh-nen-phong-canh-thien-nhien-3d-cho-dien-thoai-dep-nhat.jpg",
  ];

  return (
    <div className="h-full w-full">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              className="slider-arrow slider-arrow-prev absolute top-[50%] left-0 transform translate-y-[-50%] z-[1] w-10 h-10 rounded-full bg-gray-100 opacity-70 hover:opacity-100"
              onClick={onClickHandler}
            >
              <i className="fas fa-chevron-left text-black"></i>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              className="slider-arrow slider-arrow-next absolute top-[50%] right-0 transform translate-y-[-50%] z-[1] w-10 h-10 rounded-full bg-gray-100 opacity-70 hover:opacity-100"
              onClick={onClickHandler}
            >
              <i className="fas fa-chevron-right text-black"></i>
            </button>
          )
        }
      >
        {postImage.map((image, index) => (
          <div
            key={index}
            className={`flex items-center justify-center bg-black ${heightClassName}`}
          >
            <img className={imgClassName} src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PostImage;
