import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import mainData from "../../services/mockServices";
import { getUser } from "../../services/API";
import WelCome from "../../components/Welcome/welcome";
import SideInformations from "../../components/Informations/informations";
import Score from "../../components/Score/score";
import RadarStats from "../../components/Radar/radar";
import AverageSessions from "../../components/Sessions/averageSessions";
import Activities from "../../components/Activity/activity";
import Error from "../Error/error";
import Loader from "../../components/Loader/loader";

/* A function component that is used to display the dashboard. */
function DashBoard() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    /*  Data from mocked service */
    // mainData().then((items) => {
    //   let datas = items.find((item) => item.id === parseFloat(id));
    //   setData(datas);
    //   setLoading(false);
    // });

    /*  Data from API service */
    getUser(id).then((items) => {
      setData(items.data);
      setLoading(false);
    });
  }, [id]);

  /**
   * If data is not null, user's data is showed in the dashBoard,
   * Else
   *  If data is loading, a loader is displayed,
   * Else
   * If data is not loading, an error is displayed.
   */
  return data ? (
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

        <SideInformations
          calorieCount={data.keyData.calorieCount}
          proteinCount={data.keyData.proteinCount}
          carbohydrateCount={data.keyData.carbohydrateCount}
          lipidCount={data.keyData.lipidCount}
        />
      </div>
    </div>
  ) : (
    <>{isLoading ? <Loader /> : <Error />}</>
  );
}

export default DashBoard;
