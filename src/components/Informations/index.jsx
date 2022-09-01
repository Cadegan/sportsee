import React from "react";

function sideInformations({
  calorieCount,
  proteinCount,
  carbohydrateCount,
  lipidCount,
}) {
  return (
    <section className="sideInformations">
      <div className="calorieCount">{calorieCount}</div>
      <div className="proteinCount">{proteinCount}</div>
      <div className="carbohydrateCount">{carbohydrateCount}</div>
      <div className="lipidCount">{lipidCount}</div>
    </section>
  );
}

export default sideInformations;
