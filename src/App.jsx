import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLeft from "./components/Layouts/NavLeft/NavLeft";
import AuthState from "./context/authContext/authState.jsx";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Home from "./pages/Home/Home";
import Info from "./pages/auth/Info/Info";

const App = () => {
    return (
        <Router>
            <AuthState>
                <NavLeft />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/info" element={<Info />} />
                </Routes>
            </AuthState>
        </Router>
        //   <>
        //       <Login />
        //   </>
    );
};

export default App;
