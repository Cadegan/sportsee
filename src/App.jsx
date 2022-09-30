import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Header/header";
import Home from "./pages/Home/index";
import DashBoard from "./pages/Dashboard/dashboard";
import Error from "./pages/Error/error";

/**
 * @function App
 * @file app.jsx is the home page
 */

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/user/:id" element={<DashBoard />}></Route>
        <Route exact path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
