import React from "react";
import ModuleError from "../Error/moduleError";

//Recharts's PieChart
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";

/**
 * @function Score
 * @description This function returns a score chart of the user's statistics. If todayScore is undefined, then set scoreStored to score, otherwise set scoreStored to todayScore.
 * @param { Array } scoreData
 * @returns { HTMLElement }
 **/
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

  /* Store the formatted score data. */
  const scoreFormatted = formatScore(scoreData.todayScore, scoreData.score);

  /**
   * Creating an array of two objects.
   * one to display the score portion,
   * the other to display the empty portion.
   */
  const data = [
    { name: "Score", value: scoreFormatted },
    { name: "EmptyFraction", value: 1 - scoreFormatted },
  ];

  /**
   * @returns A function that returns the percentage of the score.
   */
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

  return data.length ? (
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
  ) : (
    <ModuleError />
  );
};

export default Score;
