import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLeft from "./components/Layouts/NavLeft/NavLeft";
import Home from "./page/Home/Home";
import Info from "./page/Info/Info";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";

const App = () => {
    return (
        <Router>
            <NavLeft />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </Router>
    );
};

export default App;
