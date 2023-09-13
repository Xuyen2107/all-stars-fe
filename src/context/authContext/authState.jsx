import { useEffect, useState } from "react";
import AuthContext from "./authContext.js";
import authAPI from "../../apis/authAPI.js";
import propTypes from "prop-types";

const AuthState = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: {},
  });

  const handleLogin = async () => {
    try {
      const response = await authAPI.authInfo();
      const data = response.data;

      setAuth({
        isAuthenticated: true,
        user: data.userInfo,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      user: {},
    });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      handleLogin();
    }
  }, []);

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

AuthState.propTypes = {
  children: propTypes.node,
};

export default AuthState;
