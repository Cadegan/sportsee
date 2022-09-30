import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @function Home
 * @description Allows to choose between two users
 * @returns { HTMLElement }
 */
function Home() {
  return (
    <div className="usersContainer">
      <div className="usersChoice">
        <h1>Choisissez un utilisateur</h1>
        <div className="buttonContainer">
          <NavLink to={`user/12`}>
            <div className="userButton karlButton">
              <p>Karl (id:12)</p>
            </div>
          </NavLink>
          <NavLink to={`user/18`}>
            <div className="userButton ceciliaButton">
              <p>Cecilia (id:18)</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
