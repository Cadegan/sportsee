import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

function Score() {
  return (
    <RadialBarChart>
      width={160}
      height={160}
      cx={80}
      cy={80}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={data}
    </RadialBarChart>
  );
}

export default Score;
