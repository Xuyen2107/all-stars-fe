import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/authContext/authContext.js";
import authAPI from "../../../apis/authAPI.js";

const LoginHook = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const { auth, handleLogin } = useContext(AuthContext);
   const navigate = useNavigate();

   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },

      onSubmit: async (values) => {
         try {
            setLoading(true);
            setError(null);
            const response = await authAPI.login(values);
            const { accessToken } = response.data;
            localStorage.setItem("accessToken", accessToken);

            await handleLogin();
            navigate("/");
         } catch (error) {
            console.log(error);
            setError(error.response.data.message);
         } finally {
            setLoading(false);
         }
      },
   });

   // if (auth.isAuthenticated) {
   //    return <Navigate to="/" />;
   // }

   return { loading, error, formik };
};

export default LoginHook;
