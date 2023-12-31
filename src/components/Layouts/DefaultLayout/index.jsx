import SideBar from "./SideBar/SideBar.jsx";
import styles from "./DefaultLayout.module.scss";
import Header from "./Header/index.jsx";

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <SideBar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
