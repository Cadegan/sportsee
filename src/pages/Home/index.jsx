import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mainData from "../../services/mockServices";
import WellCome from "../../components/Wellcome";

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
      <WellCome
        firstName={data.userInfos.firstName}
        calorieCount={data.keyData.calorieCount}
        proteinCount={data.keyData.proteinCount}
        carbohydrateCount={data.keyData.carbohydrateCount}
        lipidCount={data.keyData.lipidCount}
      />
    </div>
  ) : null;
}

export default DashBoard;
