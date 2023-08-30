import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header/Header.jsx";
import AuthState from "./context/authContext/authState.jsx";
import Homepage from "./pages/HomePage/Home";
import Login from "./pages/AuthenticationPage/Login/Login";
import Register from "./pages/AuthenticationPage/Register/Register";
import "./Global.css";

const App = () => {
  return (
    <AuthState>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthState>
  );
};

export default App;
