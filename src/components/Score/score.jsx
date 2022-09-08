import React from "react";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";

/**
 * If todayScore is undefined, then set scoreStored to score, otherwise set scoreStored to todayScore
 * @returns The scoreStored variable is being returned.
 */
const Score = ({ scoreData }) => {
  const formatScore = (todayScore, score) => {
    let scoreStored;

    todayScore === undefined
      ? (scoreStored = score)
      : (scoreStored = todayScore);

    if (scoreStored === undefined) {
      scoreStored = 0;
    }
    return scoreStored;
  };

  /* This is creating a pie chart with the score data. */
  const scoreFormatted = formatScore(scoreData.todayScore, scoreData.score);

  const data = [
    { name: "Score", value: scoreFormatted },
    { name: "EmptyFraction", value: 1 - scoreFormatted },
  ];

  // const rateScoreText = scoreFormatted * 100;

  const scoreShow = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    return (
      <>
        <text x={cx - 19} y={cy - 5}>
          <tspan className="rateScoreText">{scoreFormatted * 100}%</tspan>
        </text>
        <text x={cx - 26} y={cy + 15}>
          <tspan className="yourText">de votre</tspan>
        </text>
        <text x={cx - 25} y={cy + 35}>
          <tspan className="goalText">objectif</tspan>
        </text>
      </>
    );
  };

  return (
    <div className="scoreContainer">
      <ResponsiveContainer width="99%" height="99%">
        <PieChart className="score">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            paddingAngle={0}
            cornerRadius={10}
            stroke="none"
            dataKey="value"
          >
            {data.map((value, index) => (
              <Cell
                key={`cell-${value}`}
                fill={index === 1 ? "#ffffff" : "#FF0000"}
              />
            ))}
            <Label
              className="scoreLabelTitle"
              dx={-60}
              dy={-100}
              dominantBaseline="middle"
              position="center"
              fontSize={15}
            >
              Score
            </Label>
            <Label content={scoreShow} position="center"></Label>
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Score;
