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

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className="activityTooltip">
          <p className="weightLabel">{payload[0].value}kg</p>
          <p className="caloriesLabel">{payload[1].value}Kcal</p>
        </div>
      );
    }
    return null;
  };

  function dayFormatter(value) {
    return new Date(value).getDate();
  }

  return (
    sessionsData.length && (
      <div className="activityContainer">
        <div className="activityContainerTitle">Activité quotidienne</div>
        <ResponsiveContainer width={"99%"} height={300}>
          <BarChart data={sessionsData}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#DEDEDE"
            />
            <XAxis dataKey="day" tickFormatter={dayFormatter} />
            <YAxis
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickCount={3}
            />
            <Tooltip
              content={<CustomTooltip payload={sessionsData} />}
              animationEasing="ease-out"
              wrapperStyle={{ left: 50, top: -20 }}
            />
            <Legend
              className="activityLabel"
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{ left: -10, top: -20 }}
              formatter={(value) => (
                <span className="textColorLegend">{value}</span>
              )}
            />
            <Bar
              name="Poids (kg)"
              dataKey="weight"
              fill="#282D30"
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              name="Calories brûlées (kCal)"
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  );
}

export default Activities;
