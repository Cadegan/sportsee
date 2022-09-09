// import "./styles.css";
import React from "react";
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
        <ResponsiveContainer width="99%">
          <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="60%">
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="subject"
              stroke="white"
              tickLine={false}
              fontSize={10}
            />
            <Radar dataKey="A" fill="#ff0000" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  );
}

export default RadarStats;
