import SideBar from "./SideBar/SideBar.jsx";
import styles from "./DefaultLayout.module.scss";
import Header from "./Header/index.jsx";
import React, { useContext, useState } from "react";
import AuthContext from "../../../context/authContext/authContext.js";

const DefaultLayout = ({ children }) => {
  const { show } = useContext(AuthContext);
  return (
    <div className={show ? styles.hidden : styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <SideBar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
