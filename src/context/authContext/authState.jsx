import React, { useEffect, useState } from "react";
import AuthContext from "./authContext.js";
import authAPI from "../../apis/authAPI.js";
import propTypes from "prop-types";

const AuthState = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [hiddenBody, setHiddenBody] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setAuth({
        isAuthenticated: false,
        user: {},
      });
    } else {
      handleLogin();
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await authAPI.authInfo();
      const data = response.data;
      setAuth({
        isAuthenticated: true,
        user: data.userInfo,
      });
    } catch (error) {
      setAuth({
        isAuthenticated: false,
        user: {},
      });
      console.log(error);
    }
  };

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      user: {},
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        hiddenBody,
        handleLogin,
        handleLogout,
        setHiddenBody,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: propTypes.node,
};

export default AuthState;
