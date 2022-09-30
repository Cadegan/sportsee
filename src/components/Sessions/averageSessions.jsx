import React from "react";
import ModuleError from "../Error/moduleError";

//Recharts's LineChart
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { useAxios } from "../../utils/hooks/hooks";

/**
 * @function dayFormatter
 * @description Takes a number as argument and returns it as day of the week
 * @param  {number} num - Data to format
 * @returns a new array.
 */
function dayFormatter(num) {
  const week = ["L", "M", "M", "J", "V", "S", "D"];
  return week[+num - 1];
}

/**
 * @function CustomCursor
 * @description Displays where the cursor is located. A rectangle with a fill of black, fill opacity of 0.1, x and y coordinates of the first
 * point in the points array.
 * @returns { HTMLElement }
 */
const CustomCursor = (props) => {
  const { points } = props;
  const { x, y } = points[0];
  return (
    <Rectangle
      fill="black"
      fillOpacity={0.1}
      x={x}
      y={y - 100}
      width={400}
      height={400}
    />
  );
};

/**
 * @function lengendText
 * @description Legend of average session length
 * @returns { HTMLElement }
 */
const lengendText = () => {
  return (
    <div
      style={{
        color: "white",
        marginTop: "20px",
        marginLeft: "20px",
        opacity: ".5",
        position: "relative",
      }}
    >
      Durée moyenne des
      <br />
      sessions
    </div>
  );
};

/**
 * @function CustomizedDot
 * @description Displays where the cursor is located.
 * @returns { HTMLElement }
 */
const CustomizedDot = (props) => {
  const { cx, cy } = props;

  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      stroke="rgb(255, 255, 255, 0.2)"
      strokeWidth={15}
      fill="white"
    />
  );
};

/**
 * @function AverageSessions
 * @description This function returns a ligne graph that shows sessions in the week by time spent
 * @param { Array.<Objects> } data - Session's data
 * @param { Boolean } isLoading - True or not in charging state
 * @param  { Boolean } error - Error or not in charging state
 * @returns { HTMLElement }
 **/
function AverageSessions() {
  const { data, isLoading, error } = useAxios("/average-sessions");

  if (!isLoading && !error) {
    const sessions = data.sessions; // const {sessions} = data
    return (
      <div className="AverageSessionsContainer">
        <ResponsiveContainer width="99%">
          <LineChart
            data={sessions}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="day"
              tickFormatter={dayFormatter}
              axisLine={false}
              tickLine={false}
              stroke="white"
              opacity={0.5}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              allowDataOverflow={true}
              hide={true}
            />
            <Tooltip
              cursor={<CustomCursor />}
              animationEasing="ease-out"
              labelFormatter={() => ``}
              formatter={(value) => [value + " min"]}
              contentStyle={{ border: "none", padding: 0 }}
              itemStyle={{
                color: "black",
                backgroundColor: "white",
                padding: 12,
              }}
            />
            <Line
              dataKey="sessionLength"
              type="natural"
              stroke="#FFFFFF"
              strokeWidth={2}
              activeDot={<CustomizedDot />}
              dot={false}
            />
            <Legend
              verticalAlign="top"
              align="left"
              content={lengendText}
            ></Legend>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (error) {
    return <ModuleError />;
  }
}

export default AverageSessions;
