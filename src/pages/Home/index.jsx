import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mainData from "../../services/mockServices";
import WelCome from "../../components/Welcome";
import SideInformations from "../../components/Informations/index";

function DashBoard() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    mainData().then((items) => {
      let datas = items.find((item) => item.id === parseFloat(id));
      setData(datas);
    });
  }, [id]);

  return data ? (
    <div className="dashBoard">
      <WelCome firstName={data.userInfos.firstName} />
      <div className="globalInformations">
        <div className="centerInformations">
          <section className="bodyWeight">Activité quotidienne</section>
          <section className="charts">
            <div className="goal">Durée moyenne des sessions</div>
            <div className="radar">Radar</div>
            <div className="kpi">Score / kpi</div>
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
