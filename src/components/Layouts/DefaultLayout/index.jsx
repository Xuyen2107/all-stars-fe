import SideBar from "./SideBar/SideBar.jsx";
import styles from "./DefaultLayout.module.scss";
import Header from "./Header/index.jsx";

const DefaultLayout = ({ children, showSidebar = true, showHeader = true }) => {
  console.log({ showHeader, showSidebar });
  return (
    <div className={styles.wrapper}>
      {showHeader && <Header />}
      <div className={styles.container}>
        {showSidebar && <SideBar />}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
