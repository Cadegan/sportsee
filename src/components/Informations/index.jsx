import React from "react";
import caloriesIcon from "../../assets/calories-icon.svg";
import proteinesIcon from "../../assets/protein-icon.svg";
import glucidesIcon from "../../assets/glucides-icon.svg";
import lipidesIcon from "../../assets/lipides-icon.svg";

function sideInformations({
  calorieCount,
  proteinCount,
  carbohydrateCount,
  lipidCount,
}) {
  return (
    <section className="sideInformations">
      <div className="caloriesCount sideInformationsCount">
        <div className="logoInformationCount">
          <img
            src={caloriesIcon}
            alt="Logo calorie"
            className="caloriesIcon"
            role="img"
            aria-label="fire"
          ></img>
        </div>
        <div className="textInformationCount">
          <span>{calorieCount + `kCal`}</span>
          <p>Calories</p>
        </div>
      </div>
      <div className="proteinsCount sideInformationsCount">
        <img
          src={proteinesIcon}
          alt="Logo protein"
          className="proteinesIcon"
          role="img"
          aria-label="meat"
        ></img>
        {proteinCount + `g`}
        <p>Proteines</p>
      </div>
      <div className="glucidesCount sideInformationsCount">
        <img
          src={glucidesIcon}
          alt="Logo glucide"
          className="glucidesIcon"
          role="img"
          aria-label="apple"
        ></img>
        {carbohydrateCount + `g`}
      </div>
      <div className="lipidCount sideInformationsCount">
        <img
          src={lipidesIcon}
          alt="Logo lipide"
          className="lipidesIcon"
          role="img"
          aria-label="hamburger"
        ></img>
        {lipidCount}
      </div>
    </section>
  );
}

export default sideInformations;

// <NavLink className="bt-swimming nav-l-bt" to="/">
//             <img
//               src={logoSwimming}
//               alt="Logo Kasa"
//               className="logoHeader"
//             ></img>
