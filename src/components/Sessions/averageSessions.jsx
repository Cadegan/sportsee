/* Demo */

import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Rectangle } from "recharts";

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
      console.log(formattedData);
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
    const { points, width, height } = props;
    const { x, y } = points[0];
    // console.log(props);
    return (
      <Rectangle
        fill="red"
        // stroke="red"
        x={x}
        y={y}
        width={width}
        height={height}
      />
    );
  };

  return (
    sessionsData.length && (
      <LineChart
        data={sessionsData}
        width={500}
        height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="day"
          tickFormatter={dayFormatter}
          axisLine={false}
          tickLine={false}
        />
        <YAxis axisLine={false} tickLine={false} allowDataOverflow={true} />
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
        {/* <Legend /> */}
        <Line
          dataKey="activity"
          type="natural"
          stroke="white"
          activeDot={{ r: 8 }}
          dot={false}
        />
      </LineChart>
    )
  );
}

export default AverageSessions;
