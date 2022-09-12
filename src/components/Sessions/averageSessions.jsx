import React from "react";
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

  useEffect(() => {
    /*  Data from API service */
    getUserAverageSessions(id).then((data) => {
      const formattedData = data.data.sessions.map((items) => ({
        day: items.day,
        activity: items.sessionLength,
      }));
      setSessionsData(formattedData);
      // console.log(formattedData);
    });
  }, [id]);

  /**
   * It takes a number as an argument and returns the corresponding day of the week
   * @returns The day of the week.
   */
  function dayFormatter(num) {
    const week = ["L", "M", "M", "J", "V", "S", "D"];
    return week[+num - 1];
  }

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

  return (
    sessionsData.length && (
      <div className="AverageSessionsContainer">
        <ResponsiveContainer width="100%">
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
    )
  );
}

export default AverageSessions;
