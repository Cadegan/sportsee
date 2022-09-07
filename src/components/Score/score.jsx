import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

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
        <text x={cx - 15} y={cy - 5}>
          <tspan className="rateScore">{scoreFormatted * 100}%</tspan>
        </text>
        <text x={cx - 20} y={cy + 15}>
          <tspan className="your">de votre</tspan>
        </text>
        <text x={cx - 19} y={cy + 35}>
          <tspan className="goal">objectif</tspan>
        </text>
      </>
    );
  };

  return (
    <PieChart width={200} height={200} className="score">
      <Pie
        data={data}
        cx="50%"
        cy="50%"
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
        <Label
          position="center"
          dx={-60}
          dy={-100}
          dominantBaseline="middle"
          className="scoreLabel"
          fontSize={15}
        >
          Score
        </Label>
        <Label
          // dominantBaseline="middle"
          // position="center"
          // className="rateScoreText"
          // fontWeight={700}
          content={scoreShow}
        >
          {/* {`${rateScoreText}%${"\n"}`} */}
        </Label>
      </Pie>
    </PieChart>
  );
};

export default Score;
