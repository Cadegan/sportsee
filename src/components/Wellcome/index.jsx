import React from "react";

function WellCome({
  firstName,
  calorieCount,
  proteinCount,
  carbohydrateCount,
  lipidCount,
}) {
  return (
    <div>
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
      <section className="sideInformations">
        <div className="calorieCount">{calorieCount}</div>
        <div className="proteinCount">{proteinCount}</div>
        <div className="carbohydrateCount">{carbohydrateCount}</div>
        <div className="lipidCount">{lipidCount}</div>
      </section>
    </div>
  );
}

export default WellCome;
