import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

import { CircleProgressBar } from "../../atoms";
import {
  CardContainer,
  Top,
  Bottom,
  Title,
  Category,
  Platform,
  Clip,
} from "./style";
import { platformType } from "../../utils";
import noImage from "../../ui/assets/img/footer-bg.jpg";

const CardGame = ({
  path,
  title,
  category,
  platform,
  cover,
  vote,
  highlight,
  clipHover,
  width = "100%",
  height = "100%",
}) => {
  const [showClip, setShowClip] = useState(false);

  return (
    <NavLink
      key={path}
      exact
      to={path}
      onMouseEnter={() => setShowClip(!showClip)}
      onMouseLeave={() => setShowClip(!showClip)}
    >
      <CardContainer
        width={width}
        height={height}
        cover={cover ? cover : noImage}
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
        <Clip show={showClip}>
          <ReactPlayer
            url={clipHover}
            width="400px"
            height="auto"
            loop
            muted
            playing={showClip}
          />
        </Clip>
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
