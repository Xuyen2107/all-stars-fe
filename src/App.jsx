import { Routes, Route } from "react-router-dom";
import AuthState from "./context/authContext/authState.jsx";
import DefaultLayout from "./components/Layouts/DefaultLayout/index.jsx";
import { routes } from "./routes/index.jsx";
import "./Global.css";
import PostDefault from "./components/PostDefault/PostDefault.jsx";
import Comment from "./components/Comment/Comment.jsx";
import PostPopUp from "./components/layouts/PostPopUp/PostPopUp.jsx";
import PostState from "./context/postContext/postState.jsx";
import SocialActions from "./components/SocialActions/SocialActions.jsx";
import Home from "./pages/HomePage/Home.jsx";
import PostImage from "./components/PostImage/PostImage.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

const App = () => {
  return (
    <AuthState>
      <Routes>
        {routes.map(({ path, component, auth }, index) => {
          let Page = component;
          const Layout = DefaultLayout;
          console.log({
            auth,
            path,
          });
          if (auth) {
            return (
              <Route
                key={index}
                path={path}
                element={<PrivateRoute component={Page} />}
              />
            );
          }

          return (
            <Route
              key={index}
              path={path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </AuthState>
  );
};

export default App;
