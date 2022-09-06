import React from "react";
import { PieChart, Pie, Cell } from "recharts";

function Score(scoreData) {
  return (
    <PieChart width={800} height={400} className="score">
      <Pie
        data={scoreData}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        dataKey="value"
        fill="#8884d8"
      >
        {/* {scoreData.map((index) => (
          <Cell key={`cell-${index}`} fill={"#83a6ed"} />
        ))} */}
      </Pie>
    </PieChart>
  );
}

export default Score;
