import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import AuthState from "./context/authContext/authState";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthState>,
);
