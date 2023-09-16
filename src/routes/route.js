import Homepage from "../pages/HomePage/Home";
import Login from "../pages/AuthenticationPage/Login/Login";
import Register from "../pages/AuthenticationPage/Register/Register";
import Badge from "../pages/Badge/Badge";
import NewFeed from "../pages/Newfeed/NewFeed";
import Stories from "../pages/Stories/Stories";
import PopularGroup from "../pages/Popular Group/PopularGroup";
import Profile from "../pages/Profile/Profile";

export const AuthenticatedRoutes = [
  { path: "/", component: Homepage },
  { path: "/new-feed", component: Homepage },
  { path: "/badge", component: Badge },
  { path: "/stories", component: Stories },
  { path: "/popular", component: PopularGroup },
  { path: "/profile", component: Profile },
];

export const UnAuthenticatedRoutes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];
