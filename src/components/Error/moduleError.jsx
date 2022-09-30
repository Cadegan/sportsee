import React from "react";

/**
 * @function moduleError
 * @description Returns a sentence when the module has not loaded correctly.
 * @returns { HTMLElement }
 */
function moduleError() {
  return (
    <p className="moduleError">
      Les informations ne se sont pas chargées correctement...{" "}
      <span role="img" aria-label="wrong-icon">
        🚧
      </span>
    </p>
  );
}

export default moduleError;
