import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    // <>
    //   <nav className="bg-gray-900 py-4">
    //     <div className="container mx-auto px-4">
    //       <div className="flex items-center justify-between">
    //         <div className="text-white font-bold text-xl">My Website</div>
    //         <ul className="flex space-x-4">
    //           <li>
    //             <Link
    //               to="/"
    //               className="text-white hover:text-gray-300 transition duration-300"
    //             >
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/login"
    //               className="text-white hover:text-gray-300 transition duration-300"
    //             >
    //               Login
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/register"
    //               className="text-white hover:text-gray-300 transition duration-300"
    //             >
    //               Register
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </>

    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link className={cx("logo")} to="/">
          AllStarts
        </Link>

        <div className={cx("search")}>
          <button className={cx("search-btn", "text-gray-400 font-sm")}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input type="text" placeholder="Start typing to search.." />
        </div>

        <div className={cx("actions")}>
          <Link to="/">1</Link>
          <Link to="/">2</Link>
          <Link to="/">3</Link>
          <Link to="/">4</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
