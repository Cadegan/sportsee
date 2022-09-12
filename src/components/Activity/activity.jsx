import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { getUserActivity } from "../../services/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Activities() {
  const { id } = useParams();
  const [sessionsData, setSessionsData] = useState([]);

  useEffect(() => {
    /*  Data from API service */
    getUserActivity(id).then((data) => {
      const activityData = data.data.sessions.map((items) => ({
        day: items.day,
        weight: items.kilogram,
        calories: items.calories,
      }));
      setSessionsData(activityData);
      console.log(activityData);
    });
  }, [id]);

  return (
    sessionsData.length && (
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart
          //   width={500}
          //   height={300}
          data={sessionsData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="weight" fill="#8884d8" />
          <Bar dataKey="calories" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    )
  );
}

export default Activities;
