// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavLeft from "./components/Layouts/NavLeft/NavLeft";
// import Info from "./pages/Info/Info";
import Login from "./pages/auth/Login/Login.jsx";
// import Register from "./pages/Register/Register";
// import Home from "./pages/Home/Home";

const App = () => {
   return (
      // <Router>
      //    <NavLeft />
      //    <Routes>
      //       <Route path="/" element={<Home />} />
      //       <Route path="/login" element={<Login />} />
      //       <Route path="/register" element={<Register />} />
      //       <Route path="/info" element={<Info />} />
      //    </Routes>
      // </Router>
      <>
         <Login />
      </>
   );
};

export default App;
