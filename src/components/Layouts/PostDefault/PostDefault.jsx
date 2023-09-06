import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./PostDefault.module.css";
import SocialActions from "../../SocialActions/SocialActions";

const PostDefault = ({ image }) => {
  const [more, setMore] = useState(false);
  return (
    <div className={styles.postContainer}>
      <div className="p-4">
        <div className={styles.postHeader}>
          <div className={styles.postHeaderLeft}>
            <img
              className={styles.avatar}
              src="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
              alt=""
            />
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>Anthony Daugloi</span>
              <span className={styles.postTimestamp}>2 hour ago</span>
            </div>
          </div>
          <button className={styles.icon}>
            <i class="fa-solid fa-ellipsis"></i>
          </button>
        </div>
        <div className={styles.postContent}>
          <p className={more ? "" : styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
            dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
            mollis pharetra. Proin blandit ac massa sed rhoncus
          </p>
          {!more && (
            <button
              className={styles.more}
              onClick={() => {
                setMore(true);
              }}
            >
              [See more]
            </button>
          )}
        </div>
      </div>
      <div className={styles.postImage}>
        <img
          className={styles.post1}
          src="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
          alt=""
        />
        <img
          className={styles.post2}
          src="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
          alt=""
        />
        <img
          className={styles.post3}
          src="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
          alt=""
        />
        <img
          className={styles.post4}
          src="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
          alt=""
        />
        <img
          className={styles.post5}
          src="https://gotrangtri.vn/wp-content/uploads/2019/01/anh-bia-1-4.jpg"
          alt=""
        />
      </div>
      <SocialActions />
    </div>
  );
};

PostDefault.prototype = {
  image: PropTypes.string.isRequired,
};

export default PostDefault;

// {
//   image &&
//     image.map((item, idx) => {
//       <img key={idx} src={item.link} alt={item.title} />;
//     });
// }
