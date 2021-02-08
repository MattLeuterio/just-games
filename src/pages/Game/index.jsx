import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  GameHeader,
  GameTitle,
  Genres,
  GenrePill,
  GameName,
  GameDevs,
  Vote,
} from "./style";
import { getGame, selectGameData } from "../../features/game/gameSlice";
import { CircleProgressBar, HelmetMeta } from "../../atoms";
import { Jumbotron } from "../../components";
import Background from "../../ui/assets/img/search-page-bg.png";

const Game = () => {
  const locationString = window.location.pathname.replace("/game/", "");
  console.log(locationString);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame(locationString));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const gameData = useSelector(selectGameData);

  return (
    <Container>
      <HelmetMeta titlePage={gameData?.name} path={`/${gameData?.slug}`} />
      <Jumbotron
        type="game"
        background={
          gameData?.background_image ? gameData?.background_image : Background
        }
      >
        <GameHeader>
          <GameTitle>
            <GameName type="gamePageTitle">{gameData?.name}</GameName>
            {gameData?.developers?.map((dev) => (
              <GameDevs key={dev.id} type="gamePageDev">
                {`${dev.name} `}{" "}
              </GameDevs>
            ))}
          </GameTitle>
          <Genres>
            {gameData?.genres?.map((genre) => (
              <GenrePill key={genre.id}>{genre.name}</GenrePill>
            ))}
          </Genres>
          {gameData?.metacritic > 0 && (
            <Vote>
              <CircleProgressBar vote={gameData?.metacritic} />
            </Vote>
          )}
        </GameHeader>
      </Jumbotron>
    </Container>
  );
};

export default Game;
