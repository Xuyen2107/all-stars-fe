import Homepage from "../pages/HomePage/Home";
import Login from "../pages/AuthenticationPage/Login/Login";
import Register from "../pages/AuthenticationPage/Register/Register";
import Badge from "../pages/Badge/Badge";
import Newfeed from "../pages/Newfeed/Newfeed";
import Stories from "../pages/Stories/Stories";
import PopularGroup from "../pages/Popular Group/PopularGroup";
import Profile from "../pages/Profile/Profile";


const PublicRoutes = [
    { path: '/', component: Homepage },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
]
const SideBarRoutes1 = [
    { path: "/newfeed", component: Newfeed, name: "Newfeed" },
    { path: "/bage", component: Badge, name: "Badge" },
    { path: "/stories", component: Stories, name: "Stories" },
    { path: "/popular", component: PopularGroup, name: "PopularGroup" },
    { path: "/profile", component: Profile, name: "Profile" },
]

export { PublicRoutes, SideBarRoutes1 }