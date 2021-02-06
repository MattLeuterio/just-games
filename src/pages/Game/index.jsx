import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "./style";
import Roboto from "../../ui/typography/roboto";
import { getGame, selectGameData } from "../../features/game/gameSlice";

const Game = () => {
  const locationString = window.location.pathname.replace("/", "");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame(locationString));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const gameData = useSelector(selectGameData);

  return (
    <Container>
      <Roboto type="pageTitleSub">{gameData.description}</Roboto>
    </Container>
  );
};

export default Game;
