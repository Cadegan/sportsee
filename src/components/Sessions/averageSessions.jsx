/* Demo */

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { getUserAverageSessions } from "../../services/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AverageSessions() {
  const { id } = useParams();
  const [sessionsData, setSessionsData] = useState([]);

  useEffect(() => {
    /*  Data from API service */
    getUserAverageSessions(id).then((data) => {
      const formattedData = data.data.sessions.map((items) => ({
        day: items.day,
        periode: items.sessionLength,
      }));
      setSessionsData(formattedData);
      console.log(formattedData);
    });
  }, [id]);

  return (
    sessionsData.length && (
      <LineChart
        width={500}
        height={300}
        data={sessionsData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="periode"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    )
  );
}

export default AverageSessions;
