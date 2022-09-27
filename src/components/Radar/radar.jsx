import React from "react";
import ModuleError from "../Error/moduleError";
// import ModuleError from "../Error/moduleError";
// import Loader from "../../components/Loader/loader";
import { useAxios } from "../../utils/hooks/hooks";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

// import { getUserPerformance } from "../../services/API";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

/**
 * This function returns a radar chart of the user's statistics.
 **/
function RadarStats() {
  const { data, isLoading, error } = useAxios("/performance");
  // const { id } = useParams();
  // const [radarData, setRadarData] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   /** This function is used to get the data and return data "subject" and their values,
  //    * and create a radar chart.
  //    */
  //   setLoading(true);
  //   getUserPerformance(id).then((items) => {
  //     const dataMapped = items.data.data.map((element) => ({
  //       subject: items.data.kind[element.kind],
  //       subjectValue: element.value,
  //     }));
  //     setLoading(false);
  //     setRadarData(dataMapped);
  //     // console.log(dataMapped);
  //   });
  // }, [id]);

  const xAxisFormatter = (kind) => {
    switch (kind) {
      case 1:
        return "Cardio";
      case 2:
        return "Energie";
      case 3:
        return "Endurance";
      case 4:
        return "Force";
      case 5:
        return "Vitesse";
      case 6:
        return "Intensité";
      default:
        return null;
    }
  };

  if (!isLoading && !error) {
    return (
      <div className="radarContainer">
        <ResponsiveContainer width="99%">
          <RadarChart data={data.data} cx="50%" cy="50%" outerRadius="60%">
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              stroke="white"
              tickLine={false}
              fontSize={10}
              tickFormatter={xAxisFormatter}
            />
            <Radar dataKey="value" fill="#ff0000" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (error) {
    return <ModuleError />;
  }
}

export default RadarStats;
