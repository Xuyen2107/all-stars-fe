import { useEffect, useState } from "react";
import AuthContext from "./authContext.js";
import authAPI from "../../apis/authAPI.js";
import propTypes from "prop-types";

const AuthState = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: {},
  });

  const [authInfoInProgress, setAuthInfoInProgress] = useState(false);

  const handleLogin = async () => {
    try {
      setAuthInfoInProgress(true);
      const response = await authAPI.authInfo();
      const data = response.data;
      console.log({ data });
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
    } finally {
      setAuthInfoInProgress(false);
    }
  };

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      user: {},
    });
  };

  useEffect(async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      console.log("Access token: " + accessToken);
      await handleLogin();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        handleLogin,
        handleLogout,
        authInfoInProgress,
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
