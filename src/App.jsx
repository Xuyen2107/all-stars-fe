import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import ReactLoading from "react-loading";
import { AuthenticatedRoutes, UnAuthenticatedRoutes } from "./routes/route.js";
import DefaultLayout from "./components/Layouts/DefaultLayout/index.jsx";
import AuthContext from "./context/authContext/authContext.js";

const App = () => {
  const { auth } = useContext(AuthContext);

  if (auth) {
    const { isAuthenticated } = auth;
    if (isAuthenticated === true) {
      return (
        <Routes>
          {AuthenticatedRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={
                <DefaultLayout>
                  <route.component />
                </DefaultLayout>
              }
            />
          ))}
        </Routes>
      );
    } else if (isAuthenticated === false) {
      return (
        <Routes>
          {UnAuthenticatedRoutes.map((route, idx) => (
            <Route key={idx} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      );
    }

    return (
      <div className="h-screen grid place-items-center">
        <ReactLoading type="bars" color="purple" height={60} width={100} />
      </div>
    );
  }
};

export default App;
