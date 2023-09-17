import styles from "./SideBar.module.scss";
import NavLeft from "../../NavLeft";
import ItemSB from "../../../ItemSideBar/ItemSideBar";

const MenuSideBar = [
  {
    icon: <i className="fa-solid fa-tv"></i>,
    title: "NewsFeed",
    to: "/new-feed",
  },
  {
    icon: <i className="fa-solid fa-ribbon"></i>,
    title: "Badges",
    to: "/badge",
  },
  {
    icon: <i className="fa-solid fa-globe"></i>,
    title: "Explores Stories",
    to: "/stories",
  },
  {
    icon: <i className="fa-regular fa-heart"></i>,
    title: "Popular Groups",
    to: "/popular",
  },
  {
    icon: <i className="fa-regular fa-user"></i>,
    title: "Author Profile",
    to: "/profile",
  },
];
const morePages = [
  {
    icon: <i className="fa-solid fa-inbox"></i>,
    title: "Email Box",
    to: "/email",
  },
  {
    icon: <i className="fa-solid fa-house"></i>,
    title: "Near Hotel",
    to: "/hotel",
  },
  {
    icon: <i className="fa-solid fa-location-dot"></i>,
    title: "Latest Event",
    to: "/event",
  },
  {
    icon: <i className="fa-brands fa-youtube"></i>,
    title: "Live Stream",
    to: "/live",
  },
];
const Account = [
  {
    icon: <i className="fa-solid fa-gear"></i>,
    title: "Settings",
    to: "/profile",
  },
  {
    icon: <i className="fa-regular fa-clock"></i>,
    title: "Analytics",
    to: "/analytics",
  },
  {
    icon: <i className="fa-regular fa-message"></i>,
    title: "Chat",
    to: "/chat",
  },
];
const SideBar = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <NavLeft>
            {MenuSideBar.map((item, index) => (
              <ItemSB
                key={index}
                leftIcon={item.icon}
                title={item.title}
                path={item.to}
              />
            ))}
          </NavLeft>
        </div>
        <div>
          <NavLeft>
            {morePages.map((item, index) => {
              return (
                <ItemSB
                  leftIcon={item.icon}
                  title={item.title}
                  path={item.to}
                />
              );
            })}
          </NavLeft>
        </div>
        <div>
          <NavLeft>
            {Account.map((item, index) => {
              return (
                <ItemSB
                  leftIcon={item.icon}
                  title={item.title}
                  path={item.to}
                />
              );
            })}
          </NavLeft>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
