import Homepage from "../pages/HomePage/Home";
import Login from "../pages/AuthenticationPage/Login/Login";
import Register from "../pages/AuthenticationPage/Register/Register";
import Badge from "../pages/Badge/Badge";
import Newfeed from "../pages/Newfeed/Newfeed";
import Stories from "../pages/Stories/Stories";
import PopularGroup from "../pages/Popular Group/PopularGroup";
import Profile from "../pages/Profile/Profile";

const PublicRoutes = [
  { path: "/", component: Homepage },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/newfeed", component: Newfeed },
  { path: "/badge", component: Badge },
  { path: "/stories", component: Stories },
  { path: "/popular", component: PopularGroup },
  { path: "/profile", component: Profile },
];


export { PublicRoutes };
