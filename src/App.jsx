import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import { Routes, Route, Router, useNavigate } from "react-router-dom";
import AuthContext from "./context/authContext/authContext.js";
import Home from "./pages/HomePage/Home.jsx";
import Login from "./pages/AuthenticationPage/Login/Login.jsx";
import Register from "./pages/AuthenticationPage/Register/Register.jsx";
import Header from "./components/layouts/DefaultLayout/Header/index.jsx";
import SideBar from "./components/layouts/DefaultLayout/SideBar/SideBar.jsx";

const App = () => {
  const { auth } = useContext(AuthContext);
  const isLogin = auth?.isAuthenticated;
  console.log(isLogin);

  return (
    <>
      {isLogin === true && (
        <Routes>
          <div className="flex flex-col items-center">
            <Header />
            <div className="flex w-full p-4">
              <SideBar />
              <div className="  w-[500px] ">
                <Route path="/" element={<Home />} />
              </div>
            </div>
          </div>
        </Routes>
      )}

      {isLogin === false && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </>
  );
};

export default App;
