import React, { useEffect, useState } from "react";
import AuthContext from "./authContext.js";
import authAPI from "../../apis/authAPI.js";
import PropTypes from "prop-types";

const AuthState = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      await handleLogin();
    } else {
      handleLogout();
    }
  };
  
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
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthState.PropTypes = {
  children: PropTypes.node,
};

export default AuthState;
