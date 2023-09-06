import { Routes, Route } from "react-router-dom";
import AuthState from "./context/authContext/authState.jsx";
import Layout from "./components/Layouts/DefaultLayout/index.jsx";
import { PublicRoutes } from "./routes/index.jsx";
import "./Global.css";

const App = () => {
  return (
    <AuthState>
      <Routes>
        {PublicRoutes.map((route, index) => {
          const Page = route.component;
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
