import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import logoCycle from "../../assets/cycle.svg";
import logoFitness from "../../assets/fitness.svg";
import logoSwimming from "../../assets/swimming.svg";
import logoYoga from "../../assets/yoga.svg";

/**
 * A function that returns the NavBar component
 * and allows to navigate between different pages
 */
function NavBar() {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <div className="NavBar">
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo SportSee" className="logoHeader"></img>
          </Link>
        </div>
        <nav className="nav-t">
          <NavLink
            className="navHome"
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Accueil
          </NavLink>
          <NavLink
            className="navProfile"
            to="/profil"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Profil
          </NavLink>
          <NavLink
            className="navSetting"
            to="/reglage"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Réglage
          </NavLink>
          <NavLink
            className="navCommunity"
            to="/communite"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Communauté
          </NavLink>
        </nav>
      </header>
      <nav className="nav-l">
        <div className="nav-l-group">
          <NavLink className="bt-yoga nav-l-bt" to="/">
            <img src={logoYoga} alt="Logo yoga" className="logoHeader"></img>
          </NavLink>
          <NavLink className="bt-swimming nav-l-bt" to="/">
            <img
              src={logoSwimming}
              alt="Logo swimming"
              className="logoHeader"
            ></img>
          </NavLink>
          <NavLink className="bt-cycle nav-l-bt" to="/">
            <img src={logoCycle} alt="Logo cyle" className="logoHeader"></img>
          </NavLink>
          <NavLink className="bt-fitness nav-l-bt" to="/">
            <img
              src={logoFitness}
              alt="Logo firness"
              className="logoHeader"
            ></img>
          </NavLink>
        </div>
        <div className="copiryght">
          <p>Copiryght, SportSee 2022</p>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
