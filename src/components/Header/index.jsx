import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function NavBar() {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
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
      <nav className="nav-l">
        <NavLink className="bt-yoga" to="/">
          yoga
        </NavLink>
        <NavLink className="bt-swimming" to="/">
          swimming
        </NavLink>
        <NavLink className="bt-cycle" to="/">
          cycle
        </NavLink>
        <NavLink className="bt-fitness" to="/">
          fitness
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
