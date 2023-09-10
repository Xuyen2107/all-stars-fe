import Homepage from "../pages/HomePage/Home";
import Login from "../pages/AuthenticationPage/Login/Login";
import Register from "../pages/AuthenticationPage/Register/Register";
import Badge from "../pages/Badge/Badge";
import Newfeed from "../pages/Newfeed/Newfeed";
import Stories from "../pages/Stories/Stories";
import PopularGroup from "../pages/Popular Group/PopularGroup";
import Profile from "../pages/Profile/Profile";

const routes = [
  { path: "/", component: Homepage, auth: true },
  { path: "/login", component: Login, auth: false },
  { path: "/register", component: Register, auth: false },
  { path: "/newfeed", component: Newfeed, auth: true },
  { path: "/badge", component: Badge, auth: true },
  { path: "/stories", component: Stories, auth: true },
  { path: "/popular", component: PopularGroup, auth: true },
  { path: "/profile", component: Profile, auth: true },
];

export { routes };
