import React from "react";
import ModuleError from "../Error/moduleError";
import Loader from "../../components/Loader/loader";
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

import { getUserAverageSessions } from "../../services/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AverageSessions() {
  const { id } = useParams();
  const [sessionsData, setSessionsData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    /*  Data from API service */
    setLoading(true);
    getUserAverageSessions(id).then((data) => {
      const formattedData = data.data.sessions.map((items) => ({
        day: items.day,
        activity: items.sessionLength,
      }));
      setLoading(false);
      setSessionsData(formattedData);
      // console.log(formattedData);
    });
  }, [id]);

  /**
   * Takes a number as an argument
   * @param  {number} num
   * @returns The day of the week.
   */
  function dayFormatter(num) {
    const week = ["L", "M", "M", "J", "V", "S", "D"];
    return week[+num - 1];
  }

  /**
   * Displays where the cursor is located.
   * @returns A rectangle with a fill of black, fill opacity of 0.1, x and y coordinates of the first
   * point in the points array.
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
   * Legend of average session length
   * @returns A function that returns a div
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
   * Displays where the cursor is located.
   * @returns A circle with a radius of 6, a stroke of rgb(255, 255, 255, 0.2), a stroke width of 15, and
   * a fill of white.
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

  return sessionsData.length ? (
    <div className="AverageSessionsContainer">
      <ResponsiveContainer width="99%">
        <LineChart
          data={sessionsData}
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
            dataKey="activity"
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
  ) : (
    <>{isLoading ? <Loader /> : <ModuleError />}</>
  );
}

export default AverageSessions;
