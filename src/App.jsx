import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Header/header";
import Home from "./pages/Home/index";
import DashBoard from "./pages/Dashboard/dashboard";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/user/:id" element={<DashBoard />}></Route>
        {/* <Route exact path="/" element={<Profile />}></Route>
                <Route exact path="/" element={<About />}></Route>
                <Route exact path="/" element={<Setting />}></Route>
                <Route exact path="/" element={<Community />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
