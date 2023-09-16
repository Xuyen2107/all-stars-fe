import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthenticatedRoutes, UnAuthenticatedRoutes } from "./routes/route.js";
import DefaultLayout from "./components/Layouts/DefaultLayout/index.jsx";
import AuthContext from "./context/authContext/authContext.js";

const App = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);
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

    return <div>Loading...</div>;
  }
};

export default App;
