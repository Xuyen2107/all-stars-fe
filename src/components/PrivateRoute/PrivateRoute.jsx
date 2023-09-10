import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";
import DefaultLayout from "../Layouts/DefaultLayout";

const PrivateRoute = ({ component: Component }) => {
  const { auth, authInfoInProgress } = useContext(AuthContext);
  const { isAuthenticated } = auth;
  console.log({ isAuthenticated, authInfoInProgress });
  if (authInfoInProgress) {
    return <p>Loading...</p>;
  }

  if (isAuthenticated) {
    return (
      <DefaultLayout>
        <Component />
      </DefaultLayout>
    );
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
