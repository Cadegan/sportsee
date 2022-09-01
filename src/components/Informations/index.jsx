import React from "react";
import caloriesIcon from "../../assets/calories-icon.svg";
import proteinesIcon from "../../assets/protein-icon.svg";
import glucidesIcon from "../../assets/glucides-icon.svg";
import lipidesIcon from "../../assets/lipides-icon.svg";
import numberFormat from "../../components/CaloriesFormat";

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
            aria-label="fire"
          ></img>
        </div>
        <div className="textInformationCount">
          <span>{numberFormat(calorieCount) + `kCal`}</span>
          <p>Calories</p>
        </div>
      </div>
      <div className="proteinsCount sideInformationsCount">
        <div className="logoInformationCount">
          <img
            src={proteinesIcon}
            alt="Logo protein"
            className="proteinesIcon"
            aria-label="meat"
          ></img>
        </div>
        <div className="textInformationCount">
          <span>{proteinCount + `g`}</span>
          <p>Proteines</p>
        </div>
      </div>
      <div className="glucidesCount sideInformationsCount">
        <div className="logoInformationCount">
          <img
            src={glucidesIcon}
            alt="Logo glucide"
            className="glucidesIcon"
            aria-label="apple"
          ></img>
        </div>
        <div className="textInformationCount">
          <span>{carbohydrateCount + `g`}</span>
          <p>Glucides</p>
        </div>
      </div>
      <div className="lipidCount sideInformationsCount">
        <div className="logoInformationCount">
          <img
            src={lipidesIcon}
            alt="Logo lipide"
            className="lipidesIcon"
            aria-label="hamburger"
          ></img>
        </div>
        <div className="textInformationCount">
          <span>{lipidCount + `g`}</span>
          <p>Lipides</p>
        </div>
      </div>
    </section>
  );
}

export default sideInformations;
