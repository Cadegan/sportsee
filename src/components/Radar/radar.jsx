// import "./styles.css";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
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
      }));
      setRadarData(formattedData);
    });
  }, [id]);

  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={radarData}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
}

export default RadarStats;
