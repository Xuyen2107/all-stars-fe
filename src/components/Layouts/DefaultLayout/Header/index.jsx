import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link className={cx("logo")} to="/">
          AllStarts
        </Link>

        <div className={cx("search")}>
          <button className={cx("search-btn", "text-gray-400 font-sm")}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            className="font-xsss"
            type="text"
            placeholder="Start typing to search.."
          />
        </div>

        <div className={cx("actions")}>
          <button className={cx("icon")}>
            <i class="fa-regular fa-bell"></i>
          </button>
          <button className={cx("icon")}>
            <i class="fa-regular fa-message"></i>
          </button>
          <Link to="/login" className={cx("logo-user")}>
            <img src="http://uitheme.net/sociala/images/profile-4.png" alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
