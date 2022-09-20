import React from "react";
import Loader from "../../components/Loader/loader";
import ModuleError from "../Error/moduleError";
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

/**
 * This function returns the content of the user's activities.
 **/
function Activities() {
  const { id } = useParams();
  const [sessionsData, setSessionsData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  /* A function that is called when the component is mounted.
   * It is used to get the data from the API and return data "day", "weight" and "calories"
   */
  useEffect(() => {
    setLoading(true);
    getUserActivity(id).then((data) => {
      const activityData = data.data.sessions.map((items) => ({
        day: items.day,
        weight: items.kilogram,
        calories: items.calories,
      }));
      setSessionsData(activityData);
      setLoading(false);
      console.log(activityData);
    });
  }, [id]);

  /**
   * If the tooltip is active and there is data to display, display the weight and calories burned
   * @returns A custom tooltip for the chart.
   */
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

  /**
   * It takes a value, which is a date, and returns the day of the month
   * @param  {date} value
   * @returns The day of the month.
   */
  function dayFormatter(value) {
    return new Date(value).getDate();
  }

  return sessionsData.length ? (
    <div className="activityContainer">
      <div className="activityContainerTitle">Activité quotidienne</div>
      <ResponsiveContainer width={"99%"} height={210}>
        <BarChart data={sessionsData}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#DEDEDE"
          />
          <XAxis dataKey="day" tickFormatter={dayFormatter} stroke="#9B9EAC" />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickCount={3}
            stroke="#9B9EAC"
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
            wrapperStyle={{ left: -10, top: -25 }}
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
  ) : (
    <>{isLoading ? <Loader /> : <ModuleError />}</>
  );
}

export default Activities;
