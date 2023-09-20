import React, { useEffect, useState } from "react";
import AuthContext from "./authContext.js";
import authAPI from "../../apis/authAPI.js";
import propTypes from "prop-types";

const AuthState = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [show, setShow] = useState(false);

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
  const fetchCurrentUser = async () => {
    try {
      const response = await authAPI.authInfo();
      const data = response.data;

      setAuth({
        isAuthenticated: true,
        user: data.userInfo,
      });
    } catch (err) {
      console.log(err);
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
        show,
        handleLogin,
        handleLogout,
        setShow,
        fetchCurrentUser,
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
