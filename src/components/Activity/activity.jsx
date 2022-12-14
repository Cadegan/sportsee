import React from "react";
import ModuleError from "../Error/moduleError";

//Recharts's barChart
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

import { useAxios } from "../../utils/hooks/hooks";

/**
 * @function Activities
 * @description This function returns the content of the user's activities.
 * @param { Array.<Objects> } data - Activitie's data
 * @param { Boolean } isLoading - True or not in charging state
 * @param  { Boolean } error - Error or not in charging state
 * @returns { HTMLElement }
 **/
function Activities() {
  const { data, isLoading, error } = useAxios("/activity");

  const { sessions } = data;

  /**
   * @function CustomTooltip
   * @description A custom tooltip for the chart. If the tooltip is active and there is data to display, display the weight and calories burned
   * @param  { Boolean } active - True or not
   * @param  { Object } playload - Data
   * @returns { HTMLElement }
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
   * @function dayFormatter
   * @description It takes a value, which is a date, and returns the day of the month
   * @param  { date } value - Date to be formatted
   * @returns The day of the month.
   */
  function dayFormatter(value) {
    return new Date(value).getDate();
  }

  if (!isLoading && !error) {
    return (
      <div className="activityContainer">
        <div className="activityContainerTitle">Activité quotidienne</div>
        <ResponsiveContainer width={"99%"} height={210}>
          <BarChart data={sessions}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#DEDEDE"
            />
            <XAxis
              dataKey="day"
              tickFormatter={dayFormatter}
              stroke="#9B9EAC"
            />
            <YAxis
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickCount={3}
              stroke="#9B9EAC"
            />
            <Tooltip
              content={<CustomTooltip payload={sessions} />}
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
              dataKey="kilogram"
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
    );
  } else if (error) {
    return <ModuleError />;
  }
}

export default Activities;
