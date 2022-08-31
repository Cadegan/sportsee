import React from "react";

function WellCome({ firstName }) {
  return (
    <div className="user">
      <p>Bonjour</p>
      <span className="firstName">{firstName}</span>
      <p>
        Félicitation ! Vous avez explosé vos objectifs hier{" "}
        <span role="img" aria-label="donut">
          👏
        </span>
      </p>
    </div>
  );
}

export default WellCome;
