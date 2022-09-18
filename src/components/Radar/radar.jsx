import React from "react";
import ModuleError from "../Error/moduleError";
import Loader from "../../components/Loader/loader";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import { getUserPerformance } from "../../services/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * This function returns a radar chart of the user's statistics.
 **/
function RadarStats() {
  const { id } = useParams();
  const [radarData, setRadarData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    /** This function is used to get the data and return data "subject" and their values,
     * and create a radar chart.
     */
    setLoading(true);
    getUserPerformance(id).then((items) => {
      const dataMapped = items.data.data.map((element) => ({
        subject: items.data.kind[element.kind],
        subjectValue: element.value,
      }));
      setLoading(false);
      setRadarData(dataMapped);
      // console.log(dataMapped);
    });
  }, [id]);

  return radarData.length ? (
    <div className="radarContainer">
      <ResponsiveContainer width="99%">
        <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="60%">
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="white"
            tickLine={false}
            fontSize={10}
          />
          <Radar dataKey="subjectValue" fill="#ff0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <>{isLoading ? <Loader /> : <ModuleError />}</>
  );
}

export default RadarStats;
