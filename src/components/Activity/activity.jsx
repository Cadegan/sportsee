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
      //   console.log(activityData);
    });
  }, [id]);

  return (
    sessionsData.length && (
      <div className="activityContainer">
        <ResponsiveContainer width={"99%"} height={300}>
          <BarChart
            data={sessionsData}
            // margin={{
            //   top: 5,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip
              animationEasing="ease-out"
              labelFormatter={() => ``}
              itemStyle={{
                color: "white",
                backgroundColor: "#E60000",
              }}
            />
            <Legend
              className="activityLabel"
              verticalAlign="top"
              align="right"
              iconType="circle"
              // dx={-60}
              // dy={-100}
              // dominantBaseline="middle"
              // position="center"
              // fontSize={15}
            />
            <Bar dataKey="weight" fill="#282D30" />
            <Bar dataKey="calories" fill="#E60000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  );
}

export default Activities;
