import React from "react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import mainData from "../../services/mockServices";
// import { getUser } from "../../services/API";
import { useAxios } from "../../utils/hooks/hooks";
import WelCome from "../../components/Welcome/welcome";
import KeyDataElement from "../../components/Informations/informations";
import Score from "../../components/Score/score";
import RadarStats from "../../components/Radar/radar";
import AverageSessions from "../../components/Sessions/averageSessions";
import Activities from "../../components/Activity/activity";
// import Error from "../Error/error";
// import Loader from "../../components/Loader/loader";

import caloriesIcon from "../../assets/calories-icon.svg";
import proteinesIcon from "../../assets/protein-icon.svg";
import glucidesIcon from "../../assets/glucides-icon.svg";
import lipidesIcon from "../../assets/lipides-icon.svg";
import caloriesFormat from "../../components/CaloriesFormat/caloriesFormat";

/* A function component that is used to display the dashboard. */
function DashBoard() {
  const { data, isLoading, error } = useAxios("/");
  // const { id } = useParams();
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   /*  Data from mocked service */
  //   // mainData().then((items) => {
  //   //   let datas = items.find((item) => item.id === parseFloat(id));
  //   //   setData(datas);
  //   //   setLoading(false);
  //   // });

  //   /*  Data from API service */
  //   getUser(id).then((items) => {
  //     setData(items.data);
  //     setLoading(false);
  //   });
  // }, [id]);

  /**
   * If data is not null, user's data is showed in the dashBoard,
   * Else
   *  If data is loading, a loader is displayed,
   * Else
   * If data is not loading, an error is displayed.
   */
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
  }
}

export default DashBoard;
