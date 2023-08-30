import { Routes, Route } from "react-router-dom";
import AuthState from "./context/authContext/authState.jsx";
import DefaultLayout from "./components/Layouts/DefaultLayout/index.jsx";
import { PublicRoutes } from "./routes/index.jsx";
import "./Global.css";

const App = () => {
  return (
    <AuthState>
      <Header />
      <Routes>
        {PublicRoutes.map((route, index) => {
          let Page = route.component;
          const Layout = DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
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
