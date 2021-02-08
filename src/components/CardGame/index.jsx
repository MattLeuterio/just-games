import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { CircleProgressBar } from "../../atoms";
import { CardContainer, Top, Bottom, Title, Category, Platform } from "./style";

const CardGame = ({
  path,
  title,
  category,
  platform,
  cover,
  vote,
  highlight,
}) => {
  return (
    <NavLink key={path} exact to={`game/${path}`}>
      <CardContainer cover={cover} highlight={highlight}>
        <Top>
          <Title>{title}</Title>
          <Category>{category}</Category>
        </Top>
        <Bottom>
          {vote > 0 && (
            <CircleProgressBar
              sizeContainer={80}
              fontSize={25}
              widthStroke={7}
              sizeStroke={212}
              sizeStrokeTotal={218}
              sizeCircle={35}
              vote={vote}
            />
          )}
          <Platform>{platform}</Platform>
        </Bottom>
      </CardContainer>
    </NavLink>
  );
};

CardGame.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  platform: PropTypes.string,
  cover: PropTypes.string,
  vote: PropTypes.number,
  highlight: PropTypes.bool,
};

export default CardGame;
