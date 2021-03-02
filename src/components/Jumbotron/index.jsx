import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import Slider from "@farbenmeer/react-spring-slider";
import {
  JumboBg,
  JumbotronContainer,
  Divider,
  ItemSlider,
  Title,
  Platform,
  Info,
  Button,
} from "./style";
import { getNew, selectNew } from "../../features/listGames/listGamesSlice";
import BackgroundHome from "../../ui/assets/img/home-bg.jpg";
import { platformType } from "../../utils";
import { Link } from "react-router-dom";

const Jumbotron = ({ type, background = BackgroundHome, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNew());
  }, [dispatch]);

  const listNewGame = useSelector(selectNew);

  const BulletComponent = ({ onClick, isActive }) => (
    <li
      style={{
        cursor: "pointer",
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        backgroundColor: "white",
        margin: "0 2px",
        marginBottom: "50px",
        opacity: !isActive && "0.5",
      }}
      onClick={onClick}
    />
  );

  return (
    <JumbotronContainer type={type}>
      {type === "home" && (
        <Slider auto={15000} hasBullets BulletComponent={BulletComponent}>
          {listNewGame?.map((game) => (
            <ItemSlider
              image={
                game.background_image ? game.background_image : BackgroundHome
              }
            >
              <Info>
                <Title>{game.name}</Title>
                <Platform Platform>
                  {platformType(game?.parent_platforms)}
                </Platform>
                <Link to={`game/${game?.slug}`}>
                  <Button>See Game</Button>
                </Link>
              </Info>
            </ItemSlider>
          ))}
        </Slider>
      )}
      {children}
      {type !== "home" && (
        <JumboBg type={type} background={background}>
          {type === "game" && <Divider />}
        </JumboBg>
      )}
    </JumbotronContainer>
  );
};

Jumbotron.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  platform: PropTypes.string,
  vote: PropTypes.number,
  highlight: PropTypes.bool,
};

export default Jumbotron;
