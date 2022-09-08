// import "./styles.css";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import { getUserPerformance } from "../../services/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RadarStats() {
  const { id } = useParams();
  const [radarData, setRadarData] = useState([]);

  useEffect(() => {
    /*  Data from API service */
    getUserPerformance(id).then((items) => {
      const formattedData = items.data.data.map((subject) => ({
        subject: items.data.kind[subject.kind],
        A: subject.value,
        userInfos: items.userId,
      }));
      setRadarData(formattedData);
    });
  }, [id]);

  return (
    radarData.length && (
      <div className="radarContainer">
        <ResponsiveContainer width="99%" height="99%">
          <RadarChart
            data={radarData}
            // position="center"
            // cx="50%"
            // cy="50%"
            // outerRadius={150}
            // width={250}
            // height={250}
            // margin={30}
            // width={500}
            // height={500}
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="subject"
              stroke="white"
              tickLine={false}
              fontSize={14}
            />
            <PolarRadiusAxis
              angle={30}
              type="number"
              tick={false}
              axisLine={false}
              tickCount="6"
              line="0"
            />
            <Radar dataKey="A" fill="#ff0000" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  );
}

export default RadarStats;
