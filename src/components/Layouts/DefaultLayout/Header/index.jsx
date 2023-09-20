import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../../../images/logo.png";
import AuthContext from "../../../../context/authContext/authContext";

const cx = classNames.bind(styles);

const Header = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link className={cx("logo")} to="/">
          <img className="h-[80px]" src={logo} alt="logo" />
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
            <i className="fa-regular fa-bell"></i>
          </button>
          <button className={cx("icon")}>
            <i className="fa-regular fa-message"></i>
          </button>
          <button className={cx("logo-user")}>
            <img
              className="w-20 h-20 rounded-full"
              src={auth.user.profilePicture}
              alt="avatar"
            />
            <span className="text-xl font-medium">Hello {auth.user.username}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
