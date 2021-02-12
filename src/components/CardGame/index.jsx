import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { CircleProgressBar } from "../../atoms";
import { CardContainer, Top, Bottom, Title, Category, Platform } from "./style";
import { platformSwitch } from "../../utils";

const CardGame = ({
  path,
  title,
  category,
  platform,
  cover,
  vote,
  highlight,
  width = "100%",
  height = "100%",
}) => {
  const platformType = (plat) => {
    if (typeof plat === "object") {
      return plat.slice(0, 3).map((plat) => platformSwitch(plat.platform.slug));
    } else {
      return platformSwitch(plat);
    }
  };

  return (
    <NavLink key={path} exact to={path}>
      <CardContainer
        width={width}
        height={height}
        cover={cover}
        highlight={highlight}
      >
        <Top>
          <Title>{title}</Title>
          <Category>{category}</Category>
        </Top>
        <Bottom>
          {vote > 0 && <CircleProgressBar sizeContainer={80} vote={vote} />}
          <Platform>{platformType(platform)}</Platform>
        </Bottom>
      </CardContainer>
    </NavLink>
  );
};

CardGame.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  platform: PropTypes.array,
  width: PropTypes.string,
  height: PropTypes.string,
  cover: PropTypes.string,
  vote: PropTypes.number,
  highlight: PropTypes.bool,
};

export default CardGame;
