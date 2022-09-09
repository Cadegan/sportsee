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

export default function GoalTimer() {
  const { id } = useParams();
  const [sessionsData, setSessionsData] = useState([]);

  useEffect(() => {
    /*  Data from API service */
    getUserAverageSessions(id).then((items) => {
      const formattedData = items.data.data.map((day) => ({
        day: items.data.sessions[day.sessions],
        sessionValue: day.value,
        userInfos: items.userId,
      }));
      setSessionsData(formattedData);
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
          dataKey="A"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    )
  );
}
