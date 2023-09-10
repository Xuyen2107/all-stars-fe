import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";

const PrivateRoute = ({ component: Component }) => {
  const { auth } = useContext(AuthContext);
  const { isAuthenticated } = auth;
  console.log("isAuthenticated:", isAuthenticated);

  if (isAuthenticated) {
    return <Component />;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
