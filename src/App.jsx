import { Routes, Route } from "react-router-dom";
import NavLeft from "./components/Layouts/NavLeft/NavLeft";
import AuthState from "./context/authContext/authState.jsx";
import Homepage from "./pages/HomePage/Home";
import Login from "./pages/AuthenticationPage/Login/Login";
import Register from "./pages/AuthenticationPage/Register/Register";

const App = () => {
  return (
    <AuthState>
      <NavLeft />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthState>
  );
};

export default App;
