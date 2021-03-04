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
  ActionClip,
} from "./style";
import { platformType } from "../../utils";
import noImage from "../../ui/assets/img/footer-bg.jpg";
import {
  VolumeHighOutline as IconSoundOn,
  VolumeMuteOutline as IconSoundOff,
} from "react-ionicons";

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
  const [isMuted, setIsMuted] = useState(true);

  const handleClickSound = (e) => {
    e.preventDefault();
    setIsMuted(!isMuted);
  };

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
            muted={isMuted}
            playing={showClip}
          />

          <ActionClip shows={clipHover !== "" ? showClip : null}>
            {isMuted ? (
              <IconSoundOff
                color={"#ECEAEF"}
                title="ciao"
                height="25px"
                width="25px"
                onClick={(e) => handleClickSound(e)}
              />
            ) : (
              <IconSoundOn
                color={"#ECEAEF"}
                title="ciao"
                height="25px"
                width="25px"
                onClick={(e) => handleClickSound(e)}
              />
            )}
          </ActionClip>
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
