import classNames from "classnames/bind";
import style from "./NewFeed.module.scss";

const cx = classNames.bind(style);

const NewFeed = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("avatar")}>
          <img src="http://uitheme.net/sociala/images/t-11.jpg" alt="" />
        </div>
        <div className={cx("name")}>
          <strong>Suzuki Honda</strong>
          <div className={cx("time-onl")}>3 hour ago</div>
        </div>
      </div>
      <div className={cx("video")}></div>
      <div className={cx("body")}>
        <p className={cx("content", "content-hide")}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          aliquam vitae fugiat aliquid animi inventore praesentium minus
          explicabo sint, esse accusantium numquam vel at aspernatur atque a
          earum tempore totam! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nihil aliquam vitae fugiat aliquid animi inventore
          praesentium minus explicabo sint, esse accusantium numquam vel at
          aspernatur atque a earum tempore totam!
        </p>
        <button className={cx("btn-seemore")}>See More</button>
      </div>
      <ul className={cx("img-group")}>
        <li className={cx("img-content")}>
          <img src="http://uitheme.net/sociala/images/t-10.jpg" alt="" />
        </li>
        <li className={cx("img-content")}>
          <img src="http://uitheme.net/sociala/images/t-10.jpg" alt="" />
        </li>
        <li className={cx("img-content")}>
          <img src="http://uitheme.net/sociala/images/t-10.jpg" alt="" />
        </li>
        <li className={cx("img-content")}>
          <img src="http://uitheme.net/sociala/images/t-10.jpg" alt="" />
        </li>
      </ul>
      <div className={cx("actions")}>
        <div className={cx("interact")}>
          <i class="fa-solid fa-thumbs-up"></i>
          <i class="fa-solid fa-heart"></i>
          <p>3k Like</p>
        </div>
        <div className={cx("interact")}>
          <i class="fa-solid fa-comment"></i>
          <p>27 Comment</p>
        </div>
      </div>
    </div>
  );
};

export default NewFeed;
