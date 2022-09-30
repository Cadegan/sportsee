import React from "react";
import { Link } from "react-router-dom";

/**
 * @function Error
 * @description Diplays a 404 error page.
 * @returns { HTMLElement }
 */
function Error() {
  return (
    <div className="errorMessage">
      <h1>Erreur 404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="homePage-link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
