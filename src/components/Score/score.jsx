import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const Score = ({ scoreData }) => {
  const formatScore = (todayScore, score) => {
    let scoreStored;
    // scoreData === todayScore
    //   ? (scoreStored = todayScore)
    //   : (scoreStored = score);

    todayScore === undefined
      ? (scoreStored = score)
      : (scoreStored = todayScore);

    if (scoreStored === undefined) {
      scoreStored = 0;
    }
    return scoreStored;
  };

  const scoreFormatted = formatScore(scoreData.todayScore, scoreData.score);

  const data = [
    { name: "Score", value: scoreFormatted },
    { name: "EmptyFraction", value: 1 - scoreFormatted },
  ];

  return (
    <PieChart width={400} height={400} className="score">
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={65}
        outerRadius={80}
        paddingAngle={0}
        cornerRadius={10}
        stroke="none"
        dataKey="value"
      >
        {data.map((value, index) => (
          <Cell
            key={`cell-${value}`}
            fill={index === 1 ? "#FBFBFB" : "#FF0000"}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Score;
