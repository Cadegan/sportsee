import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @function Home
 * @description Allows to choose between two users
 * @returns { HTMLElement }
 */
function Home() {
  return (
    <div className="containerUsers">
      <div className="usersChoice">
        <h1>Choisissez un utilisateur</h1>
        <NavLink to={`user/12`}>
          <div className="userButton karlButton">Karl (id:12)</div>
        </NavLink>
        <NavLink to={`user/18`}>
          <div className="userButton ceciliaButton">Cecilia (id:18)</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
