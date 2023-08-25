import React, { useEffect, useState } from "react";
import AuthContext from "./authContext.js";
import authAPI from "../../apis/authAPI.js";

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
         values={{
            auth,
            handleLogin,
            handleLogout,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};

export default AuthState;
