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
      <h1>Choisissez un utilisateur</h1>
      <div className="usersChoice">
        <NavLink to={`user/12`}>
          <button>Karl (id:12)</button>
        </NavLink>
        <NavLink to={`user/18`}>
          <button>Cecilia (id:18)</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
