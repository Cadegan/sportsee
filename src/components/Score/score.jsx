import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const Score = ({ scoreData }) => {
  const data = [
    { name: "Score", value: scoreData },
    { name: "EmptyFraction", value: 1 - scoreData },
  ];

  return (
    <PieChart width={400} height={400} className="score">
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        dataKey="value"
        fill="#8884d8"
      >
        {data.map((value) => (
          <Cell key={`cell-${value}`} fill={"#83a6ed"} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Score;
