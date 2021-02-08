import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
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
  RowInfo,
  About,
  Info,
  SectionTitle,
  InfoTitle,
  InfoContainer,
  InfoGame,
  InformationRow,
  NameInfo,
  ResultInfo,
} from "./style";
import {
  getGame,
  getGameSeries,
  selectGameData,
  selectGameSeries,
} from "../../features/game/gameSlice";
import { CircleProgressBar, HelmetMeta } from "../../atoms";
import { Jumbotron } from "../../components";
import Background from "../../ui/assets/img/search-page-bg.png";
import { DocumentTextOutline as AboutIcon } from "react-ionicons";
import Roboto from "../../ui/typography/roboto";

const Game = () => {
  const locationString = window.location.pathname.replace("/game/", "");
  console.log(locationString);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame(locationString));
    dispatch(getGameSeries(locationString));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const gameData = useSelector(selectGameData);
  const gameSeries = useSelector(selectGameSeries);
  console.log(gameSeries);

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
              <CircleProgressBar
                sizeContainer={120}
                vote={gameData?.metacritic}
              />
            </Vote>
          )}
        </GameHeader>
      </Jumbotron>
      <RowInfo>
        <About>
          <SectionTitle>
            <AboutIcon color={"#8E2DE0"} width="32px" height="32px" />
            <Roboto type="gamePageSectionTitle">About</Roboto>
          </SectionTitle>
          <Roboto>{gameData?.description_raw}</Roboto>
        </About>
        <Info>
          <InfoContainer>
            <InfoTitle>
              <Roboto type="gamePageSectionTitle">Information</Roboto>
            </InfoTitle>
            <InfoGame>
              {gameData?.platforms !== null && gameData?.platforms?.length > 0 && (
                <InformationRow>
                  <NameInfo>Platforms</NameInfo>
                  <ResultInfo>
                    {gameData?.platforms?.map((res) => (
                      <span key={res.platform.id}>{res.platform.name}</span>
                    ))}
                  </ResultInfo>
                </InformationRow>
              )}
              {gameData?.released && (
                <InformationRow>
                  <NameInfo>Release</NameInfo>
                  <ResultInfo>{gameData?.released}</ResultInfo>
                </InformationRow>
              )}
              {gameData?.developers !== null &&
                gameData?.developers?.length > 0 && (
                  <InformationRow>
                    <NameInfo>Developers</NameInfo>
                    <ResultInfo>
                      {gameData?.developers?.map((res) => (
                        <span key={res.id}>{res.name}</span>
                      ))}
                    </ResultInfo>
                  </InformationRow>
                )}
              {gameData?.publishers !== null &&
                gameData?.publishers?.length > 0 && (
                  <InformationRow>
                    <NameInfo>Publishers</NameInfo>
                    <ResultInfo>
                      {gameData?.publishers?.map((res) => (
                        <span key={res.id}>{res.name}</span>
                      ))}
                    </ResultInfo>
                  </InformationRow>
                )}
              {gameData?.esrb_rating && (
                <InformationRow>
                  <NameInfo>ESRB Ratings</NameInfo>
                  <ResultInfo>
                    <span>{gameData?.esrb_rating?.name}</span>
                  </ResultInfo>
                </InformationRow>
              )}
              {gameData?.tags !== null && gameData?.tags?.length > 0 && (
                <InformationRow>
                  <NameInfo>Themes</NameInfo>
                  <ResultInfo>
                    {gameData?.tags?.map((res) => (
                      <span key={res.id}>{res.name}</span>
                    ))}
                  </ResultInfo>
                </InformationRow>
              )}
              {gameData?.genres !== null && gameData?.genres?.length > 0 && (
                <InformationRow>
                  <NameInfo>Genres</NameInfo>
                  <ResultInfo>
                    {gameData?.genres?.map((res) => (
                      <span key={res.id}>{res.name}</span>
                    ))}
                  </ResultInfo>
                </InformationRow>
              )}
            </InfoGame>
          </InfoContainer>
        </Info>
      </RowInfo>
      {gameData.game_series_count > 0 &&
        gameSeries?.map((res) => (
          <NavLink key={res.slug} exact to={`${res.slug}`}>
            {res.name}
          </NavLink>
        ))}
    </Container>
  );
};

export default Game;
