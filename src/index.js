import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../src/components/Header/index";
import "./styles/main.css";
import User from "./utils/hooks/index";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<User />}></Route>
        {/* <Route exact path="/" element={<Profile />}></Route>
        <Route exact path="/" element={<About />}></Route>
        <Route exact path="/" element={<Setting />}></Route>
        <Route exact path="/" element={<Community />}></Route> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
