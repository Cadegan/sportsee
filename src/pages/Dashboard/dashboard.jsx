import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import mainData from "../../services/mockServices";
import { getUser } from "../../services/API";
import WelCome from "../../components/Welcome/welcome";
import SideInformations from "../../components/Informations/informations";
import Score from "../../components/Score/score";

function DashBoard() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    /*  Data from mocked service */
    // mainData().then((items) => {
    //   let datas = items.find((item) => item.id === parseFloat(id));
    //   setData(datas);
    // });

    /*  Data from API service */
    getUser(id).then((items) => {
      setData(items.data);
    });
  }, [id]);

  // const userScore = data.todayScore || data.score;
  return data ? (
    <div className="dashBoard">
      <WelCome firstName={data.userInfos.firstName} />
      <div className="globalInformations">
        <div className="centerInformations">
          <section className="bodyWeight">Activité quotidienne</section>
          <section className="charts">
            <div className="goal">Durée moyenne des sessions</div>
            <div className="radar">Radar</div>
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
  ) : null;
}

export default DashBoard;
