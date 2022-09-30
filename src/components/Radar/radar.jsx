import React from "react";
import ModuleError from "../Error/moduleError";
import { useAxios } from "../../utils/hooks/hooks";

//Recharts's RadarChart
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * @function RadarStats
 * @description This function returns a radar chart of the user's statistics.
 * @param { Array.<Objects> } data - User's performance data information
 * @param { Boolean } isLoading - True or not in charging state
 * @param  { Boolean } error - Error or not in charging state
 * @returns { HTMLElement }
 **/
function RadarStats() {
  const { data, isLoading, error } = useAxios("/performance");

  /**
   * @function xAxisFormatter
   * @description A component that provides a RadarChart of the User's Performance.
   * @param { string } kind -  Expression to be evaluated
   * @returns { object}
   */
  const xAxisFormatter = (kind) => {
    switch (kind) {
      case 1:
        return "Cardio";
      case 2:
        return "Energie";
      case 3:
        return "Endurance";
      case 4:
        return "Force";
      case 5:
        return "Vitesse";
      case 6:
        return "Intensité";
      default:
        return null;
    }
  };

  if (!isLoading && !error) {
    return (
      <div className="radarContainer">
        <ResponsiveContainer width="99%">
          <RadarChart data={data.data} cx="50%" cy="50%" outerRadius="60%">
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              stroke="white"
              tickLine={false}
              fontSize={10}
              tickFormatter={xAxisFormatter}
            />
            <Radar dataKey="value" fill="#ff0000" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (error) {
    return <ModuleError />;
  }
}

export default RadarStats;
