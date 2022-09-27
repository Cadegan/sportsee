import React from "react";
import Error from "../Error/error";
import { useAxios } from "../../utils/hooks/hooks";
import WelCome from "../../components/Welcome/welcome";
import KeyDataElement from "../../components/Informations/informations";
import Score from "../../components/Score/score";
import RadarStats from "../../components/Radar/radar";
import AverageSessions from "../../components/Sessions/averageSessions";
import Activities from "../../components/Activity/activity";

import caloriesIcon from "../../assets/calories-icon.svg";
import proteinesIcon from "../../assets/protein-icon.svg";
import glucidesIcon from "../../assets/glucides-icon.svg";
import lipidesIcon from "../../assets/lipides-icon.svg";
import caloriesFormat from "../../components/CaloriesFormat/caloriesFormat";

/**
 * @function DashBoard
 * @description This function returns the Dashboard with the main user's information
 * @param { Array.<Objects> } data
 * @param { Boolean } isLoading - True or not in charging state
 * @param  { Boolean } error - Error or not in charging state
 * @returns { HTMLElement }
 **/

function DashBoard() {
  const { data, isLoading, error } = useAxios("/");

  if (!isLoading && !error) {
    return (
      <div className="dashBoard">
        <WelCome firstName={data.userInfos.firstName} />
        <div className="globalInformations">
          <div className="centerInformations">
            <Activities />
            <section className="charts">
              <AverageSessions />
              <RadarStats />
              <Score scoreData={data} />
            </section>
          </div>
          <section className="sideInformations">
            <KeyDataElement
              secondaryClassName="calorieCount"
              value={caloriesFormat(data.keyData.calorieCount)}
              unit="kCal"
              alt="Logo calorie"
              picto={caloriesIcon}
              label="Calories"
            ></KeyDataElement>
            <KeyDataElement
              secondaryClassName="proteinCount"
              value={data.keyData.proteinCount}
              unit="g"
              alt="Logo protein"
              picto={proteinesIcon}
              label="Proteines"
            ></KeyDataElement>
            <KeyDataElement
              secondaryClassName="carbohydrateCount"
              value={data.keyData.carbohydrateCount}
              unit="g"
              alt="Logo glucide"
              picto={glucidesIcon}
              label="Glucides"
            ></KeyDataElement>
            <KeyDataElement
              secondaryClassName="lipidCount"
              value={data.keyData.lipidCount}
              unit="g"
              alt="Logo lipide"
              picto={lipidesIcon}
              label="Lipides"
            ></KeyDataElement>
          </section>
        </div>
      </div>
    );
  } else if (error) {
    return <Error />;
  }
}

export default DashBoard;
