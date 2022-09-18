import React from "react";

function moduleError() {
  return (
    <p className="moduleError">
      Les informations ne se sont pas correctement chargées...{" "}
      <span role="img" aria-label="wrong-icon">
        🚧
      </span>
    </p>
  );
}

export default moduleError;
