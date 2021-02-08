import React, { useEffect } from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import theme from "../../ui/theme";
import { ContainerProgress } from "./style";

const CircleProgressBar = ({
  vote,
  textSize = "45px",
  sizeContainer = 80,
  strokeWidth = 9,
}) => {
  const calcColorStroke = (vote) => {
    if (vote <= 20) return `${theme.colors.vote.red}`;
    if (vote <= 40) return `${theme.colors.vote.orange}`;
    if (vote <= 60) return `${theme.colors.vote.greenLight}`;
    if (vote <= 80) return `${theme.colors.vote.greenDark}`;
    if (vote > 80) return `${theme.colors.vote.green}`;
  };

  return (
    <ContainerProgress sizeContainer={sizeContainer}>
      <CircularProgressbar
        value={vote}
        text={`${vote / 10}`}
        strokeWidth={strokeWidth}
        styles={buildStyles({
          circleRatio: 0.2,
          textSize: textSize,
          pathColor: calcColorStroke(vote),
          textColor: `${theme.colors.primary.light}`,
          trailColor: `${theme.colors.primary.gray}`,
        })}
      />
    </ContainerProgress>
  );
};

export default CircleProgressBar;
