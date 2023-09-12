import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App.jsx";
import AuthState from "./context/authContext/authState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthState>,
);
