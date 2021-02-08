import React from "react";
import PropTypes from "prop-types";
import { Container, CircleWrapper, Circle, Vote } from "./style";

const CircleProgressBar = ({
  sizeCircle,
  sizeContainer,
  sizeStroke,
  sizeStrokeTotal,
  widthStroke,
  vote,
  fontSize,
}) => {
  return (
    <Container sizeContainer={sizeContainer}>
      <CircleWrapper>
        <Circle
          widthStroke={widthStroke}
          sizeStroke={sizeStroke}
          sizeStrokeTotal={sizeStrokeTotal}
          cx={sizeCircle}
          cy={sizeCircle}
          r={sizeCircle}
        ></Circle>
        <Circle
          widthStroke={widthStroke}
          vote={vote}
          sizeStroke={sizeStroke}
          cx={sizeCircle}
          cy={sizeCircle}
          r={sizeCircle}
        ></Circle>
      </CircleWrapper>
      <Vote fontSize={fontSize}>{vote / 10}</Vote>
    </Container>
  );
};

CircleProgressBar.defaultProps = {
  sizeContainer: 112,
  sizeStroke: 305,
  sizeStrokeTotal: 312,
  sizeCircle: 50,
  fontSize: 45,
  widthStroke: 10,
};

CircleProgressBar.propTypes = {
  sizeContainer: PropTypes.number,
  sizeStroke: PropTypes.number,
  sizeCircle: PropTypes.number,
  widthStroke: PropTypes.number,
  fontSize: PropTypes.number,
  vote: PropTypes.number,
};

export default CircleProgressBar;
